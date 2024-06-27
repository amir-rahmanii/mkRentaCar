import React, { useEffect, useState } from 'react'
import BoxInfoAdmin from '../../../Component/Admins/BoxInfoAdmin/BoxInfoAdmin';
import MyPieChart from '../../../Component/Admins/MyPieChart/MyPieChart';
import BarChart from '../../../Component/Admins/BarChart/BarChart';
import BoxInfoFavorite from '../../../Component/Admins/BoxInfoFavorite/BoxInfoFavorite';
import BoxInfoUser from '../../../Component/Admins/BoxInfoUser/BoxInfoUser';

export default function DashboardIndex() {
  const [allCarsLength, setAllCarsLength] = useState('')
  const [allRentalLength, setAllRentalLength] = useState('')
  const [allUsersLength, setAllUsersLength] = useState('')

  const getAllCars = () => {
    fetch(`https://mkrentacar.liara.run/cars`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      .then(result => {
        setAllCarsLength(result.length)
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));

  }
  const getAllRental = () => {
    fetch(`https://mkrentacar.liara.run/registeredRent`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      .then(result => {
        setAllRentalLength(result.length)
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));

  }
  const getAllUsers = () => {
    fetch(`https://mkrentacar.liara.run/users`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      .then(result => {
        setAllUsersLength(result.length)
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));

  }

  useEffect(() => {
    getAllCars()
    getAllRental()
    getAllUsers()
  }, [])
  return (
    <div className='font-medium'>
      <div className='container pb-5 xl:pb-0'>
        <div className='mt-4 grid grid-cols-1 xl:grid-cols-3 gap-3'>
          <BoxInfoAdmin title="Rental" number={allRentalLength} status="increased" />
          <BoxInfoAdmin title="Cars" number={allCarsLength} status="increased" />
          <BoxInfoAdmin title="Users" number={allUsersLength} status="decreased" />
        </div>
        <div className='hidden xl:flex items-center flex-row mt-8 gap-x-16'>
          <BoxInfoFavorite />
          <BarChart />
        </div>
        <div className='flex flex-col gap-4  justify-between items-center xl:flex-row mt-8 xl:mt-8 bg-[#f1f1f1] rounded-xl p-2'>
          <MyPieChart />
          <BoxInfoUser />
        </div>
      </div>
    </div>
  )
}
