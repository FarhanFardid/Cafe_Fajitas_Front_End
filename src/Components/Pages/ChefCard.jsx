import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiArrowSmRight} from 'react-icons/hi';
const ChefCard = (props) => {
    //   console.log(props);
    const {id,chef_name,chef_image,years_of_experience,numbers_of_recipe,likes} = props.chef;
    return (
        <Card className='col-lg-2 col-6  bg-dark text-white'>
        <Card.Img variant="top" src={chef_image} className='w-100 h-25  mx-auto mt-2 border-1 p-1 rounded bg-secondary' />
        <Card.Body className='text-center'>
          <Card.Title className='fw-bold fs-5 text-primary'> {chef_name}</Card.Title>
          <Card.Text className='py-3'>
        <p>Years of Experience: <span className='text-info'>{years_of_experience}</span> </p>
        <p>Numbers of Recipes: <span className='text-warning'>{numbers_of_recipe}</span> </p>
        <small className="">Number of Likes: <span className='text-danger'>{likes}</span></small>
          </Card.Text>
          <Link to={`/recipe/${id}`}><Button className='bg-primary text-white fw-bold  px-lg-3 py-lg-2 px-1 py-1'>View Recipe<HiArrowSmRight className=''></HiArrowSmRight></Button></Link>
        </Card.Body>
     
      </Card>
   
    
    );
};

export default ChefCard;