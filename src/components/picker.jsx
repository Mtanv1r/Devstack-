
import React from 'react';

import { X } from 'lucide-react';


const picker = ({ added, setAdded }) => {

    // Remove one technology
    const handleRemove = (el) => {

        const restStack = added.filter(
            item => item.id !== el.id
        );

        setAdded(restStack);

    };


    // Remove all technologies
    const handleRemoveAll = () => {

        setAdded([]);

    };


    return (

        <div className="w-[300px] border-2 border-gray-700 rounded-2xl p-4">

            {/* Your Stack + Remove All */}
            <div className="flex justify-between items-center">

                <h1 className="text-2xl font-bold text-black">
                    Your Stack
                </h1>

                {added.length > 0 && (

                    <button
                        onClick={handleRemoveAll}
                        className="btn btn-sm btn-error"
                    >
                        Remove All
                    </button>

                )}

            </div>


            {/* Technology Count */}
            <p className="text-gray-500 mb-4">

                {added.length}

                {added.length === 1
                    ? " technology added"
                    : " technologies added"
                }

            </p>


            {/* Empty State */}
            {added.length === 0 && (

                <div className="h-[150px] border-2 border-dashed border-black flex items-center justify-center rounded-2xl text-gray-500">

                    Your Stack is Empty

                </div>

            )}


            {/* Selected Technologies */}
            {added.map((el) => (

                <div
                    key={el.id}
                    className="h-[65px] w-full flex justify-between p-4 items-center bg-white border-black border-2 my-2 rounded-2xl"
                >

                    {/* Technology Info */}
                    <div className="flex items-center gap-3">

                        <img
                            src={el.icon}
                            alt="img"
                            className="h-10 w-10"
                        />

                        <div>

                            <h1 className="text-black font-bold text-[15px]">
                                {el.id}
                            </h1>

                            <h1 className="text-gray-500 font-bold text-[10px]">
                                {el.category}
                            </h1>

                        </div>

                    </div>


                    {/* Remove One */}
                    <span
                        onClick={() => handleRemove(el)}
                        className="cursor-pointer"
                    >
                        <X />
                    </span>

                </div>

            ))}

        </div>

    );
};


export default picker;