import React from 'react';
import Hero from '../Components/Hero';
import Gadgets from '../Components/Gadgets';
import { Outlet, useLoaderData } from 'react-router';
import Phones from '../Components/Phones';

const Home = () => {


    return (
        <>
        <div className='bg-gray-200'>
        <Hero/>
      <Outlet/>

        </div>


        </>
    );
};

export default Home;