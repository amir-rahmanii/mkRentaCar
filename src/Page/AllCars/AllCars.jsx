import React, { useState, useEffect } from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import Footer from '../../Component/Footer/Footer'
import CopyRight from '../../Component/CopyRight/CopyRight'
import ScroolTop from '../../Component/ScroolTop/ScroolTop'
import CarBox from '../../Component/CarBox/CarBox'

export default function AllCars() {
  const [allCars, setAllCars] = useState([])

  const getallcars = () => {
    fetch(`https://mkrentacar.liara.run/cars`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(result => {
        setAllCars(result)
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }



  useEffect(() => {
    getallcars()
  }, [])
  return (
    <>
      <Header />
      <Menu />
      <img  loading='lazy' src="images/allcars.png" alt="allcar" />
      <div className='bg-black py-14'>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-x-[15px] md:gap-y-14 gap-[15px] sm:gap-y-6'>
            {allCars.filter(car => car.isRegister === 1).map((car) => (
              <div key={car.id}>
                <CarBox  {...car} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <CopyRight />
      <ScroolTop />
    </>
  )
}
