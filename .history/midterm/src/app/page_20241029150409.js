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
  const [astronomyData, setAstronomyData] = useState(null);
  const [loading, setLoading] = useState(null);

  async function fetchAstronomyData() {
    setLoading(true);
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5");

    const data = await response.json();

    setAstronomyData(data);
    setLoading(false);
  }

  const DisplayAstronomyData = () => {
    // display if we have data 
    // loading state (maybe data?)
    // fufilled state (data exists)
    // empty state (!data)
    let formattedData = JSON.stringify(astronomyData);
    if (loading) return <div>loading mannnn</div>;
    if (astronomyData) return <div></div>
    return <div>bruh, no data fetched</div>;
  };

  const Header = () => {
    // build the UI that grabs data
    return(<header>
      Welcome to my MIDTERM PREP
      </header>)
  }


  return (
    <div className="grid place-items-center h-screen">
        <Header />
        <DisplayAstronomyData />
        <button 
          className='border-2'
          onClick={fetchAstronomyData}>
            burgerchudddd
        </button>
      </div>
  );
}
