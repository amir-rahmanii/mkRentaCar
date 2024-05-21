import React, { useState, useEffect } from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import Footer from '../../Component/Footer/Footer'
import CopyRight from '../../Component/CopyRight/CopyRight'
import ScroolTop from '../../Component/ScroolTop/ScroolTop'
import PaginatedItems from '../../Component/CarsInfoContainer/Pagination/PaginatedItems'
import SwiperBrand from '../../Component/SwiperBrand/SwiperBrand'
import { useParams } from 'react-router-dom'


export default function CarInfos() {
    const [allCars, setAllCars] = useState([])
    const [allBrands, setAllBrands] = useState([])
    const params = useParams()
    const [randomBanerForCarType , setRandomBanerForCarType] = useState('')
    
    
    
    const getonerandomBanerForCarType = () => {
        let randomNumber = Math.floor(Math.random() * 6);
        fetch(`http://localhost:5000/randomBanerForCarType`)
        .then(res => res.json())
        .then(result => {
            setRandomBanerForCarType(result[randomNumber].img)
        })
    }


    const getallbrands = () => {
        fetch(`http://localhost:5000/allBrands`)
            .then(res => res.json())
            .then(result => {
                setAllBrands(result)
            })
    }



    const getallcars = () => {
        fetch(`http://localhost:5000/cars?hrefCarType=${params.type}`)
            .then(res => res.json())
            .then(result => {
                setAllCars(result)
            })
    }
    useEffect(() => {
        getallbrands()
    }, [])
    
    useEffect(() => {
        getallcars()
        getonerandomBanerForCarType()
    }, [params])
    return (
        <>
            <Header />
            <Menu />
            <img loading='lazy' src={randomBanerForCarType} alt="cars" />
            <PaginatedItems allCars={allCars} itemsPerPage={8} />
            <SwiperBrand allBrands={allBrands} />
            <Footer />
            <CopyRight />
            <ScroolTop />

        </>
    )
}
