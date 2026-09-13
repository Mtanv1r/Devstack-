import React from 'react';
import Logo from '../assets/logo-text.png'
const footer = () => {
    return (
        <div className="container mx-auto bg-white min-h-[350px] mt-20  ">
            <div className="flex flex-col justify-evenly items-center text-black   ">
                <div className="flex gap-43 items-center py-10 border-b border-black">
                    <div className="flex flex-col gap-3">
                        <img src={Logo} alt="img" className="h-10 w-40" />
                    <h1 className="text-left  w-[300px] text-gray-400">Curated tools technologied, and resources for developers building modern software</h1>
                    <div className="flex gap-8 text-2xl font-bold">
                        <h1>Github</h1>
                        <h1>Twitter</h1>
                        <h1>Linkedin</h1>
                    </div>
                    </div>
                    <ul>
                        <li><span className="text-2xl font-bold">Product</span></li>
                        <li>Home</li>
                        <li>Technologies</li>
                        <li>Projects</li>
                    </ul>
                     <ul>
                        <li><span className="text-2xl font-bold">Company</span></li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Career</li>
                    </ul>
                     <ul>
                        <li> <span className="text-2xl font-bold">Legal</span></li>
                        <li>Privacy policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
            </div>
            <div className="flex justify-evenly items-center text-black mt-30 text-[22px] my-20 ">
                <h1 className="text-gray-400">@devstack.allrightreserved</h1>
                <div className="flex gap-5 ">
                    <h1 className="text-gray-400">privacy</h1>
                    <h1 className="text-gray-400">Terms</h1>
                </div>
            </div>
        </div>
    );
};

export default footer;