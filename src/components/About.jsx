import React from 'react'
import imageStore from '../assets/static'
import { GrUserWorker } from "react-icons/gr";

const About = () => {
    return (
        <div className='mt-20 px-4'>
            <div className='flex flex-col lg:flex-row lg:gap-8'>
                <div>
                    <div className='flex flex-col   items-center justify-center gap-4'>
                        <img src={imageStore.img3} alt="" className='aspect-4/5 object-cover md:aspect-auto' />
                    </div>
                    <div className='mt-8 flex flex-col gap-4 md:flex-row'>
                        <div className='md:flex-[0_0_50%] flex flex-col gap-2 items-center justify-center md:flex-row'>
                            <img src="https://atlas-content-cdn.pixelsquid.com/stock-images/man-worker-construction-w7ad5w8-600.jpg" alt="" className='w-40 h-40 object-cover' />
                            <h2 className='capitalize text-xl font-bold text-left text-black tracking-wide'>
                                Professional Team
                            </h2>
                        </div>
                        <div className='md:flex-[0_0_50%] flex flex-col gap-2 items-center justify-center md:flex-row'>
                            <img src="https://img.freepik.com/free-photo/three-dimensional-house-model_23-2151003966.jpg" alt="" className='w-40 h-[40]object-cover
                            ' />
                            <h2 className='capitalize text-xl font-bold text-left text-black tracking-wide'>
                                Modern house 
                                <br className='hidden md:inline-block' /> design
                            </h2>
                        </div>
                    </div>
                </div>
                <div className='mt-8 lg:mt-0'>
                    <div className='lg:mt-15'>
                        <h3 className='font-bold text-base'>Why <span className='text-blue-500'>Choose Us</span></h3>
                        <h1 className='text-3xl font-bold text-black tracking-wide mt-4 font-montserrat'>
                            The Best Solution <br className='md:hidden' />
                            To  Realize <br className='hidden md:inline-block' /> Your <br className='md:hidden' /> Dream
                        </h1>
                        <p className='text-gray-500 mt-4 text-base'>
                            We are a team of professionals who are ready to help you realize your dream home. With years of experience in the industry, we guarantee the best quality and service.
                        </p>
                    </div>
                    <div className='mt-5 flex flex-col md:flex-row md:items-center gap-2'>
                        <h1 className='font-bold text-5xl text-blue-500 flex-[0_0_50%]'>120 +</h1>
                        <p className='text-gray-500 font-bold text-2xl flex-[0_0_50%] text-left'>
                            Home Project
                            <br className='md:hidden' /> Completed
                        </p>
                    </div>
                    <button className='bg-blue-500 mt-10 uppercase tracking-wider text-white w-45 h-14 rounded-md'>
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About
4 / 5