import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Logout from './Auth/Logout'
import { BsBootstrapReboot, BsListUl, BsConeStriped, BsPalette2, BsChevronLeft, BsAlignTop } from 'react-icons/bs';

export default function Navigation() {
  const { currentUser } = useAuth()
  return (
    <Navbar expand='md' variant='dark' bg='dark' className='p-3'>
        <Navbar.Brand href='/'><BsBootstrapReboot size={50}/>  <BsPalette2 /> <BsConeStriped size={23} /><BsChevronLeft size={23}/> <BsAlignTop size={22}/> <div><em>ToDo's</em></div></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>            
            <Nav>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/about' className='nav-link'>About</Link>
                <Link to='/todos' className='nav-link'>ToDo's</Link>
                <Link to='/categories' className='nav-link'>Categories</Link>
              {!currentUser &&
                <Link to='/login' className='nav-link'>Login</Link>                  
              }
              {currentUser &&               
                <Logout />
              }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
