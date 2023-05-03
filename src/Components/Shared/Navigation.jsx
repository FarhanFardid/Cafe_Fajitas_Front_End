import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaUserCircle} from 'react-icons/fa';
import ActiveLink from './ActiveLink';

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
            {user && <Nav.Link className='fw-bold p-2' href="#"><FaUserCircle style={{fontSize: '2.5rem'}}/></Nav.Link>}
            
           { user ? <Button onClick={handleLogout} className='px-4 fw-bold bg-secondary' >
              Logout
            </Button> :
            <Button className='px-4 fw-bold bg-secondary ' ><Link to="/login" className='text-white text-decoration-none fs-5'>  Login </Link>
            
            </Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Navigation;