import Image from 'next/image';
import Link from 'next/link';
import { Socials } from './Socials';
import zzz from '../public/zzz.jpg'


import {RiYoutubeLine, RiInstagramLine,RiFacebookLine, RiOribbbleLine, RiBehanceLine, RiPinterestLine} from 'react-icons/ri';

import React from 'react'

export const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8'>
            <Link href={'/'}>
              <Image
              src={''}
              width={0}
              height={0}
              alt=''
              priority= {true}  
              />          
              </Link>

 


              <div className='flex items-center gap-x-5 text-lg'>
      <Link href={"/"} className='hover:text-accent transition-all duration-300'><RiYoutubeLine/></Link>
      <Link href={"/"} className='hover:text-accent transition-all duration-300'><RiInstagramLine/></Link>
      <Link href={"/"} className='hover:text-accent transition-all duration-300'><RiFacebookLine/></Link>
      <Link href={"/"} className='hover:text-accent transition-all duration-300'><RiBehanceLine/></Link>
      <Link href={"/"} className='hover:text-accent transition-all duration-300'><RiPinterestLine/></Link>


    </div>      
              
          </div>
        </div>
    </header>
  )
}


