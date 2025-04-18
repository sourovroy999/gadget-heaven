import React from 'react';
import { SlClose } from 'react-icons/sl';

const SingleCart = ({cartInside, handleDelete}) => {
   const {product_title,product_image,price,product_id, description}=cartInside;
    
    return (
        <div className=' flex flex-col md:flex-row gap-3 justify-between max-w-2xl mx-auto bg-white mb-3 p-4 rounded-2xl'>

           
            <img  className=' w-[120px] h-[100px] object-cover' src={product_image} alt="" />
         

           <div className='space-y-2'>
            <h1 className='font-bold'>{product_title}</h1>
            <p>{description}</p>
            <p className='font-bold'>Price: {price}</p>
           </div>

           <button onClick={()=>handleDelete(product_id)} className=''>
           <SlClose className='text-red-500 hover:bg-blue-500 '/>

           </button>


        </div>
    );
};

export default SingleCart;