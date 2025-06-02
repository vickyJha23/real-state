import React from 'react'
import imageStore from '../assets/static'


const CompanyExperience = () => {
  return (
    <div className='mt-20 px-4'>
        <div className='flex flex-col'>
            <h1 className='text-4xl font-bold text-left text-black'>
                 Over 25 Years of Experience  in the <br /> House 
                 <br />Development
            </h1> 
            <div className='flex flex-col gap-4'>
                <p className='text-gray-500 mt-4'>
                    With over 25 years of experience in the house development industry, we have established ourselves as a trusted leader in creating innovative and sustainable living spaces. Our commitment to quality, design excellence, and customer satisfaction has made us a preferred choice for homeowners and developers alike.
                </p>
            </div>
            <div className='flex flex-col lg:flex-row gap-8 mt-8'>
            <div className='flex-[0_0_50%]'>
                  <img src={imageStore.img2} className='aspect-1/2 object-cover mt-3 md:aspect-auto lg:aspect-[3/5] xl:aspect-[7/8]' />
            </div>
               <div className='flex-[0_0_50%]'>
                <div className='mt-15'>
                 <h3 className='font-bold capitalize text-lg font-montserrat'>
                     All about <span className='text-blue-500'>Homez</span>
                 </h3>
                 <h1 className='text-4xl font-bold text-left text-black mt-4 font-montserrat'>
                     Planning & <br className='md:hidden' /> Designing <br className='hidden md:inline-block' /> Your <br className='md:hidden' /> Dream Home
                </h1>
                  <p className='text-gray-500 text-sm mt-4'>
                      At Homez, we believe that every home should be a reflection of its owner's unique style and needs. Our team of experienced architects and designers work closely with clients to create personalized designs that blend functionality with aesthetics. From initial concept to final construction, we ensure that every detail is meticulously planned and executed.
                  </p>
            </div>
            <div className='flex flex-col md:items-stretch md:flex-row gap-4 mt-8'>
            <div className='mt-5'>
               <h2 className='text-2xl font-bold text-left text-black font-montserrat tracking-wide'>
                  The Vision
               </h2>
                <p className='text-gray-500 mt-4 text-sm'>
                    Our vision is to revolutionize the house development industry by integrating cutting-edge technology, sustainable practices, and innovative design solutions. We aim to create homes that not only meet the needs of today but also anticipate the challenges of tomorrow, ensuring a better quality of life for our clients and the environment.
                </p>
            </div>
            <div className='mt-5'>
               <h2 className='text-2xl font-bold text-left text-black font-montserrat tracking-wide'>
                  The Mission
               </h2>
                <p className='text-gray-500 mt-4 text-sm'>
                    Our mission is to deliver exceptional house development services that exceed client expectations. We are committed to using the highest quality materials, employing skilled professionals, and adhering to the highest standards of safety and sustainability. Through continuous innovation and a customer-centric approach, we strive to build homes that inspire and endure.
                </p>
            </div>
            </div>
             <button className='bg-blue-500 mt-5 uppercase tracking-wider text-white w-45 h-14 rounded-md'>
               About Us
           </button>
           </div>
            </div>            
        </div>      
    </div>
  )
}

export default CompanyExperience
