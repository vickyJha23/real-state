import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";



const Nav = ({...restProp}) => {
  return (
     <nav className='container mx-auto flex items-center justify-between h-full px-3'>
          {/* logo */}
         <div className='logo w-full md:w-auto flex items-center  justify-between '>
              <h1 className='font-roboto text-2xl font-bold tracking-wider'>
                  <span className='text-blue-400'>H</span>omez  
              </h1>   
              <button {...restProp} className='md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300'>
                   <FaBarsStaggered className='text-2xl text-gray-600 hover:text-blue-400 transition-colors duration-300' /> 
              </button>
         </div>   
     </nav>
  )
}

export default Nav
