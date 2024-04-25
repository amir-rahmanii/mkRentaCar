import React from 'react'
import Button from '../Button/Button'
import { SlArrowDown } from "react-icons/sl";
import SocialMedia from '../SocialMedia/SocialMedia';

export default function Menu() {
  return (
    <div className='bg-neutral-700 font-light'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/* Menu  */}
        <ul className='flex uppercase'>
              <li className='pb-0.5'>
                <Button link='#' classes='text-[15px]/[22.5px] tracking-[0.375px] py-2 px-[15px]'>
                  <span>All Cars</span>
                </Button>
              </li>
              <li className='pb-0.5 relative'>
                <Button link='#' classes='text-[15px]/[22.5px] gap-2.5 tracking-[0.375px] py-2 px-[15px] border-b border-white '>
                  <span>our Cars</span>
                  <SlArrowDown className='w-2.5 h-4' />
                </Button>
                <ul className='absolute'>
                   <li className='w-[215px] h-[107px]'>
                       <div className=''>

                       </div>
                   </li>
                </ul>
              </li>
              <li className='pb-0.5'>
                <Button link='#' classes='text-[15px]/[22.5px] gap-2.5 tracking-[0.375px] py-2 px-[15px]'>
                  <span>car Brands</span>
                  <SlArrowDown className='w-2.5 h-4' />
                </Button>
              </li>
              <li className='pb-0.5'>
                <Button link='#' classes='text-[15px]/[22.5px] tracking-[0.375px] py-2 px-[15px]'>
                  <span>Daily offers</span>
                </Button>
              </li>
              <li className='pb-0.5'>
                <Button link='#' classes='text-[15px]/[22.5px] tracking-[0.375px] py-2 px-[15px]'>
                  <span>about us</span>
                </Button>
              </li>
              <li className='pb-0.5'>
                <Button link='#' classes='text-[15px]/[22.5px] tracking-[0.375px] py-2 px-[15px]'>
                  <span>activities</span>
                </Button>
              </li>
              <li className='pb-0.5'>
                <Button link='#' classes='text-[15px]/[22.5px] tracking-[0.375px] py-2 px-[15px]'>
                  <span>blog</span>
                </Button>
              </li>
              <li className='pb-0.5'>
                <Button link='#' classes='text-[15px]/[22.5px] tracking-[0.375px] py-2 px-[15px]'>
                  <span>contact us</span>
                </Button>
              </li>
        </ul>

        {/* Social Media */}

        <SocialMedia />

        </div>
      </div>
    </div>

  )
}
