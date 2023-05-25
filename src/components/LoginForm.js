import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Envoyer les informations de connexion à un serveur backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom d'utilisateur :
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Mot de passe :
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Se connecter</button>
    </form>
  );
};

export default LoginForm;