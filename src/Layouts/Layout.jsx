import React from 'react';
import Nav from '../Components/Nav';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const Layout = () => {
    return (
        <div>
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