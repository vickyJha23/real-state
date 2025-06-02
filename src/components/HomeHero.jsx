import React, { useState, useCallback } from 'react'
import { FaPlay } from "react-icons/fa";
import { AnimatePresence } from 'motion/react';

import imageStore from '../assets/static';
import VideoModal from './VideoModal';




const HomeHero = () => {
   const [isVideeModelOpen, setIsVideoModelOpen] = useState(false);
   
   const handleVideoModal = useCallback( () => {
      setIsVideoModelOpen(!isVideeModelOpen);
   }, [isVideeModelOpen]);

  return (
    <div className='flex flex-col lg:flex-row justify-center mt-20'>
        {/* title */}
      <div className='px-4 flex flex-col justify-center gap-2'>
        <h3 className='text-lg font-montserrat font-semibold'>
          Welcome to <span className='text-blue-500'>Homez</span>
        </h3>
        <h1 className='text-4xl md:text-5xl font-bold font-montserrat tracking-wider mt-2'>
          The Future of <br className='md:hidden' /> House  <br className='hidden md:inline-block lg:hidden' /> Design <br /> & <br className='md:hidden lg:hidden' /> Building
        </h1>
        <p className='text-gray-500 mt-3'>
          Discover innovative designs, sustainable materials, and cutting-edge technology to create your dream home.
        </p>
        <div className='flex items-center mt-3 gap-4'>
          <button className='uppercase w-48 bg-blue-500 tracking-wider rounded-[5px] px-4 py-3 text-white'>
            contact us
          </button>
          <button onClick={handleVideoModal} className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center'>
            <FaPlay className=  'text-lg text-white' />
          </button>
        </div>
      </div>

      <div className='px-4 w-full max-w-[85%] md:!max-w-full mt-10 flex justify-start gap-4'>
         <img src={imageStore.img1} alt="" />
      </div>
     <AnimatePresence initial={false} >
        {isVideeModelOpen && <VideoModal onClick={handleVideoModal} />}
     </AnimatePresence>
    </div>
  )
}

export default HomeHero
