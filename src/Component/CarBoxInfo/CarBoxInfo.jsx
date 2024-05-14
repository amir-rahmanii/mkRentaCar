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
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";


export default function CarBoxInfo() {

  const swiperRefMain = React.useRef(null);
  const swiperRef = React.useRef(null);
  const [srcDefaultValueSwiper, setSrcDefaultValueSwiper] = useState('images/cars/audi.jpg')
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showMoreOption, setShowMoreOption] = useState(false)


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
    <div className={`font-light w-auto md:w-[966px] overflow-hidden text-white flex flex-col md:flex-row gap-6 bg-[#454545] p-2.5 shadow-[0_0px_10px_0px_rgba(228,166,0)] hover:border-2 hover:border-orangeCus rounded-[15px]`}>
      {/* Swipers */}
      <div className='flex flex-col'>
        {/* sw1 */}
        <div className='w-auto md:w-[379px]'>
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
                {({ isActive }) => (
                  <div>{isActive ? (
                    <>
                      {setSrcDefaultValueSwiper("images/cars/audi.jpg")}
                      <img className='w-auto' src="images/cars/audi.jpg" alt="1" />
                    </>
                  ) : (
                    <img className='w-auto' src="images/cars/audi.jpg" alt="1" />
                  )}</div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div>{isActive ? (
                    <>
                      {setSrcDefaultValueSwiper("images/cars/bmw.jpg")}
                      <img className='w-auto' src="images/cars/bmw.jpg" alt="1" />
                    </>
                  ) : (
                    <img className='w-auto' src="images/cars/bmw.jpg" alt="1" />
                  )}</div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div>{isActive ? (
                    <>
                      {setSrcDefaultValueSwiper("images/cars/farmon.jpg")}
                      <img className='w-auto' src="images/cars/farmon.jpg" alt="1" />
                    </>
                  ) : (
                    <img className='w-auto' src="images/cars/farmon.jpg" alt="1" />
                  )}</div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div>{isActive ? (
                    <>
                      {setSrcDefaultValueSwiper("images/cars/ferrari.jpg")}
                      <img className='w-auto' src="images/cars/ferrari.jpg" alt="1" />
                    </>
                  ) : (
                    <img className='w-auto' src="images/cars/ferrari.jpg" alt="1" />
                  )}</div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div>{isActive ? (
                    <>
                      {setSrcDefaultValueSwiper("images/cars/mini.jpg")}
                      <img className='w-auto' src="images/cars/mini.jpg" alt="1" />
                    </>
                  ) : (
                    <img className='w-auto' src="images/cars/mini.jpg" alt="1" />
                  )}</div>
                )}
              </SwiperSlide>



              {/* Add more slides as needed */}
            </Swiper>


            <button onClick={goNextmain} className='w-[30px] h-[30px] z-40 absolute top-[110px] right-5 bg-[#454545] flex justify-center items-center p-2 transition-all duration-300 hover:bg-orangeCus'><IoIosArrowForward /></button>


          </div>
        </div>
        {/* sw2 */}
        <div className='w-auto md:w-[379px]'>
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
                <div onClick={() => setSrcDefaultValueSwiper("images/cars/audi.jpg")} className={`border-2 cursor-pointer ${srcDefaultValueSwiper == "images/cars/audi.jpg" ? " border-[#63FA55]" : "border-white"}`}>
                  <img className='w-auto' src="images/cars/audi.jpg" alt="1" />
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div onClick={() => setSrcDefaultValueSwiper("images/cars/bmw.jpg")} className={`border-2  cursor-pointer${srcDefaultValueSwiper == "images/cars/bmw.jpg" ? " border-[#63FA55]" : "border-white"}`}>
                  <img className='w-auto' src="images/cars/bmw.jpg" alt="1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div onClick={() => setSrcDefaultValueSwiper("images/cars/farmon.jpg")} className={`border-2 cursor-pointer ${srcDefaultValueSwiper == "images/cars/farmon.jpg" ? " border-[#63FA55]" : "border-white"}`}>
                  <img className='w-auto' src="images/cars/farmon.jpg" alt="1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div onClick={() => setSrcDefaultValueSwiper("images/cars/ferrari.jpg")} className={`border-2 cursor-pointer ${srcDefaultValueSwiper == "images/cars/ferrari.jpg" ? " border-[#63FA55]" : "border-white"}`}>
                  <img className='w-auto' src="images/cars/ferrari.jpg" alt="1" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div onClick={() => setSrcDefaultValueSwiper("images/cars/mini.jpg")} className={`border-2  cursor-pointer${srcDefaultValueSwiper == "images/cars/mini.jpg" ? " border-[#63FA55]" : "border-white"}`}>
                  <img className='w-auto' src="images/cars/mini.jpg" alt="1" />
                </div>
              </SwiperSlide>





              {/* Add more slides as needed */}
            </Swiper>


            {/* <button onClick={goNext} className='w-[25px] h-[25px] z-40 absolute top-[16px] right-2.5 bg-[#454545] flex justify-center items-center p-2 transition-all duration-300 hover:bg-orangeCus'><IoIosArrowForward /></button> */}


          </div>
        </div>
      </div>

      {/* infos */}
      <div className='w-full'>
        {/* name */}
        <Link to="#" className='font-bold text-[21px]/[25px] hover:text-orangeCus2 transition-all duration-300'>Mini Cooper Black</Link>
        {/* type of car */}
        <p className='text-sm/[21px] py-2.5'>Economy Cars</p>

        {/* price offers */}
        <p className='font-italic line-through pb-[7px] pt-[5px] text-[16px]/[24px]'>400 AED</p>
        {/* price */}
        <p className='font-bolditalic pb-[7px] text-[24px]/[30px]'>350 AED</p>

        {/* Daily */}
        <p className='font-medium text-sm/[21px] pb-[7px] '>Daily</p>

        {/* Car infos */}
        <p className='font-medium text-[18px]/[21px] text-orangeCus py-[7px]'>Technical Specifications</p>


        <div className='flex justify-between' >
          <div className={` ${showMoreOption ? "h-[330px]" : "h-[61px] overflow-hidden"} w-full grid grid-cols-2 gap-x-20 transition-all duration-500`}>
            <p className='text-[9px]/7 font-medium'>COLOR : <span className='text-orangeCus font-bold text-[11px]'>Black</span></p>
            <p className='text-[9px]/7 font-medium'>ENGINE : <span className='text-orangeCus font-bold text-[11px]'>2.0 i4</span></p>
            <p className='text-[9px]/7 font-medium'>FREE PICKUP-DROP OFF : <span className='text-orangeCus font-bold text-[11px]'>Yes</span></p>
            <p className='text-[9px]/7 font-medium'>AUX : <span className='text-orangeCus font-bold text-[11px]'>Yes</span></p>
            <p className='text-[9px]/7 font-medium'>USB : <span className='text-orangeCus font-bold text-[11px]'>Yes</span></p>
            <p className='text-[9px]/7 font-medium'>Bluetooth : <span className='text-orangeCus font-bold text-[11px]'>Yes</span></p>
            <p className='text-[9px]/7 font-medium'>Automotic : <span className='text-orangeCus font-bold text-[11px]'>Yes</span></p>
            <p className='text-[9px]/7 font-medium'>Parking Sensor  : <span className='text-orangeCus font-bold text-[11px]'>Yes</span></p>
            <p className='text-[9px]/7 font-medium'>Navigation : <span className='text-orangeCus font-bold text-[11px]'>Yes</span></p>
            <p className='text-[9px]/7 font-medium'>Front & Reverse Camera  : <span className='text-orangeCus font-bold text-[11px]'>Yes</span></p>
            <p className='text-[9px]/7 font-medium'>Full Insurance  : <span className='text-orangeCus font-bold text-[11px]'>Yes</span></p>
            <p className='text-[9px]/7 font-medium'>Free Cancellation  : <span className='text-orangeCus font-bold text-[11px]'>Yes</span></p>
            <p className='text-[9px]/7 font-medium'>24/7 Customer Service : <span className='text-orangeCus font-bold text-[11px]'>Yes</span></p>
            <p className='text-[9px]/7 font-medium'>Seats : <span className='text-orangeCus font-bold text-[11px]'>4</span></p>
            <p className='text-[9px]/7 font-medium'>Doors  : <span className='text-orangeCus font-bold text-[11px]'>2</span></p>
            <p className='text-[9px]/7 font-medium'>Luggage  : <span className='text-orangeCus font-bold text-[11px]'>2</span></p>
            <p className='text-[9px]/7 font-medium'>Security Type  : <span className='text-orangeCus font-bold text-[11px]'>Credit Card & Cash</span></p>
            <p className='text-[9px]/7 font-medium'>Payment Type  : <span className='text-orangeCus font-bold text-[11px]'>Credit Card & Cash</span></p>
            <p className='text-[9px]/7 font-medium'>Mileage Daily, KM  : <span className='text-orangeCus font-bold text-[11px]'>250</span></p>
            <p className='text-[9px]/7 font-medium'>Cost of Extra Km  : <span className='text-orangeCus font-bold text-[11px]'>_</span></p>
            <p className='text-[9px]/7 font-medium'>Security Amount, AED  : <span className='text-orangeCus font-bold text-[11px]'>2500</span></p>
            <p className='text-[9px]/7 font-medium'>Cruise Control  : <span className='text-orangeCus font-bold text-[11px]'>Yes</span></p>
          </div>
          <div onClick={() => setShowMoreOption(prevstate => !prevstate)} className={`${showMoreOption ? "rotate-180 transition-all duration-500 "  : "rotate-0 transition-all duration-700  text-blue-600"}  cursor-pointer w-7 h-7 flex items-center justify-center text-xl bg-orangeCus`}>
          <IoIosArrowDown />
          </div>
        </div>

        <div className='flex justify-between'>
          <Button link='#' classes="shadow-[0_0px_10px_0px_rgba(255,255,255)] py-2.5 px-4 text-[15px]/[22.5px] rounded-md">
            <span>Send Enquiry</span>
          </Button>

          {/* logo whatsapp */}
          <Link to='#' className='flex items-center gap-[5px] bg-[#05BB00] px-4 py-2.5 rounded-md'>
            <img className='w-6 h-6' src="https://mkrentacar.com/public/assets/images/whatsapp-icon.png" alt="whatsappimg" />
            <span className='text-[15px]/[22px]'>Chat With Us</span>
          </Link>
        </div>

      </div>
    </div>
  )
}



