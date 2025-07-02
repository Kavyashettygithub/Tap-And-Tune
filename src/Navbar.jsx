import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
const Navbar = () => {
  let[navClick,setnavClick]=useState(false)
  return (
   <div>
    <nav className='bg-purple-800  text-white'>
      <div className='items-center flex justify-between h-20'>
        <h1 className='font-bold text-3xl p-5'>Tap And Tune</h1>
        <div className='hidden sm:block '>
          <a href="/" className='px-6 text-2xl'>Animal</a>
          <a href="/flower" className='px-6 text-2xl'>Flower</a>
          <a href="/fruit" className='px-6 text-2xl'>Fruit</a>
          <a href="/music" className='px-6 text-2xl'>Music</a>
        </div>
        <button onClick={()=>{setnavClick(!navClick)}} className='block  sm:hidden  text-4xl p-4 font-bold'><CiMenuBurger /></button>
      </div>
      <div className={` ${navClick ? "block" :"hidden "}  sm:hidden bg-purple-800 text-center pb-4 `}>
           <a href="/" className='px-6 text-2xl block mb-4'>Animal</a>
          <a href="/flower" className='px-6 text-2xl block mb-4'>Flower</a>
          <a href="/fruit" className='px-6 text-2xl block mb-4'>Fruit</a>
          <a href="/music" className='px-6 text-2xl block mb-4'>Music</a>
        </div>
    </nav>
   </div>
  )
}

export default Navbar
