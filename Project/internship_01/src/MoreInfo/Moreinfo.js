import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
// import './Moreinfo.css'; // Import the CSS file

const Moreinfo = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=db9c8f6101242bb4f50b946dd0fc7571`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, [id]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className='mt-[70px] bg-black text-white'>
      <div className='flex flex-col justify-center items-center container'>
        <CSSTransition in={isLoaded} timeout={500} classNames='fade'>
          <div className='image-container'>
            <img
              src={`https://image.tmdb.org/t/p/w500${info.backdrop_path}`}
              alt="bg img"
            />
          </div>
        </CSSTransition>
        <CSSTransition in={isLoaded} timeout={500} classNames='fade'>
          <div className='text-container '>
            <h1 className={`text-4xl font-bold mt-[10px] slide-effect`}>{info.original_title}</h1>
          </div>
        </CSSTransition>
        <CSSTransition in={isLoaded} timeout={500} classNames='fade-p'>
          <p className='text-2xl italic w-[80%] text-center'>{info.overview}</p>
        </CSSTransition>
      </div>

      <div className='flex flex-col justify-center items-center gap-[20px] mt-[50px]'>
        <CSSTransition in={isLoaded} timeout={500} classNames='fade'>
          <div className='border-4 border-white p-[2px]'>
            <div className='image-container'>
              <img
                src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
                alt="bg img"
              />
            </div>
            <CSSTransition in={isLoaded} timeout={500} classNames='fade'>
              <h2 className='text-xl text-center'>Release date: {info.release_date}</h2>
            </CSSTransition>
            <CSSTransition in={isLoaded} timeout={500} classNames='fade'>
              <h2 className='text-xl text-center'>Ratings: {info.vote_average}⭐</h2>
            </CSSTransition>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Moreinfo;
