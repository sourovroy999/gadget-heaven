import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Layout = () => {
    return (
        <div className='max-w-7xl pt-6  mx-auto sm:px-0 md:px-8'>
           <div>
           <Nav/>
           </div>
                <Outlet/>
           <div>
            <Footer/>
           </div>

        </div>
    );
};

export default Layout;