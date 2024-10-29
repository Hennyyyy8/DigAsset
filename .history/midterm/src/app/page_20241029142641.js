"use client"; 

import { useState } from "react";



// To Do
// - add button - 1
// - fetch data - 2
// - add data to state - 3
// - make it responsive - 4
// -  display data - 5
// - function to clear data - 6
// - component for empty state  - 7
// - component for data state - 8
// - error handling if the data doesn't come back - 9


export default function Home() {
  // if useState !null, probably fetching or loading data, or have data 
  // if useState === data, we can display our data
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);

  async function fetchData() {
    //fetchData
  }

  const displayData = () => {
    // display if we have data 
    // loading state (maybe data?)
    // fufilled state (data exists)
    // empty state (!data)
  }

  const Header = () => {
    // build the UI that grabs data

    return(<header>
      Welcome to my MIDTERM PREP 
      <br />
      <button className='border-2'> OSAMA KRILLADEN</button>
      </header>)
  }


  return (
    <div className="grid place-items-center h-screen">
      <Header />
      </div>
        

  );
}
