import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  return (
    <div className="">
      <div className="conatct_container">
        <div className="left">
          <div>
            <div className="faq">
              <h2 className="faq-heading">FAQ</h2>
            </div>
            <ul className="cont-ul">
              <Link to={"https://www.themoviedb.org/about"}>
                <li className="list">Our history</li>
              </Link>
              <Link to={"https://www.themoviedb.org/faq/general"}>
                <li className="list">General</li>
              </Link>
              <Link to={"https://www.themoviedb.org/about/logos-attribution"}>
                <li className="list">Logos and attribution</li>
              </Link>
              <Link to={"https://www.themoviedb.org/faq/website"}>
                <li className="list">Website</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="right">
          <h1 className="text-[30px]">Staying In Touch</h1>
          <p className="text-[20px]">
            If you're looking for some help,the best <br></br> place to get support is
            our
            <Link  className="support" to={"https://www.themoviedb.org/talk"}>
                support forums.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
