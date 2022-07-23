import React from 'react'
import Submenu from './Submenu';
import MenuDropDownTab from './MenuDropDownTab';

const NavList=()=>{
  return (
         <ul className='flex flex-col h-full justify-around md:flex-row md:items-center'>
                <li className='p-2 px-4'><span href='/'><a>Blog</a></span></li>
                <li className='p-2 px-4'><span href='/'><a>Find an Agency</a></span></li>
                <li className='p-2 px-4'><span href='/'><a>Floor Plans</a></span></li>
                <li className=''> 
                    <Submenu title=' Guides'/>
                    <MenuDropDownTab title='Guides'/>
                </li>
                <li className='p-2 px-4'> 
                    <Submenu title='Market Intelligence'/>
                    <MenuDropDownTab title='Market Intelligence'/>
                </li>
                <li className='p-2 px-4'><span href='/'><a>Agent Portal</a></span></li>
                <li className='p-2 px-4 md:hidden'><span href='/'><a>Careers</a></span></li>
                <li className='p-2 px-4'><span href='/'><a>Company</a></span></li>
                <li className='p-2 px-4 mb-4 md:hidden'> 
                    <Submenu title='Change Country'/>
                </li>
            </ul>
  )
}

export default NavList