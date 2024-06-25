import React from 'react'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n';

export default function OurRendalPackage() {
    const {t} = useTranslation();
    return (
        <>
            <div className=' bg-blackBack hidden md:block'>
                <img loading='lazy' className='w-full' src="images/2.png" alt="2" />
            </div>
            <div className={`py-5 bg-black block md:hidden font-medium text-white ${i18n.language === "ar" ? "rtlArabic" : ''}`}>
                <div className='container'>
                    <div>
                        {/* header */}
                        <p className='text-orangeCus text-xl/[24px]'>{t("OUR RENTAL PACKAGES INCLUDES")}</p>

                        {/* items */}
                        <div className='py-5 flex flex-col gap-2'>
                            <div className='flex items-center gap-[10px]'>
                                <div className='w-[30px] h-[30px] bg-[#363636] flex justify-center items-center rounded-full'>
                                    <img loading='lazy' className='w-5 h-5' src="/images/Rental/choose-1.png" alt="1" />
                                </div>
                                <p>{t("Pick-up & Drop-off")}</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='w-[30px] h-[30px] bg-[#363636] flex justify-center items-center rounded-full'>
                                    <img loading='lazy' className='w-5 h-5' src="/images/Rental/choose-1.png" alt="1" />
                                </div>
                                <p>{t("24/7 Roadside Assistance")}</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='w-[30px] h-[30px] bg-[#363636] flex justify-center items-center rounded-full'>
                                    <img loading='lazy' className='w-5 h-5' src="/images/Rental/choose-1.png" alt="1" />
                                </div>
                                <p>{t("First Class Service")}</p>
                            </div>
                            <div className='flex items-center gap-[10px]'>
                                <div className='w-[30px] h-[30px] bg-[#363636] flex justify-center items-center rounded-full'>
                                    <img loading='lazy' className='w-5 h-5' src="/images/Rental/choose-1.png" alt="1" />
                                </div>
                                <p>{t("Lowest Prices In Dubai Market")}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
