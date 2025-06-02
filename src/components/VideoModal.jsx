import React from 'react'
import { motion } from 'motion/react'
import { FaTimes } from "react-icons/fa";

const VideoModal = ({...restProp}) => {
    return (
        <motion.div initial={{
            opacity: 0, scale: 0 
        }}   animate={{ opacity: 1, scale: 1,
            transition: { duration: 0.3, ease: "easeInOut"}
         }}
                        exit={{ opacity: 0, scale: 0 }} className='w-full min-h-screen flex items-center bg-[rgba(0,0,0,0.5)] justify-center fixed top-0 left-0'>
            <div className='flex flex-col items-center justify-center relative shadow bg-white rounded-md p-1'>
                <button {...restProp} className='text-white absolute -top-8 right-5 w-[5px] h-[5px] inline-block z-1'>
                    <FaTimes className='text-white text-xl' />
               </button> 
            <video controls className='rounded-md max-w-[350px] h-[280px]'>
                <source src="https://youtu.be/rCoPr8UwRMc" type="video/mp4" />
            </video>
         </div>
        </motion.div>
    )
}

export default VideoModal
