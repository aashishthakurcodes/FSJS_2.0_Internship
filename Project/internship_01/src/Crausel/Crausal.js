import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from "react";

const Crausal = () => {
  const [myData, Setdata] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=db9c8f6101242bb4f50b946dd0fc7571"
    )
      .then((response) => response.json())
      .then((api) => {
        Setdata(api.results);
      });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const isMobileDevice = /Mobi/i.test(window.navigator.userAgent);

  return (
    <div className=" mt-[75px] ">
       
       <Carousel
className=" "
responsive={responsive}
swipeable={false}
draggable={false}
showDots={true}
// autoPlaySpeed={5000}
// autoPlay={!isMobileDevice}
>

{myData.map((results) => (
  <div className="flex justify-center items-center">
  <div
    key={results.id}
    className=" w-[900px] h-[510px]  p-[2px] mb-[15px]  flex flex-col justify-center items-center"
  >
    <div className="flex flex-col justify-center items-center h-full w-full">
    <img
      className="w-[100%] h-[90%]"
      src={`https://image.tmdb.org/t/p/w500${results.backdrop_path}`}
      alt="bg img"
    />
   
    <h2>{results.original_title}</h2>
    <h3>Ratings {results.vote_average} ⭐</h3>
  </div>
  </div>
  </div>
))}


</Carousel>
     
      
    </div>
  );
};

export default Crausal;


