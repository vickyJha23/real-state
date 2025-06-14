import React from 'react'
import { FaTimes,  FaEnvelope, FaPhoneAlt} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { LuClock9 } from "react-icons/lu";
import { PiCalendarCheckDuotone } from "react-icons/pi";

const RightSidebar = () => {
  return (
    <section className='fixed top-0 left-0 w-screen overflow-hidden z-20 h-screen bg-[rgba(0,0,0,0.8)]'>
         <div className='w-[550px] h-full bg-white absolute right-0 top-0 px-8 py-8'>
             <div className='w-full h-full'>
                  <button className='text-xl text-gray-500'>
                     <FaTimes />
                  </button>  
                  <div className='w-full pt-10 flex justify-center flex-col items-center'>
                        <h1 className='tracking-wider text-center text-4xl font-semibold font-montserrat'>
                            <span className='text-blue-500'>H</span>
                            <span>OEMZ</span>
                        </h1>
                        <p className='text-center mt-5 text-gray-400'>
                          We offers premium 1/2/3 BHK homes in palghar, blending modern design, top amenities, and great connectivity—ideal for living or investment.
                        </p>
                        <div className='w-full h-full mt-5'>
                            <h3 className='text-center text-2xl font-bold tracking-wider'>
                                Our location
                            </h3>
                            <div className='mt-5 flex flex-col gap-3'>
                                 <p className='flex text-left
                                  gap-3 tracking-wide text-gray-400 text-sm justify-center 
                                 '>
                                     <span>
                                         <IoLocation className='text-blue-500' size={24} />
                                     </span>
                                     <span className='text-center'>
                                          Samriddhi Realty office,Behind 
                                         ashri padmanath Mandir, <br />  Near tembode post office, <br />Tembhode palghar (west) 401404
                                     </span>
                                </p>
                                 <p className='flex text-left
                                  gap-3 tracking-wide text-gray-400 text-sm justify-center'>
                                     <span>
                                         <FaEnvelope className='text-blue-500' size={24} />
                                     </span>
                                     <span>
                                          Info.samriddhirealty@gmail.com
                                     </span>
                                </p>
                                 <p className='flex text-left
                                  gap-3 tracking-wide text-gray-400 text-sm justify-center items-center
                                 '>
                                     <span>
                                         <FaPhoneAlt className='text-blue-500' size={24} />
                                     </span>
                                     <span className='text-center'>
                                         +91 9175292603, +91 9175292633, <span className='text-center'>
                                          +91 9970586969
                                         </span>
                                     </span>
                                </p>
                                 <p className='flex text-left
                                  gap-3 tracking-wide text-gray-400 text-sm justify-center items-center
                                 '>
                                     <span>
                                         <LuClock9 className='text-blue-500' size={24} />
                                     </span>
                                     <span className='text-center'>
                                         Everyday 09:00 AM - 17:00 PM
                                     </span>
                                </p>
                            </div>
                        </div>
                  </div>

                 <div className='mt-20 h-[50px] flex
                 flex-col justify-center items-center gap-2'>
                    <span className='bg-blue-500 inline-block px-3 py-3'>
                      <PiCalendarCheckDuotone color='white' size={30} />
                    </span>
                    <p className='text-lg font-bold tracking-wider'>
                       Get Appointment
                    </p> 
                 </div> 
             </div>
         </div>
    </section>
  )
}

export default RightSidebar