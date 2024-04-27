import React, { useState } from 'react'
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

  return (
    <>
      <div className='bg-neutral-700 font-light hidden md:block'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            {/* Menu  */}
            <ul className='flex'>
              <li className='pb-0.5'>
                <Button link='#' classes='text-[15px]/[22.5px] tracking-[0.375px] py-2 px-[13px] lg:px-[15px]'>
                  <span>ALL CARS</span>
                </Button>
              </li>
              <li className='pb-0.5 relative group'>
                <Button link='#' classes='text-[15px]/[22.5px] gap-2.5 tracking-[0.375px] py-2  px-[13px] lg:px-[15px] border-b border-white '>
                  <span>OUR CARS</span>
                  <SlArrowDown className='w-2.5 h-4' />
                </Button>
                <ul className='absolute hidden transition-all duration-300 group-hover:grid grid-cols-5  gap-0.5 w-[840px] lg:w-[900px] xl:w-[1120px] top-[41px] z-50 left-0 text-white px-2 font-medium'>
                  <li>
                    <Link to='#'>
                      <div className="bg-[url('https://mkrentacar.com/public/uploads/model/cNXf16GRBA.png')] bg-no-repeat bg-cover w-auto h-[107px] relative rounded-md">
                        <span className='absolute top-[64px] left-[10px] tracking-[0.35px] text-[14px]'>SUV CARS</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="bg-[url('https://mkrentacar.com/public/uploads/model/cNXf16GRBA.png')] bg-no-repeat bg-cover w-auto h-[107px] relative rounded-md">
                        <span className='absolute top-[64px] left-[10px] tracking-[0.35px] text-[14px]'>SUV CARS</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="bg-[url('https://mkrentacar.com/public/uploads/model/cNXf16GRBA.png')] bg-no-repeat bg-cover w-auto h-[107px] relative rounded-md">
                        <span className='absolute top-[64px] left-[10px] tracking-[0.35px] text-[14px]'>SUV CARS</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="bg-[url('https://mkrentacar.com/public/uploads/model/cNXf16GRBA.png')] bg-no-repeat bg-cover w-auto h-[107px] relative rounded-md">
                        <span className='absolute top-[64px] left-[10px] tracking-[0.35px] text-[14px]'>SUV CARS</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="bg-[url('https://mkrentacar.com/public/uploads/model/cNXf16GRBA.png')] bg-no-repeat bg-cover w-auto h-[107px] relative rounded-md">
                        <span className='absolute top-[64px] left-[10px] tracking-[0.35px] text-[14px]'>SUV CARS</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="bg-[url('https://mkrentacar.com/public/uploads/model/cNXf16GRBA.png')] bg-no-repeat bg-cover w-auto h-[107px] relative rounded-md">
                        <span className='absolute top-[64px] left-[10px] tracking-[0.35px] text-[14px]'>SUV CARS</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='pb-0.5 relative group'>
                <Button link='#' classes='text-[15px]/[22.5px] gap-2.5 tracking-[0.375px] py-2  px-[13px] lg:px-[15px]'>
                  <span>CAR BRANDS</span>
                  <SlArrowDown className='w-2.5 h-4' />
                </Button>
                <ul className='absolute hidden transition-all duration-300 group-hover:grid grid-cols-6 gap-px w-[730px] lg:w-[850px] xl:w-[1050px] top-[41px] z-50 left-0 text-white px-2 font-bold'>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-2 lg:gap-[13px]">
                        <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                        <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>FERRARI</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className='pb-0.5'>
                <Button link='#' classes='text-[15px]/[22.5px] tracking-[0.375px] py-2  px-[13px] lg:px-[15px]'>
                  <span>DAILY OFFERS</span>
                </Button>
              </li>
              <li className='pb-0.5'>
                <Button link='#' classes='text-[15px]/[22.5px] tracking-[0.375px] py-2  px-[13px] lg:px-[15px]'>
                  <span>ABOUT US</span>
                </Button>
              </li>
              <li className='pb-0.5'>
                <Button link='#' classes='text-[15px]/[22.5px] tracking-[0.375px] py-2  px-[13px] lg:px-[15px]'>
                  <span>ACTIVITIES</span>
                </Button>
              </li>
              <li className='pb-0.5'>
                <Button link='#' classes='text-[15px]/[22.5px] tracking-[0.375px] py-2  px-[13px] lg:px-[15px]'>
                  <span>BLOG</span>
                </Button>
              </li>
              <li className='pb-0.5'>
                <Button link='#' classes='text-[15px]/[22.5px] tracking-[0.375px] py-2  px-[13px] lg:px-[15px]'>
                  <span>CONTACT US</span>
                </Button>
              </li>
            </ul>

            {/* Social Media */}

            <SocialMedia />

          </div>
        </div>
      </div>

      {/* menu mobile */}

      <div className='bg-[#1D232D] block md:hidden relative pt-[18px] pb-5'>
        <div className='container'>
          <div className='flex justify-between items-center'>
            <Link to='#'>
              <img className='w-[120px] h-[45px]' src="https://mkrentacar.com/public/assets/images/logo.png" alt="imglogo" />
            </Link>
            <div onClick={() => setShowNavBarMobile(true)} className='bg-[#ED8413]  px-[7.5px] py-[3px] cursor-pointer group hover:bg-[#293957] transition-all duration-300'>
              <FaBars className='w-[15px] h-[25px] text-white group-hover:text-[#ED8413] transition-all duration-300' />
            </div>

          </div>
        </div>
        <div className={`bg-[#2E3031] transition-all font-medium duration-300 fixed top-0 bottom-0 w-[280px] z-20 p-5 overflow-y-auto ${showNavBarMobile ? 'right-0' : '-right-[280px]'}`}>
          <div className='flex justify-between items-center mb-5'>
            <InputLanguage left={true} />
            <FaXmark onClick={() => setShowNavBarMobile(false)} className='w-[18px] h-[24px] text-white cursor-pointer' />
          </div>
          <ul className='font-bold border-t border-[#393939] text-white'>
            <li className='py-2.5 group  border-b border-[#393939]'>
              <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>ALL CARS</Link>
            </li>
              {/* OUR CARS */}
            <li className='py-2.5 border-b border-[#393939]'>
              <div onClick={() => setshowSubNenuOurCars(prevState => !prevState)} className='flex items-center justify-between cursor-pointer'>
                <Link to='#' className={`block hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px] ${showSubNenuOurCars ? 'text-[#ED8413]' : ''}`}>OUR CARS</Link>
               {showSubNenuOurCars ? <FaMinus /> : <FaPlus />  } 
              </div>

              <ul className={`border-t border-[#393939] mt-2.5 flex-col divide-y divide-[#393939] ${showSubNenuOurCars ? "flex" : "hidden"}`}>
                <li className='py-2.5 px-2.5 group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>SUV CARS</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>SUV CARS</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>SUV CARS</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>SUV CARS</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>SUV CARS</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>SUV CARS</Link>
                </li>
              </ul>
            </li>

              {/* CAR BRANDS */}
            <li className='py-2.5 border-b border-[#393939]'>
              <div onClick={() => setshowSubNenuCarBrans(prevState => !prevState)} className='flex items-center justify-between cursor-pointer'>
                <Link to='#' className={`block hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px] ${showSubNenuCarBrans ? 'text-[#ED8413]' : ''}`}>CAR BRANDS</Link>
               {showSubNenuCarBrans ? <FaMinus /> : <FaPlus />  } 
              </div>
              <ul className={`border-t border-[#393939] mt-2.5 flex-col divide-y divide-[#393939] ${showSubNenuCarBrans ? "flex" : "hidden"}`}>
                <li className='py-2.5 px-2.5 group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5 group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5 group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
                <li className='py-2.5 px-2.5  group'>
                  <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>FERRARI</Link>
                </li>
              </ul>
            </li>
           
            <li className='py-2.5 group  border-b border-[#393939]'>
              <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>DAILY OFFERS</Link>
            </li>
            <li className='py-2.5 group  border-b border-[#393939]'>
              <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>ABOUT US</Link>
            </li>
            <li className='py-2.5 group  border-b border-[#393939]'>
              <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>ACTIVITIES</Link>
            </li>
            <li className='py-2.5 group  border-b border-[#393939]'>
              <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>BLOG</Link>
            </li>
            <li className='py-2.5 group  border-b border-[#393939]'>
              <Link to='#' className='group-hover:text-[#ED8413] transition-all duration-300 text-sm/[21px] tracking-[0.35px]'>CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>




      <div onClick={() => setShowNavBarMobile(false)} className={`bg-black/40 md:hidden fixed inset-0 w-full h-full z-10 transition-all ${showNavBarMobile ? 'visible opacity-100' : 'invisible opacity-0'}`}></div>




    </>

  )
}
