import React from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { saveProducts, saveWishProducts } from "../Utilis/Utilis";
import { Toaster } from "react-hot-toast";
import { render } from "react-dom";

const Details = () => {
  const { product_id } = useParams();
  const data = useLoaderData();
  console.log(data);

  const product = data.find((p) => p.product_id === product_id);
  console.log(product);

  const {
    product_title,
    product_image,
    price,
    availability,
    description,
    Specification,
    rating,
  } = product;

 const  handleAddToBookMark=(product)=>{
    saveProducts(product)
 }

  const handleAddToWishLists=(product)=>{
    saveWishProducts(product)
 }



  return (
    <>
      <div className="bg-gray-200  md:pb-44">
        <div className="bg-[#9538E2] h-[200px] pb text-white text-center flex-grow">
          <h1 className="text-3xl">Product Details</h1>
          <p className="md:w-3xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>

        {/* card container */}

        <div className="card md:card-side pb-6 md:-mt-16 p-5  md:max-w-xl lg:max-w-3xl md:mx-auto bg-base-100  shadow-sm">
          <figure className="my-auto min-w-[40%]">
            <img className="" src={product_image} alt={product_title} />
          </figure>

          <div className="card-body max-h-fit p-6">
            <h2 className="card-title">{product_title}</h2>
            <h2>Price:${price}</h2>
            <button className="w-fit btn">
              {availability ? "In Stock" : "Out of stock"}
            </button>
            <p>{description}</p>
            <h1 className="font-bold">Specification:</h1>
            <p>
              {Specification.map((p) => (
                <li className="list-decimal">{p}</li>
              ))}
            </p>

            <div className="flex items-center gap-1">
              <h1 className="font-bold">Rating</h1>
              <FaStar/>
            </div>


              <div id="starContainer">

            <button className="btn w-fit">{rating}</button>
            </div>

            <div className="flex gap-4">
              <button onClick={()=>handleAddToBookMark(product)} className="btn btn-primary rounded-3xl">
                Add to Cart
              </button>
              <Toaster />

              <button onClick={()=>handleAddToWishLists(product)} className="btn btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="size-[1.2em]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
