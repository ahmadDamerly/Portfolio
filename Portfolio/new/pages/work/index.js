import React from 'react'



import { WorkSlider } from '@/components/WorkSlider';
// import { Bulb } from '@/components/Bulb';
// import { Circles } from '@/components/Circles';
import {motion} from 'framer-motion';
import { fadeIn } from '@/variants';

const Work = () => {
  return (
    <div className='h-full bg-[#3b2d71] py-36 flex items-center'>
        {/* <Circles/> */}
        <div className='container mx-auto '>     
            <div className='flex flex-col xl:flex-row gap-x-8'>
                <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
                    <motion.h2
                    variants={fadeIn('up',0.2)}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='h2 xl:mt-12 sm: mt-48'>
                        My Work <span className='text-red-600'>.</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeIn('up',0.4)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                     className='mb-4 max-w-[400px] mx-auto lg:mx-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dolor odit similique cum dolore nulla voluptate recusandae sapiente perspiciatis ducimus doloribus omnis eius modi, nam nostrum quasi! Aspernatur, laborum vitae!
                     </motion.p>
                </div>
                <motion.div 
                     variants={fadeIn('down',0.6)}
                     initial='hidden'
                     animate='show'
                     exit='hidden'
                className='w-full xl:max-w-[65%]'>
                <WorkSlider/>
                </motion.div>
            </div>
            </div>
            {/* <Bulb/> */}

    </div>
  );
};
export default Work;
