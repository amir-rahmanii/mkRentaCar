import React, { useState, useEffect } from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import Footer from '../../Component/Footer/Footer'
import CopyRight from '../../Component/CopyRight/CopyRight'
import ScroolTop from '../../Component/ScroolTop/ScroolTop'
import PaginatedItems from '../../Component/CarsInfoContainer/Pagination/PaginatedItems'
import SwiperBrand from '../../Component/SwiperBrand/SwiperBrand'



export default function Cars() {
   
    const [allCars, setAllCars] = useState([])
    const [allBrands, setAllBrands] = useState([])


    const getallbrands = () => {
      fetch(`http://localhost:5000/allBrands`)
        .then(res => res.json())
        .then(result => {
          setAllBrands(result)
        })
    }
   

    const getallcars = () => {
        fetch(`http://localhost:5000/cars`)
            .then(res => res.json())
            .then(result => {
                setAllCars(result)
            })
    }

    useEffect(() => {
        getallcars()
        getallbrands()
    }, [])
    return (
        <>
            <Header />
            <Menu />
            <img loading='lazy' src="images/carsimg.png" alt="cars" />
            <PaginatedItems allCars ={allCars} itemsPerPage={8}  />
            <SwiperBrand allBrands={allBrands} />
            <Footer />
            <CopyRight />
            <ScroolTop />
        </>
    )
}
