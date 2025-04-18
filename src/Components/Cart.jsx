import React, { useEffect, useState } from 'react';
import { deleteProducts, getProducts } from '../Utilis/Utilis';
import SingleCart from '../Pages/SingleCart';

const Cart = () => {

    const [carts, setCarts]=useState([])
    useEffect(()=>{
        const storedCarts= getProducts([])
        setCarts(storedCarts)
    } ,[])

    const handleDelete = id =>{
        deleteProducts(id)
        const storedCarts=getProducts([])
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
                carts.map(p=> <SingleCart key={p.product_id} cartInside={p} handleDelete={handleDelete}></SingleCart>)
                
            }
            

        </div>
    );
};

export default Cart;