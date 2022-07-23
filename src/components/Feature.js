import React from 'react'

const Feature=({imgSrc,title,content,bg})=>{
  let bg1=bg;
  return (
    <div className={`flex h-[110px] border-2 border-gray-100 rounded-2xl overflow-hidden mb-2 p-0 md:first:ml-2 md:last:mr-2 md:bg-feature-img2 md:bg-no-repeat md:bg-cover md:bg-center md:h-64 md:w-[700px]`}>
        <div className='md:hidden shrink-0 '>
            <img className='w-full h-full overflow-hidden' src={imgSrc}/>
        </div>
        <div className='w-[60%] flex flex-col place-content-center px-4 shrink md:w-[70%] md:place-content-start md:py-8 md:px-6'> 
            <h3 className='font-semibold md:text-3xl'>{title}</h3>
            <span className='md:py-4 md:text-lg'>{content}
            <svg xmlns="http://www.w3.org/2000/svg" className="hidden md:inline-block h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            </span>
        </div>
        <div className='md:hidden w-[10%] flex items-center md:items-start md:py-[83px]'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
        </div>
    </div>
  )
}

export default Feature