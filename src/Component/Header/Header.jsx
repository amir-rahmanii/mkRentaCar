import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoSearch } from "react-icons/io5";

export default function Header() {
    const [showSubGroup, setShowSubGroup] = useState(false)
    const [showBorderInputSearch, setshowBorderInputSearch] = useState(false)

    return (
        <header className='bg-black w-full pb-2.5 font-light'>
            <div className='container'>
                {/* Select Language Input */}
                <div onClick={() => setShowSubGroup(prevState => !prevState)} className='relative text-white bg-black flex justify-end  cursor-pointer'>
                    <div className='w-max flex items-center gap-2.5'>
                        <button className='text-sm/[21px]'>English</button>
                        <SlArrowDown className='w-2.5 h-2.5' />
                    </div>
                    {/* subGroup Language */}
                    <div className={`absolute bg-black z-50 text-left flex flex-col text-xs/[30px] p-2 w-[150px] child-hover:text-orangeCus transition-all duration-300 child:transition-all child:duration-300 ${showSubGroup ? 'top-[37px]' : 'top-[-200px]'}`}>
                        <a href='#'>English</a>
                        <a href='#'> العربية </a>
                        <a href='#'> Русский </a>
                    </div>
                </div>

                {/* main Component Header */}
                <div className='flex justify-between items-center pt-2.5'>
                    {/* img logo */}
                    <img className='w-[185px] xl:w-[265px] h-[80px] xl:h-[100px]' src="https://mkrentacar.com/public/assets/images/logo.png" alt="logo" />
                    <div className='flex items-center gap-2 xl:gap-5 text-[15px] font-medium'>
                        {/* phone */}
                        <div className='bg-neutral-700 mx-1 xl:mx-3 text-white flex gap-1.5 items-center rounded-[15px] py-[15px] px-2 xl:px-5'>
                            <BsTelephone className='w-[17px] h-[25px]' />
                            <span>+9715203141766</span>
                        </div>
                        {/* Whatsapp */}
                        <div className='bg-neutral-700 mx-1  xl:mx-3 text-white flex gap-1.5 items-center rounded-[15px] py-[15px] px-2 xl:px-5'>
                            <IoLogoWhatsapp className='text-[#25D366] w-[21px] h-[25px]' />
                            <span>9715583141766</span>
                        </div>

                        {/* input search */}
                        <div className={`flex items-center gap-1.5 bg-neutral-700  text-white rounded-[15px] py-1.5 px-3 ${showBorderInputSearch ? 'border-4 border-[#031C3F]' : '' }`}>
                            <input type="text" className=' bg-neutral-700 outline-none' onBlur={() => setshowBorderInputSearch(false)} onFocus={() => setshowBorderInputSearch(true)} />
                            <a href="#">
                            <IoSearch className='w-[21px] h-[25px]' />
                            </a>
                        </div>

                        {/* Book Now */}
                        <a href='#' className='buttons text-[13px]/[35px] px-[5px] xl:px-[11px] flex gap-1.5 items-center tracking-[1px]'>
                                <span>Book</span>
                                <span>Now</span>
                        </a>

                    </div>
                </div>
            </div>
        </header>
    )
}
