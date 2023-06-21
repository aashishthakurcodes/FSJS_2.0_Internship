import React from 'react'
import logo from './Assets/download (1).jpg'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Conatiner from "../Container/Conatiner";

export const Header = () => {
  const [scroll ,setScroll]=useState(false);
  const handleScroll=()=>{
    const offset=window.scrollY;
    if(offset>800){
      setScroll(true)
    }else{
      setScroll(false)
    }
  }
useEffect(()=>{
  window.addEventListener("scroll",handleScroll)
},[])

  return (
    <div className={`main-header ${scroll ? "sticky-header":" "}`}>
        <div className='navbar  top-0 left-0 w-full z-10 '>
            <nav className=' navbar_2  flex  h-[75px] justify-around items-center'>
              <Link to={<Conatiner/>}>
                <img className=' w-[80px] rounded-[50%]  h=[42px]' src={logo} alt='logo'/> </Link>
                <ul className='navbar-ul flex gap-10'>
                  <Link to={"/"}>
                    <li>Home</li>
                    </Link>
                    <Link to={"/about"}>
                    <li>About</li></Link>
                    <Link to={"/contact"}>
                    <li> Contact</li>
                    </Link>
                </ul>
                <button className='login bg-red-700 p-[5px] text-white'>Login</button>
            </nav>
        </div>
    </div>
  )
}
export default Header