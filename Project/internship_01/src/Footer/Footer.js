import React from "react";
import logo from "../Header/Assets/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg";
import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer_main ">
      <footer>
        <div className="footer-container flex justify-center items-center gap-[40px] p-[20px] bg-[#252E7E] text-white">
          <div>
            <img className="w-[80px]" src={logo} alt=" " />
            <Link to={"https://www.themoviedb.org/signup"}> <button className="btn-footer">Join the communtiy</button></Link>

          </div>
          
          <div className="ul-footer flex gap-[30px]">
          <ul>
            <Link>
              <li className="text-[25px]">The Basics</li>
            </Link>
            <Link to={"https://www.themoviedb.org/about"}>
              <li>About TMDB</li>
            </Link>
            <Link to={"https://www.themoviedb.org/about/staying-in-touch"}>
              <li>Contact us</li>
            </Link>
            <Link to={"https://www.themoviedb.org/talk"}>
              <li>Support for Api</li>
            </Link>
          </ul>
          <ul>
            <Link>
              <li className="text-[25px]">Get Involved</li>
            </Link>
            <Link to={"https://www.themoviedb.org/bible"}>
              <li>Contribution</li>
            </Link>
            <Link to={"https://www.themoviedb.org/movie/new"}>
              <li>Add New Movie</li>
            </Link>
            <Link to={"https://www.themoviedb.org/tv/new"}>
              <li>Add New TV Serial</li>
            </Link>
          </ul>
          <ul>
            <Link>
              <li className="text-[25px]">Legal</li>
            </Link>
            <Link to={"https://www.themoviedb.org/terms-of-use"}>
              <li>Terms of Use</li>
            </Link>
            <Link>
              <li to={"https://www.themoviedb.org/documentation/api/terms-of-use"}>Api Term Of Use</li>
            </Link>
            <Link to={"https://www.themoviedb.org/privacy-policy"}>
              <li>Privacy Policy</li>
            </Link>
          </ul>
          
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;