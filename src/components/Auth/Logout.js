import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'
import './Auth.css'
import Dropdown from 'react-bootstrap/Dropdown'


export default function Logout() {
    const { logout } = useAuth()
    const navigate = useNavigate()
    const { currentUser } = useAuth()

    function handleAuth() {
        logout()
        navigate('/')
    }

  return (
    <div className='logout text-center p-3 bg-dark text-white'>
        Hello {!currentUser.displayName ? currentUser.email : currentUser.displayName.split(' ')[0]}!
        <Dropdown>
        <Dropdown.Toggle id="dropdown-basic" variant="dark">
            <img src={currentUser.photoURL} alt={`${currentUser.displayName} Github avatar`} />
        </Dropdown.Toggle>
        <Dropdown.Menu align="end">           
            <Dropdown.Item id='menu-item'>
              <button onClick={() => handleAuth()} className="btn bg-dark text-white" align="end">
                Logout
              </button>
            </Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
    </div>
  )
}
