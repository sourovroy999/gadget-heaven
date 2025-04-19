import React, { useEffect, useState } from 'react';
import { deleteProducts, getProducts } from '../Utilis/Utilis';
import SingleCart from '../Pages/SingleCart';

const Cart = () => {

    const [carts, setCarts]=useState([])

    // const [totalPrice, setTotalPrice]=useState([])

    useEffect(()=>{
        const storedCarts= getProducts([])
        setCarts(storedCarts)
    } ,[])

    const handleDelete = id =>{
        deleteProducts(id)
        const storedCarts=getProducts([])
        setCarts(storedCarts)
    }



   

    
       const prices=carts.map(prices=> prices.price)
       console.log(prices);

       let sum =0
     for(let item of prices ){
        sum = sum + item
     
     }
     console.log(sum);
     

    //  console.log(totalPrice);
     




    

    return (
        <div className=''>

           <div className='flex px-5 my-6 justify-between  max-w-3xl mx-auto font-bold md:px-'>
            <div><h1>Cart</h1></div>
            
            <div>total price: {sum.toFixed(2)} $</div>

            
           </div>
           
            {
                carts.map(p=> <SingleCart key={p.product_id} cartInside={p} handleDelete={handleDelete}></SingleCart>)
                
            }
            

        </div>
    );
};

export default Cart;