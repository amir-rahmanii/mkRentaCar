
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

export default function Comments() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };
    return (
        <div className='bg-black font-medium'>
            <div className='container'>
                <div className='text-white mb-3 md:mb-8 flex flex-col items-center justify-center gap-[15px] font-medium'>
                    <p className='text-lg/[21px] font-medium text-center'>Latest Testimonial</p>
                    <p className='text-xl/[24px] md:text-[35px]/[42px] text-center font-bold'>What They Say About Us</p>
                    <p className='text-[#B8B8B8] text-base font-medium text-center'>"This was our best experience with MASTERKEY"</p>
                </div>

                <SwiperAllCarType bgcolor="bg-black">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        speed={1200}
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            716: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1160: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                        }}
                    >
                        <SwiperSlide className='mb-[55px] flex justify-center items-center'>
                            <div className='text-white bg-[#454545] p-2.5 md:p-10 rounded-2xl flex flex-col gap-10'>
                                <span className='line-clamp-3 text-base md:text-xs/[21px] tracking-[1px]'>
                                    I wanted to drive a Ferrari 488 Spyder and experience the raw power that this machine commands. At MK Rent a Car, I found that the car of my dreams is available at an affordable rent. The process of renting the car was really easy.
                                </span>

                                {/* img and name and date*/}
                                <div className='flex items-center gap-3'>
                                    <img className='rounded-full' src="https://mkrentacar.com/public/assets/images/testimonial.jpg" alt="1" />
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-xs md:text-base'>KATHERINE</span>
                                        <span className='text-xs md:text-base'>2023-09-09</span>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-[55px] flex justify-center items-center'>
                            <div className='text-white bg-[#454545] p-2.5 md:p-10 rounded-2xl flex flex-col gap-10'>
                                <span className='line-clamp-3 text-base md:text-xs/[21px] tracking-[1px]'>
                                    I wanted to drive a Ferrari 488 Spyder and experience the raw power that this machine commands. At MK Rent a Car, I found that the car of my dreams is available at an affordable rent. The process of renting the car was really easy.
                                </span>

                                {/* img and name and date*/}
                                <div className='flex items-center gap-3'>
                                    <img className='rounded-full' src="https://mkrentacar.com/public/assets/images/testimonial.jpg" alt="1" />
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-xs md:text-base'>KATHERINE</span>
                                        <span className='text-xs md:text-base'>2023-09-09</span>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-[55px] flex justify-center items-center'>
                            <div className='text-white bg-[#454545] p-2.5 md:p-10 rounded-2xl flex flex-col gap-10'>
                                <span className='line-clamp-3 text-base md:text-xs/[21px] tracking-[1px]'>
                                    I wanted to drive a Ferrari 488 Spyder and experience the raw power that this machine commands. At MK Rent a Car, I found that the car of my dreams is available at an affordable rent. The process of renting the car was really easy.
                                </span>

                                {/* img and name and date*/}
                                <div className='flex items-center gap-3'>
                                    <img className='rounded-full' src="https://mkrentacar.com/public/assets/images/testimonial.jpg" alt="1" />
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-xs md:text-base'>KATHERINE</span>
                                        <span className='text-xs md:text-base'>2023-09-09</span>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-[55px] flex justify-center items-center'>
                            <div className='text-white bg-[#454545] p-2.5 md:p-10 rounded-2xl flex flex-col gap-10'>
                                <span className='line-clamp-3 text-base md:text-xs/[21px] tracking-[1px]'>
                                    I wanted to drive a Ferrari 488 Spyder and experience the raw power that this machine commands. At MK Rent a Car, I found that the car of my dreams is available at an affordable rent. The process of renting the car was really easy.
                                </span>

                                {/* img and name and date*/}
                                <div className='flex items-center gap-3'>
                                    <img className='rounded-full' src="https://mkrentacar.com/public/assets/images/testimonial.jpg" alt="1" />
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-xs md:text-base'>KATHERINE</span>
                                        <span className='text-xs md:text-base'>2023-09-09</span>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='mb-[55px] flex justify-center items-center'>
                            <div className='text-white bg-[#454545] p-2.5 md:p-10 rounded-2xl flex flex-col gap-10'>
                                <span className='line-clamp-3 text-base md:text-xs/[21px] tracking-[1px]'>
                                    I wanted to drive a Ferrari 488 Spyder and experience the raw power that this machine commands. At MK Rent a Car, I found that the car of my dreams is available at an affordable rent. The process of renting the car was really easy.
                                </span>

                                {/* img and name and date*/}
                                <div className='flex items-center gap-3'>
                                    <img className='rounded-full' src="https://mkrentacar.com/public/assets/images/testimonial.jpg" alt="1" />
                                    <div className='flex flex-col gap-2'>
                                        <span className='text-xs md:text-base'>KATHERINE</span>
                                        <span className='text-xs md:text-base'>2023-09-09</span>

                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                
                  

                    </Swiper>
                </SwiperAllCarType>
            </div>
        </div>
    )
}
