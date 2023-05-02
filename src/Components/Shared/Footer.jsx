import React from 'react';

const Footer = () => {
    return (
        <div>
           <footer className="bg-light">
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-12 mb-3">
        <h5>Cafe Fajitas</h5>
        <p>123 Main St, Anytown USA</p>
        <p>(123) 456-7890</p>
      </div>
      <div className="col-md-4 col-sm-6 mb-3">
        <h5>Hours</h5>
        <p>Mon-Fri: 9am-9pm</p>
        <p>Sat-Sun: 10am-8pm</p>
      </div>
      <div className="col-md-4 col-sm-6 mb-3">
        <h5>Connect With Us</h5>
        <ul className="list-inline">
          <li className="list-inline-item"><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
          <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

        </div>
    );
};

export default Footer;