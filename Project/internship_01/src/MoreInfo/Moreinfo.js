import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Moreinfo = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=db9c8f6101242bb4f50b946dd0fc7571`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, [id]);

  return (
    <div className='mt-[70px] bg-black text-white' >
     <div className= ' flex flex-col justify-center items-center'>
     <img
        className=" w-[900px] h-[400px] border-4 border-white p-[3px] rounded-xl"
        src={`https://image.tmdb.org/t/p/w500${info.backdrop_path}`}
        alt="bg img"
      />
      <h1 className='text-4xl font-bold mt-[10px]'>
        {info.original_title}
        
      </h1>
      <p className='text-2xl italic w-[80%] text-center'> {info.overview}</p>
     </div>

     <div className=' flex flex-col justify-center items-center gap-[20px] mt-[50px]'>     
      <div className='border-4 border-white p-[2px] '>
     <img
        className="w-[400px] h-[450px]"
        src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
        alt="bg img"
      />
       <h2 className='text-xl text-center'> Release date {info.release_date}</h2>
      <h2 className='text-xl text-center'>Ratings {info.vote_average}⭐</h2>
     </div>
    
     </div>
     </div>

  );
};

export default Moreinfo;

