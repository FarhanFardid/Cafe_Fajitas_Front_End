import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

import ActiveLink from './ActiveLink';
import Tooltip from '@mui/material/Tooltip';

const Navigation = () => {
  const {logout,user} = useContext(AuthContext);
    const handleLogout = () => {
     logout()
     .then (()=>{})
     .catch(error=>{
      console.log(error);
     })

    }

    return (
        <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className='fw-bolder fs-1 text-info'>Cafe Fajitas</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fw-bold fs-5  ">
            <ActiveLink  to="/">Home</ActiveLink> 
            <ActiveLink  to="/blog">Blog</ActiveLink> 
            <ActiveLink  to="/about">About Us</ActiveLink> 

        
          </Nav>
          <Nav>
         
            {user &&  <Tooltip title={user.displayName}><img className='rounded-circle p-1 me-2' style={{width:"50px", height:"50px" }} src={user.photoURL} alt="user image" /></Tooltip> }
            
           { user ? <Button onClick={handleLogout} className='px-3  fw-bold bg-primary' >
              Logout
            </Button> :
            <Button className='px-3  fw-bold bg-primary ' ><Link to="/login" className='text-white text-decoration-none fs-5'>  Login </Link>
            
            </Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navigation;