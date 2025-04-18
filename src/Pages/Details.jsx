import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";

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

            <div>
              <h1 className="font-bold">Rating</h1>
            </div>

            <button className="btn w-fit">{rating}</button>

            <div className="flex gap-4">
              <button className="btn btn-primary rounded-3xl">
                Add to Cart
              </button>

              <button>
                <FaRegHeart className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
