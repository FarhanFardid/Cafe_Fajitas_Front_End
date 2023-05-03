import React from 'react';
import errorImg from '../../assets/error-2.png' 
const Error = () => {
    return (
        <div>
            <div>
                <img className='img-fluid w-100' src={errorImg} alt="error image" />
            </div>
        </div>
    );
};

export default Error;