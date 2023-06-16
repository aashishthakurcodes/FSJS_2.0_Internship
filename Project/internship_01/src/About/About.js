import React from "react";
import "../About/about.css";
import bgimg from "../Header/Assets/deadpool-06f2a06d7a418ec887300397b6861383bf1e3b72f604ddd5f75bce170e81dce9.png";
const About = () => {
  return (
    <div className="about ">
      <div className="about-content flex justify-center items-center text-white flex-col">
        <div>
          <h1 className="about-text text-[55px] text-center font-extrabold">
            Hi there ,
          </h1>
          <img className="about-img" src={bgimg} alt="" />
        </div>
        <div className="about-desc">
          <h2>Let's talk about TMDB</h2>
          <p>
            The Movie Database (TMDB) is a community built movie and TV
            database. Every piece of data has been added by our amazing
            community dating back to 2008. TMDB's strong international focus and
            breadth of data is largely unmatched and something we're incredibly
            proud of. Put simply, we live and breathe community and that's
            precisely what makes us different.
          </p>
        </div>

        <div className="flex justify-center items-center flex-col max-w-[900px]">
          <h1 className="text-[50px] text-purple-600 font-extrabold italic">Advantages of TMDB</h1>
          <div >
            <div   className="pt-[15px]">
              <span className="text-[20px] text-purple-600 pr-[10px] font-extrabold">1</span>
              <span className="text-[20px] font-medium">
                Every year since 2008, the number of contributions to our
                database has increased (check out our last years wrap!) With
                over 1,000,000 developers and companies using our platform, TMDB
                has become a premiere source for metadata.
              </span>
            </div>

            <div  className="pt-[15px]">
              <span className="text-[20px] text-purple-600 pr-[10px] font-extrabold">2</span>
              <span  className="text-[20px] font-medium">
                Along with extensive metadata for movies, TV shows and people,
                we also offer one of the best selections of high resolution
                posters and fanart. On average, over 1,000 images are added
                every single day.
              </span>
            </div>

            <div  className="pt-[15px]">
              <span className="text-[20px] text-purple-600 pr-[10px] font-extrabold">3</span>
              <span className="text-[20px] font-medium">
                We're international. While we officially support 39 languages we
                also have extensive regional data. Every single day TMDB is used
                in over 180 countries.
              </span>
            </div>

            <div  className="pt-[15px]">
              <span className="text-[20px] text-purple-600 pr-[10px] font-extrabold">4</span>
              <span className="text-[20px] font-medium">
                Our community is second to none. Between our staff and community
                moderators, we're always here to help. We're passionate about
                making sure your experience on TMDB is nothing short of amazing.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
