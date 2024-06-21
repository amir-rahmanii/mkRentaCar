import React, { useEffect, useState } from 'react'
import BoxInfoAdmin from '../../../Component/Admins/BoxInfoAdmin/BoxInfoAdmin';
import MyPieChart from '../../../Component/Admins/MyPieChart/MyPieChart';
import BarChart from '../../../Component/Admins/BarChart/BarChart';

export default function DashboardIndex() {
  const [allCarsLength, setAllCarsLength] = useState('')
  const [allRentalLength, setAllRentalLength] = useState('')
  const [allUsersLength, setAllUsersLength] = useState('')

  const getAllCars = () => {
    fetch(`http://localhost:5000/cars`)
      .then(res => res.json())
      .then(result => {
        setAllCarsLength(result.length)
      })
  }
  const getAllRental = () => {
    fetch(`http://localhost:5000/registeredRent`)
      .then(res => res.json())
      .then(result => {
        setAllRentalLength(result.length)
      })
  }
  const getAllUsers = () => {
    fetch(`http://localhost:5000/users`)
      .then(res => res.json())
      .then(result => {
        setAllUsersLength(result.length)
      })
  }

  useEffect(() => {
    getAllCars()
    getAllRental()
    getAllUsers()
  }, [])
  return (
    <div className='font-medium'>
      <div className='container pb-5 xl:pb-0'>
        <div className='mt-4 grid grid-cols-1  xl:grid-cols-3 gap-3'>
          <BoxInfoAdmin title="Rental" number={allRentalLength} status="increased" />
          <BoxInfoAdmin title="Cars" number={allCarsLength} status="increased" />
          <BoxInfoAdmin title="Users" number={allUsersLength} status="decreased" />
        </div>
        <div className='flex flex-col items-center xl:flex-row mt-5 xl:mt-8 bg-[#f1f1f1] rounded-xl p-2'>
          <MyPieChart />
          <BarChart />
        </div>
      </div>
    </div>
  )
}
