import React from 'react'
import { SlArrowDown } from "react-icons/sl";

export default function Header() {
    return (
        <header className='bg-black w-full h-[6000px] font-light'>
            <div className='container'>
                {/* Select Language Input */}
                <div className='relative text-white flex justify-end  cursor-pointer'>
                    <div className='w-max flex items-center gap-2.5'>
                        <button className='text-sm/[21px]'>English</button>
                        <SlArrowDown className='w-2.5 h-2.5' />
                    </div>
                    {/* subGroup Language */}
                    <div className='absolute z-50 text-left top-[37px] flex flex-col text-xs/[30px] p-2 w-[150px] child-hover:text-orangeCus child:transition-all child:duration-300'>
                        <a href='#'>English</a>
                        <a href='#'> العربية </a>
                        <a href='#'> Русский </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
