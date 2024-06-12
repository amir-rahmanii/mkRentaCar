import React, { useState, useContext } from 'react'
import { BsTelephone } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import InputLanguage from '../InputLanguage/InputLanguage';
import AuthContext from '../../Context/AuthContext';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";

export default function Header() {
    const [showBorderInputSearch, setshowBorderInputSearch] = useState(false)
    const [showWidgetAuth, setShowWidgetAuth] = useState(false)
    const authContext = useContext(AuthContext)

    const logOutHandler = () => {
        authContext.logout();
        window.location.href = "/";
    }


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
                                <Link to={`tel:+999999999999`}>+999999999999</Link>
                            </div>
                            {/* Whatsapp */}
                            <div className='bg-neutral-700 mx-1  xl:mx-3 text-white flex gap-1.5 items-center rounded-[15px] py-[15px] px-2 xl:px-5'>
                                <IoLogoWhatsapp className='text-[#25D366] w-[21px] h-[25px]' />
                                <span>999999999999</span>
                            </div>

                            {/* input search */}
                            <div className={`flex items-center  gap-1.5 bg-neutral-700  text-white rounded-[15px] py-1.5 px-3 ${showBorderInputSearch ? 'border-4 border-[#031C3F]' : ''}`}>
                                <input type="text" placeholder='Search' className=' bg-neutral-700 w-32 outline-none' onBlur={() => setshowBorderInputSearch(false)} onFocus={() => setshowBorderInputSearch(true)} />
                                <Link to="#">
                                    <IoSearch className='w-[21px] h-[25px]' />
                                </Link>
                            </div>

                            {/* Book Now */}
                            {authContext.isLoggedIn ? (
                                <div className='relative' onClick={() => setShowWidgetAuth(prevstate => !prevstate)}>
                                    <Button link='#' classes='bg-neutral-700 text-[13px]/[35px] px-[5px] xl:px-[11px] tracking-[1px] gap-2'>
                                        <span>{authContext.userInfo[0].username}</span>
                                        <IoMdArrowDropdown />
                                    </Button>
                                    {showWidgetAuth && (
                                            <button onClick={logOutHandler} className='bg-red-700 absolute top-[40px] text-white text-[11px]/[35px] px-[5px] xl:px-[11px] tracking-[1px] flex items-center gap-0.5'>
                                                LOG OUT
                                                <div className='text-[13px]'>
                                                    <HiOutlineLogout />
                                                </div>
                                            </button>
                                    )}
                                </div>
                            ) : (
                                <Button link='/login' classes='bg-neutral-700 text-[13px]/[35px] px-[5px] xl:px-[11px] tracking-[1px]'>
                                    <span>Sign in</span>
                                </Button>
                            )}


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
                            {authContext.isLoggedIn ? (

                                <div className=' flex justify-center gap-2 items-center' onClick={() => setShowWidgetAuth(prevstate => !prevstate)}>
                                    {showWidgetAuth && (
                                        <button onClick={logOutHandler}  className='bg-red-700 text-white text-[11px]/[35px] px-[5px] xl:px-[11px] tracking-[1px] flex items-center gap-0.5'>
                                            LOG OUT
                                            <div className='text-[13px]'>
                                                <HiOutlineLogout />
                                            </div>
                                        </button>
                                    )}
                                    <Button link='#' classes='bg-neutral-700 text-[13px]/[35px] px-[5px] xl:px-[11px] tracking-[1px] gap-2'>
                                        <IoMdArrowDropleft />
                                        <span>{authContext.userInfo[0].username}</span>
                                    </Button>

                                </div>
                            ) : (
                                <Button link='/login' classes='bg-neutral-700 text-[10px]/[29px] w-[100px] px-[15px] tracking-[1px]'>
                                    <span>Sign in</span>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
