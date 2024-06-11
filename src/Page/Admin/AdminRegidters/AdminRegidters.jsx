import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SlArrowDown } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { BiShow } from "react-icons/bi";
import MyCalendar from '../../../Component/CarBoxInfoOne/MyCalendar';
import FilterBar from '../../../Component/Admins/FilterBar/FilterBar';
import Modal from '../../../Component/Admins/Modal/Modal';

export default function AdminRegidters() {
  const [allRental, setAllRental] = useState([])

  // info car
  const [showInfoCar, setShowInfoCar] = useState(false)
  const [infocar, setInfoCar] = useState({})
  // is registered
  const [showIsRegestr, setShowIsRegestr] = useState(false)
  const [showIsRegestrNo, setShowIsRegestrNo] = useState(false)
  const [DeleteUserShow, setDeleteUserShow] = useState(false)
  const [idUser, setIdUser] = useState('')
  //showFiltered
  const [showFiltered, setShowFiltered] = useState(false)
  const [filteredValue, setFilteredValue] = useState("Default")
  //Uodate Date
  const [updateUserShow, setUpdateUserShow] = useState(false)
  //for Date
  const [fullYear, setFullYear] = useState("")


  const getAllregisteredRent = () => {
    fetch(`http://localhost:5000/registeredRent`)
      .then(res => res.json())
      .then(result => {
        setAllRental(result.reverse())
      })
  }
  const getAllregisteredRentOld = () => {
    fetch(`http://localhost:5000/registeredRent`)
      .then(res => res.json())
      .then(result => {
        setAllRental(result)
      })
  }
  const getAllregisteredRentHightoLow = () => {
    fetch(`http://localhost:5000/registeredRent?_sort=price`)
      .then(res => res.json())
      .then(result => {
        setAllRental(result.reverse())
      })
  }
  const getAllregisteredRentLowtoHigh = () => {
    fetch(`http://localhost:5000/registeredRent?_sort=price`)
      .then(res => res.json())
      .then(result => {
        setAllRental(result)
      })
  }
  const getAllregisteredRentisRegistered = () => {
    fetch(`http://localhost:5000/registeredRent?register=1`)
      .then(res => res.json())
      .then(result => {
        setAllRental(result)
      })
  }
  const getAllregisteredRentisNoRegistered = () => {
    fetch(`http://localhost:5000/registeredRent?register=0`)
      .then(res => res.json())
      .then(result => {
        setAllRental(result)
      })
  }
  const changeFilterdAction = () => {
    if (filteredValue == "Default") {
      getAllregisteredRent()
    } else if (filteredValue == "Old registration") {
      getAllregisteredRentOld()
    } else if (filteredValue == "Price High to Low") {
      getAllregisteredRentHightoLow()
    } else if (filteredValue == "Price Low to High") {
      getAllregisteredRentLowtoHigh()
    } else if (filteredValue == "Is Register") {
      getAllregisteredRentisRegistered()
    } else {
      getAllregisteredRentisNoRegistered()
    }
  }



  useEffect(() => {
    getAllregisteredRent()
  }, [])

  useEffect(() => {
    changeFilterdAction()
  }, [filteredValue])


  //  For register
  const registeredUser = () => {
    fetch(`http://localhost:5000/registeredRent/${idUser}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        register: 1
      })
    })
      .then((res) => {
        setShowIsRegestr(false)
        changeFilterdAction()
      })
  }


  //  For register No
  const registeredUserNo = () => {
    fetch(`http://localhost:5000/registeredRent/${idUser}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        register: 0
      })
    })
      .then((res) => {
        setShowIsRegestrNo(false)
        changeFilterdAction()

      })
  }

  //Delete user

  const deleteUser = () => {
    fetch(`http://localhost:5000/registeredRent/${idUser}`, {
      method: "Delete",
    })
      .then((res) => {
        setDeleteUserShow(false)
        changeFilterdAction()

      })
  }

  //Update user

  const updateUser = () => {
    fetch(`http://localhost:5000/registeredRent/${idUser}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        dateFull: fullYear
      }
      )
    })
      .then((res) => {
        setUpdateUserShow(false)
        changeFilterdAction()

      })
  }

  return (
    <>
      <div className='px-4 font-medium'>
        <div className='flex justify-between shadow-lg px-4 items-center bg-black/80 mt-4 rounded-lg mx-4'>
          <p className='text-[25px] mt-4 mb-6 font-bold text-center rounded-md text-orangeCus2'>List rental Cars</p>
          {/* filter */}
          <FilterBar setShowFiltered={setShowFiltered} showFiltered={showFiltered} setFilteredValue={setFilteredValue} filteredValue={filteredValue} />
          {/* filter */}

        </div>
        {allRental.length > 0 ? (
          <div className='shadow-lg mx-4 mt-4 rounded-lg overflow-auto h-[430px] mb-5'>
            <table className='w-full text-center border-collapse border border-slate-500 '>
              <thead className='font-bold'>
                <tr className='child:p-4 sticky top-0 child:text-orangeCus2 child:bg-[#454545]'>
                  <th className='border border-slate-600'>Row</th>
                  <th className='border border-slate-600'>Name</th>
                  <th className='border border-slate-600'>Email</th>
                  <th className='border border-slate-600'>Code & Phone</th>
                  <th className='border border-slate-600'>Country</th>
                  <th className='border border-slate-600'>Date</th>
                  <th className='border border-slate-600'>InfoCars</th>
                  <th className='border border-slate-600'>Status</th>
                  <th className='border border-slate-600'>Update</th>
                  <th className='border border-slate-600'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {allRental.map((user, index) => (
                  <tr key={user.id} className='child:p-2'>
                    <td className={`border border-slate-600 ${user.register ? "bg-green-400" : "bg-red-400"}`}>{index + 1}</td>
                    <td className='border border-slate-600'>{user.name}</td>
                    <td className='border border-slate-600'>{user.email}</td>
                    <td className='border border-slate-600'><Link to={`tel:${user.countryCode + user.telephone}`}>{user.countryCode + user.telephone}</Link></td>
                    <td className='border border-slate-600'>{user.country}</td>
                    <td className='border border-slate-600'>{user.dateFull.slice(0, 10)}</td>
                    <td className='border border-slate-600'>
                      <button className='bg-teal-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                        setInfoCar(user)
                        setShowInfoCar(true)
                      }
                      }>
                        <BiShow />
                      </button>
                    </td>
                    <td className='border border-slate-600'>
                      {user.register ? (
                        <button className='bg-red-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                          setInfoCar(user)
                          setShowIsRegestrNo(true)
                          setIdUser(user.id)
                        }}>
                          <GiCancel />
                        </button>
                      ) : (
                        <button className='bg-green-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                          setInfoCar(user)
                          setShowIsRegestr(true)
                          setIdUser(user.id)
                        }}>
                          <TiTick />
                        </button>
                      )}
                    </td>
                    <td className='border border-slate-600'>
                      <button className='bg-teal-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                        setInfoCar(user)
                        setUpdateUserShow(true)
                        setFullYear(user.dateFull)
                        setIdUser(user.id)
                      }} ><RxUpdate /></button>
                    </td>
                    <td className='border border-slate-600'>
                      <button className='bg-red-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                        setInfoCar(user)
                        setDeleteUserShow(true)
                        setIdUser(user.id)
                      }}>
                        <MdDelete />
                      </button>
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2 className='bg-black/80 text-orangeCus2 text-[30px] text-center p-5 font-bold rounded-lg mt-5'>This filter was not found 😩</h2>
        )}

      </div>

      {/* info cars */}
      <Modal width="w-[700px]" height="h-auto" closedBox={showInfoCar} setClosedBox={setShowInfoCar} title={`Car Info`}>
      <div className='flex gap-8 mt-2'>
              <div className='rounded-xl overflow-hidden'>
                <img className='w-[350px]' src={infocar.carimg} alt="img" />
              </div>
              <div className='text-white flex flex-col gap-2'>
                <p className='font-bold text-xl'>{infocar.carName}</p>
                <p className='font-medium'>{infocar.carBrand}</p>
                <p className='font-medium'>{infocar.carType}</p>
                <p className='font-bolditalic text-[30px]'>{infocar.price} AED</p>
              </div>

            </div>
      </Modal>

      {/* is regestired */}
      <Modal width="w-[400px]" height="h-auto" closedBox={showIsRegestr} setClosedBox={setShowIsRegestr} title={`${infocar.name} rental registration`}>
      <p className='text-[20px] mt-5'>Do you intend to register the user's car rental?</p>
            <div className='flex gap-4 mt-5'>
              <button onClick={registeredUser} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
                Yes
              </button>
            </div>
      </Modal>

      {/* is regestired No */}
      <Modal width="w-[400px]" height="h-auto" closedBox={showIsRegestrNo} setClosedBox={setShowIsRegestrNo} title={`Cancel ${infocar.name} rental registration`}>
      <p className='text-[20px] mt-5'>Do you intend to cancel register the user's car rental?</p>
            <div className='flex gap-4 mt-5'>
              <button onClick={registeredUserNo} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
                Yes
              </button>
            </div>
      </Modal>


      {/* is Deleted */}
      <Modal width="w-[400px]" height="h-auto" closedBox={DeleteUserShow} setClosedBox={setDeleteUserShow} title={`Delete ${infocar.name} rental`}>
        <p className='text-[20px] mt-5'>Do you intend to Delete register the user's car rental?</p>
        <div className='flex gap-4 mt-5'>
          <button onClick={deleteUser} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
            Yes
          </button>
        </div>
      </Modal>

      {/*updated date*/}
      <Modal width="w-auto" height="h-[500px]" closedBox={updateUserShow} setClosedBox={setUpdateUserShow} title={`Update ${infocar.name} rental`}>
        <p className='text-[20px] my-5'>Do you want to change the car rental date?</p>
        <MyCalendar fullYear={fullYear} setFullYear={setFullYear} />
        <div className='flex gap-4 mt-[200px]'>
          <button onClick={updateUser} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
            Yes
          </button>
        </div>
      </Modal>

    </>
  )
}
