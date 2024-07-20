import React from 'react'
import logo from '../assets/react.svg'
import { BsCart3 } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
    <div className="flex items-center h-[70px] border-b-2 border-[grey] border-solid gap-[30px] bg-[#f5f6fa]">
        <div className='w-[30%] flex items-center gap-[10px] '>
          <img src={logo} alt="" className='ml-[10px] w-[40px] h-[40px] cursor-pointer'/>
          <h1 className='text-[25px] font-bold cursor-pointer'>Vite</h1>
        </div>
        <div className='w-[50%] flex items-center '>
          <ul className='flex items-center justify-around w-[70%] font-semibold'>
            <Link to="/" className='w-[70px] h-[50px] hover:border-b-2 border-black border-solid hover:mb-[10px] cursor-pointer px-[10px] py-[8px] duration-75 '>Home</Link>
            <li className='w-[70px] h-[50px] hover:border-b-2 border-black border-solid hover:mb-[10px] cursor-pointer px-[10px] py-[8px] duration-75 '>Guide</li>
            <Link to='/Products' className='w-[80px] h-[50px] hover:border-b-2 border-black border-solid hover:mb-[10px] cursor-pointer px-[10px] py-[8px] duration-75 '>Products</Link>
            <li className='w-[70px] h-[50px] hover:border-b-2 border-black border-solid hover:mb-[10px] cursor-pointer px-[10px] py-[8px] duration-75 '>Latest</li>
            <li className='w-[70px] h-[50px] hover:border-b-2 border-black border-solid hover:mb-[10px] cursor-pointer px-[10px] py-[8px] duration-75 '>Sales</li>
          </ul>
        </div>
        <div className='w-[10%] flex items-center gap-[10px]'>
        <BsCart3 className='w-[30px] h-[30px] ml-[80px] cursor-pointer'/>
        <span className='cursor-pointer'>0</span>
        </div>
      </div></>
  )
}

export default Navbar