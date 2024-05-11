
import SwiperAllCarType from '../SwiperAllCarType/SwiperAllCarType'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

// import './SwiperAllCarType.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Blogs() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };
    return (
        <div className='bg-black font-medium pt-6 text-white md:pt-[65px] md:pb-[70px] pb-[25px]'>
            <div className='container'>
                <div className=' mb-3 md:mb-8 flex flex-col items-center justify-center gap-[15px] font-medium'>
                    <p className='text-lg/[21px] font-medium text-center'>Trending Blogs</p>
                    <p className='text-xl/[24px] md:text-[35px]/[42px] text-center font-bold'>Latest Blogs & Trends</p>
                </div>

             <div className='font-medium py-3.5 md:pt-5 md:pb-0 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
                <div className=' bg-black '>
                    <Link to='#'>
                        <img className='w-full rounded-2xl hover:brightness-75 transition-all duration-300'  src="https://mkrentacar.com/public/uploads/blog/PgTt3zl7PL.png" alt="1" />
                    </Link>
                    {/* body */}
                    <div className='pt-4 mt-2.5'> 
                        <Link to='#' className='text-xl/[24px] font-bold line-clamp-1 hover:text-orangeCus2 transition-all duration-300 hover:decoration-orangeCus2 hover:underline'>Rent a Car Now, Pay Later: Introducing Tabby with MK Rent A Car!</Link>
                        <p className='text-[#B7B7B7] line-clamp-2 text-[13px]/[19.5px] mt-2'>With Tabby, you can enjoy the freedom to book your favorite car from MK Rent A Car's extensive fleet and pay for it in convenient installments over time.</p>
                    </div>
                    <div className=' mt-2 md:mt-6 pt-1 md:pt-2.5 border-t border-white/20'>
                        <Link to='#'  className='hover:text-orangeCus2 transition-all duration-300 hover:decoration-orangeCus2 underline text-[13px] md:text-base'>Read More</Link>
                    </div>
                </div>
                <div className=' bg-black '>
                    <Link to='#'>
                        <img className='w-full rounded-2xl hover:brightness-75 transition-all duration-300'  src="https://mkrentacar.com/public/uploads/blog/PgTt3zl7PL.png" alt="1" />
                    </Link>
                    {/* body */}
                    <div className='pt-4 mt-2.5'> 
                        <Link to='#' className='text-xl/[24px] font-bold line-clamp-1 hover:text-orangeCus2 transition-all duration-300 hover:decoration-orangeCus2 hover:underline'>Rent a Car Now, Pay Later: Introducing Tabby with MK Rent A Car!</Link>
                        <p className='text-[#B7B7B7] line-clamp-2 text-[13px]/[19.5px] mt-2'>With Tabby, you can enjoy the freedom to book your favorite car from MK Rent A Car's extensive fleet and pay for it in convenient installments over time.</p>
                    </div>
                    <div className=' mt-2 md:mt-6 pt-1 md:pt-2.5 border-t border-white/20'>
                        <Link to='#'  className='hover:text-orangeCus2 transition-all duration-300 hover:decoration-orangeCus2 underline text-[13px] md:text-base'>Read More</Link>
                    </div>
                </div>
                <div className=' bg-black '>
                    <Link to='#'>
                        <img className='w-full rounded-2xl hover:brightness-75 transition-all duration-300'  src="https://mkrentacar.com/public/uploads/blog/PgTt3zl7PL.png" alt="1" />
                    </Link>
                    {/* body */}
                    <div className='pt-4 mt-2.5'> 
                        <Link to='#' className='text-xl/[24px] font-bold line-clamp-1 hover:text-orangeCus2 transition-all duration-300 hover:decoration-orangeCus2 hover:underline'>Rent a Car Now, Pay Later: Introducing Tabby with MK Rent A Car!</Link>
                        <p className='text-[#B7B7B7] line-clamp-2 text-[13px]/[19.5px] mt-2'>With Tabby, you can enjoy the freedom to book your favorite car from MK Rent A Car's extensive fleet and pay for it in convenient installments over time.</p>
                    </div>
                    <div className=' mt-2 md:mt-6 pt-1 md:pt-2.5 border-t border-white/20'>
                        <Link to='#'  className='hover:text-orangeCus2 transition-all duration-300 hover:decoration-orangeCus2 underline text-[13px] md:text-base'>Read More</Link>
                    </div>
                </div>
           
            

             </div>
            </div>
        </div>
    )
}