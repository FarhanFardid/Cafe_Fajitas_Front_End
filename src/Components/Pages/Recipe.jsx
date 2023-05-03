
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { HiHeart} from 'react-icons/hi';
import { toast } from 'react-toastify';
import { FaRegStar, FaStar} from 'react-icons/fa';
import Rating from "react-rating";

const Recipe = ({recipe}) => {

   
    const {recipe_name,ingredients,cooking_method,ratings} = recipe;
    const [dis,setDis] = useState(false)
    const showToast = () =>{
        toast.success(`${recipe_name} recipe is your favorite`);
        setDis(!dis);
    }
    return (
        <Card className='col-lg-4 '>
        
        <Card.Body className='text-center bg-secondary '>
          <Card.Title className='fw-bold fs-4 text-warning p-2'> {recipe_name}</Card.Title>
          <Card.Text className='py-3 text-start'>
        <p ><span className='fw-bold'>Ingredients:</span>  <span className='text-white'>{ingredients}</span> </p>
        <p><span className='fw-bold'>Cooking Method:</span><span className='text-dark'>{cooking_method}</span> </p>
        <p className='fw-bold'>Ratings: <span className='p-1 text-info'>{ratings}</span>  <Rating
        
  placeholderRating={ratings}
  emptySymbol={<FaRegStar />}
  placeholderSymbol={<FaStar className="text-warning"/>}
  fullSymbol={<FaStar />}
/></p>
        
          </Card.Text>
          <div className=''> <Button onClick={showToast} className='my-2 bg-dark text-warning' disabled={dis} >Favorite<HiHeart className='fs-4 m-1 text-danger'/></Button></div>
        
        </Card.Body>
     
      </Card>
    );
};

export default Recipe;