import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
// import Conatiner from '../Container/Conatiner'

const Button = () => {
  const[userInput, setuserInput] =useState();
  useEffect(() => {
    const getData=async()=>
    {
      const {data}=await axios.get(`https://api.themoviedb.org/3/search/movie?query=${setuserInput}?&api_key=db9c8f6101242bb4f50b946dd0fc7571`)
      // console.log("data",data.results);
      setuserInput(data.results)
    }
    getData()
  }, []);

  
  return (
    <div className='w-[100%]'>
        <div className='flex  justify-center gap-[30px] border-red-300 border-8 '>
        <button  className='p-[5px] border-4 border-green-300'>Action</button>
        <button className='p-[5px] border-4 border-green-300'>Comedy</button>
        <button className='p-[5px] border-4 border-green-300'>Adventure</button>
        <button className='p-[5px] border-4 border-green-300'>Horror</button>
        <button className='p-[5px] border-4 border-green-300'>Drama</button>
        
        </div>
    </div>
  )
}

export default Button