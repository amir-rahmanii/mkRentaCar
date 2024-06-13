import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';



export default function CarBoxInfoOne({allCars}) {
    const swiperRefMain = React.useRef(null);
    const swiperRef = React.useRef(null);
    const [srcDefaultValueSwiper, setSrcDefaultValueSwiper] = useState('')
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [showMoreOption, setShowMoreOption] = useState(false)


    // const goNext = () => {
    //   swiperRef.current.slideNext();
    // };
    // const goPrev = () => {
    //   swiperRef.current.slidePrev();
    // };
    const goNextmain = () => {
        swiperRefMain.current.slideNext();
    };
    const goPrevmain = () => {
        swiperRefMain.current.slidePrev();
    };



    return ( 
        <div className={`font-light w-auto md:w-[536px] lg:w-[636px] xl:w-[736px] overflow-hidden text-white flex flex-col gap-3 bg-[#454545] p-4 md:p-[45px] m-[5px] shadow-[0_0px_23px_0px_rgba(253,177,0)] hover:outline hover:outline-orangeCus rounded-[15px] mb-[30px]`}>
            {/* Swipers */}
            <div className='flex flex-col'>
                {/* sw1 */}
                <div className='w-auto'>
                    <div className='mb-3 md:mb-5 relative'>

                        <button onClick={goPrevmain} className='w-[30px] h-[30px] z-40 absolute top-[120px] sm:top-[200px] md:top-[145px] lg:top-[185px] xl:top-[217px] left-5 bg-[#454545] flex justify-center items-center p-2 transition-all duration-300 hover:bg-orangeCus'><IoIosArrowBack /></button>

                        <Swiper
                            initialSlide={0}
                            navigation={{ prevEl: '.custom-prevmain', nextEl: '.custom-nextmain' }}
                            onSwiper={(swiper) => (swiperRefMain.current = swiper)}
                            slidesPerView={1}
                            spaceBetween={20}
                            speed={1200}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"

                        >


                            {allCars.cover.map((cov) => (
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


                        <button onClick={goNextmain} className='w-[30px] h-[30px] z-40 absolute top-[120px] sm:top-[200px] md:top-[145px] lg:top-[185px] xl:top-[217px] right-5 bg-[#454545] flex justify-center items-center p-2 transition-all duration-300 hover:bg-orangeCus'><IoIosArrowForward /></button>


                    </div>
                </div>
                {/* sw2 */}
                <div className='w-auto'>
                    <div className='mb-1 md:mb-2 relative'>

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

                            {allCars.cover.map((cov) => (
                                <SwiperSlide key={cov.id} >
                                    <div onClick={() => setSrcDefaultValueSwiper(cov.img)} className={`border-2  cursor-pointer ${srcDefaultValueSwiper == cov.img ? " border-[#63FA55]" : "border-white"}`}>
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
                <h4 className='text-[30px]/[36px] font-bold'>{allCars.title}</h4>
                <p className='cursor-pointer'>{allCars.title}</p>
                {/* type of car */}
                <p className=''>{allCars.carType}</p>
                {/* price offers */}
                <p className='line-through pt-[5px] text-[#737F96]'>{allCars.priceOffer} AED</p>
                {/* price */}
                <p className='font-bold text-[18px]/[21px]'>{allCars.price} AED</p>

                {/* body */}
                <div className='mt-4'>
                    <h1 className='text-[36px]/[43px] font-bold'>Rent a {allCars.title}</h1>
                    <p className='pt-4 text-sm/[29px]'>
                        {allCars.body}
                    </p>
                </div>

                {/* Car infos */}
                <p className='font-medium text-[18px]/[21px] text-orangeCus py-[8px]'>Technical Specifications</p>


                    <div className={`w-full grid grid-cols-2 xl:grid-cols-3 gap-x-10 transition-all duration-500`}>
                        <p className='text-[9px]/7 font-medium'>COLOR : <span className='text-orangeCus font-bold text-[11px]'>{allCars.color}</span></p>
                        <p className='text-[9px]/7 font-medium'>ENGINE : <span className='text-orangeCus font-bold text-[11px]'>{allCars.engine}</span></p>
                        <p className='text-[9px]/7 font-medium'>FREE PICKUP-DROP OFF : <span className='text-orangeCus font-bold text-[11px]'>{allCars.Freepickup}</span></p>
                        <p className='text-[9px]/7 font-medium'>AUX : <span className='text-orangeCus font-bold text-[11px]'>{allCars.aux}</span></p>
                        <p className='text-[9px]/7 font-medium'>USB : <span className='text-orangeCus font-bold text-[11px]'>{allCars.usb}</span></p>
                        <p className='text-[9px]/7 font-medium'>Bluetooth : <span className='text-orangeCus font-bold text-[11px]'>{allCars.Bluetooth}</span></p>
                        <p className='text-[9px]/7 font-medium'>Automotic : <span className='text-orangeCus font-bold text-[11px]'>{allCars.Automotic}</span></p>
                        <p className='text-[9px]/7 font-medium'>Parking Sensor  : <span className='text-orangeCus font-bold text-[11px]'>{allCars.Parksensor}</span></p>
                        <p className='text-[9px]/7 font-medium'>Navigation : <span className='text-orangeCus font-bold text-[11px]'>{allCars.Navigation}</span></p>
                        <p className='text-[9px]/7 font-medium'>Front & Reverse Camera  : <span className='text-orangeCus font-bold text-[11px]'>{allCars.frontReverseCamera}</span></p>
                        <p className='text-[9px]/7 font-medium'>Full Insurance  : <span className='text-orangeCus font-bold text-[11px]'>{allCars.FullInsurance}</span></p>
                        <p className='text-[9px]/7 font-medium'>Free Cancellation  : <span className='text-orangeCus font-bold text-[11px]'>{allCars.FreeCancellation}</span></p>
                        <p className='text-[9px]/7 font-medium'>24/7 Customer Service : <span className='text-orangeCus font-bold text-[11px]'>{allCars.CustomerService}</span></p>
                        <p className='text-[9px]/7 font-medium'>Seats : <span className='text-orangeCus font-bold text-[11px]'>{allCars.Seats}</span></p>
                        <p className='text-[9px]/7 font-medium'>Doors  : <span className='text-orangeCus font-bold text-[11px]'>{allCars.Doors}</span></p>
                        <p className='text-[9px]/7 font-medium'>Luggage  : <span className='text-orangeCus font-bold text-[11px]'>{allCars.Luggage}</span></p>
                        <p className='text-[9px]/7 font-medium'>Security Type  : <span className='text-orangeCus font-bold text-[11px]'>{allCars.SecurityType}</span></p>
                        <p className='text-[9px]/7 font-medium'>Payment Type  : <span className='text-orangeCus font-bold text-[11px]'>{allCars.PaymentType}</span></p>
                        <p className='text-[9px]/7 font-medium'>Mileage Daily, KM  : <span className='text-orangeCus font-bold text-[11px]'>{allCars.MileageDailyKM}</span></p>
                        <p className='text-[9px]/7 font-medium'>Cost of Extra Km  : <span className='text-orangeCus font-bold text-[11px]'>{allCars.CostofExtraKm}</span></p>
                        <p className='text-[9px]/7 font-medium'>Security Amount, AED  : <span className='text-orangeCus font-bold text-[11px]'>{allCars.SecurityAmountAED}</span></p>
                        <p className='text-[9px]/7 font-medium'>Cruise Control  : <span className='text-orangeCus font-bold text-[11px]'>{allCars.CruiseControl}</span></p>
                    </div>
            </div>
        </div>
    )
}
