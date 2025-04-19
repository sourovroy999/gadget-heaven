import React, { useEffect, useState } from "react";
import { deleteProducts, getProducts } from "../Utilis/Utilis";
import SingleCart from "../Pages/SingleCart";

const Cart = () => {
  const [carts, setCarts] = useState([]);

  // const [totalPrice, setTotalPrice]=useState([])

  useEffect(() => {
    const storedCarts = getProducts([]);
    setCarts(storedCarts);
  }, []);

  const handleDelete = (id) => {
    deleteProducts(id);
    const storedCarts = getProducts([]);
    setCarts(storedCarts);
  };


  const handleSort=()=>{
    const sorted= [...carts].sort(function(a,b) {return b.price - a.price})
    console.log('sort btn clicked', sorted);
    // setCarts(sorted)
    setCarts(sorted)
    
  }


  const prices = carts.map((prices) => prices.price);
//   console.log(prices);

  let sum = 0;
  for (let item of prices) {
    sum = sum + item;
  }
  console.log(sum);

  //  console.log(totalPrice);

  return (
    <div className="mt-5 px-6 md:px-0">
      <div className="max-w-4xl flex gap-4 flex-col md:flex-row items-center mx-auto justify-between font-bold md:px-5">

        <div className="">
          <h1>Cart</h1>
        </div>

        
        <div className="">total price: {sum.toFixed(2)} $</div>

        <div>
        <button onClick={()=>handleSort()}  className="btn btn-outline mr-8 rounded-3xl text-[#9538E2">
          Sort
        </button>
        <button className="btn btn-primary rounded-3xl bg-[#9538E2] text-white">
          Purchase
        </button>
        </div>

      </div>

      {carts.map((p) => (
        <SingleCart
          key={p.product_id}
          cartInside={p}
          handleDelete={handleDelete}
        ></SingleCart>
      ))}
    </div>
  );
};

export default Cart;
