import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

import './SwiperAllCarType.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function SwiperAllCarType() {
    const pagination = {
        clickable: true,
        renderBullet: function (className) {
            return '<span class="' + className + '"></span>';
        },
    };

    return (
        <>
            <div className='bg-[#111111] font-medium py-3.5 md:py-5'>
                <div className='container'>
                    <Swiper
                         slidesPerView={1}
                         spaceBetween={10}
                         speed={1200}
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            534: {
                                slidesPerView: 2,
                                spaceBetween : 20
                            },
                            716:{
                                slidesPerView: 3,
                                spaceBetween : 10
                            },
                            1160: {
                                slidesPerView: 4,
                                spaceBetween : 8
                            },
                        }}
                    >
                        <SwiperSlide className='mb-[55px] flex justify-center items-center'>
                            <Link to='#' className='flex flex-col items-center gap-[15px] w-full xs:w-auto'>
                                <img className='w-full xs:w-auto h-[200px] xs:h-[150px] rounded-xl' src="https://mkrentacar.com/public/uploads/model/KmnzlT9NnP.jpg" alt="imgMercedes" />
                                <p className='text-center text-base text-white hover:text-orangeCus2  transition-all duration-300'>SUV CARS</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className='mb-[55px] flex justify-center items-center'>
                            <Link to='#' className='flex flex-col items-center gap-[15px] w-full xs:w-auto'>
                                <img className='w-full xs:w-auto h-[200px] xs:h-[150px] rounded-xl' src="https://mkrentacar.com/public/uploads/model/KmnzlT9NnP.jpg" alt="imgMercedes" />
                                <p className='text-center text-base text-white hover:text-orangeCus2  transition-all duration-300'>SUV CARS</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className='mb-[55px] flex justify-center items-center'>
                            <Link to='#' className='flex flex-col items-center gap-[15px] w-full xs:w-auto'>
                                <img className='w-full xs:w-auto h-[200px] xs:h-[150px] rounded-xl' src="https://mkrentacar.com/public/uploads/model/KmnzlT9NnP.jpg" alt="imgMercedes" />
                                <p className='text-center text-base text-white hover:text-orangeCus2  transition-all duration-300'>SUV CARS</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className='mb-[55px] flex justify-center items-center'>
                            <Link to='#' className='flex flex-col items-center gap-[15px] w-full xs:w-auto'>
                                <img className='w-full xs:w-auto h-[200px] xs:h-[150px] rounded-xl' src="https://mkrentacar.com/public/uploads/model/KmnzlT9NnP.jpg" alt="imgMercedes" />
                                <p className='text-center text-base text-white hover:text-orangeCus2  transition-all duration-300'>SUV CARS</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className='mb-[55px] flex justify-center items-center'>
                            <Link to='#' className='flex flex-col items-center gap-[15px] w-full xs:w-auto'>
                                <img className='w-full xs:w-auto h-[200px] xs:h-[150px] rounded-xl' src="https://mkrentacar.com/public/uploads/model/KmnzlT9NnP.jpg" alt="imgMercedes" />
                                <p className='text-center text-base text-white hover:text-orangeCus2  transition-all duration-300'>SUV CARS</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className='mb-[55px] flex justify-center items-center'>
                            <Link to='#' className='flex flex-col items-center gap-[15px] w-full xs:w-auto'>
                                <img className='w-full xs:w-auto h-[200px] xs:h-[150px] rounded-xl' src="https://mkrentacar.com/public/uploads/model/KmnzlT9NnP.jpg" alt="imgMercedes" />
                                <p className='text-center text-base text-white hover:text-orangeCus2  transition-all duration-300'>SUV CARS</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className='mb-[55px] flex justify-center items-center'>
                            <Link to='#' className='flex flex-col items-center gap-[15px] w-full xs:w-auto'>
                                <img className='w-full xs:w-auto h-[200px] xs:h-[150px] rounded-xl' src="https://mkrentacar.com/public/uploads/model/KmnzlT9NnP.jpg" alt="imgMercedes" />
                                <p className='text-center text-base text-white hover:text-orangeCus2  transition-all duration-300'>SUV CARS</p>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className='mb-[55px] flex justify-center items-center'>
                            <Link to='#' className='flex flex-col items-center gap-[15px] w-full xs:w-auto'>
                                <img className='w-full xs:w-auto h-[200px] xs:h-[150px] rounded-xl' src="https://mkrentacar.com/public/uploads/model/KmnzlT9NnP.jpg" alt="imgMercedes" />
                                <p className='text-center text-base text-white hover:text-orangeCus2  transition-all duration-300'>SUV CARS</p>
                            </Link>
                        </SwiperSlide>
                    
             



                    </Swiper>
                </div>
            </div>


        </>


    );
}
