import React from 'react'
import logo from './Assets/img2.jpg'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
        <div className='navbar fixed top-0 left-0 w-full z-10 bg-white border-8 border-black'>
            <nav className='flex border-4 border-red-200 h-[55px] justify-around items-center'>
                <img className='w-[60px] rounded-[50%] h=[60px]' src={logo} alt='logo'/>
                <ul className='flex gap-10'>
                    <li>Home</li>
                    <Link to={"/About"}>
                    <li>About</li></Link>
                    <li> Contact</li>
                </ul>
                <button className='bg-red-700 p-[5px] text-white'>Login</button>
            </nav>
        </div>

       
    </div>
  )
}
export default Header