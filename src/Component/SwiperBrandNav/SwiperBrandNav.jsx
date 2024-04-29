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

const SwiperBrandNav = () => {
    const arrayCar = [
        { id: 1, title: "Bentley Bentayga", img: "https://mkrentacar.com/public/uploads/car/2024/01/0gpJ3gBvWV.jpg", type: "SUV CARS", price: 2000, priceOffer: 2500, carType: "BENTLEY" },
        { id: 2, title: "Bentley Bentayga", img: "https://mkrentacar.com/public/uploads/car/2024/01/0gpJ3gBvWV.jpg", type: "SUV CARS", price: 2000, priceOffer: 2500, carType: "BENTLEY" },
        { id: 3, title: "Bentley Bentayga", img: "https://mkrentacar.com/public/uploads/car/2024/01/0gpJ3gBvWV.jpg", type: "SUV CARS", price: 2000, priceOffer: 2500, carType: "BENTLEY" },
        { id: 4, title: "Bentley Bentayga", img: "https://mkrentacar.com/public/uploads/car/2024/01/0gpJ3gBvWV.jpg", type: "SUV CARS", price: 2000, priceOffer: 2500, carType: "BENTLEY" },
        { id: 5, title: "Bentley Bentayga", img: "https://mkrentacar.com/public/uploads/car/2024/01/0gpJ3gBvWV.jpg", type: "SUV CARS", price: 2000, priceOffer: 2500, carType: "BENTLEY" },
        { id: 6, title: "AUDI Bentayga", img: "https://mkrentacar.com/public/uploads/car/2023/11/45T8y34960.jpg", type: "SUV CARS", price: 2000, priceOffer: 2500, carType: "AUDI" },
        { id: 7, title: "AUDI Bentayga", img: "https://mkrentacar.com/public/uploads/car/2023/11/45T8y34960.jpg", type: "SUV CARS", price: 2000, priceOffer: 2500, carType: "AUDI" },
        { id: 8, title: "AUDI Bentayga", img: "https://mkrentacar.com/public/uploads/car/2023/11/45T8y34960.jpg", type: "SUV CARS", price: 2000, priceOffer: 2500, carType: "AUDI" },
        { id: 9, title: "AUDI Bentayga", img: "https://mkrentacar.com/public/uploads/car/2023/11/45T8y34960.jpg", type: "SUV CARS", price: 2000, priceOffer: 2500, carType: "AUDI" },
    ]
    const [ValueOfBrand, setValueOfBrand] = useState('BENTLEY')
    const [AllValueOfCarBox, setAllValueOfCarBox] = useState([])
    // const [ActiveOfBrand , setActiveOfBrand] = useState(false)
    const swiperRef = React.useRef(null);
    const goNext = () => {
        swiperRef.current.slideNext();
    };
    const goPrev = () => {
        swiperRef.current.slidePrev();
    };

    useEffect(() => {
        let newarray = arrayCar.filter(car => car.carType == ValueOfBrand)
        setAllValueOfCarBox(newarray)
    }, [ValueOfBrand])

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };

    return (
        <div className='py-[30px] bg-[#111111] font-medium text-white'>
            <div className='container'>
                <div className='flex gap-[20px] mb-3 md:mb-5 items-center justify-between'>
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
                        <SwiperSlide onClick={(e) => {
                            setValueOfBrand(e.target.textContent)
                        }} className='w-[190px]'>
                            <Button link='#' classes={`gap-1  py-2.5 ${ValueOfBrand == "AUDI" ? "bg-orangeCus" : "bg-neutral-700"}`}>

                                <img className='w-[40px] h-[25px]' src="https://mkrentacar.com/public/uploads/brand/0cID35vkiB.png" alt="1" />

                                <span className='text-xs'>AUDI</span>
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide onClick={(e) => setValueOfBrand(e.target.textContent)} className='w-[190px]'>
                            <Button link='#' classes={`gap-1  py-2.5 ${ValueOfBrand == "FERRARI" ? "bg-orangeCus" : "bg-neutral-700"}`}>
                                <img className='w-[40px] h-[25px]' src="https://mkrentacar.com/public/uploads/brand/0cID35vkiB.png" alt="1" />
                                <span className='text-xs'>FERRARI</span>
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide onClick={(e) => setValueOfBrand(e.target.textContent)} className='w-[190px]'>
                            <Button link='#' classes={`gap-1  py-2.5 ${ValueOfBrand == "LAMBORGHINI" ? "bg-orangeCus" : "bg-neutral-700"}`}>
                                <img className='w-[40px] h-[25px]' src="https://mkrentacar.com/public/uploads/brand/0cID35vkiB.png" alt="1" />
                                <span className='text-xs'>LAMBORGHINI</span>
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide onClick={(e) => setValueOfBrand(e.target.textContent)} className='w-[190px]'>
                            <Button link='#' classes={`gap-1  py-2.5 ${ValueOfBrand == "MERCEDES" ? "bg-orangeCus" : "bg-neutral-700"}`}>
                                <img className='w-[40px] h-[25px]' src="https://mkrentacar.com/public/uploads/brand/0cID35vkiB.png" alt="1" />
                                <span className='text-xs'>MERCEDES</span>
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide onClick={(e) => setValueOfBrand(e.target.textContent)} className='w-[190px]'>
                            <Button link='#' classes={`gap-1  py-2.5 ${ValueOfBrand == "BENTLEY" ? "bg-orangeCus" : "bg-neutral-700"}`}>
                                <img className='w-[40px] h-[25px]' src="https://mkrentacar.com/public/uploads/brand/0cID35vkiB.png" alt="1" />
                                <span className='text-xs'>BENTLEY</span>
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide onClick={(e) => setValueOfBrand(e.target.textContent)} className='w-[190px]'>
                            <Button link='#' classes={`gap-1  py-2.5 ${ValueOfBrand == "PORCHE" ? "bg-orangeCus" : "bg-neutral-700"}`}>
                                <img className='w-[40px] h-[25px]' src="https://mkrentacar.com/public/uploads/brand/0cID35vkiB.png" alt="1" />
                                <span className='text-xs'>PORCHE</span>
                            </Button>
                        </SwiperSlide>
                        <SwiperSlide onClick={(e) => setValueOfBrand(e.target.textContent)} className='w-[190px]'>
                            <Button link='#' classes={`gap-1  py-2.5 ${ValueOfBrand == "CADILAC" ? "bg-orangeCus" : "bg-neutral-700"}`}>
                                <img className='w-[40px] h-[25px]' src="https://mkrentacar.com/public/uploads/brand/0cID35vkiB.png" alt="1" />
                                <span className='text-xs'>CADILAC</span>
                            </Button>
                        </SwiperSlide>


                        {/* Add more slides as needed */}
                    </Swiper>
                    <button onClick={goNext} className='w-[30px] h-[30px] bg-[#454545] flex justify-center items-center p-2'><IoIosArrowForward /></button>

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
                        {AllValueOfCarBox.map(car => (
                            <SwiperSlide key={car.id} className='mb-[55px] flex justify-center items-center'>
                                <CarBox {...car} />
                            </SwiperSlide>
                        ))}



                    </Swiper>
                </SwiperAllCarType>
            </div>



        </div>
    );
};

export default SwiperBrandNav;