import React from 'react'
import 'tw-elements';

const MenuDropDownTab=({title})=>{
  return (
    <li className="hidden md:block nav-item dropdown static">
    <span className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown"
    aria-expanded="false">{title}
      <svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
      </svg>
    </span>
    <div className="dropdown-menu mt-0 hidden shadow-lg bg-white absolute left-0 top-full w-fit" aria-labelledby="dropdownMenuButtonX">
      <div className="px-6 lg:px-8 py-5">
          <div className="bg-white text-gray-600">
            <span aria-current="true" className="block px-2 py-2 border-b border-gray-200 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cras justo odio</span>
            <span  aria-current="true" className="block px-2 py-2 border-b border-gray-200 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Saepe</span>
            <span aria-current="true" className="block px-2 py-2 border-b border-gray-200  hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Vel alias</span>
            <span aria-current="true" className="block px-2 py-2 border-b border-gray-200 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Sunt doloribus</span>
            <spn  aria-current="true" className="block px-2 py-2 hover:bg-gray-50 hover:text-gray-700 transition duration-150 ease-in-out">Cum dolores</spn>
          </div>
        </div>
      </div>
  </li>
  )
}

export default MenuDropDownTab