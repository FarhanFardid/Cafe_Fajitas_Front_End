import React from 'react';
import BGimg from '../../assets/bg-2.png'
import img1 from '../../assets/img-1.jpg'
import img2 from '../../assets/img-2.jpg'
import img3 from '../../assets/img-3.jpg'
import img5 from '../../assets/img-5.jpg'
import img7 from '../../assets/img-7.png'
import img9 from '../../assets/img-9.png'
import { Button,  CardGroup } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';
const Home = () => {
    const chefs = useLoaderData();
    console.log(chefs);
    return (
        <div >
            
            <section className='container-fluid m-0 p-0'>
<img  src={BGimg} alt="cafe-image" className='img-fluid w-100  position-absolute  h-50 '   />
<div className='position-relative py-lg-5 py-2 pe-lg-5 p-3 text-white text-end container '> <h2 className='fw-bolder text-warning'>Eat Drink and Be Happy</h2>
 <p className='my-2 text-info'>Enjoy the Richness of Mexican Foods.</p>
 <p className='my-2 '>Treat your Inner BEAST with a Feast.</p>
 <Button variant="danger" className='p-2 fw-bold  text-info'> Cafe Fajitas </Button>

 </div>
 </section>

 <section className='container-fluid mt-3'>
    <div className='row p-lg-5 py-5 bg-secondary'>
    
    <div className='col-lg-6 col-sm-12 p-lg-3 p-3'>
            <h3 className='fw-bolder pt-5 p-lg-3 text-info text-center'>A warm & Friendly Atmosphere With  Mexican Foods</h3>
            <p className='p-2 text-white'>Discover the facts, different taste and recipes that making Mexican food so irresistible, is that it is a blend of different cultures. Distinct blend of spices, seasonings and vibrant colors create a beautiful presentation. Many of the traditional Mexican dishes still represent deep, pre-hispanic origins, making them truly unique.</p>
        </div>
            <div className='col-lg-3 col-sm-12 p-3 p-lg-4 '>
                <img className='w-100 border-1 rounded' src={img1} alt="side img-1" />
            </div>
            <div className='col-lg-3 col-sm-12 p-3 p-lg-4 '>   
            <img className='w-100 border-1 rounded' src={img2} alt="side img-2" /></div>
    
    </div>
 </section>

 <section className='container-fluid bg-white'>
    <h3 className='text-center fw-bolder text-warning p-2'>Our Best Chefs</h3>
 <div className='row'>
      {
        chefs.map(chef=>
            // console.log(chef);
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        )
      }
     
     
    </div>
 </section>
 <section className='container-fluid p-3 bg-info'>
    <h3 className='fw-bold text-center p-2 text-danger'>Trending Meals </h3>
    <div className='row p-3'>
    <div className='col-lg-3 col-12'><img className='w-100 h-75 rounded' src={img3} alt="trending images-1" /></div>
    <div className='col-lg-3 col-12'><img className='w-100 h-75 rounded' src={img9} alt="trending images-2" /></div>
    <div className='col-lg-3 col-12'><img className='w-100 h-75 rounded' src={img5} alt="trending images-3" /></div>
    <div className='col-lg-3 col-12'><img className='w-100 h-75 rounded' src={img7} alt="trending images-4" /></div>
    </div>
 </section>

 </div>
    );
};

export default Home;