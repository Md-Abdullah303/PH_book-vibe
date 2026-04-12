import React from 'react';
import HeroImg from '../../assets/hero_img.jpg'

const HeroSection = () => {
    return (
        <div>
            <div className="hero bg-base-200 w-11/12 mx-auto my-30 py-20">
                <div className="hero-content flex-col  w-full  justify-between lg:flex-row-reverse">
                    <img
                        src={HeroImg}
                        className=" rounded-lg shadow-2xl"
                    />
                    <div className=' space-y-10'>
                        <h1 className="text-xl sm:text-2l md:text-4xl lg:text-7xl font-bold">Books to freshen up <br />your bookshelf</h1>
                        <button className="btn bg-green-400 border-none text-white">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;