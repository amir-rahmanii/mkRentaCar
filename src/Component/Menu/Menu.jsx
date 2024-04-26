import React from 'react'
import Button from '../Button/Button'
import { SlArrowDown } from "react-icons/sl";
import SocialMedia from '../SocialMedia/SocialMedia';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
export default function Menu() {
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

    <div className='bg-[#1D232D] block md:hidden pt-[18px] pb-5'>
          <div className='container'>
            <div className='flex justify-between items-center'>
              <Link to='#'>
                <img className='w-[120px] h-[45px]' src="https://mkrentacar.com/public/assets/images/logo.png" alt="imglogo" />
              </Link>
                <div className='bg-[#ED8413]  px-[7.5px] py-[3px] cursor-pointer group hover:bg-[#293957] transition-all duration-300'>
                    <FaBars className='w-[15px] h-[25px] text-white group-hover:text-[#ED8413] transition-all duration-300' />
                </div>
            </div>
          </div>
    </div>
    
    </>

  )
}
