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
        const storedCarts=deleteWishProducts([])
        setCarts(storedCarts)
    }

console.log('wish carts', carts);


    

    return (
        <div className=''>
           <div>
            <div><h1>Cart</h1></div>

            <div>length: {carts.length}</div>

            <div>
                
            </div>
           </div>

            {
                carts.map(p=> <SingleWishList key={p.product_id} cartInside={p} handleWishDelete={handleWishDelete}></SingleWishList>)
                
            }
            

        </div>
    );
};

export default WishList;