import React, { useState, useContext, useEffect, useCallback } from 'react'
import { BsTelephone } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import InputLanguage from '../InputLanguage/InputLanguage';
import AuthContext from '../../Context/AuthContext';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";
import SearchBar from '../Admins/SearchBar/SearchBar';
import Modal from '../Admins/Modal/Modal';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

export default function Header() {
    const [allCars, setAllCars] = useState([])
    const [showWidgetAuth, setShowWidgetAuth] = useState(false)
    const authContext = useContext(AuthContext)
    const [ShowLogOut, setShowLogOut] = useState(false)
    const navigate = useNavigate()

    //translate
    const { t } = useTranslation()

    const logOutHandler = (e) => {
        e.preventDefault()
        authContext.logout();
        window.location.href = "/";
    }

    const getAllCars = () => {
        fetch(`https://mkrentacar.liara.run/cars`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json()
            })
            .then(result => {
                setAllCars(result)
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));

    }

    useEffect(() => {
        getAllCars()
    }, [])

    const searchValueHandler = useCallback((e, value) => {
        e.preventDefault()
        let filterArray = [...allCars]
        if (value.trim()) {
            let carsFilterValue = filterArray.filter(data => data.title.toLowerCase().includes(value.toLowerCase()) || data.brand.toLowerCase().includes(value.toLowerCase()) || data.carType.toLowerCase().includes(value.toLowerCase()))
            authContext.searchFunc(carsFilterValue)
        } else {
            authContext.searchFunc([])
        }
        navigate("/cars-search")
    }
    )
    return (
        <>
            <header className={`bg-black w-full pb-2.5 font-light hidden md:block ${i18n.language === "ar" ? 'rtlArabic' : ''}`}>
                <div className='container'>
                    {/* Select Language Input */}

                    <InputLanguage left={false} />

                    {/* main Component Header */}
                    <div className='flex justify-between items-center pt-2.5'>
                        {/* img logo */}
                        <Link to='/'>
                            <img loading='lazy' className='w-[185px] xl:w-[265px] h-[80px] xl:h-[100px]' src="/images/logos/logofirst.png" alt="logo" />
                        </Link>
                        <div className='flex items-center gap-2 xl:gap-5 text-[15px] font-medium'>
                            {/* phone */}
                            <div className='rtlEnglish bg-neutral-700 mx-1 xl:mx-3 text-white flex gap-1.5 items-center rounded-[15px] py-[15px] px-2 xl:px-5'>
                                <BsTelephone className='w-[17px] h-[25px]' />
                                <Link to={`tel:+999999999999`}>+999999999999</Link>
                            </div>
                            {/* Whatsapp */}
                            <div className='rtlEnglish bg-neutral-700 mx-1  xl:mx-3 text-white flex gap-1.5 items-center rounded-[15px] py-[15px] px-2 xl:px-5'>
                                <IoLogoWhatsapp className='text-[#25D366] w-[21px] h-[25px]' />
                                <span>999999999999</span>
                            </div>

                            {/* input search */}
                            <SearchBar searchValueHandler={searchValueHandler} />

                            {/* Book Now */}
                            {authContext.isLoggedIn ? (
                                <div>
                                    <div className='relative flex flex-col items-center' onClick={() => setShowWidgetAuth(prevstate => !prevstate)}>
                                        <Button link='#' classes='bg-neutral-700 text-[13px]/[35px] px-[5px] xl:px-[11px] tracking-[1px] gap-2'>
                                            <span>{authContext.userInfo[0].username}</span>
                                            <IoMdArrowDropdown />
                                        </Button>
                                        {showWidgetAuth && (
                                            <div className='absolute top-[40px] bg-black flex flex-col gap-1'>
                                                <Link to={"/paneluser"} className={`bg-orangeCus2 w-full text-white ${i18n.language === "ar" ? 'text-[14px]/[35px]' : 'text-[11px]/[35px]'} px-[5px] xl:px-[11px] tracking-[1px] flex items-center justify-center gap-0.5 transition-all duration-300 hover:opacity-80`} >
                                                    {t("panel")}
                                                </Link>
                                                <button onClick={() => setShowLogOut(true)} className='bg-red-700 w-full  text-white text-[11px]/[35px] px-[5px] xl:px-[11px] tracking-[1px] flex items-center gap-0.5 transition-all duration-300 hover:opacity-80'>
                                                    {t("Logout")}
                                                    <div className='text-[13px]'>
                                                        <HiOutlineLogout />
                                                    </div>
                                                </button>

                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <Button link='/login' classes='bg-neutral-700 text-[13px]/[35px] px-[5px] xl:px-[11px] tracking-[1px]'>
                                    <span>{t("Sign in")}</span>
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
                            <img loading='lazy' className='w-7 h-7' src="https://mkrentacar.com/public/assets/images/whatsapp-icon.png" alt="whatsappimg" />
                            <span className='text-[15px]/[22px] hidden md:block'>Chat With Us</span>
                        </Link>
                        <div>
                            {/* Book Now */}
                            {authContext.isLoggedIn ? (

                                <div className=' flex justify-center gap-2 items-center' onClick={() => setShowWidgetAuth(prevstate => !prevstate)}>
                                    {showWidgetAuth && (
                                        <div className='flex gap-2 items-center'>
                                            <Link to={"/paneluser"} className='bg-orangeCus2 w-[80px] justify-center text-white text-[11px]/[35px] px-[5px] xl:px-[11px] tracking-[1px] flex items-center gap-0.5 transition-all duration-300 hover:opacity-80'>
                                                {t("panelMobile")}
                                            </Link>
                                            <button onClick={() => setShowLogOut(true)} className='bg-red-700 w-[100px] justify-center text-white text-[11px]/[35px] px-[5px] xl:px-[11px] tracking-[1px] flex items-center gap-0.5 transition-all duration-300 hover:opacity-80'>
                                                {t("Logout")}
                                                <div className='text-[13px] hidden md:block'>
                                                    <HiOutlineLogout />
                                                </div>
                                            </button>
                                        </div>
                                    )}
                                    <Button link='#' classes='bg-neutral-700 w-auto text-[13px]/[35px] px-[5px] xl:px-[11px] tracking-[1px] gap-2'>
                                        <IoMdArrowDropleft />
                                        <span>{authContext.userInfo[0].username}</span>
                                    </Button>

                                </div>
                            ) : (
                                <Button link='/login' classes='bg-neutral-700 text-[10px]/[29px] w-[100px] px-[15px] tracking-[1px]'>
                                    <span>{t("Sign in")}</span>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* is Logout */}
            <Modal width="w-[400px]" height="h-auto" closedBox={ShowLogOut} setClosedBox={setShowLogOut} title={`Logout`}>
                <p className={`text-[20px] mt-5 ${i18n.language === "ar" ? "rtlArabic" : ''}`}>{t("Do you want to logout")}?</p>
                <div className='flex gap-4 mt-5'>
                    <button onClick={logOutHandler} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
                        Yes
                    </button>
                </div>
            </Modal>
        </>
    )
}
