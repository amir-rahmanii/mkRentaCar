import React from 'react'
// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Link } from 'react-router-dom';

export default function SwiperBrand() {
    return (
        <div className='bg-[#111111] font-medium py-3.5 md:py-5'>
            <div className='container'>
                <Swiper
                    // install Swiper modules
                    speed={1200}
                    modules={[Autoplay]}
                    slidesPerView={2}
                    autoplay={{
                        delay: 1500,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false
                    }}
                    breakpoints={{
                        534: {
                            slidesPerView: 3,
                        },
                        716: {
                            slidesPerView: 4,
                        },
                        1160: {
                            slidesPerView: 5,
                        },
                        1340: {
                            slidesPerView: 6,
                        }
                    }}
                    loop
                >
                    <SwiperSlide className='flex justify-center items-center'>
                        <Link to='#' className='flex flex-col items-center gap-[15px] w-auto'>
                            <img className='w-[52px] h-[42px]' src="https://mkrentacar.com/public/uploads/brand/ZfXrHr4tP6.png" alt="imgMercedes" />
                            <p className='text-center text-base text-white'>Mercedes</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='flex justify-center items-center'>
                        <Link to='#' className='flex flex-col items-center gap-[15px] w-auto'>
                            <img className='w-[52px] h-[42px]' src="https://mkrentacar.com/public/uploads/brand/ZfXrHr4tP6.png" alt="imgMercedes" />
                            <p className='text-center text-base text-white'>Mercedes</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='flex justify-center items-center'>
                        <Link to='#' className='flex flex-col items-center gap-[15px] w-auto'>
                            <img className='w-[52px] h-[42px]' src="https://mkrentacar.com/public/uploads/brand/ZfXrHr4tP6.png" alt="imgMercedes" />
                            <p className='text-center text-base text-white'>Mercedes</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='flex justify-center items-center'>
                        <Link to='#' className='flex flex-col items-center gap-[15px] w-auto'>
                            <img className='w-[52px] h-[42px]' src="https://mkrentacar.com/public/uploads/brand/ZfXrHr4tP6.png" alt="imgMercedes" />
                            <p className='text-center text-base text-white'>Mercedes</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='flex justify-center items-center'>
                        <Link to='#' className='flex flex-col items-center gap-[15px] w-auto'>
                            <img className='w-[52px] h-[42px]' src="https://mkrentacar.com/public/uploads/brand/ZfXrHr4tP6.png" alt="imgMercedes" />
                            <p className='text-center text-base text-white'>Mercedes</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='flex justify-center items-center'>
                        <Link to='#' className='flex flex-col items-center gap-[15px] w-auto'>
                            <img className='w-[52px] h-[42px]' src="https://mkrentacar.com/public/uploads/brand/ZfXrHr4tP6.png" alt="imgMercedes" />
                            <p className='text-center text-base text-white'>Mercedes</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='flex justify-center items-center'>
                        <Link to='#' className='flex flex-col items-center gap-[15px] w-auto'>
                            <img className='w-[52px] h-[42px]' src="https://mkrentacar.com/public/uploads/brand/ZfXrHr4tP6.png" alt="imgMercedes" />
                            <p className='text-center text-base text-white'>Mercedes</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='flex justify-center items-center'>
                        <Link to='#' className='flex flex-col items-center gap-[15px] w-auto'>
                            <img className='w-[52px] h-[42px]' src="https://mkrentacar.com/public/uploads/brand/ZfXrHr4tP6.png" alt="imgMercedes" />
                            <p className='text-center text-base text-white'>Mercedes</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='flex justify-center items-center'>
                        <Link to='#' className='flex flex-col items-center gap-[15px] w-auto'>
                            <img className='w-[52px] h-[42px]' src="https://mkrentacar.com/public/uploads/brand/ZfXrHr4tP6.png" alt="imgMercedes" />
                            <p className='text-center text-base text-white'>Mercedes</p>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide className='flex justify-center items-center'>
                        <Link to='#' className='flex flex-col items-center gap-[15px] w-auto'>
                            <img className='w-[52px] h-[42px]' src="https://mkrentacar.com/public/uploads/brand/ZfXrHr4tP6.png" alt="imgMercedes" />
                            <p className='text-center text-base text-white'>Mercedes</p>
                        </Link>
                    </SwiperSlide>


                </Swiper>

            </div>

        </div>
    )
}
