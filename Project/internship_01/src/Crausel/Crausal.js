import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useEffect, useState } from "react";
import CrausalShimmer from "../Shimmer/CrausalShimmer";


const Crausal = () => {
  const [myData, Setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=db9c8f6101242bb4f50b946dd0fc7571"
    )
      .then((response) => response.json())
      .then((api) => {
        Setdata(api.results);
        setLoading(false);
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
      slidesToSlide: 1, 
    },
  };

  if (loading) {
    return <CrausalShimmer />; // Render shimmer component while loading
  }

  return (
    <div className="main-crausal  bg-black ">
      <Carousel
        className=""
        responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={false}
      >
        {myData.map((results) => (
          <div className="crausal flex  justify-center items-center p-[50px]  " key={results.id}>
          <div className="crausal-content  w-[850px] p-[5px] h-[410px]    flex flex-col justify-end items-center shadow-2xl border-2 border-white-600 rounded-xl">
            <img
              className="w-full h-full"
              src={`https://image.tmdb.org/t/p/w500${results.backdrop_path}`}
              alt="bg img"
            />
            <div className="absolute p-2 md:p-5 flex flex-col justify-center text-center items-center text-slate-200 bg-black bg-opacity-60">
              <h1 className="font-serif text-lg md:text-2xl">{results.original_title}</h1>
              <h3 className="font-serif text-sm md:text-lg">Ratings {results.vote_average} ⭐</h3>
            </div>
          </div>
        </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Crausal;
