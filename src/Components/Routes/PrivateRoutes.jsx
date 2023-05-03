import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return  <div className=' p-5 text-center m-5'> <Spinner animation="border" role="status">
        <span className="visually-hidden m-5 p-5">Loading...</span>
      </Spinner></div>
    }
 if(user){
    return children;
 }
 else{
    return <Navigate to="/login" state={{from:location}} replace ></Navigate>
 }
   
};

export default PrivateRoutes;