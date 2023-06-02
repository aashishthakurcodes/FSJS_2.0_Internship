import React, { useEffect, useState } from "react";

const Conatiner = () => {
  const [Data, Setdata] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=db9c8f6101242bb4f50b946dd0fc7571"
    )
      .then((response) => response.json())
      .then((api) => {
        Setdata(api.results);
      });
  }, []);
  return (
    <div className="w-full border-green-800 border-8 flex justify-center items-center">
      <div className="containerw-full mt-[10px] flex flex-wrap  justify-around gap-[30px] border-4  ">
        {Data.map((results) => (
          <div
            key={results.id}
            className=" w-[300px] border-black border-8 p-[2px]"
          >
            <img
              className=""
              src={`https://image.tmdb.org/t/p/w500${results.poster_path}`}
              alt="bg img"
            />
            <h2>{results.original_title}</h2>
            <h3>Ratings {results.vote_average} ⭐</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conatiner;
