import React, { useState, useEffect } from 'react'
import 'tw-elements';
import { FormDropdownBtn } from './FormDropdownBtn';

const Banner=()=>{
    const [title,setTitle]=useState('Search properties for sale and to rent in the UAE');
    const [category,setCategorySelected]=useState('property');
    const [isScreenSizeLarge,setIsScreenSizeLarge]=useState();

    useEffect(()=>{
        if(window.innerWidth>=768)
            setIsScreenSizeLarge(true);
        else 
            setIsScreenSizeLarge(false);

        const debouncedHandleResize = ()=>{
            if(window.innerWidth>=768)
                setIsScreenSizeLarge(true);
            else 
                setIsScreenSizeLarge(false);
        }
      
        window.addEventListener('resize', debouncedHandleResize)
      
        return _ => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    })
    
    const onClickHandler=(category)=>{
        if(isScreenSizeLarge){
          setCategorySelected(category)
          category==='property'? setTitle('Search properties for sale and to rent in the UAE') : setTitle('The UAE'/'s Only Instant Property Valuation Solution!');
        }
    }

    console.log(title);

  return (
    <div className='bg-black absolute bottom-0 w-full h-28 px-4 flex flex-col place-content-center md:bg-transparent md:relative md:content-center'>
        <h2 className='text-white text-center font-semibold md:text-4xl md:drop-shadow-lg md:shadow-black'>{title}</h2>
        <div className='flex place-content-center gap-4 mt-2 md:flex-col'>
                <div className='md:bg-slate-800 md:p-4 md:px-8 justify-center md:w-fit md:m-auto'>
                    <button onClick={()=>onClickHandler('property')} className={`bg-green-500 text-white  p-2 mr-2 rounded-md w-40 ${category==='property'? 'md:bg-white md:text-black':''} md:bg-slate-800 `}>Property Search</button>
                    <button onClick={()=>onClickHandler('truValue')} className={`bg-green-500 text-white p-2 rounded-md w-40 ${category==='truValue'? 'md:bg-white md:text-black':''} md:bg-slate-800 `}>TruValue</button>
                </div>
                {isScreenSizeLarge  && 
                    <form className='bg-slate-800 rounded-md p-4 w-[50%] md:m-auto'>
                      <div className='flex gap-2 w-full'>
                        <FormDropdownBtn title='Rent'/>
                        <input className='w-2/4 mx-2 px-2 rounded' placeholder='Enter Location'/>
                        <FormDropdownBtn title='Residential'/>
                      </div>  
                      <div className='flex gap-2 w-full mt-2'>
                        <FormDropdownBtn title='Beds & Baths'/>
                        <FormDropdownBtn title='Area'/>
                        <FormDropdownBtn title='Price'/>
                        <button className=' w-1/4 bg-green-500 rounded text-white'>Find</button>
                      </div>                   
                    </form>
                }
        </div>
    </div>
  )
}

export default Banner