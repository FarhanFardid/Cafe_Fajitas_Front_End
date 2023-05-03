import React, { useContext } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillGoogleCircle,AiFillGithub } from 'react-icons/ai';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
  const {signUser,googleUser,githubUser} = useContext(AuthContext);
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signUser(email,password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          form.reset()
        })
        .catch(error =>{
          console.log(error);
        })

    }

    const handleGoogle = () =>{
      googleUser()
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error =>{
        console.log(error);
      })

    }

    const handleGithub =() =>{
      githubUser()
      .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch(error =>{
        console.log(error);
      })
    }
    return (
        <div className='bg-secondary'>
            <div className=' p-2'>
              <Form onSubmit={handleLogin} className='m-3 p-5 bg-dark border-1 rounded-2'>
      <Row className="mx-auto  w-50">
        <h2 className='fw-bold p-3 text-center text-primary '>Login Please</h2>
        <Form.Group controlId="formGridEmail" className='p-3'>
          <Form.Label className='fw-bold fs-5 text-white'>Email</Form.Label>
          <Form.Control type="email"  name="email" placeholder="Enter email" className='h-75' required/>
        </Form.Group>

        <Form.Group controlId="formGridPassword" className='p-3'>
          <Form.Label className='fw-bold fs-5 text-white'>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Enter Password"  className='h-75' required/>
        </Form.Group>
      </Row>

<div className='text-center p-3'> <Button variant="primary" type="submit" className='w-25 fw-bolder fs-5 m-3'>
        Login
      </Button></div>
<div className='text-center p-1'> <Button onClick={handleGoogle} variant="secondary" type="submit" className='w-25 fw-bold fs-5 m-1 text-dark'><AiFillGoogleCircle className='text-warning m-1'/>
        Login with Google
      </Button></div>
<div className='text-center p-1'> <Button onClick={handleGithub} variant="secondary" type="submit" className='w-25 text-dark fw-bold  fs-5 m-1'><AiFillGithub className='text-warning m-1'/>
        Login with Github
      </Button></div>
       <p className='text-white fs-6 fw-bold text-center'>New to Cafe Fajitas ? <Link to="/register" className=' text-warning text-decoration-none'>Sign Up</Link> </p>
    </Form>
        </div>
        </div>
    );
};

export default Login;