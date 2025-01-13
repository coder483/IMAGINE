import React from 'react'
import {motion} from "framer-motion"
import { testimonialsData , assets} from '../assets/assets'
const Testimonial = () => {
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-20 py-12'>
        <h1 className=' mb-2 text-3xl sm:text-4xl font-semibold'>
           Customer tesimonials
        </h1>
        <p className='text-gray-500 mb-12'>welcome to the </p>

        <div className='flex flex-wrap gap-6'>
       { testimonialsData.map((testimonial,index)=>(
            <div className='bg-white/20 p-12 rounded-lg shadow-md order w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all' key={index}>
                   <div className='flex flex-col items-center'>
                    <img src={testimonial.image} alt="" className='rounded-full w-14'/>
                    <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>
                    <p className='text-gray-500 mb-4'>{testimonial.role}</p>
                    <div className='flex mb-4'>
                       {Array(testimonial.stars).fill().map((item,index)=>(
                        <img src={assets.rating_star} alt="" key={index} />
                       ))}
                    </div>
                    <p className='text-gray-600  text-center text-sm'>{testimonial.text}</p>
                   </div>
            </div>
        ))}
        </div>
       
    </motion.div>
  )
}

export default Testimonial
