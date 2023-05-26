const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const fs = require('fs');
const logged = require('./logs/logged.json');

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

logged.logged = false;

// Generate a salt and hash the password
bcrypt.hash('x5D2G3y8k3LBeh', saltRounds, (err, hash) => {
  if (err) {
    console.error(err);
    return;
  }

  // Store the hashed password in the config file
  const config = {
    admin: {
      username: 'admin',
      password: hash
    }
  };

  // Write the config file to disk
  fs.writeFile('./logs/config.json', JSON.stringify(config), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Config file saved');
  });
});

// Load admin credentials from config file
let config = {};

try {
  config = require('./logs/config.json');
} catch (err) {
  console.error(err);
}

app.post('/loginsubmit', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Check if the username exists in the config file
  bcrypt.compare(password, config.admin.password, (err, result) => {
    if (result) {
      logged.logged = true;
      console.log('Connected');
    } else {
      logged.logged = false;
      console.log('Incorrect password');
    }
    res.redirect('/');
  });
});



app.post('/portfolio', (req, res) => {
  let link = req.body.link;
  const fs = require('fs');
  let liens = {};
  try {
    liens = require('../client/src/images/link.json');
  } catch (err) {
    console.error(err);
  }
  liens.links.push(link);
  fs.writeFile('../client/src/images/link.json', JSON.stringify(liens), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  res.redirect('/portfolio');
});


app.get("/portfolio", (req, res) => {
  if (logged.logged){
    console.log("logged");
    res.json({ isLoggedIn: true });
  } else {
    console.log("not logged");
    res.json({ isLoggedIn: false });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));