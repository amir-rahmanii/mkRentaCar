import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';


const SwiperBrandNav = () => {
    const swiperRef = React.useRef(null);
    const goNext = () => {
        swiperRef.current.slideNext();
    };

    const goPrev = () => {
        swiperRef.current.slidePrev();
    };

    return (
        <div className='pt-[30px] bg-[#111111] font-medium'>
            <div className='container'>
                <div className='flex'>
                    <button onClick={goPrev}className='w-[30px] h-[30px] bg-[#454545]'></button>

                    <Swiper
                        navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        {/* Add more slides as needed */}
                    </Swiper>
                    <button onClick={goNext} className='w-[30px] h-[30px] bg-[#454545]'></button>

                </div>
            </div>

        </div>
    );
};

export default SwiperBrandNav;