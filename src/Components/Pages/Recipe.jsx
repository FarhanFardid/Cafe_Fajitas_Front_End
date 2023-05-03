import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { HiHeart} from 'react-icons/hi';

const Recipe = ({recipe}) => {
    const {recipe_name,ingredients,cooking_method,ratings} = recipe;
    return (
        <Card className='col-lg-4 '>
        
        <Card.Body className='text-center bg-secondary '>
          <Card.Title className='fw-bold fs-4 text-warning p-2'> {recipe_name}</Card.Title>
          <Card.Text className='py-3 text-start'>
        <p ><span className='fw-bold'>Ingredients:</span>  <span className='text-white'>{ingredients}</span> </p>
        <p><span className='fw-bold'>Cooking Method:</span><span className='text-dark'>{cooking_method}</span> </p>
        <p> <span className='fw-bold'>Ratings:</span> <span className='text-warning fw-bolder'>{ratings}</span></p>
          </Card.Text>
          <div className=''> <Button className='my-2 bg-dark text-warning'>Favorite<HiHeart className='fs-4 m-1 text-danger'/></Button></div>
        
        </Card.Body>
     
      </Card>
    );
};

export default Recipe;