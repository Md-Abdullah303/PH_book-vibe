import React from 'react';
import Navber from '../Components/Pages/sheyarUI/Navber/Navber';
import { Outlet } from 'react-router';
import Footer from '../Components/Pages/sheyarUI/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;