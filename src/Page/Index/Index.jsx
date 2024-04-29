import React from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import MainPhotos from '../../Component/MainPhotos/MainPhotos'
import SwiperBrand from '../../Component/SwiperBrand/SwiperBrand'
import FeaturedCars from '../../Component/FeaturedCars/FeaturedCars'
import SwiperBrandNav from '../../Component/SwiperBrandNav/SwiperBrandNav'
import LuxuryCar from '../../Component/LuxuryCar/LuxuryCar'


export default function Index() {
  return (
    <>
    <Header />
    <Menu />
    <MainPhotos />
    <SwiperBrand />
    <FeaturedCars />
    <SwiperBrandNav />
    <LuxuryCar />
    </>
  )
}
