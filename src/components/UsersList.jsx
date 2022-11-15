import React from 'react';

const UsersList = ({ usersList, selectUser, deleteUser }) => {
  return (

    <div >
      {
        usersList.map((user) => (
          <ul key={user.id}>
            <li className='list'>
              <p>Nombre: {user.first_name}</p>
              <p>Apellido: {user.last_name}</p>
              <p>E-mail: {user.email}</p>
              <p>Password: {user.pasword}</p>
              <p>Cumpleaños: {user.birthday}</p>
              <div className='button-container'>
                <button onClick={() => selectUser(user)}><i className="fa-solid fa-pencil"></i></button>
                <button onClick={() =>{deleteUser(user.id)}}><i className="fa-solid fa-trash-can"></i></button>
              </div>

            </li>
          </ul>
        ))
      }
    </div>

  );
};

export default UsersList;