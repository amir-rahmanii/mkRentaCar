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
    fetch(`https://mkrentacar.liara.run/cars`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      .then(result => {
        setAllCars(result)
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }

  const getallbrands = () => {
    fetch(`https://mkrentacar.liara.run/allBrands`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      .then(result => {
        setAllBrands(result)
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));

  }
  const getallcartype = () => {
    fetch(`https://mkrentacar.liara.run/carType`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      .then(result => {
        setAllCarType(result)
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));


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
      <SwiperBrandNav allInputs={allBrands} allCars={allCars} filtered={true} />
      <LuxuryCar />
      <FeaturedCars title="Best Deal Cars" select="BEST OFFER ON A SUV CAR BRAND" body="We have SUV cars that will help you experience the royal life that Dubai has to offer." />
      <SwiperBrandNav allInputs={allCarType} allCars={allCars} filtered={false} />
      <OurRendalPackage />
      <FeaturedCars title="Featured Cars" select="Select An Exotic & Convertible Car Brand" body="We have exotic cars that will help you experience the royal life that Dubai has to offer." />
      <SwiperBrandNav allInputs={allBrands} allCars={allCars} filtered={true} />
      <Comments />
      <Blogs />
      <Video />
      <Footer />
      <CopyRight />
      <ScroolTop />
    </>
  )
}
