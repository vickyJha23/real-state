import React from 'react'
import { Link } from 'react-router-dom'
import imageStore from '../assets/static'
import { FaArrowRightLong } from "react-icons/fa6";


const Portfolio = () => {
  return (
    <div className='mt-20 px-4 min-h-screen'>
         <div className='flex flex-col items-center justify-center gap-2'>
             <h3 className='font-bold text-xl font-montserrat tracking-wider'>
                 Our <span className='text-blue-500'>
                        Portfolio  
                    </span>
             </h3>   
             <h1 className='text-2xl font-bold font-montserrat tracking-wider'>
                 The Project Done
             </h1>
            <p className='text-gray-500 text-sm text-center mt-2'>
                    We have completed many projects, and we are proud of each of them. Here you can see some of our works.
            </p>
         </div>   
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 md:mt-10'>
             <div className='relative'>
                 <img src={imageStore.img4} alt="" className='aspect-[4/5] object-cover' />   
                 <Link to="/" className='uppercase text-sm tracking-widest flex items-center gap-2 absolute bottom-2 left-2 text-white' >
                      More Details
                    <FaArrowRightLong />
                 </Link>
             </div>
             <div className='relative'>
                 <img src={imageStore.img5} alt="" className='aspect-[4/5] object-cover' />   
                 <Link to="/" className='uppercase text-sm tracking-widest flex items-center gap-2 absolute bottom-2 left-2 text-white' >
                      More Details
                    <FaArrowRightLong />
                 </Link>
             </div>
             <div className='relative'>
                 <img src={imageStore.img6} alt="" className='aspect-[4/5] object-cover' />   
                 <Link to="/" className='uppercase text-sm tracking-widest flex items-center gap-2 absolute bottom-2 left-2 text-white' >
                      More Details
                    <FaArrowRightLong />
                 </Link>
             </div>
             <div className='relative'>
                 <img src={imageStore.img7} alt="" className='aspect-[4/5] object-cover' />   
                 <Link to="/" className='uppercase text-sm tracking-widest flex items-center gap-2 absolute bottom-2 left-2 text-white' >
                      More Details
                    <FaArrowRightLong />
                 </Link>
             </div>
             <div className='relative'>
                 <img src={imageStore.img8} alt="" className='aspect-[4/5] object-cover' />   
                 <Link to="/" className='uppercase text-sm tracking-widest flex items-center gap-2 absolute bottom-2 left-2 text-white' >
                      More Details
                    <FaArrowRightLong />
                 </Link>
             </div>
         </div>
    </div>
  )
}

export default Portfolio
