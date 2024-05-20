import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import Button from '../Button/Button'
import { Autoplay } from 'swiper/modules';
import SwiperAllCarType from '../SwiperAllCarType/SwiperAllCarType';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import CarBox from '../CarBox/CarBox';

const SwiperBrandNav = ({allInputs , allCars , filtered}) => {

    const [valueOfBrand, setValueOfBrand] = useState('Bentley')
    const [valueOfType, setValueOfType] = useState('Exotic Cars')


    const swiperRef = React.useRef(null);
    const goNext = () => {
        swiperRef.current.slideNext();
    };
    const goPrev = () => {
        swiperRef.current.slidePrev();
    };



    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };

    return (
        <div className='py-[30px] bg-blackBack font-medium text-white'>
            <div className='container'>
                <div className='flex gap-[20px] mb-3 md:mb-5 items-center justify-between'>
                 
                        <button onClick={goPrev} className='w-[30px] h-[30px] bg-[#454545] flex justify-center items-center p-2 transition-all duration-300 hover:bg-orangeCus'><IoIosArrowBack /></button>
            
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
                            980: {
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
                  
                      {(allInputs && filtered) && (
                        allInputs.map((data) => (
                                <SwiperSlide key={data.id} onClick={() => {
                                        setValueOfBrand(data.title)
                                }} className='w-[190px]'>
                                    <Button link='#' classes={`gap-1  py-2.5 ${valueOfBrand  == `${data.title}`? "bg-orangeCus" : "bg-neutral-700"} }`}>
                                            <img className='w-[40px] h-[25px]' src={data.cover} alt="1" />
                                        <span className='text-xs'>{data.title.toUpperCase()}</span>
                                    </Button>
                                </SwiperSlide>
                        ))
                      )}
                      {(allInputs && !filtered) && (
                        allInputs.map((data) => (
                                <SwiperSlide key={data.id} onClick={() => {
                                        setValueOfType(data.title)
                                }} className='w-[190px]'>
                                    <Button link='#' classes={`gap-1  py-2.5 ${valueOfType  == `${data.title}`? "bg-orangeCus" : "bg-neutral-700"} }`}>
                                        <span className='text-xs'>{data.title.toUpperCase()}</span>
                                    </Button>
                                </SwiperSlide>
                        ))
                      )}
               
                      

                
                        {/* Add more slides as needed */}
                    </Swiper>
                
                  
                        <button onClick={goNext} className='w-[30px] h-[30px] bg-[#454545] flex justify-center items-center p-2 transition-all duration-300 hover:bg-orangeCus'><IoIosArrowForward /></button>
                   

                </div>
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
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            716: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            980: {
                                slidesPerView: 3,
                                spaceBetween: 15
                            },
                        }}
                    >
                        {(allCars && filtered) && (
                            <div>
                                {allCars.filter(car => car.brand == valueOfBrand).map(car => (
                                    <SwiperSlide key={car.id} className='mb-[55px] flex justify-center items-center'>
                                        <CarBox {...car} />
                                    </SwiperSlide>
                                ))}
                            </div>
                        )}
                        {(allCars && !filtered) && (
                            <div>
                                {allCars.filter(car => car.carType == valueOfType).map(car => (
                                    <SwiperSlide key={car.id} className='mb-[55px] flex justify-center items-center'>
                                        <CarBox {...car} />
                                    </SwiperSlide>
                                ))}
                            </div>
                        )}



                    </Swiper>
                </SwiperAllCarType>
            </div>



        </div>
    );
};

export default SwiperBrandNav;