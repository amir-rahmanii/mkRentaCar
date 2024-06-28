import React, { useState, useEffect } from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import Footer from '../../Component/Footer/Footer'
import CopyRight from '../../Component/CopyRight/CopyRight'
import ScroolTop from '../../Component/ScroolTop/ScroolTop'
import SwiperBrand from '../../Component/SwiperBrand/SwiperBrand'
import { useParams } from 'react-router-dom'
import CarBoxInfoOne from '../../Component/CarBoxInfoOne/CarBoxInfoOne'
import TableOneCar from '../../Component/CarBoxInfoOne/TableOneCar'


export default function CarsTypeCar() {
    const [allCars, setAllCars] = useState([])
    const [allBrands, setAllBrands] = useState([])
    const [oneBrand, setOneBrand] = useState("")
    const params = useParams()
    




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


    const getallcars = () => {
        fetch(`https://mkrentacar.liara.run/cars?href=${params.carInfo}`)
             .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json()
            })
            .then(result => {
                setAllCars(result)
                setOneBrand(result[0].hrefBrand)
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));

    }
    useEffect(() => {
        getallcars()
        getallbrands()
    }, [])

    return (
        <>
            <Header />
            <div className='bg-black'>
                <Menu />
                <img loading='lazy' src='/images/allcars.png' alt="cars" />
                <div className='container py-14'>
                    <div className={`flex flex-col md:flex-row justify-between`}>
                            {allCars.length && (
                                <CarBoxInfoOne allCars={allCars[0]} />
                            )}
                            {(allBrands.length && allCars.length) && (
                                <TableOneCar oneBrand={oneBrand} allCars={allCars[0]} />
                            )}
                    </div>
                </div>
                <SwiperBrand allBrands={allBrands} />
            </div>
            <Footer />
            <CopyRight />
            <ScroolTop />
        </>
    )
}
