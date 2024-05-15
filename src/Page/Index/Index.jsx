import React, { useState, useEffect } from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import MainPhotos from '../../Component/MainPhotos/MainPhotos'
import SwiperBrand from '../../Component/SwiperBrand/SwiperBrand'
import FeaturedCars from '../../Component/FeaturedCars/FeaturedCars'
import SwiperBrandNav from '../../Component/SwiperBrandNav/SwiperBrandNav'
import LuxuryCar from '../../Component/LuxuryCar/LuxuryCar'
import OurRendalPackage from '../../Component/OurRendalPackage/OurRendalPackage'
import Comments from '../../Component/Comments/Comments'
import Blogs from '../../Component/Blogs/Blogs'

import Video from '../../Component/Video/Video'
import Footer from '../../Component/Footer/Footer'
import CopyRight from '../../Component/CopyRight/CopyRight'
import ScroolTop from '../../Component/ScroolTop/ScroolTop'
import PaginatedItems from '../../Component/CarsInfoContainer/Pagination/PaginatedItems'

export default function Index() {
  const [allBrands, setAllBrands] = useState([])
  const [allCarType, setAllCarType] = useState([])
  const [allCars, setAllCars] = useState([])

  const getallcars = () => {
    fetch(`http://localhost:5000/cars`)
      .then(res => res.json())
      .then(result => {
        setAllCars(result)
      })
  }

  const getallbrands = () => {
    fetch(`http://localhost:5000/allBrands`)
      .then(res => res.json())
      .then(result => {
        setAllBrands(result)
      })
  }
  const getallcartype = () => {
    fetch(`http://localhost:5000/carType`)
      .then(res => res.json())
      .then(result => {
        setAllCarType(result)
      })
  }
 
  useEffect(() => {
    getallbrands()
    getallcartype()
    getallcars()

  }, [])

  return (
    <>
      <Header />
      <Menu />
      <MainPhotos />
      <SwiperBrand allBrands={allBrands} allCarType={allCarType} />
      <FeaturedCars title="Featured Cars" select="Select A Luxury & Sports Car Brand" body="We have luxury cars that will help you experience the royal life that Dubai has to offer." />
      <SwiperBrandNav allInputs={allBrands} allCars={allCars} filtered = {true}/>
      <LuxuryCar />
      <FeaturedCars title="Best Deal Cars" select="BEST OFFER ON A SUV CAR BRAND" body="We have SUV cars that will help you experience the royal life that Dubai has to offer." />
      <SwiperBrandNav allInputs={allCarType} allCars={allCars} filtered={false}/>
      <OurRendalPackage />
      <FeaturedCars title="Featured Cars" select="Select An Exotic & Convertible Car Brand" body="We have exotic cars that will help you experience the royal life that Dubai has to offer." />
      <SwiperBrandNav allInputs={allBrands} allCars={allCars} filtered = {true} />
      <Comments />
      <Blogs />
      <Video />
      <Footer  />
      <CopyRight />
      <ScroolTop />
    </>
  )
}
