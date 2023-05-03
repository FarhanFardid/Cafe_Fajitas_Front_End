import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
  const {createUser,profileUpdate} = useContext(AuthContext);
  const [err,setErr] = useState('');
    const [accepted,setAccepted] = useState(false);
    const navigate = useNavigate();
    const from = '/'
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const image = form.image.value;
        const password = form.password.value;
        console.log(name,email,image,password);
        if(password.length < 6){
          setErr("Error!!!!...Password must be 6 characters or longer")
        }
        createUser(email,password)
        .then(result => {
          const signedUser = result.user;
          profileUpdate(signedUser,name,image)
          console.log(signedUser);

          form.reset()
          setErr('')
          navigate(from,{replace:true})
        })
        .catch(error=>{console.log(error);
        })
    }

    const handleTerms=(event) =>{
        setAccepted(event.target.checked);
    }
    return (
        <div className='bg-secondary p-2'>
        <Form onSubmit={handleSignUp} className='m-3 p-5 bg-dark border-1 rounded-2'>
<Row className="mx-auto  w-50">
  <h2 className='fw-bold p-3 text-center text-primary '>Please Register Account</h2>
  <Form.Group controlId="formGridName" className='p-3'>
    <Form.Label className='fw-bold fs-5 text-white'>Name</Form.Label>
    <Form.Control type="text"  name="name" placeholder="Enter your Name" className='h-75' required />
  </Form.Group>
  <Form.Group controlId="formGridEmail" className='p-3'>
    <Form.Label className='fw-bold fs-5 text-white'>Email</Form.Label>
    <Form.Control type="email"  name="email" placeholder="Enter your email" className='h-75' required />
  </Form.Group>
  <Form.Group controlId="formGridImage" className='p-3'>
    <Form.Label className='fw-bold fs-5 text-white'>Photo URL</Form.Label>
    <Form.Control type="text"  name="image" placeholder="Enter your photo" className='h-75' required />
  </Form.Group>

  <Form.Group controlId="formGridPassword" className='p-3'>
    <Form.Label className='fw-bold fs-5 text-white'>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Enter Password"  className='h-75' required/>
  </Form.Group>

  <Form.Group className="m-2 p-3" controlId="formBasicCheckbox">
  <Form.Check className='fw-bold fs-5 text-white' 
  onClick={handleTerms}
  name="accept" 
  type="checkbox"
   label={<>Accept Terms & Conditions </>}/>
</Form.Group>
</Row>

<div className='text-center p-3'> <Button variant="primary" type="submit" disabled={!accepted} className='w-25 fw-bolder fs-5 m-3'>
Sign Up
</Button></div>
<p className='text-danger text-center fs-4'>{err}</p>
<p className='text-white fs-6 fw-bold text-center'>Already have an account ? <Link to="/login" className=' text-warning text-decoration-none'>Login </Link> </p>
</Form>
  </div>
    );
};

export default Register;