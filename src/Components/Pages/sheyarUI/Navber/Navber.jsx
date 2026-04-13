import React from 'react';
import './Navber.css'
import { NavLink } from 'react-router';

const Navber = () => {

    const Navlink = <>
        <NavLink to={'/'} className={'btn  bg-transparent border-white hover:border-base-300'}>Home</NavLink>
        <NavLink to={'/books'} className={'btn  bg-transparent border-white hover:border-base-300'}>Listed Books</NavLink>
        <NavLink to={'/pagesToRead'} className={'btn  bg-transparent border-white hover:border-base-300'}>Pages to Read</NavLink>
    </>

    return (
        <div className="shadow-sm bg-base-100 sticky top-0 z-50">
            <div className="navbar sm:w-11/12 mx-auto   ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Navlink}
                        </ul>
                    </div>
                    <a className=" font-bold  sm:text-2xl">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu space-x-3 menu-horizontal px-1">
                        {Navlink}
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