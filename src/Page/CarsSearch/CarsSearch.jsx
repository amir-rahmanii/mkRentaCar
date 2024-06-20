import React, { useState, useEffect, useContext } from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import Footer from '../../Component/Footer/Footer'
import CopyRight from '../../Component/CopyRight/CopyRight'
import ScroolTop from '../../Component/ScroolTop/ScroolTop'
import CarBox from '../../Component/CarBox/CarBox'
import AuthContext from '../../Context/AuthContext'

export default function CarsSearch() {
    const [allCars, setAllCars] = useState([])
    const authContext = useContext(AuthContext)

    useEffect(() => {
        setAllCars(authContext.searchCars)
    }, [authContext.searchCars])

    return (
        <>
            <Header />
            <Menu />
            <img loading='lazy' src="images/allcars.png" alt="allcar" />
            <div className='bg-black py-14'>
                <div className='container'>
                    {allCars.length !== 0 ? (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-[15px] md:gap-y-14 gap-[15px] sm:gap-y-6'>
                        {allCars.filter(car => car.isRegister === 1).map((car) => (
                            <div key={car.id}>
                                <CarBox  {...car} />
                            </div>
                        ))}
                    </div>
                    ) : (
                        <h2 className='bg-black/80 mx-4 text-orangeCus2 text-[30px] text-center p-5 font-bold rounded-lg mt-5'>This filter was not found 😩</h2>
                    )}
                </div>
            </div>
            <Footer />
            <CopyRight />
            <ScroolTop />
        </>
    )
}