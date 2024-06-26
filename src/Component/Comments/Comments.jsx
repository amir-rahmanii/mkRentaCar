
import SwiperAllCarType from '../SwiperAllCarType/SwiperAllCarType'
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import { useTranslation } from 'react-i18next';

export default function Comments() {
    const [allComents, setAllComents] = useState([])

    //translate
    const { t } = useTranslation()


    const getallcomments = () => {
        fetch(`https://mkrentacar.liara.run/comments`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json()
            })
            .then(result => {
                setAllComents(result)
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));


    }

    useEffect(() => {
        getallcomments()
    }, [])
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };
    return (
        <div className='bg-black pt-5 md:py-5 font-medium'>
            <div className='container'>
                <div className='text-white mb-3 md:mb-8 flex flex-col items-center justify-center gap-[15px] font-medium'>
                    <p className='text-lg/[21px] font-medium text-center'>{t("Latest Testimonial")}</p>
                    <p className='text-xl/[24px] md:text-[35px]/[42px] text-center font-bold'>{t("What They Say About Us")}</p>
                    <p className='text-[#B8B8B8] text-base font-medium text-center'>{t("This was our best experience with MASTERKEY")}</p>
                </div>

                <SwiperAllCarType bgcolor="bg-black">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        speed={1200}
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                        breakpoints={{
                            716: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1160: {
                                slidesPerView: 3,
                                spaceBetween: 30
                            },
                        }}
                    >

                        {allComents.filter(comment => comment.isRegister === 1).map((comment) => (
                            <SwiperSlide key={comment.id} className='mb-[55px]  flex justify-center items-center'>
                                <div className='text-white bg-[#454545] w-full h-[283px] p-2.5 md:p-10 rounded-2xl flex flex-col gap-10'>
                                    <span className='line-clamp-3 h-[76px] md:h-[63px] text-base md:text-xs/[21px] tracking-[1px]'>
                                        {comment.body}
                                    </span>

                                    {/* img and name and date*/}
                                    <div className='flex items-center gap-3'>
                                        <img loading='lazy' className='rounded-full' src="/images/comment/testimonial.jpg" alt="1" />
                                        <div className='flex flex-col gap-2'>
                                            <span className='text-xs md:text-base line-clamp-1'>{comment.carName.toUpperCase()}</span>
                                            <span className='text-xs md:text-base line-clamp-1'>{comment.name.toUpperCase()}</span>
                                            <span className='text-xs md:text-base'>{comment.date.slice(0, 10)}</span>

                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}





                    </Swiper>
                </SwiperAllCarType>
            </div>
        </div>
    )
}
