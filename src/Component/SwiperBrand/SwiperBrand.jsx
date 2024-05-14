import React, { useEffect, useState } from 'react'
// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperAllCarType from "../SwiperAllCarType/SwiperAllCarType"
// Import Swiper styles
import 'swiper/css';

import { Pagination } from 'swiper/modules';

import { Link } from 'react-router-dom';

export default function SwiperBrand({allBrands , allCarType}) {

    const pagination = {
        clickable: true,
        renderBullet: function (index , className) {
            return '<span class="' + className + '"></span>';
        },
    };
    return (
        <div className='bg-blackBack font-medium py-3.5 md:pt-5 md:pb-0'>
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
                    {allBrands.map((brand) => (
                    <SwiperSlide key={brand.id} className='flex justify-center items-center'>
                        <Link to={brand.href} className='flex flex-col items-center gap-[15px] w-auto '>
                            <img className='w-[52px] h-[42px]' src={brand.cover} alt="imgMercedes" />
                            <p className='text-center text-base text-white'>{brand.title}</p>
                        </Link>
                    </SwiperSlide>
                    ))}
                </Swiper>

                {/* Swiper  */}
                <SwiperAllCarType>
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
                        {allCarType.map((type) => (
                        <SwiperSlide key={type.id} className='mb-[55px] flex justify-center items-center'>
                            <Link to={`/cars/${type.href}`} className='flex flex-col items-center gap-[15px] w-full xs:w-auto'>
                                <img className='w-full xs:w-auto h-[200px] xs:h-[150px] rounded-xl md:w-[300px]' src={type.cover} alt="imgMercedes" />
                                <p className='text-center text-base text-white hover:text-orangeCus2  transition-all duration-300'>{type.title}</p>
                            </Link>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperAllCarType>

                {/* Swiper  */}

            </div>

        </div>
    )
}
