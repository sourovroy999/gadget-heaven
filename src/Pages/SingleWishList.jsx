import React from "react";
import { Toaster } from "react-hot-toast";
import { SlClose } from "react-icons/sl";
import { saveProducts, saveWishProducts } from "../Utilis/Utilis";

const SingleWishList= ({ cartInside, handleWishDelete }) => {
  const { product_title, product_image, price, product_id, description } =
    cartInside;

    console.log(product_id);
      const  handleAddToCart=(product)=>{
          saveProducts(product)
       }
  return (
    <div className=" flex  gap-3 justify-between max-w-2xl mx-auto bg-white mb-3 p-4 rounded-2xl">

      
        <img className=" w-[120px] h-[100px] object-cover"
          src={product_image}
          alt=""
        />
        <div className="space-y-2">
          <h1 className="font-bold">{product_title}</h1>
          <p>{description}</p>
          <p className="font-bold">Price: {price}</p>

          {/* i should use context api */}
          <button onClick={()=> handleAddToCart(cartInside)} className="btn">Add to Cart</button>
        </div>
        
      

      <div onClick={() => handleWishDelete(product_id)} className="">
        <SlClose className="text-red-500 hover:scale-110 " />
      </div>
      <Toaster/>
      
    </div>
  );
};

export default SingleWishList;
