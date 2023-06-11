import axios from "axios";
import React, { useEffect, useState } from "react";
import Result from "../Shimmer/Result";

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
      <div className="flex w-[40%] mt-[10px] gap-[10px] items-center justify-center border-red-300 border-4 p-[10px]">
        <input
          className="px-3 italic h-[35px] flex placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full pr-10 border"
          placeholder="Search your favourite movie.."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          class="relative inline-flex items-center justify-center h-[35px] p-0.5  mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 "
          onClick={handleclick}
        >
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Search
          </span>
        </button>
      </div>
      <div className="flex justify-center gap-[30px] p-[20px] sm:w-[20px] gap-[10px] border-4 border-red-500  ">
        <button
          onClick={() => handleClick("Action")}
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
         Action
          </span>
        </button>
        <button
           class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
           <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Comedy
           </span>
        </button>
        <button
          onClick={() => handleClick("Adventure")}
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
             Adventure
          </span>
        </button>
        <button
          onClick={() => handleClick("Horror")}
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
             Horror
          </span>
        </button>
        <button
          onClick={() => handleClick("Marvel")}
          class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
             Marvel
          </span>
        </button>
      </div>

      {error && <Result />}
      <div className="containerw-full mt-[10px] flex flex-wrap  justify-around gap-[30px] border-4 ">
        {Data?.map((res) => (
          <div
            key={res.id}
            className=" w-[300px] border-white border-4 p-[2px]"
          >
            <img
              className=""
              src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
              alt="bg img"
            />
            <div className=" bg-black bg-opacity-20 p-[5px]">
            <h2>{res.original_title}</h2>
            <h3>Ratings {res.vote_average} ⭐</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conatiner;
