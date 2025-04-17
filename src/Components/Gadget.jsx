import React from 'react';
import { Link } from 'react-router';

const Gadget = ({singleGadget}) => {
    const {product_title,product_image,price}=singleGadget;

    return (
        <>
    
    <div className="card w-[220px]  bg-base-100 shadow-sm ">
<figure className="px-5 pt-5">
  <img 
    src={product_image}
    alt="Shoes"
    className="rounded-xl border w-48 h-32 object-cover" />
</figure>
<div className="card-body">
  <h2 className="card-title">{product_title}</h2>
  <p>Price:{price} $</p>
  
    <Link to='details'  className="btn btn-outline hover:bg-fuchsia-50 rounded-3xl text-[#9538E2]">View Details</Link>
  
</div>
      </div>
        </>
    );
};

export default Gadget;