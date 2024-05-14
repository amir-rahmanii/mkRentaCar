import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import Button from '../Button/Button'
import { Link } from 'react-router-dom';
import "./CarBoxInfo.css"
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


export default function CarBoxInfo() {

  const swiperRefMain = React.useRef(null);
  const swiperRef = React.useRef(null);
  const [srcDefaultValueSwiper, setSrcDefaultValueSwiper] = useState('images/cars/audi.jpg')
  const [thumbsSwiper, setThumbsSwiper] = useState(null);



  const goNext = () => {
    swiperRef.current.slideNext();
  };
  const goPrev = () => {
    swiperRef.current.slidePrev();
  };
  const goNextmain = () => {
    swiperRefMain.current.slideNext();
  };
  const goPrevmain = () => {
    swiperRefMain.current.slidePrev();
  };




  return (
    <div className='font-light text-white bg-[#454545] p-2.5 shadow-[0_0px_10px_0px_rgba(228,166,0)] hover:border-2 hover:border-orangeCus rounded-[15px]'>
      {/* Swipers */}
      <div className='flex flex-col'>
        {/* sw1 */}
        <div className='w-[379px]'>
          <div className='mb-3 md:mb-5 relative'>

            <button onClick={goPrevmain} className='w-[30px] h-[30px] z-40 absolute top-[110px] left-5 bg-[#454545] flex justify-center items-center p-2 transition-all duration-300 hover:bg-orangeCus'><IoIosArrowBack /></button>

            <Swiper
              initialSlide={1}
              navigation={{ prevEl: '.custom-prevmain', nextEl: '.custom-nextmain' }}
              onSwiper={(swiper) => (swiperRefMain.current = swiper)}
              slidesPerView={1}
              spaceBetween={20}
              speed={1200}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"

            >



              <SwiperSlide >
                <img className='w-auto' src="images/cars/audi.jpg" alt="1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-auto' src="images/cars/bmw.jpg" alt="1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-auto' src="images/cars/farmon.jpg" alt="1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-auto' src="images/cars/ferrari.jpg" alt="1" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-auto' src="images/cars/mini.jpg" alt="1" />
              </SwiperSlide>



              {/* Add more slides as needed */}
            </Swiper>


            <button onClick={goNextmain} className='w-[30px] h-[30px] z-40 absolute top-[110px] right-5 bg-[#454545] flex justify-center items-center p-2 transition-all duration-300 hover:bg-orangeCus'><IoIosArrowForward /></button>


          </div>
        </div>
        {/* sw2 */}
        <div className='w-[379px]'>
          <div className='mb-3 md:mb-5 relative'>

            {/* <button onClick={goPrev} className='w-[25px] h-[25px] z-40 absolute top-[16px] left-2.5 bg-[#454545] flex justify-center items-center p-2 transition-all duration-300 hover:bg-orangeCus'><IoIosArrowBack /></button> */}

            <Swiper
              onSwiper={
                (setThumbsSwiper)
              }
              slidesPerView={4}
              spaceBetween={20}
              speed={1200}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}


            >

              <SwiperSlide >
                <div onClick={() => setSrcDefaultValueSwiper("images/cars/audi.jpg")} className={`border-2 ${srcDefaultValueSwiper == "images/cars/audi.jpg" ? " border-[#63FA55]" : "border-white"}`}>
                  <img className='w-auto' src="images/cars/audi.jpg" alt="1" />
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div onClick={() => setSrcDefaultValueSwiper("images/cars/bmw.jpg")} className={`border-2 ${srcDefaultValueSwiper == "images/cars/bmw.jpg" ? " border-[#63FA55]" : "border-white"}`}>
                  <img className='w-auto' src="images/cars/bmw.jpg" alt="1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div onClick={() => setSrcDefaultValueSwiper("images/cars/farmon.jpg")} className={`border-2 ${srcDefaultValueSwiper == "images/cars/farmon.jpg" ? " border-[#63FA55]" : "border-white"}`}>
                  <img className='w-auto' src="images/cars/farmon.jpg" alt="1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div onClick={() => setSrcDefaultValueSwiper("images/cars/ferrari.jpg")} className={`border-2 ${srcDefaultValueSwiper == "images/cars/ferrari.jpg" ? " border-[#63FA55]" : "border-white"}`}>
                  <img className='w-auto' src="images/cars/ferrari.jpg" alt="1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div onClick={() => setSrcDefaultValueSwiper("images/cars/mini.jpg")} className={`border-2 ${srcDefaultValueSwiper == "images/cars/mini.jpg" ? " border-[#63FA55]" : "border-white"}`}>
                  <img className='w-auto' src="images/cars/mini.jpg" alt="1" />
                </div>
              </SwiperSlide>





              {/* Add more slides as needed */}
            </Swiper>


            {/* <button onClick={goNext} className='w-[25px] h-[25px] z-40 absolute top-[16px] right-2.5 bg-[#454545] flex justify-center items-center p-2 transition-all duration-300 hover:bg-orangeCus'><IoIosArrowForward /></button> */}


          </div>
        </div>
      </div>
    </div>
  )
}



