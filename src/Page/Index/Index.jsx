import React from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import MainPhotos from '../../Component/MainPhotos/MainPhotos'
import SwiperBrand from '../../Component/SwiperBrand/SwiperBrand'
import SwiperAllCarType from '../../Component/SwiperAllCarType/SwiperAllCarType'
import FeaturedCars from '../../Component/FeaturedCars/FeaturedCars'

export default function Index() {
  return (
    <>
    <Header />
    <Menu />
    <MainPhotos />
    <SwiperBrand />
    <SwiperAllCarType />
    <FeaturedCars />
    </>
  )
}
