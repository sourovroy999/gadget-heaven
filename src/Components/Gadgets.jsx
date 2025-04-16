import React from "react";
import Gadget from "./Gadget";
import { Link } from "react-router";
import Phones from "./Phones";

const Gadgets = ({ gadgetsData }) => {
  return (
    <div className="mt-20 ">
      <h1 className="text-3xl font-bold text-center ">
        Explore Cutting Edge Gadgets
      </h1>

      <div className="flex justify-center gap-10 pt-5 mb-10">
        <div className="w-52 h-80 mt-6 ml px-8 py-5 bg-white border-gray-100 rounded-xl ">
          <div className="flex flex-col gap-5">
            <button className="btn rounded-3xl btn-soft bg-gray-50 text-gray-500">
              All Product
            </button>
            <button className="btn rounded-3xl btn-soft bg-gray-50 text-gray-500">
              Laptops
            </button>
            <Link to="/phones">
              {" "}
              <button className="btn rounded-3xl btn-soft bg-gray-50 text-gray-500">
                Phones
              </button>
            </Link>

            <button className="btn rounded-3xl btn-soft bg-gray-50 text-gray-500">
              Smart Watches
            </button>
            <button className="btn rounded-3xl btn-soft bg-gray-50 text-gray-500">
              MacBook
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 w-3xl">
          {gadgetsData.map((singleGadget) => (
            <Gadget singleGadget={singleGadget}></Gadget>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
