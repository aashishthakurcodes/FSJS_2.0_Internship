import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../Categories/Button";



const Conatiner = () => {
  const [Data, Setdata] = useState([]);
  useEffect(() => {
    const getData=async()=>
    {
      const {data}=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=db9c8f6101242bb4f50b946dd0fc7571")
      // console.log("data",data.results);
      Setdata(data.results)
    }
    getData()
  }, []);
  return (
    <div className="w-full border-green-800 border-8 flex flex-col justify-center items-center">
     <Button/>
      <div className="containerw-full mt-[10px] flex flex-wrap  justify-around gap-[30px] border-4  ">
       
         
      
        {Data?.map((res) => (

          <div
            key={res.id}
            className=" w-[300px] border-black border-8 p-[2px]"
          >
            <img
              className=""
              src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
              alt="bg img"
            />
            <h2>{res.original_title}</h2>
            <h3>Ratings {res.vote_average} ⭐</h3>
          </div>

        ))}
      </div>
    </div>
  );
};

export default Conatiner;
