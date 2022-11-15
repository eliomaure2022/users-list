import React from 'react';
import styled from 'styled-components'
import UsersForms from '../components/UsersForms'
import { useForm } from 'react-hook-form';
import  { useEffect } from 'react';
import axios from 'axios';


const Modal = ({modal,setModal,children}) => {

  
 


  return (
    <>
      {modal &&
        <div className='modal'>
          <div className='modal-container'>
            <div className='header-modal'>
              <Modal>
                <h1></h1>
                <p></p>
              </Modal>
              <button onClick={() => setModal(false)} >X</button>
              {children}
            </div>
          </div>
        </div>
      }
    </>
  );
};




export default Modal;

