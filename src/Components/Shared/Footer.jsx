import React from 'react';

import { AiFillFacebook,AiFillTwitterCircle,AiFillInstagram} from 'react-icons/ai';

const Footer = () => {
    return (
        <div>
           <footer className="bg-dark">
  <div className="container">
    <div className="row p-2">
      <div className="col-md-4 col-sm-12 mb-3 p-2">
        <h4 className='fw-bolder text-warning p-2'>Cafe Fajitas</h4>
        <p className='text-info'>123 Main St, Monterrey, Mexico</p>
        <p className='text-info'>(123) 456-7890</p>
      </div>
      <div className="col-md-4 col-sm-6 mb-3 p-2 ">
        <h5  className='text-danger fw-bolder p-2'>Hours</h5>
        <p  className='text-info'>Mon-Fri: 9am-11pm</p>
        <p  className='text-info'>Sat-Sun: 10am-11pm</p>
      </div>
      <div className="col-md-4 col-sm-6 mb-3 text-primary p-2">
        <h5 className='fw-bolder p-2'>Connect With Us</h5>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#">  <AiFillFacebook className='m-1 text-info' /></a></li>
          <li className="list-inline-item"><a href="#"> <AiFillTwitterCircle className='m-1 text-info'/>
</a></li>
          <li className="list-inline-item"><a href="#"><AiFillInstagram className='m-1 text-info'/></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;