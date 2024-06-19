import React, { useEffect, useState, useContext } from 'react'
import AuthContext from '../../../Context/AuthContext'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { BiShow } from "react-icons/bi";
import Modal from '../../../Component/Admins/Modal/Modal';
import { MdOutlinePendingActions } from "react-icons/md";
import SearchBar from '../../../Component/Admins/SearchBar/SearchBar';


export default function AdminUsers() {
  const authContext = useContext(AuthContext)

  const [allUsers, setAllUsers] = useState([])
  const [allUsersFilters, setAllUsersFilters] = useState([])
  const [allRegisteredRent, setAllRegisteredRent] = useState([])
  // info car
  const [showInfoCar, setShowInfoCar] = useState(false)
  const [infoUser, setInfoUser] = useState([])
  const [DeleteUserShow, setDeleteUserShow] = useState(false)
  const [idUser, setIdUser] = useState('')
  //Update Change role
  const [updateUserShow, setUpdateUserShow] = useState(false)


  const getAllUsers = () => {
    fetch(`http://localhost:5000/users`)
      .then(res => res.json())
      .then(result => {
        setAllUsers(result)
        setAllUsersFilters(result)
      })
  }

  const getAllRegisteredRent = () => {
    fetch(`http://localhost:5000/registeredRent`)
      .then(res => res.json())
      .then(result => {
        setAllRegisteredRent(result)
      })
  }


  useEffect(() => {
    getAllUsers();
  }, [])


  //search Handler
  const searchValueHandler = (value) => {
    let filterArray = [...allUsersFilters]
    if (value.trim()) {
      let userFilterValue = filterArray.filter(data => data.username.toLowerCase().includes(value.toLowerCase()) || data.email.toLowerCase().includes(value.toLowerCase()) || data.cellNumber.toLowerCase().includes(value.toLowerCase()))
      setAllUsers(userFilterValue)
    } else {
      getAllUsers();
    }
  }


  useEffect(() => {
    getAllRegisteredRent();
  }, [DeleteUserShow])




  //Delete user
  const deleteUser = () => {
    const infoUser = [...allRegisteredRent]
    let filteredArray = infoUser.filter(data => data.email == infoUser.email)
    console.log(filteredArray);
    filteredArray.forEach((data) => {
      fetch(`http://localhost:5000/registeredRent/${data.id}`, {
        method: "DELETE",
      })
        .then((res) => {
          console.log(res);
        })
    })

    fetch(`http://localhost:5000/users/${idUser}`, {
      method: "DELETE",
    })
      .then((res) => {
        setDeleteUserShow(false)
        getAllUsers();
      })
  }

  //change Role 
  const changeRoleHandler = () => {
    fetch(`http://localhost:5000/users/${idUser}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        role: infoUser.role === "admin" ? "user" : "admin"
      })
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(result => {
        setUpdateUserShow(false)
        getAllUsers()
      })
  }

  return (
    <>
      <div className='container font-medium'>
        <div className='flex justify-between shadow-lg px-4 items-center bg-black/80 mt-4 rounded-lg'>
          <p className='text-[25px] mt-4 mb-6 font-bold text-center rounded-md text-orangeCus2'>List Users</p>
          <SearchBar searchValueHandler={searchValueHandler} />
        </div>
        {allUsers.length > 0 ? (
          <div className='shadow-lg mt-4 rounded-lg overflow-auto h-[430px] mb-5'>
            <table className='w-full text-center border-collapse border border-slate-500 '>
              <thead className='font-bold'>
                <tr className='child:p-4 sticky top-0 child:text-orangeCus2 child:bg-[#454545]'>
                  <th>Row</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>showRental</th>
                  <th>ChangeRole</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {allUsers.map((user, index) => (
                  <tr key={user.id} className='child:p-2'>
                    <td >{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td><Link to={`tel:${user.cellNumber}`}>{user.cellNumber}</Link></td>
                    <td>{user.role}</td>
                    <td>
                      <button className='bg-teal-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                        setInfoUser(user.registeredRent)
                        setShowInfoCar(true)
                      }
                      }>
                        <BiShow />
                      </button>
                    </td>
                    <td>
                      {user.email === "amirbabble@gmail.com" || authContext.userInfo[0].email == user.email ? (
                        <button className='bg-teal-300 text-white p-3 rounded-md cursor-auto'
                        ><RxUpdate /></button>
                      ) : (
                        <button className='bg-teal-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                          setInfoUser(user)
                          setUpdateUserShow(true)
                          setIdUser(user.id)
                        }} ><RxUpdate /></button>
                      )}
                    </td>
                    <td>
                      {user.email === "amirbabble@gmail.com" || authContext.userInfo[0].email == user.email ? (
                        <button disabled className='bg-red-300 text-white p-3 rounded-md '>
                          <MdDelete />
                        </button>
                      ) : (
                        <button className='bg-red-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                          setInfoUser(user)
                          setDeleteUserShow(true)
                          setIdUser(user.id)
                        }}>
                          <MdDelete />
                        </button>
                      )}
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2 className='bg-black/80 mx-4 text-orangeCus2 text-[30px] text-center p-5 font-bold rounded-lg mt-5'>This filter was not found 😩</h2>
        )}

      </div>

      {/* info cars */}
      <Modal width="w-[950px]" height="h-auto" closedBox={showInfoCar} setClosedBox={setShowInfoCar} title={`Cars Rental`}>
        <div className=' h-[400px] overflow-auto'>
          {infoUser.length > 0 ? (
            <table>
              <tr className='child:p-2 child:text-[11px] md:child:text-[16px] md:child:p-4 sticky top-0 child:text-orangeCus2 child:bg-[#454545] rounded-md'>
                <th>#</th>
                <th>CarName</th>
                <th>CarImage</th>
                <th className='hidden sm:table-cell'>CarBrand</th>
                <th className='hidden sm:table-cell'>CarType</th>
                <th className='hidden xl:table-cell'>Country</th>
                <th className='hidden md:table-cell'>Price</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
              {infoUser.map((data, index) => (
                <tr key={data.id} className='child:p-1 child:text-[11px] md:child:text-[16px] md:child:p-2 xl:child:p-3.5 child:text-center'>
                  <td>{index + 1}</td>
                  <td>{data.carName}</td>
                  <td className='flex justify-center'><img width='80' src={data.carimg} alt="img" /></td>
                  <td className='hidden sm:table-cell'>{data.carBrand}</td>
                  <td className='hidden sm:table-cell'>{data.carType}</td>
                  <td className='hidden xl:table-cell'>{data.country}</td>
                  <td className='hidden md:table-cell'>{data.price} AED</td>
                  <td>{data.dateFull.slice(0, 10)}</td>
                  <td className='text-[23px]'>{data.register ?
                    (
                      <div className='flex justify-center items-center text-green-500'>
                        <TiTick />
                      </div>
                    ) : (
                      <div className='flex justify-center items-center text-yellow-500'>
                        <MdOutlinePendingActions />
                      </div>
                    )}</td>
                </tr>
              ))}
            </table>

          ) : (
            <h2 className='bg-black/80 text-orangeCus2 text-[30px] text-center p-5 font-bold rounded-lg'>He/She has not rented any cars yet😩</h2>
          )}

        </div>
      </Modal>


      {/* is Deleted */}
      <Modal width="w-[400px]" height="h-auto" closedBox={DeleteUserShow} setClosedBox={setDeleteUserShow} title={`Delete ${infoUser.username} rental`}>
        <p className='text-[20px] mt-5'>Do you intend to Delete the user?</p>
        <div className='flex gap-4 mt-5'>
          <button onClick={deleteUser} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
            Yes
          </button>
        </div>
      </Modal>

      {/*updated Change role*/}
      <Modal width="w-auto" height="h-auto" closedBox={updateUserShow} setClosedBox={setUpdateUserShow} title={`Update ${infoUser.username} Role`}>
        <p className='text-[20px] my-5'>Do you want to change the role user?</p>
        <div className='flex gap-4'>
          <button onClick={changeRoleHandler} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
            Yes
          </button>
        </div>
      </Modal>

    </>
  )
}
