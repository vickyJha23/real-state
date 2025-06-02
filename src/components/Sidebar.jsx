import React from 'react'
import { motion } from "motion/react"
import { FaRegTimesCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Sidebar = ({isSideVisible, ...restProp}) => {
  return (
    <motion.aside initial={{
        x: "-100%",
        opacity: 0,

    }} animate={{
        x: isSideVisible ? 0 : "-100%",
        opacity: isSideVisible ? 1 : 0,
         transition: {
            duration: 0.3,
            ease: [0.4, 0, 0.2, 1]
        }
    }} className='fixed top-0 left-0 h-screen shadow bg-white w-full'>
         <div className='w-full h-full relative px-8 py-5'>
              <button {...restProp} className='absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300'>
                <FaRegTimesCircle className='text-2xl text-gray-600 hover:text-blue-400 transition-colors duration-300' />
              </button>
              <div className='mt-10'>
                   <h1 className='font-montserrat text-5xl font-bold tracking-wider'>
                     <span className='text-blue-400'>H</span>omez  
                  </h1>   
                  <ul className='mt-5 font-montserrat uppercase'>
                      <li className='text-sm font-semibold'>
                            <Link to="/" className='block py-2 px-4 hover:text-gray-100 rounded transition-colors duration-300 text-black'>Home</Link>
                      </li>
                      <li className='text-sm font-semibold'>
                            <Link to="/about" className='block py-2 px-4 hover:text-gray-100 rounded transition-colors duration-300 text-black'>About us</Link>
                      </li>
                      <li className='text-sm font-semibold'>
                            <Link to="/contact" className='block py-2 px-4 hover:text-gray-100 rounded transition-colors duration-300 text-black'>Contact us</Link>
                      </li>
                  </ul>
              </div>  
         </div>   
    </motion.aside>
  )
}

export default Sidebar
