import React, { useState } from 'react'

const Submenu=({title})=>{
    const [isOpen,setIsOpen]=useState(false);
    return (
        <>
            <div className='flex md:hidden' onClick={()=>setIsOpen((prevState)=>!prevState)}>
                <p>{title}</p>
                {!isOpen && <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 self-center ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>}
                {isOpen && <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 self-center ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>}
            </div>
                {isOpen && <ul>
                    <li>
                        1
                    </li>
                    <li>
                        1
                    </li>
                    <li>
                        1
                    </li>
                    <li>
                        1
                    </li>
                    <li>
                        1
                    </li>
                </ul>}
        </>
    )
}

export default Submenu