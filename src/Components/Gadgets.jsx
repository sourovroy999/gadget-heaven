import React, { useState } from "react";
import Gadget from "./Gadget";
import { Link, useLoaderData } from "react-router";
import Phones from "./Phones";
import Laptops from "./Laptops";

const Gadgets = () => {
  const gadgets = useLoaderData();

  const [tabIndex, setTabIndex] = useState(0);
  const laptops = gadgets.filter((p) => p.category === "laptop");
  const phones = gadgets.filter((p) => p.category === "phone");
  const watches = gadgets.filter((p) => p.category === "smart_watch");
  const macbook = gadgets.filter((p) => p.category === "macbook");

  return (
    <div className="mt-20">
      <h1 className="text-3xl font-bold text-center ">
        Explore Cutting Edge Gadgets
      </h1>

      <div className="flex max-w-5xl mx-auto flex-col  gap-6 px-5  lg:flex-row pt-5 pb-10">

        {/* left section */}
        <div className="mt-6 px-8 mx-auto h-fit py-5 bg-white border-gray-100 rounded-xl ">
          <div className="flex flex-col gap-5">
            <Link
              
              onClick={() => setTabIndex(0)}
              className="btn rounded-3xl hover:bg-[#9538E2] hover:text-white btn-soft bg-gray-50 text-gray-500"
            >
              All Product
            </Link>
            <Link
              onClick={() => setTabIndex(1)}
              className="btn rounded-3xl hover:bg-[#9538E2] hover:text-white btn-soft bg-gray-50 text-gray-500"
            >
              Laptops
            </Link>

            <Link
              onClick={() => setTabIndex(2)}
              className="btn hover:bg-[#9538E2] hover:text-white rounded-3xl btn-soft bg-gray-50 text-gray-500"
            >
              Phones
            </Link>

            <Link
              onClick={() => setTabIndex(3)}
              className="btn hover:bg-[#9538E2] hover:text-white rounded-3xl btn-soft bg-gray-50 text-gray-500"
            >
            Watches
            </Link>
            <Link
              onClick={() => setTabIndex(4)}
              className="btn hover:bg-[#9538E2] hover:text-white rounded-3xl btn-soft bg-gray-50 text-gray-500"
            >
              MacBook
            </Link>
          </div>
        </div>



        {/* right section */}
        {tabIndex === 0 && (
          <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {gadgets.map((singleGadget) => (
              <Gadget
                key={singleGadget.product_id}
                singleGadget={singleGadget}
              ></Gadget>
            ))}
          </div>
        )}

        {tabIndex === 1 && (
          <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {laptops.map((singleGadget) => (
              <Gadget
                key={singleGadget.product_id}
                singleGadget={singleGadget}
              ></Gadget>
            ))}
          </div>
        )}

        {tabIndex === 2 && (
          <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {phones.map((singleGadget) => (
              <Gadget
                key={singleGadget.product_id}
                singleGadget={singleGadget}
              ></Gadget>
            ))}
          </div>
        )}

        {tabIndex === 3 && (
          <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {watches.map((singleGadget) => (
              <Gadget
                key={singleGadget.product_id}
                singleGadget={singleGadget}
              ></Gadget>
            ))}
          </div>
        )}

        {tabIndex === 4 && (
          <div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {macbook.map((singleGadget) => (
              <Gadget
                key={singleGadget.product_id}
                singleGadget={singleGadget}
              ></Gadget>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gadgets;
