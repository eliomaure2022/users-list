import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForms = ({ getUser, userSelected, deselectUser,modal }) => {

  const { handleSubmit, register, reset } = useForm()

  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthday: ''
  }

  useEffect(() => {
    if (userSelected) {
      reset(userSelected)
    } else {
      reset(initialValues)
    }

  }, [userSelected])

  const submit = (data) => {
    if (userSelected) {
      axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
        .then(() => {
          getUser()
          deselectUser()
        })
        .catch(error => console.log(error.response.data))
    } else {
      axios.post(`https://users-crud1.herokuapp.com/users/`, data)
        .then(() => {
          getUser()
          deselectUser()
          reset(initialValues)
        })

        .catch(error => console.log(error.response.data))

    }
  }


  
  return (
    
    <form action="" onSubmit={handleSubmit(submit)} className='form' >
      <div className="className">
        <label htmlFor="first-name">First Name</label>
        <input {...register('first_name')} id='first-name' type="text" />
      </div>
      <div className="className">
        <label htmlFor="last-name">Last Name</label>
        <input {...register('last_name')} id='last-name' type="text" />
      </div>
      <div className="className">
        <label htmlFor="email">E-mail</label>
        <input {...register('email')} id='email' type="email" />
      </div>
      <div className="className">
        <label htmlFor="password">Password</label>
        <input {...register('password')} id='password' type="password" />
      </div>
      <div className="className">
        <label htmlFor="birthday">Birthday</label>
        <input {...register('birthday')} id='birthday' type='date' />
      </div>
      <button >Submit</button>
    </form>

  );
};


export default UsersForms;