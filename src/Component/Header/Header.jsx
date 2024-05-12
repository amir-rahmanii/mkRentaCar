import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import InputLanguage from '../InputLanguage/InputLanguage';

export default function Header() {
    const [showBorderInputSearch, setshowBorderInputSearch] = useState(false)

    return (
        <>
            <header className='bg-black w-full pb-2.5 font-light hidden md:block'>
                <div className='container'>
                    {/* Select Language Input */}

                    <InputLanguage left={false} />

                    {/* main Component Header */}
                    <div className='flex justify-between items-center pt-2.5'>
                        {/* img logo */}
                        <Link to='/'>
                            <img className='w-[185px] xl:w-[265px] h-[80px] xl:h-[100px]' src="https://mkrentacar.com/public/assets/images/logo.png" alt="logo" />
                        </Link>
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
                            <div className={`flex items-center  gap-1.5 bg-neutral-700  text-white rounded-[15px] py-1.5 px-3 ${showBorderInputSearch ? 'border-4 border-[#031C3F]' : ''}`}>
                                <input type="text" placeholder='Search' className=' bg-neutral-700 w-32 outline-none' onBlur={() => setshowBorderInputSearch(false)} onFocus={() => setshowBorderInputSearch(true)} />
                                <Link to="#">
                                    <IoSearch className='w-[21px] h-[25px]' />
                                </Link>
                            </div>

                            {/* Book Now */}
                            <Button link='#' classes='bg-neutral-700 text-[13px]/[35px] px-[5px] xl:px-[11px] tracking-[1px]'>
                                <span>Book Now</span>
                            </Button>

                        </div>
                    </div>
                </div>
            </header>


            {/* header mobile */}

            <div className='bg-[#1D232D] text-white w-full font-medium block md:hidden pt-5'>
                <div className='container'>
                    <div className='flex items-start justify-between'>
                        {/* logo whatsapp */}
                        <Link to='#' className='flex items-center gap-[5px]'>
                            <img className='w-7 h-7' src="https://mkrentacar.com/public/assets/images/whatsapp-icon.png" alt="whatsappimg" />
                            <span className='text-[15px]/[22px]'>Chat With Us</span>
                        </Link>
                        <div>
                            {/* Book Now */}
                            <Button link='#' classes='bg-neutral-700 text-[10px]/[29px] w-[100px] px-[15px] tracking-[1px]'>
                                <span>BOOK NOW</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
