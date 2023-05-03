import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe';

const ChefRecipe = () => {
    const data = useLoaderData();
    const {id,chef_name,chef_image,years_of_experience,numbers_of_recipe,likes,chef_short_description,recipes} = data;
    console.log(data);
    return (
        <div className='container-fluid bg-dark'>
            <h2 className='text-center text-dark rounded  bg-info w-full m-0 p-0 py-3'>Chef's Recipe Details</h2>
            <div className='row bg-dark  p-0'>
                <div className='col-lg-6 mt-5 w-full '>
                    <img src={chef_image} alt="chef image" className=' p-3 mx-auto w-100 h-75 border-2 rounded border-dark' />
                </div>
                <div className='col-lg-6 p-3 mx-auto align-items-center mt-5 text-center text-white'>
                    <h5 className='fs-4 fw-bold py-3 text-primary'>{chef_name}</h5>
                    <p>Chef's Bio: {chef_short_description}</p>
                    <p>Years of Experience: {years_of_experience}</p>
                    <p>Numbers of Recipe: {numbers_of_recipe}</p>
                    <p>Liked by : {likes} people</p>
                </div>
            </div>

            <section className='container-fluid bg-secondary'>
    <h3 className='text-center fw-bolder text-white p-2'>Recipes</h3>
 <div className='row'>
      {
        recipes.map(recipe=>
            
          <Recipe key={recipe.id} recipe={recipe}></Recipe>
        )
      }
     
     
    </div>
 </section>
        </div>
    );
};

export default ChefRecipe;
