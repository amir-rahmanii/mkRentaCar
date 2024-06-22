import React, { useEffect, useState } from 'react'
import BoxInfoAdmin from '../../../Component/Admins/BoxInfoAdmin/BoxInfoAdmin';
import MyPieChart from '../../../Component/Admins/MyPieChart/MyPieChart';
import BarChart from '../../../Component/Admins/BarChart/BarChart';

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
