import axios from "axios";
import React, { useEffect, useState } from "react";
import Result from "../Shimmer/Result";
import { Link } from "react-router-dom";
const Conatiner = () => {
  const [Data, Setdata] = useState([]); //container variables
  const [error, setError] = useState(false); //Error varaiabls
  //Input user data
  const [input, setInput] = useState("");
  //Handle click function execute by taking user value
  const handleClick = async (value) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          value
        )}&api_key=db9c8f6101242bb4f50b946dd0fc7571`
      );
      if (data.results.length === 0) {
        setError(true);
      } else {
        setError(false);
        Setdata(data.results);
      }
      setInput("");
    } catch (error) {
      console.log(error);
    }
  };
  //Initial Data
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=db9c8f6101242bb4f50b946dd0fc7571"
      );
      // console.log("data",data.results);
      Setdata(data.results);
    };
    getData();
  }, []);
  //User data
  const handleclick = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${input}&api_key=db9c8f6101242bb4f50b946dd0fc7571`
    )
      .then((res) => res.json())
      .then((datac) => {
        if (datac.results.length === 0) {
          Setdata([]);
          setError(true);
        } else {
          Setdata(datac.results);
          setError(false);
        }
      })
      .catch((error) => {
        // console.error(error);
        alert(error);
      });
  };
  return (
    <div className="w-full border-green-800 border-8 flex flex-col justify-center items-center bg-black text-white ">
      
     <div className="search_div flex flex-col md:flex-row w-full md:w-[30%] mt-2 md:mt-[10px] md:gap-2 items-center justify-center  p-2 md:p-[10px]">
  <input
    className="input_data px-3 italic h-10 md:h-[35px] flex placeholder-slate-600 text-slate-800 relative bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pr-10 sm:w-54 md:w-full"
    placeholder="Search your favourite movie..."
    value={input}
    onChange={(e) => setInput(e.target.value)}

  />

  <button
    className="btn relative inline-flex items-center justify-center h-10 md:h-[35px] p-0.5 md:mr-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 m-2 sm:mt-0" 
    onClick={handleclick}
  >
    <span className="relative  px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Search
    </span>
  </button>
</div>
<div>
  <h2 className="italic">Categories..</h2></div>
<div className="flex flex-wrap justify-center gap-2 p-2 sm:p-4 md:p-6 lg:p-8">
  
  <button
    onClick={() => handleClick("Action")}
    className="btn relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 md:mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
  >
    <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Action
    </span>
  </button>
  <button
    className="btn relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 md:mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
  >
    <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Comedy
    </span>
  </button>
  <button
    onClick={() => handleClick("Adventure")}
    className="btn relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 md:mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
  >
    <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Adventure
    </span>
  </button>
  <button
    onClick={() => handleClick("Horror")}
    className="btn relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 md:mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
  >
    <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Horror
    </span>
  </button>
  <button
    onClick={() => handleClick("Marvel")}
    className="btn relative inline-flex items-center justify-center p-0.5 mb-2 md:mb-0 md:mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
  >
    <span className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Marvel
    </span>
  </button>
</div>
      {error && <Result />}
      <div className="container w-full mt-[10px] flex flex-wrap  justify-around gap-[35px]  " >
        {Data?.map((res) => (
          <Link to={"/moreinfo/"+ res.id}>
          <div
            key={res.id}
            className="container_div w-[300px] border-white border-4 p-[2px] rounded-[5px]"
          >
           <img
              className=""
              src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
              alt="bg img"
            />
            <div className=" bg-black bg-opacity-20 p-[5px] flex justify-center items-center flex-col">
            <h2 className="heading">{res.original_title}</h2>
            <h3 className="heading2">Ratings {res.vote_average} ⭐</h3>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Conatiner;