import React, { useEffect, useState } from 'react'

const Conatiner = () => {

    const [Data , Setdata]=useState([])
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=db9c8f6101242bb4f50b946dd0fc7571")
        .then((response)=>response.json())
        .then((api)=>{
            Setdata(api.results)
        })
    },[])
  return (
    <div className=''>
        <div className='container mt-[75px] flex flex-wrap'>
            {Data.map((results)=>(

                 <div key={results.id} className=' w-[250px] border-black border-8'>
                 <img className='' src={`https://image.tmdb.org/t/p/w500${results.poster_path}`} alt='bg img'/>
                 <h2>
                  {results.original_title}
                 </h2>
             </div>

))}


        </div>

    </div>
  )
}

export default Conatiner