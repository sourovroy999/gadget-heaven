import React, { useEffect, useState } from 'react';
import { deleteWishProducts, getWishProducts } from '../Utilis/Utilis';
import SingleWishList from '../Pages/SingleWishList';

const WishList= () => {

    const [carts, setCarts]=useState([])
    useEffect(()=>{
        const storedCarts= getWishProducts([])
        setCarts(storedCarts)
    } ,[])

    const handleWishDelete = id =>{
        deleteWishProducts(id)
        const storedCarts=getWishProducts([])
        setCarts(storedCarts)
    }

console.log('wish carts', carts);


    

    return (
        <div className='mt-5'>
           
           <div className='max-w-4xl  my-5 mx-auto font-bold'>
               <h1 className='text-center'>Wish Lists</h1>
           </div>

            {
                carts.map(p=> <SingleWishList key={p.product_id} cartInside={p} handleWishDelete={()=>handleWishDelete()}></SingleWishList>)
                
            }
            

        </div>
    );
};

export default WishList;