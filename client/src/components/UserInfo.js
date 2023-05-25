import React, {useEffect, useState} from 'react'

function UserInfo() {

    const [user, setUser] = useState({})

    useEffect(() => {
        fetch('/api').then(
            res => res.json()
        ).then(
            data => {
                setUser(data)
            }
        )
    }, []);
  return (
    <div>
        <h1>{user.users[1]}</h1>
    </div>
  )
}

export default UserInfo
