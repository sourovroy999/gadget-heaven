import React, { useState } from "react";
import Gadget from "./Gadget";
import { Link, useLoaderData } from "react-router";
import Phones from "./Phones";
import Laptops from "./Laptops";

const Gadgets = () => {
    const gadgets=useLoaderData()
    const{product_id, category}=gadgets;
    const [tabIndex, setTabIndex]=useState(0)
    const laptops=gadgets.filter(p=> p.category==='laptop');
    const phones=gadgets.filter(p=>p.category==='phone');
    const watches=gadgets.filter(p=>p.category==='smart_watch');
    const macbook=gadgets.filter(p=>p.category==='macbook');
    console.log(laptops);
    
  return (
    <div className="mt-20 ">
      <h1 className="text-3xl font-bold text-center ">
        Explore Cutting Edge Gadgets
      </h1>

      <div className="flex  justify-center gap-10 pt-5 pb-10">
        <div className="w-52 h-80 mt-6 ml px-8 py-5 bg-white border-gray-100 rounded-xl ">
          <div className="flex flex-col gap-5">
            <Link to='/' onClick={()=>setTabIndex(0)} className="btn rounded-3xl hover:bg-[#9538E2] hover:text-white btn-soft bg-gray-50 text-gray-500">
              All Product
            </Link>
            <Link onClick={()=>setTabIndex(1)}  className="btn rounded-3xl hover:bg-[#9538E2] hover:text-white btn-soft bg-gray-50 text-gray-500">
              Laptops
            </Link>
            
             
              <Link onClick={()=>setTabIndex(2)} className="btn hover:bg-[#9538E2] hover:text-white rounded-3xl btn-soft bg-gray-50 text-gray-500">
                Phones
              </Link>
            

            <Link onClick={()=>setTabIndex(3)} className="btn hover:bg-[#9538E2] hover:text-white rounded-3xl btn-soft bg-gray-50 text-gray-500">
              Smart Watches
            </Link>
            <button onClick={()=>setTabIndex(4)}  className="btn hover:bg-[#9538E2] hover:text-white rounded-3xl btn-soft bg-gray-50 text-gray-500">
              MacBook
            </button>
          </div>
        </div>

     {/* right section */}
     {
        tabIndex===0 &&   <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 w-3xl">

        {gadgets.map((singleGadget) => (
          <Gadget singleGadget={singleGadget}></Gadget>
        ))}

        
      </div>
     }
     {
        tabIndex===1 && <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 w-3xl">
      {
        laptops.map((singleGadget)=>(
            <Gadget singleGadget={singleGadget}></Gadget>
        ))
       }
      </div>
     }


     {
        tabIndex===2 && <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 w-3xl">
        {
          phones.map((singleGadget)=>(
              <Gadget singleGadget={singleGadget}></Gadget>
          ))
         }
        </div>
        
     }

     {
        tabIndex===3 && <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 w-3xl">
        {
          watches.map((singleGadget)=>(
              <Gadget singleGadget={singleGadget}></Gadget>
          ))
         }
        </div>
        
     }

     {
        tabIndex===4 && <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 w-3xl">
        {
          macbook.map((singleGadget)=>(
              <Gadget singleGadget={singleGadget}></Gadget>
          ))
         }
        </div>
        
     }


     

      
      </div>
    </div>
  );
};

export default Gadgets;
