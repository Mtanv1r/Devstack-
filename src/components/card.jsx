
import React from 'react';

import { Bounce, toast } from 'react-toastify';

import { Star, Check } from 'lucide-react';


const card = ({ el, added, setAdded }) => {

    
    const isAdded = added.some(item => item.id === el.id);


    return (

        <div>

            <div className="flex flex-col justify-evenly h-[300px] w-[280px] bg-gray-300 shadow-md text-black p-5 rounded-2xl">

          
                <div className="flex justify-between">

                    <img
                        src={el.icon}
                        alt=""
                        className="h-[30px] w-[30px]"
                    />

                    <button className="btn btn-outline btn-success">
                        {el.badge}
                    </button>

                </div>


               
                <div>
                    <h1 className="text-1xl font-bold">
                        {el.id}
                    </h1>
                </div>


                {/* Description */}
                <div>
                    <p>
                        {el.description}
                    </p>
                </div>


                {/* Category + Difficulty */}
                <div className="flex justify-between gap-3">

                    <button className="btn btn-neutral btn-outline">
                        {el.category}
                    </button>

                    <button className="btn btn-neutral btn-outline">
                        {el.difficulty}
                    </button>

                </div>


                {/* Rating */}
                <div>

                    <div className="flex items-center justify-evenly bg-gray-400 w-15 border-black border-2">

                        <Star color="#fbff00" />

                        {el.rating}

                    </div>

                </div>


                {/* Add to Stack Button */}
                <button
                    className={`btn btn-wide flex items-center justify-center gap-1 bg-black text-white ${
                        isAdded
                            ? "text-pink-500 border-pink-500 bg-gray-400 text-black"
                            : ""
                    }`}

                    disabled={isAdded}

                    onClick={() => {

                        toast.success(`${el.id} is selected`, {
                            position: "top-center",
                            autoClose: 5000,
                            theme: "colored",
                            transition: Bounce,
                        });

                        setAdded([...added, el]);

                    }}
                >

                    {isAdded ? (

                        <>
                            Added to Stack
                            <Check color="#ec4899" />
                        </>

                    ) : (

                        "Add to Stack"

                    )}

                </button>


            </div>

        </div>
    );
};


export default card;