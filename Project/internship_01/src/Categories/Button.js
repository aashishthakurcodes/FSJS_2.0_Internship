import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Button = () => {
  const [Data, Setdata] = useState([]);

  const handleClick = async (value) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          value
        )}&api_key=db9c8f6101242bb4f50b946dd0fc7571`
      );
      Setdata(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='w-[100%]'>
      <div className='flex justify-center gap-[30px] border-red-300 border-8 '>
        <button onClick={() => handleClick('Action')} className='p-[5px] border-4 border-green-300'>
          Action
        </button>
        <button onClick={() => handleClick('Comedy')} className='p-[5px] border-4 border-green-300'>
          Comedy
        </button>
        <button onClick={() => handleClick('Adventure')} className='p-[5px] border-4 border-green-300'>
          Adventure
        </button>
        <button onClick={() => handleClick('Horror')} className='p-[5px] border-4 border-green-300'>
          Horror
        </button>
        <button onClick={() => handleClick('Drama')} className='p-[5px] border-4 border-green-300'>
          Drama
        </button>
      </div>
      {Data?.map((res) => (
        <div key={res.id} className='w-[300px] border-black border-8 p-[2px]'>
          <img
            className=''
            src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
            alt='bg img'
          />
          <h2>{res.original_title}</h2>
          <h3>Ratings {res.vote_average} ⭐</h3>
        </div>
      ))}
    </div>
  );
};

export default Button;
