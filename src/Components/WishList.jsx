import React, { useEffect, useState } from 'react';
import { deleteWishProducts, getWishProducts } from '../Utilis/Utilis';
import SingleWishList from '../Pages/WishList/SingleWishList';

const WishList= () => {

    const [carts, setCarts]=useState([])
    useEffect(()=>{
        const storedCarts= getWishProducts([])
        setCarts(storedCarts)
    } ,[])

    const handleDelete = id =>{
        deleteWishProducts(id)
        const storedCarts=deleteWishProducts([])
        setCarts(storedCarts)
    }



    

    return (
        <div className=''>
           <div>
            <div><h1>Cart</h1></div>
            <div>length: {carts.length}</div>

            <div>
                
            </div>
           </div>

            {
                carts.map(p=> <SingleWishList key={p.product_id} cartInside={p} handleDelete={handleDelete}></SingleWishList>)
                
            }
            

        </div>
    );
};

export default WishList;