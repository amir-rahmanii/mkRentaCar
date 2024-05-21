import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import Button from '../Button/Button'
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { IoIosArrowDown } from "react-icons/io";


export default function CarBoxInfo(props) {

  const swiperRefMain = React.useRef(null);
  const swiperRef = React.useRef(null);
  const [srcDefaultValueSwiper, setSrcDefaultValueSwiper] = useState('')
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
   
      <div className={`font-light w-auto lg:w-[866px] xl:w-[966px] overflow-hidden text-white flex flex-col md:flex-row gap-6 bg-[#454545] p-2.5 shadow-[0_0px_10px_0px_rgba(228,166,0)] hover:outline hover:outline-orangeCus rounded-[15px] mb-[30px]`}>
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


                {props.cover.map((cov) => (
                  <SwiperSlide key={cov.id} >
                    {({ isActive }) => (
                      <div>{isActive ? (
                        <>
                          {setSrcDefaultValueSwiper(cov.img)}
                          <img className='w-auto' src={cov.img} alt="img" />
                        </>
                      ) : (
                        <img className='w-auto' src={cov.img} alt="img" />
                      )}</div>
                    )}
                  </SwiperSlide>
                ))}



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

                {props.cover.map((cov) => (
                  <SwiperSlide key={cov.id} >
                    <div onClick={() => setSrcDefaultValueSwiper(cov.img)} className={`border-2 cursor-pointer ${srcDefaultValueSwiper == cov.img ? " border-[#63FA55]" : "border-white"}`}>
                      <img className='w-auto' src={cov.img} alt="img" />
                    </div>
                  </SwiperSlide>
                ))}





                {/* Add more slides as needed */}
              </Swiper>


              {/* <button onClick={goNext} className='w-[25px] h-[25px] z-40 absolute top-[16px] right-2.5 bg-[#454545] flex justify-center items-center p-2 transition-all duration-300 hover:bg-orangeCus'><IoIosArrowForward /></button> */}


            </div>
          </div>
        </div>

        {/* infos */}
        <div className='w-full'>
          {/* name */}
          <Link to={`/cars/${props.hrefCarType}/${props.href}`} className='cursor-pointer font-bold text-[21px]/[25px] hover:text-orangeCus2 transition-all duration-300'>{props.title}</Link>
          {/* type of car */}
          <p className='text-sm/[21px] py-2.5'>{props.carType}</p>

          {/* price offers */}
          <p className='font-italic line-through pb-[7px] pt-[5px] text-[16px]/[24px]'>{props.priceOffer} AED</p>
          {/* price */}
          <p className='font-bolditalic pb-[7px] text-[24px]/[30px]'>{props.price} AED</p>

          {/* Daily */}
          <p className='font-medium text-sm/[21px] pb-[7px] '>Daily</p>

          {/* Car infos */}
          <p className='font-medium text-[18px]/[21px] text-orangeCus py-[7px]'>Technical Specifications</p>


          <div className='flex justify-between' >
            <div onClick={() => setShowMoreOption(prevstate => !prevstate)} className={` ${showMoreOption ? "h-[350px]" : "h-[65px] overflow-hidden"} cursor-pointer w-full grid grid-cols-2 gap-x-20 transition-all duration-500`}>
              <p className='text-[9px]/7 font-medium'>COLOR : <span className='text-orangeCus font-bold text-[11px]'>{props.color}</span></p>
              <p className='text-[9px]/7 font-medium'>ENGINE : <span className='text-orangeCus font-bold text-[11px]'>{props.engine}</span></p>
              <p className='text-[9px]/7 font-medium'>FREE PICKUP-DROP OFF : <span className='text-orangeCus font-bold text-[11px]'>{props.Freepickup}</span></p>
              <p className='text-[9px]/7 font-medium'>AUX : <span className='text-orangeCus font-bold text-[11px]'>{props.aux}</span></p>
              <p className='text-[9px]/7 font-medium'>USB : <span className='text-orangeCus font-bold text-[11px]'>{props.usb}</span></p>
              <p className='text-[9px]/7 font-medium'>Bluetooth : <span className='text-orangeCus font-bold text-[11px]'>{props.Bluetooth}</span></p>
              <p className='text-[9px]/7 font-medium'>Automotic : <span className='text-orangeCus font-bold text-[11px]'>{props.Automotic}</span></p>
              <p className='text-[9px]/7 font-medium'>Parking Sensor  : <span className='text-orangeCus font-bold text-[11px]'>{props.Parksensor}</span></p>
              <p className='text-[9px]/7 font-medium'>Navigation : <span className='text-orangeCus font-bold text-[11px]'>{props.Navigation}</span></p>
              <p className='text-[9px]/7 font-medium'>Front & Reverse Camera  : <span className='text-orangeCus font-bold text-[11px]'>{props.frontReverseCamera}</span></p>
              <p className='text-[9px]/7 font-medium'>Full Insurance  : <span className='text-orangeCus font-bold text-[11px]'>{props.FullInsurance}</span></p>
              <p className='text-[9px]/7 font-medium'>Free Cancellation  : <span className='text-orangeCus font-bold text-[11px]'>{props.FreeCancellation}</span></p>
              <p className='text-[9px]/7 font-medium'>24/7 Customer Service : <span className='text-orangeCus font-bold text-[11px]'>{props.CustomerService}</span></p>
              <p className='text-[9px]/7 font-medium'>Seats : <span className='text-orangeCus font-bold text-[11px]'>{props.Seats}</span></p>
              <p className='text-[9px]/7 font-medium'>Doors  : <span className='text-orangeCus font-bold text-[11px]'>{props.Doors}</span></p>
              <p className='text-[9px]/7 font-medium'>Luggage  : <span className='text-orangeCus font-bold text-[11px]'>{props.Luggage}</span></p>
              <p className='text-[9px]/7 font-medium'>Security Type  : <span className='text-orangeCus font-bold text-[11px]'>{props.SecurityType}</span></p>
              <p className='text-[9px]/7 font-medium'>Payment Type  : <span className='text-orangeCus font-bold text-[11px]'>{props.PaymentType}</span></p>
              <p className='text-[9px]/7 font-medium'>Mileage Daily, KM  : <span className='text-orangeCus font-bold text-[11px]'>{props.MileageDailyKM}</span></p>
              <p className='text-[9px]/7 font-medium'>Cost of Extra Km  : <span className='text-orangeCus font-bold text-[11px]'>{props.CostofExtraKm}</span></p>
              <p className='text-[9px]/7 font-medium'>Security Amount, AED  : <span className='text-orangeCus font-bold text-[11px]'>{props.SecurityAmountAED}</span></p>
              <p className='text-[9px]/7 font-medium'>Cruise Control  : <span className='text-orangeCus font-bold text-[11px]'>{props.CruiseControl}</span></p>
            </div>
            <div onClick={() => setShowMoreOption(prevstate => !prevstate)} className={`${showMoreOption ? "rotate-180 transition-all duration-500 " : "rotate-0 transition-all duration-700  text-blue-600"}  cursor-pointer w-7 h-7 flex items-center justify-center text-xl bg-orangeCus`}>
              <IoIosArrowDown />
            </div>
          </div>

          <div className='flex flex-col gap-[15px] md:gap-0 md:flex-row text-center justify-between'>
            <Button link={`/cars/${props.hrefCarType}/${props.href}`} classes="shadow-[0_0px_10px_0px_rgba(255,255,255)] py-2.5 px-4 text-[15px]/[22.5px] rounded-md">
              <span>Send Enquiry</span>
            </Button>

            {/* logo whatsapp */}
            <Link to='#' className='flex items-center justify-center gap-[5px] bg-[#05BB00] px-4 py-2.5 rounded-md'>
              <img className='w-6 h-6' src="https://mkrentacar.com/public/assets/images/whatsapp-icon.png" alt="whatsappimg" />
              <span className='text-[15px]/[22px]'>Chat With Us</span>
            </Link>
          </div>

        </div>
      </div>
    
  )
}



