import React, { useState, useEffect } from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import Footer from '../../Component/Footer/Footer'
import CopyRight from '../../Component/CopyRight/CopyRight'
import ScroolTop from '../../Component/ScroolTop/ScroolTop'
import CarsInfoContainer from '../../Component/CarsInfoContainer/CarsInfoContainer'


export default function Cars() {
    const [allCars, setAllCars] = useState([])




    const getallcars = () => {
        fetch(`http://localhost:5000/cars`)
            .then(res => res.json())
            .then(result => {
                setAllCars(result)
            })
    }

    useEffect(() => {
        getallcars()
    }, [])
    return (
        <>
            <Header />
            <Menu />
            <img loading='lazy' src="images/carsimg.png" alt="cars" />
            <CarsInfoContainer allCars={allCars} />
            <Footer />
            <CopyRight />
            <ScroolTop />
        </>
    )
}
