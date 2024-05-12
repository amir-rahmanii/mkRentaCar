import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import { SlArrowDown } from "react-icons/sl";
import SocialMedia from '../SocialMedia/SocialMedia';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import InputLanguage from '../InputLanguage/InputLanguage';
import { FaXmark } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

export default function Menu() {
  const [showNavBarMobile, setShowNavBarMobile] = useState(false)
  const [showSubNenuOurCars, setshowSubNenuOurCars] = useState(false)
  const [showSubNenuCarBrans, setshowSubNenuCarBrans] = useState(false)
  const [allMenuItem, setAllMenuItem] = useState([])



  useEffect(() => {
    fetch(`http://localhost:5000/menus`)
      .then(res => res.json())
      .then(result => {
        setAllMenuItem(result)
      })
  }, [])

  return (
    <>
      {/* Desktop Menu */}
      <div className='bg-neutral-700 font-light hidden md:block'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            {/* Menu  */}
            <ul className='flex'>
              {allMenuItem.map((menu) => (
                <li key={menu.id} className={`pb-0.5 ${menu.submenus != 0 ? 'relative group' : ''} `}>
                  <Button link={menu.href == 'car-brands' ? '#' : `/${menu.href}`} classes={`text-[15px]/[22.5px]  tracking-[0.375px] py-2  px-[13px] lg:px-[15px] ${menu.submenus.length != 0 ? ' gap-2.5' : ''} ${menu.href == "cars" ? 'border-b border-white' : ''}  `}>
                    <span>{menu.title.toUpperCase()}</span>
                    {menu.submenus.length != 0 && (
                      <SlArrowDown className='w-2.5 h-4' />
                    )}
                  </Button>
                  {(menu.submenus.length != 0 && menu.href == "cars") && (
                    <ul className='absolute hidden transition-all duration-300 group-hover:grid grid-cols-5  gap-0.5 w-[840px] lg:w-[900px] xl:w-[1120px] top-[41px] z-50 left-0 text-white px-2 font-medium'>
                      {menu.submenus.map((submenu) => (
                        <li key={submenu.id}>
                          <Link to={`/cars/${submenu.href}`}>
                            <div className="w-auto h-[107px] relative rounded-md">
                              <img loading='lazy' src={submenu.cover} alt="img sub menu" />
                              <span className='absolute xl:top-[64px] md:top-12 left-[10px] tracking-[0.35px] text-[14px]'>{submenu.title.toUpperCase()}</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {(menu.submenus.length != 0 && menu.href == "car-brands") && (
                    <ul className='absolute hidden transition-all duration-300 group-hover:grid grid-cols-6 gap-px w-[730px] lg:w-[850px] xl:w-[1050px] top-[41px] z-50 left-0 text-white px-2 font-bold'>
                      {menu.submenus.map((submenu) => (
                        <li key={submenu.id}>
                          <Link to={submenu.href}>
                            <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-1 xl:gap-2 lg:gap-[13px]">
                              <img loading='lazy' src={submenu.cover} alt="alt1" className="w-5 h-7 xl:w-7 xl:h-8" />
                              <span className='top-[64px] left-[10px] tracking-[0.35px]  text-[9px] lg:text-[11px] xl:text-[13px]'>{submenu.title.toUpperCase()}</span>
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

              ))}
            </ul>

            {/* Social Media */}

            <SocialMedia />

          </div>
        </div >
      </div >

      {/* menu mobile */}

      <div div className='bg-[#1D232D] block md:hidden relative pt-[18px] pb-5 ' >
        <div className='container'>
          <div className='flex justify-between items-center'>
            <Link to='/'>
              <img loading='lazy' className='w-[120px] h-[45px]' src="https://mkrentacar.com/public/assets/images/logo.png" alt="imglogo" />
            </Link>
            <div onClick={() => setShowNavBarMobile(true)} className='bg-orangeCus2  px-[7.5px] py-[3px] cursor-pointer group hover:bg-[#293957] transition-all duration-300'>
              <FaBars className='w-[15px] h-[25px] text-white group-hover:text-orangeCus2 transition-all duration-300' />
            </div>

          </div>
        </div>
        <div className={`bg-[#2E3031] transition-all font-medium duration-300 fixed top-0 bottom-0 w-[280px] z-20 p-5 overflow-y-auto ${showNavBarMobile ? 'right-0' : '-right-[280px]'}`}>
          <div className='flex justify-between items-center mb-5'>
            <InputLanguage left={true} />
            <FaXmark onClick={() => setShowNavBarMobile(false)} className='w-[18px] h-[24px] text-white cursor-pointer' />
          </div>


          <ul className='font-bold border-t border-[#393939] text-white'>

            {allMenuItem.map((menu) => (
              <li key={menu.id} className='py-2.5 border-b border-[#393939]' >
                <div onClick={
                  () => {
                    if (menu.href == "cars") {
                      setshowSubNenuOurCars(prevState => !prevState)
                    }
                    else if (menu.href == "car-brands") {
                      setshowSubNenuCarBrans(prevState => !prevState)
                    }

                  }

                }
                  className='flex items-center justify-between cursor-pointer'>
                  <Link to={menu.href == 'cars' || menu.href == 'car-brands' ? '#' : `/${menu.href}`} className={`block hover:text-orangeCus2 transition-all duration-300 text-sm/[21px] tracking-[0.35px] ${showSubNenuOurCars && menu.href == "cars" ? 'text-orangeCus2' : ''} ${showSubNenuCarBrans && menu.href == "car-brands" ? 'text-orangeCus2' : ''}`}>{menu.title.toUpperCase()}</Link>
                  {menu.submenus.length != 0 && (
                    <span>
                      {showSubNenuOurCars ? <FaMinus /> : <FaPlus />}
                    </span>
                  )}
                </div>
                {(menu.submenus.length != 0 && menu.href == "cars") && (
                  <ul className={`border-t border-[#393939] mt-2.5 flex-col divide-y divide-[#393939] ${showSubNenuOurCars ? "flex" : "hidden"}`}>
                    {menu.submenus.map((submenu) => (
                      <li key={submenu.id} className='py-2.5 px-2.5 group'>
                        <Link to={submenu.href} className='group-hover:text-orangeCus2 transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>{submenu.title.toUpperCase()}</Link>
                      </li>
                    ))}
                  </ul>
                )}

                {(menu.submenus.length != 0 && menu.href == "car-brands") && (
                  <ul className={`border-t border-[#393939] mt-2.5 flex-col divide-y divide-[#393939] ${showSubNenuCarBrans ? "flex" : "hidden"}`}>
                    {menu.submenus.map((submenu) => (
                      <li key={submenu.id} className='py-2.5 px-2.5 group'>
                        <Link to={submenu.href} className='group-hover:text-orangeCus2 transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>{submenu.title.toUpperCase()}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>



            ))}


          </ul>

        </div>
      </div >



      {/*black side for menu mobile */}
      <div div onClick={() => setShowNavBarMobile(false)
      } className={`bg-black/40 md:hidden fixed inset-0 w-full h-full z-10 transition-all ${showNavBarMobile ? 'visible opacity-100' : 'invisible opacity-0'}`}></div>




    </>

  )
}
