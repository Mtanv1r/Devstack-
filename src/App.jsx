
import React, { Suspense, useState } from 'react';
import Nav from './components/nav';
import Banner from './components/banner';
import Footer from './components/footer';
import Card from './components/card';
import Cardcontainer from './components/cardcontainer';
import Explore from './components/explore';

//creating a promise 
const dataFetch= async ()=>{
  const res=await fetch('./data.json')
  const data=await res.json()
  return data
}

const App = () => {
  // const dataPromise=dataFetch();
  const[dataPromise]=useState(()=>dataFetch())
  //lifting up
  const [added , setAdded ]=useState([])


  return (
    <div>
      <>
       <Nav />
       <Banner />
       <Explore />
       <Suspense fallback={<h1>Loading...</h1>}>
 <Cardcontainer dataPromise={dataPromise} added={added} setAdded={setAdded} />
       </Suspense>
       <Footer />
      </>
    </div>
  );
};

export default App;