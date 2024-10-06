import  TestimonialSlider  from '@/components/TestimonialSlider'

import React from 'react'
import {motion} from 'framer-motion';
import { fadeIn } from '@/variants';

const testimonials = () => {
  return (
    <div className='h-full bg-[#3b2d71] py-32 text-center'>
      <div className='container mx-auto h-full flex flex-col justify-center '>
        <motion.h2
        variants={fadeIn('up',0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
         className='h2 mb-8 xl: mb-0'> what clients  <span className='text-red-600'>says.</span>
         </motion.h2>
        <motion.div
          variants={fadeIn('up',0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
        >
          <TestimonialSlider/>
        </motion.div>
      </div>
    </div>
  )
}
export default testimonials;
