import React, { useEffect, useState } from 'react'
import {getAllUsers} from './Services/Services'

function UsersList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
       const getUsers = async () => {
        try {
            const data = await getAllUsers();
            setUsers(data);
        }catch (err) {
            console.error('error get users:', err);
        }
       };

       getUsers();
    })

  return (
    <>
    <h1>Users</h1>
    <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
    
    </>
  )
}

export default UsersList;