import React from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import MainPhotos from '../../Component/MainPhotos/MainPhotos'
import SwiperBrand from '../../Component/SwiperBrand/SwiperBrand'
import FeaturedCars from '../../Component/FeaturedCars/FeaturedCars'
import SwiperBrandNav from '../../Component/SwiperBrandNav/SwiperBrandNav'
import LuxuryCar from '../../Component/LuxuryCar/LuxuryCar'
import OurRendalPackage from '../../Component/OurRendalPackage/OurRendalPackage'
import Comments from '../../Component/Comments/Comments'


export default function Index() {
  return (
    <>
      <Header />
      <Menu />
      <MainPhotos />
      <SwiperBrand />
      <FeaturedCars title="Featured Cars" select="Select A Luxury & Sports Car Brand" body="We have luxury cars that will help you experience the royal life that Dubai has to offer." />
      <SwiperBrandNav />
      <LuxuryCar />
      <FeaturedCars title="Best Deal Cars" select="BEST OFFER ON A SUV CAR BRAND" body="We have SUV cars that will help you experience the royal life that Dubai has to offer." />
      <SwiperBrandNav />
      <OurRendalPackage />
      <FeaturedCars title="Featured Cars" select="Select An Exotic & Convertible Car Brand" body="We have exotic cars that will help you experience the royal life that Dubai has to offer." />
      <SwiperBrandNav />
      <Comments />
    </>
  )
}
