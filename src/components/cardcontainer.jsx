import React, { use, useState } from 'react';
import Card from './card';
import Picker from './picker';

const cardcontainer = ({dataPromise,added,setAdded}) => {\
    //final touch 

    const data=use(dataPromise);
    // logical operation
    return (

        <div className="container mx-auto  grid grid-cols-4 gap-0 bg-white">
            <div className="col-span-3 grid grid-cols-3 gap-5 items-center">
                {data.map((el,idx)=><Card el={el} key={idx} added={added} setAdded={setAdded}/>)}
            </div>
             <div className="col-span-1">
                <Picker added={added} setAdded={setAdded} />
             </div>
        </div>
    );
};

export default cardcontainer;