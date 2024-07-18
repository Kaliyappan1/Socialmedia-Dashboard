import React, { useEffect, useState } from 'react'
import axios from 'axios';


function UsersList() {
    
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5050/getUsers')
            .then(response => setUsers(response.data))
            .catch(err => {
                console.error(err);
                setError('Failed to fetch users. Please try again later.');
            });
    }, []);

  return (
    <>
    <h1>Users</h1>
    {error && <p>{error}</p>}
    <ul>
        {users.map(user => {

             <li key={user.id}>{user.name}</li>
        }
         
        )}
    </ul>
    
    </>
  )
}

export default UsersList;