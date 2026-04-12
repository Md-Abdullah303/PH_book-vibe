import React from 'react';
import './Navber.css'
import { NavLink } from 'react-router';

const Navber = () => {

    // const Navlink = 

    return (
        <div className="shadow-sm bg-base-100">
            <div className="navbar w-11/12 mx-auto  sticky top-0 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className=" font-bold text-2xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu space-x-3 menu-horizontal px-1">
                        <NavLink to={'/'} className={'btn  bg-transparent border-white hover:border-base-300'}>Home</NavLink>
                        <NavLink to={'/books'} className={'btn  bg-transparent border-white hover:border-base-300'}>Listed Books</NavLink>
                        <NavLink to={'/pagesToRead'} className={'btn  bg-transparent border-white hover:border-base-300'}>Pages to Read</NavLink>
                    </ul>
                </div>
                <div className="navbar-end space-x-2.5">
                    <button className='btn bg-green-400  text-white border-none'>Sing In</button>
                    <button className='btn btn-info  text-white border-none'>Sing Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navber;