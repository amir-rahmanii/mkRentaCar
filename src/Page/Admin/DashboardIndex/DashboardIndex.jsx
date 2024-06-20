import React, { useEffect, useState } from 'react'
import BoxInfoAdmin from '../../../Component/Admins/BoxInfoAdmin/BoxInfoAdmin';

export default function DashboardIndex() {
  const [allCarsLength , setAllCarsLength] = useState('')
  const [allRentalLength , setAllRentalLength] = useState('')
  const [allUsersLength , setAllUsersLength] = useState('')

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
  } , [])
  return (
    <div className='font-medium'>
       <div className='container'>
            <div className='mt-4 grid grid-cols-3 gap-3'>
               <BoxInfoAdmin title="Rental" number={allRentalLength} status="increased"/>
               <BoxInfoAdmin title="Cars" number={allCarsLength} status="increased"/>
               <BoxInfoAdmin title="Users" number={allUsersLength} status="decreased"/>
            </div>
       </div>
    </div>
  )
}
