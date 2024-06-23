import React from 'react'

export default function OurRendalPackage() {
    return (
        <>
            <div className=' bg-blackBack hidden md:block'>
                <img loading='lazy' className='w-full' src="images/2.png" alt="2" />
            </div>
            <div className='py-5 bg-black block md:hidden font-medium text-white'>
                <div className='container'>
                    <div>
                        {/* header */}
                        <p className='text-orangeCus text-xl/[24px]'>OUR RENTAL PACKAGES INCLUDES</p>

                        {/* items */}
                        <div className='py-5 flex flex-col gap-2'>
                            <div className='flex items-center gap-[10px]'>
                                <div className='w-[30px] h-[30px] bg-[#363636] flex justify-center items-center rounded-full'>
                                    <img loading='lazy' className='w-5 h-5' src="	https://mkrentacar.com/public/assets/images/car-brand/choose-1.png" alt="1" />
                                </div>
                                <p>Pick-up & Drop-off</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='w-[30px] h-[30px] bg-[#363636] flex justify-center items-center rounded-full'>
                                    <img loading='lazy' className='w-5 h-5' src="	https://mkrentacar.com/public/assets/images/car-brand/choose-1.png" alt="1" />
                                </div>
                                <p>24/7 Roadside Assistance</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='w-[30px] h-[30px] bg-[#363636] flex justify-center items-center rounded-full'>
                                    <img loading='lazy' className='w-5 h-5' src="	https://mkrentacar.com/public/assets/images/car-brand/choose-1.png" alt="1" />
                                </div>
                                <p>First Class Service</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='w-[30px] h-[30px] bg-[#363636] flex justify-center items-center rounded-full'>
                                    <img loading='lazy' className='w-5 h-5' src="	https://mkrentacar.com/public/assets/images/car-brand/choose-1.png" alt="1" />
                                </div>
                                <p>Lowest Prices In Dubai Market</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
