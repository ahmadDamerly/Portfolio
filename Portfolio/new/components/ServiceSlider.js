import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { RxCrop, RxDesktop, RxPencil2 , RxReader , RxRocket ,RxArrowTopRight} from 'react-icons/rx';

import {FreeMode, Pagination} from 'swiper/modules';


const serviceData = [
  {
      icon:<RxCrop/>,
      title:'Branding',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dolor odit similique cum dolore'
  },
  {
      icon:<RxPencil2/>,
      title:'Design',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dolor odit similique cum dolore '
  },

  {
      icon:<RxDesktop/>,
      title:'Development',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dolor odit similique cum dolore '
  },
  {
      icon:<RxReader/>,
      title:'Copywriting',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dolor odit similique cum dolore '
  },
  {
      icon:<RxRocket/>,
      title: 'SEO',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dolor odit similique cum dolore '
  }
]


import React from 'react'

export const ServiceSlider = () => {
  return (
    <Swiper 
    breakpoints={{
      320: {
        slidesPreview: 1,
        spaceBetween: 15,
      },

      640: {
        slidesPreview: 2,
        spaceBetween: 15,
      },
    }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
     modules={[FreeMode, Pagination]}
     className= 'h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item,index) => {
          return (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.95)] h-max rounded-lg  px-6 py-8 
              flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all 
              duration-300 '>
                <div className='text-4xl text-red-600 mb-4 '>{item.icon}</div>
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>{item.description}</p>
                </div>
                <div className='text-3xl'>
                  <RxArrowTopRight className= 'group-hover:rotate-45 group-hover:text-red-600 transition-all duration-300'/>
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
}
