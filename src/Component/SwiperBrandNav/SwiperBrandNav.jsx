import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import Button from '../Button/Button'
import { Autoplay } from 'swiper/modules';

const SwiperBrandNav = () => {
    const swiperRef = React.useRef(null);
    const goNext = () => {
        swiperRef.current.slideNext();
    };

    const goPrev = () => {
        swiperRef.current.slidePrev();
    };

    return (
        <div className='py-[30px] bg-[#111111] font-medium text-white'>
            <div className='container'>
                <div className='flex gap-[20px] items-center justify-between'>
                    <button onClick={goPrev} className='w-[30px] h-[30px] bg-[#454545] flex justify-center items-center p-2'><IoIosArrowBack /></button>

                    <Swiper
                        navigation={{ prevEl: '.custom-prev', nextEl: '.custom-next' }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        slidesPerView={1}
                        spaceBetween={20}
                        speed={1200}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 1500,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            534: {
                                slidesPerView: 2,
                            },
                            716: {
                                slidesPerView: 3,
                            },
                            980 :{
                                slidesPerView:4,
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
                        <SwiperSlide className='w-[190px]'>
                            <Button link='#' classes='bg-[#454545] gap-1 py-2.5'>
                                <img className='w-[40px] h-[25px]' src="https://mkrentacar.com/public/uploads/brand/0cID35vkiB.png" alt="1" />
                                <span className='text-xs'>AUDI</span>
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide className='w-[190px]'>
                            <Button link='#' classes='bg-[#454545] gap-1 py-2.5'>
                                <img className='w-[40px] h-[25px]' src="https://mkrentacar.com/public/uploads/brand/0cID35vkiB.png" alt="1" />
                                <span className='text-xs'>AUDI</span>
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide className='w-[190px]'>
                            <Button link='#' classes='bg-[#454545] gap-1 py-2.5'>
                                <img className='w-[40px] h-[25px]' src="https://mkrentacar.com/public/uploads/brand/0cID35vkiB.png" alt="1" />
                                <span className='text-xs'>AUDI</span>
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide className='w-[190px]'>
                            <Button link='#' classes='bg-[#454545] gap-1 py-2.5'>
                                <img className='w-[40px] h-[25px]' src="https://mkrentacar.com/public/uploads/brand/0cID35vkiB.png" alt="1" />
                                <span className='text-xs'>AUDI</span>
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide className='w-[190px]'>
                            <Button link='#' classes='bg-[#454545] gap-1 py-2.5'>
                                <img className='w-[40px] h-[25px]' src="https://mkrentacar.com/public/uploads/brand/0cID35vkiB.png" alt="1" />
                                <span className='text-xs'>AUDI</span>
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide className='w-[190px]'>
                            <Button link='#' classes='bg-[#454545] gap-1 py-2.5'>
                                <img className='w-[40px] h-[25px]' src="https://mkrentacar.com/public/uploads/brand/0cID35vkiB.png" alt="1" />
                                <span className='text-xs'>AUDI</span>
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide className='w-[190px]'>
                            <Button link='#' classes='bg-[#454545] gap-1 py-2.5'>
                                <img className='w-[40px] h-[25px]' src="https://mkrentacar.com/public/uploads/brand/0cID35vkiB.png" alt="1" />
                                <span className='text-xs'>AUDI</span>
                            </Button>
                        </SwiperSlide>

                        {/* Add more slides as needed */}
                    </Swiper>
                    <button onClick={goNext} className='w-[30px] h-[30px] bg-[#454545] flex justify-center items-center p-2'><IoIosArrowForward /></button>

                </div>
            </div>

        </div>
    );
};

export default SwiperBrandNav;