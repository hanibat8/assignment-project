import React from 'react'
import Navbar from './Navbar';
import Banner from './Banner';
import NavList from './NavList';

const Header=()=>{
  return (
    <>
      <div className='hidden md:flex md:max-w-7xl md:m-auto md:justify-between md:align-middle md:items-center md:mt-6'>
        <img className='h-18 w-28 ' src='/Bayut Logo.svg'/>
        <NavList/>
      </div>      
      <header className='relative bg-bg-img h-[28rem] sm:bg-center bg-no-repeat bg-cover md:h-screen md:m-4 md:rounded-lg md:overflow-hidden md:flex md:flex-col md:place-content-center'>
        <div className='flex items-start py-2 md:hidden'>
            <Navbar/>
            <img className='h-8 w-24 m-auto' src='/Bayut-Logo-white.svg'/>
        </div>
        <Banner/>
    </header>
    </>
  )
}

export default Header