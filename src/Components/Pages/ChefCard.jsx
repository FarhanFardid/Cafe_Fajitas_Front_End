import React from 'react';
import { Card } from 'react-bootstrap';

const ChefCard = (props) => {
      console.log(props);
    const {id,chef_name,chef_image,years_of_experience,numbers_of_recipe,likes} = props.chef;
    return (
        <Card className='col-lg-2 col-6  bg-dark text-white'>
        <Card.Img variant="top" src={chef_image} className='w-100 h-25 p-1 mx-auto mt-2 border-1 rounded bg-secondary' />
        <Card.Body className='text-center'>
          <Card.Title className='fw-bold fs-4 '> {chef_name}</Card.Title>
          <Card.Text className='py-3'>
        <p>Years of Experience: {years_of_experience}</p>
        <p>Numbers of Recipes: {numbers_of_recipe}</p>
        <small className="">Number of Likes: {likes}</small>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
   
    
    );
};

export default ChefCard;