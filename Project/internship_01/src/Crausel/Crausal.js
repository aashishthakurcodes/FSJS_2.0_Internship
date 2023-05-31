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
    <div className="border-red-700 border-8 mt-[75px] flex justify-center ">
      <Carousel
      className=" flex flex-col justify-center items-center border-green-700 border-8 "
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        // autoPlaySpeed={3000}
        // autoPlay={!isMobileDevice}
      >
       
        {myData.map((results) => (
          <div
            key={results.id}
            className=" w-[600px]   border-black border-8 p-[2px] flex flex-col justify-center items-center"
          >
            <img
              className="w-full"
              src={`https://image.tmdb.org/t/p/w500${results.backdrop_path}`}
              alt="bg img"
            />
            <h2>{results.original_title}</h2>
            <h3>Ratings {results.vote_average} ⭐</h3>
          </div>
        ))}
      
      </Carousel>
      
    </div>
  );
};

export default Crausal;
