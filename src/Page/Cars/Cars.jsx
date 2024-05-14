import React, { useState, useEffect } from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import Footer from '../../Component/Footer/Footer'
import CopyRight from '../../Component/CopyRight/CopyRight'
import ScroolTop from '../../Component/ScroolTop/ScroolTop'
import CarBox from '../../Component/CarBox/CarBox'
import CarBoxInfo from '../../Component/CarBoxInfo/CarBoxInfo'

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
            <div className='bg-black'>
                <div className='container'>
                    <CarBoxInfo />
                </div>
            </div>
            <Footer />
            <CopyRight />
            <ScroolTop />
        </>
    )
}
