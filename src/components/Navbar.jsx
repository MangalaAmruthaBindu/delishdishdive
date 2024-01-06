import React,{useState} from 'react'
import logo from "../imagesvideos/logo.png";
import {HiMenuAlt1} from 'react-icons/hi';
import {AiOutlineClose} from "react-icons/ai";
import Button from './Button';


function Navbar() {
    const [open,setopen]=useState(false);
  return (
    <header className='w-full fixed z-10 '>
        <nav className='flex w-full py-2 md:py-3 px-4 md:px-20 items-center justify-between  bg-peapink' >
            <a href="/" className='flex items-center justify-center text-pinkwhite text-lg cursor-pointer'>
                <img src={logo} alt="logo" className='w-8 h-8 lg:w-14 lg:h-14'/>
                <span className='hidden md:block'>DELSIHDISHDIVE</span>
            </a>
            <ul className='hidden md:flex gap-6 text-pinkwhite'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/#recipes'>Explore</a>
                </li>
                <li>
                    <a href='/favourites'>Fovourites</a>
                </li>
            </ul>
            <Button title="Sign Up"
            containerStyle="hidden md:block bg-transparent text-pinkwhite border border-pinkwhite hover:bg-pinkwhite hover:text-pinksha2 rounded-full min-w-[130px]"/>
            <button className="block md:hidden text-pinkwhite text-lg" onClick={()=>setopen(prev=>!prev)}>
            {open? <AiOutlineClose/>:<HiMenuAlt1/>} 

         </button>
            
        </nav>
        <div className={`${open? "flex":"hidden"} bg-pinkwhite flex-col text-pinksha2 px-6 pt-16 pb-10 gap-6 w-full md:hidden `}>
            <a href='/'>Home</a>
            <a href='/#recipes'>Explore</a>  
            <a href='/favourites'>Fovourites</a>




        </div>
    </header>
    
  )
}

export default Navbar