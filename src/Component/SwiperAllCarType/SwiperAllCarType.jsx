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

export default function SwiperAllCarType({children}) {


    return (
        <>
            <div className='bg-[#111111] font-medium py-3.5 md:py-5'>
                <div className='container'>
                   {children}
                </div>
            </div>


        </>


    );
}
