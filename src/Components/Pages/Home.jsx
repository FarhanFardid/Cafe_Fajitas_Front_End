import React from 'react';
import BGimg from '../../assets/bg-2.png'
import { Button, Container } from 'react-bootstrap';
const Home = () => {
    return (
        <div >
            
            <section>
<img  src={BGimg} alt="cafe-image" className='img-fluid w-100  position-absolute  h-50 h-lg-75'   />
<div className='position-relative py-lg-5 py-5 pe-lg-5 p-3 text-white text-end container '> <h2 className='fw-bolder text-warning'>Eat Drink and Be Happy</h2>
 <p className='my-3 text-info'>Enjoy the Richness of Mexican Foods.</p>
 <p className='my-3 '>Treat your Inner BEAST with a Feast.</p>
 <Button variant="danger" className='p-3 fw-bold m-2 text-info'> Cafe Fajitas </Button>

 </div>
 </section>

 <section>
    <h2>section -2</h2>
 </section>

 </div>
    );
};

export default Home;