import React from 'react'
import Button from '../Button/Button'
import { SlArrowDown } from "react-icons/sl";
import SocialMedia from '../SocialMedia/SocialMedia';
import { Link } from 'react-router-dom';

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
            <li className='pb-0.5 relative group'>
              <Button link='#' classes='text-[15px]/[22.5px] gap-2.5 tracking-[0.375px] py-2 px-[15px] border-b border-white '>
                <span>our Cars</span>
                <SlArrowDown className='w-2.5 h-4' />
              </Button>
              <ul className='absolute hidden transition-all duration-300 group-hover:grid grid-cols-5  gap-0.5 w-[1120px] top-[41px] z-50 left-0 text-white px-2 font-medium'>
                <li>
                  <Link to='#'>
                    <div className="bg-[url('https://mkrentacar.com/public/uploads/model/cNXf16GRBA.png')] bg-no-repeat bg-cover w-auto h-[107px] relative rounded-md">
                      <span className='absolute top-[64px] left-[10px] tracking-[0.35px] text-[14px]'>suv cars</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="bg-[url('https://mkrentacar.com/public/uploads/model/cNXf16GRBA.png')] bg-no-repeat bg-cover w-auto h-[107px] relative rounded-md">
                      <span className='absolute top-[64px] left-[10px] tracking-[0.35px] text-[14px]'>suv cars</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="bg-[url('https://mkrentacar.com/public/uploads/model/cNXf16GRBA.png')] bg-no-repeat bg-cover w-auto h-[107px] relative rounded-md">
                      <span className='absolute top-[64px] left-[10px] tracking-[0.35px] text-[14px]'>suv cars</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="bg-[url('https://mkrentacar.com/public/uploads/model/cNXf16GRBA.png')] bg-no-repeat bg-cover w-auto h-[107px] relative rounded-md">
                      <span className='absolute top-[64px] left-[10px] tracking-[0.35px] text-[14px]'>suv cars</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="bg-[url('https://mkrentacar.com/public/uploads/model/cNXf16GRBA.png')] bg-no-repeat bg-cover w-auto h-[107px] relative rounded-md">
                      <span className='absolute top-[64px] left-[10px] tracking-[0.35px] text-[14px]'>suv cars</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="bg-[url('https://mkrentacar.com/public/uploads/model/cNXf16GRBA.png')] bg-no-repeat bg-cover w-auto h-[107px] relative rounded-md">
                      <span className='absolute top-[64px] left-[10px] tracking-[0.35px] text-[14px]'>suv cars</span>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
            <li className='pb-0.5 relative group'>
              <Button link='#' classes='text-[15px]/[22.5px] gap-2.5 tracking-[0.375px] py-2 px-[15px]'>
                <span>car Brands</span>
                <SlArrowDown className='w-2.5 h-4' />
              </Button>
              <ul className='absolute hidden transition-all duration-300 group-hover:grid grid-cols-6 gap-px w-[1050px] top-[41px] z-50 left-0 text-white px-2 font-bold'>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to='#'>
                    <div className="w-auto h-[72px] bg-[#1c1c1c] flex items-center p-2.5 gap-[13px]">
                      <img loading='lazy' src="https://mkrentacar.com/public/uploads/brand/iM54DZNMuw.png" alt="alt1" className="w-7 h-9" />
                      <span className='top-[64px] left-[10px] tracking-[0.35px] text-[13px]'>Ferrari</span>
                    </div>
                  </Link>
                </li>
              </ul>
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
