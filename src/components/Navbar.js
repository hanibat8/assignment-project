import React, { useState } from 'react'
import NavList from './NavList';

const Navbar=()=>{
  const [isOpen,setIsOpen]=useState(false);
  return (
    <div className=''>
        {!isOpen && <button className='md:hidden' onClick={()=>{setIsOpen(true)}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#ffff" viewBox="0 0 24 24" stroke="#ffff" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>}
        {isOpen && <nav className='absolute w-72 h-screen z-10 bg-white '>
            <button className='md:hidden text-left' onClick={()=>{setIsOpen(false)}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
           <NavList/>
        </nav>}
    </div>
  )
}

export default Navbar