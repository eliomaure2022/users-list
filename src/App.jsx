import { useEffect, useState } from 'react'
import styled from 'styled-components'
import './App.css'
import UsersForms from './components/UsersForms'
import UsersList from './components/UsersList'
import axios from 'axios'
import Modal from './components/Modal'

function App() {

  const [usersList, setUsersList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [modal, setModal] = useState(false)


  useEffect(() => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsersList(res.data));
  }, [])

  const getUser = () => {
    axios.get(`https://users-crud1.herokuapp.com/users/`)
      .then(res => setUsersList(res.data));
  }

  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUser());
  }

  const selectUser = (user) => {
    setUserSelected(user)
  }

  const deselectUser = () => setUserSelected(null)
  return (
    <div className="App">
      <button onClick={() => setModal(!modal)}><i className="fa-solid fa-user-plus"></i></button>
      <UsersForms
        getUser={getUser}
        userSelected={userSelected}
        deselectUser={deselectUser}/>
      <UsersList
        usersList={usersList}
        selectUser={selectUser}
        deleteUser={deleteUser}
      />
      <Modal
        modal={modal}
        setModal={setModal}>
        <h1>borrando</h1>
      </Modal> 
    </div>

  )
}

export default App
