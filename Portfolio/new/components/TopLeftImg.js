import Image from 'next/image';
import yyy from '../public/yyy.jpg'


import React from 'react'

export const TopLeftImg = () => {
  return (
    <div className='absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-50'>
      {/* <Image src={yyy} width={80} height={900} alt=''/> */}
    </div>
  )
}
