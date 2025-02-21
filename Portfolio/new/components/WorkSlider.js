
import Image from 'next/image';

export const workSlider = {
    slides: [
        {
            images: [
                {
                    title: 'title',
                    path: '/xxx.jpg'
                },
                {
                    title: 'title',
                    path: '/thumb1.jpg'
                },
                {
                    title: 'title',
                    path: '/thumb1.jpg'
                },
                {
                    title: 'title',
                    path: '/thumb1.jpg'
                },
            ],
        },
        {
            images: [
                {
                    title: 'title',
                    path: '/thumb1.jpg'
                },
                {
                    title: 'title',
                    path: '/thumb1.jpg'
                },
                {
                    title: 'title',
                    path: '/thumb1.jpg'
                },
                {
                    title: 'title',
                    path: '/thumb1.jpg'
                },
            ],
        },

    ]
}



import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


import { Pagination} from 'swiper/modules';



import { BsArrowRight} from 'react-icons/bs';

import React from 'react'

export const WorkSlider = () => {
  return (
    <Swiper 
    spaceBetween={10}
    pagination={{
      clickable: true
    }}
     modules={[ Pagination]}
     className= 'h-[280px] sm:h-[480px]'
    >
      {
        workSlider.slides.map((slide,index) => {
          return (
            <SwiperSlide key={index}>
                <div className='pl-20 pr-20 grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer '>
                    {slide.images.map((image, index) => {
                        return (
                        <div className='relative rounded-lg overflow-hidden flex items-center 
                          justify-center group' key={index}>
                            <div className='flex items-center justify-center relative overflow-hidden group'>
                                <img src="/avatar.jpg"    alt=''  className='sm:h-[150px]  sm:w-[250px] md:h-[210px] md:w-[330px]'/>
                                <div className='absolute inset-0 bg-gradient-to-l 
                                from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                                group-hover:opacity-80 transition-all duration-700'>  </div>
                                <div className='absolute bottom-0 translate-y-full 
                                group-hover:-translate-y-10 group-hover:xl:-translate-y-20 
                                transition-all duration-300'>
                                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                                            <div className='delay-100'>Live</div>
                                            <div className='translate-y-[500%] group-hover:translate-y-0
                                            transition-all duration-300 delay-150'>Project</div>
                                            <div className='text-xl translate-y-[500%] group-hover:translate-y-0 
                                            transition-all duration-300 delay-200'><BsArrowRight/></div>
                                    </div>
                                 </div>
                            </div>

                            </div >
                        );
                    
                    })}
                </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
}
