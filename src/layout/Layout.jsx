import React from 'react';
import Navber from '../Components/Pages/sheyarUI/Navber/Navber';
import { Outlet } from 'react-router';


const Layout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Layout;