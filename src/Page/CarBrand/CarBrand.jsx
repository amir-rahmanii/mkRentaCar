import React, { useState, useEffect } from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import Footer from '../../Component/Footer/Footer'
import CopyRight from '../../Component/CopyRight/CopyRight'
import ScroolTop from '../../Component/ScroolTop/ScroolTop'
import PaginatedItems from '../../Component/CarsInfoContainer/Pagination/PaginatedItems'
import SwiperBrand from '../../Component/SwiperBrand/SwiperBrand'
import { useParams } from 'react-router-dom'

export default function CarBrand() {
    const [allCars, setAllCars] = useState([])
    const [allBrands, setAllBrands] = useState([])
    const [banerBrandCar , setbanerBrandCar] = useState("")
    const params = useParams()


    const getallbrands = () => {
        fetch(`http://localhost:5000/allBrands`)
            .then(res => res.json())
            .then(result => {
                setAllBrands(result)
                let brandFiltered = result.filter(car => car.href == params.brand)
                setbanerBrandCar(brandFiltered[0].baner)
            })
    }
 



    const getallcars = () => {
        fetch(`http://localhost:5000/cars?hrefBrand=${params.brand}`)
            .then(res => res.json())
            .then(result => {
                setAllCars(result)
            })
    }
    

    useEffect(() => {
        getallcars()
        getallbrands()
    }, [params])
    return (
        <>
            <Header />
            <Menu />
            <img loading='lazy' src={banerBrandCar} alt="cars" />
            <PaginatedItems allCars={allCars} itemsPerPage={8} />
            <SwiperBrand allBrands={allBrands} />
            <Footer />
            <CopyRight />
            <ScroolTop />

        </>
    )
}
