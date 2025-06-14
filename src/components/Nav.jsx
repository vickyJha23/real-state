import React, { useState, useCallback, useEffect, useRef} from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { RxDashboard } from "react-icons/rx";


const Nav = ({...restProp}) => {
      const [activeLink, setActiveLink] = useState('home');
      const linksRef = useRef(null);
      const activeLinkHandler = useCallback((link) => {
             setActiveLink(link);
      }, [])
      useEffect(() => {
           if(linksRef.current){
                const links = linksRef.current.querySelectorAll("a");
                links.forEach((link) => link.addEventListener('click', (e) => {
                     setActiveLink(e.target.textContent.toLowerCase());          
                })) 
           }
      }, [])


  return (
     <nav className='w-full max-w-[1170px] mx-auto flex items-center justify-between h-full px-3'>
          {/* logo */}
         <div className='logo w-full md:w-auto flex items-center  justify-between '>
              <h1 className='font-roboto text-2xl font-bold tracking-wider'>
                  <span className='text-blue-400'>H</span>omez  
              </h1>   
              <button {...restProp} className='md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300'>
                   <FaBarsStaggered className='text-2xl text-gray-600 hover:text-blue-400 transition-colors duration-300' /> 
              </button>
         </div>   
         <div ref={linksRef} className='flex font-medium gap-8 uppercase tracking-wider'>
             <Link className={`${activeLink === 'home' ? "text-blue-500": ""} cursor-pointer`}>
             Home
             </Link>   
             <Link className={`${activeLink === 'about' ? "text-blue-500": ""} cursor-pointer`}>About</Link>   
             <Link className={`${activeLink === 'contact us' ? "text-blue-500": ""} cursor-pointer`}>Contact us</Link> 
             <button className='text-2xl cursor-pointer'>
                 <RxDashboard />
             </button>  
         </div>
     </nav>
  )
}

export default Nav
