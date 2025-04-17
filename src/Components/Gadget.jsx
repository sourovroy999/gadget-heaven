import React from 'react';

const Gadget = ({singleGadget}) => {
    const {product_title,product_image,price}=singleGadget;

    return (
        <>
        <div className="card bg-base-100 shadow-sm w-64">
  <figure className="px-10 pt-10">
    <img 
      src={product_image}
      alt="Shoes"
      className="rounded-xl w-96 h-32 object-cover" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product_title}</h2>
    <p>Price:{price} $</p>
    
      <button className="btn btn-soft">View Details</button>
    
  </div>
</div>
        </>
    );
};

export default Gadget;