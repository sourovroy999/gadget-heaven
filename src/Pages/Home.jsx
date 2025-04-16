import React from 'react';
import Hero from '../Components/Hero';
import Gadgets from '../Components/Gadgets';
import { Outlet, useLoaderData } from 'react-router';

const Home = () => {

    const gadgetsData=useLoaderData()

    return (
        <>
        <div className='bg-gray-200'>
        <Hero/>
       <Gadgets  gadgetsData={gadgetsData}/>

        </div>

        </>
    );
};

export default Home;