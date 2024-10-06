import Image from 'next/image'

import React from 'react'
import xxx from '../public/xxx.jpg';

export const Avatar = () => {
  return (
    <div className='hidden xl:flex xl:max-w-none'>
      <Image
      src={xxx}
      width={737}
      height={678}
      alt=''
      className='translate-z-0 w-full h-full'
      />
    </div>
  )
}
