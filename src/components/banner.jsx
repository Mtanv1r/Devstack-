import React from 'react';
import Banner from '../assets/banner-stack.png'

const banner = () => {
    return (
        <div className="container mx-auto min-h-[500px]">
            <div className="flex justify-evenly items-center bg-white">
                <div className="w-1/2 min-h-[400px] flex flex-col justify-evenly ">
                    <h1 className="text-6xl font-bold text-black">Build Your Ideal</h1>
                    {/* <h1 className="text-6xl font-bold">Developement Stack</h1> */}
                    <h1 className="text-6xl font-bold bg-gradient-to-r from-orange-500 via-violet-600 to-violet-900 bg-clip-text text-transparent">
  Development Stack
</h1>
                    <p className="text-black text-2xl">Explore frontend,backend,database and tooling options ,compare them side by side and put together the stack that fits your next project</p>
                    {/* <div className="badge badge-secondary">Explore Technologies</div> */}
                    <div className="flex gap-8 mt-15">
                                            <div className="badge bg-gradient-to-r from-orange-500 via-pink-500 to-pink-600 text-white border-none h-13 text-[20px] ">
  Explore Technologies
</div>
                    <div className="badge bg-white text-black border border-gray-300 h-13 text-[20px] ">
  Learn More
</div>
                    </div>
                </div>
                <div>
                    <img src={Banner} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default banner;