import React from 'react';

const Gadgets = () => {
    return (
        <div className='mt-20 '>
            <h1 className='text-3xl font-bold text-center '>Explore Cutting Edge Gadgets</h1>


            <div className='w-52 mt-6 ml-20 px-8 py-5 bg-white border-gray-100 rounded-xl '>
            <div className='flex flex-col gap-5'>
            <button class="btn rounded-3xl btn-soft bg-gray-50 text-gray-500">All Product</button>
            <button class="btn rounded-3xl btn-soft bg-gray-50 text-gray-500">Laptops</button>
            <button class="btn rounded-3xl btn-soft bg-gray-50 text-gray-500">Phones</button>
            <button class="btn rounded-3xl btn-soft bg-gray-50 text-gray-500">Smart Watches</button>
            <button class="btn rounded-3xl btn-soft bg-gray-50 text-gray-500">MacBook</button>
            
            </div>

            </div>

            <div>
                
            </div>
        </div>
    );
};

export default Gadgets;