
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
                    <div className="h-10 w-20 bg-white font-bold border-2 border-black flex items-center rounded-2xl p-2">
                        {el.badge}
                    </div>

                </div>


               
                <div>
                    <h1 className="text-1xl font-bold">
                        {el.id}
                    </h1>
                </div>


            
                <div>
                    <p>
                        {el.description}
                    </p>
                </div>


             
                <div className="flex justify-between gap-3">

                 
                    
                         <div className="h-13 w-28 bg-white font-bold border-2 border-black flex items-center rounded-2xl p-2">
                        {el.category}
                    </div>
                       <div className="h-13  w-28 bg-white font-bold border-2 border-black flex items-center rounded-2xl p-2">
                        {el.difficulty}
                    </div>

                </div>


              
                <div>

                    <div className="flex items-center justify-evenly bg-gray-400 w-15 border-black border-2">

                        <Star color="#fbff00" />

                        {el.rating}

                    </div>

                </div>


            
                <button
                    className={`btn btn-wide flex items-center justify-center gap-1 bg-black text-white ${
                        isAdded
                            ? "text-pink-500 border-pink-500 bg-gray-400 text-black"
                            : ""
                    }`}

                    // disabled={isAdded}

                    onClick={() => {
                      

                        if(isAdded){
             toast.warn(`${el.id} is alread in stack`, {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
                              return
                        }
                        
                        toast.success(`${el.id} is selected`, {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
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