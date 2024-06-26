import React, { useEffect, useReducer, useState } from 'react'
import { useContext } from 'react'
import AuthContext from '../../Context/AuthContext'
import { MdOutlinePendingActions } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import FavoriteBrand from '../../Component/PanelUser/FavoriteBrand/FavoriteBrand';
import { MdDelete } from "react-icons/md";
import Modal from '../../Component/Admins/Modal/Modal';
import { useTranslation } from 'react-i18next';

export default function PanelUserRental() {

  const [allUsers, setAllUsers] = useState([])
  const authContext = useContext(AuthContext)
  const [sumTotalsPrice, setSumTotlaPrice] = useState(0)
  const [sumTotalsPriceRegister, setSumTotlaPriceRegister] = useState(0)
  const [sumTotalsPriceNoRegister, setSumTotlaPriceNoRegister] = useState(0)
  //Show delete Modal 
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [carId, setCarId] = useState('')
  const [carInfo, setCarInfo] = useState([])

  //translate
  const { t } = useTranslation()


  //get price
  const getTotalPrice = () => {
    let totalPrice = [...authContext.userInfo[0].registeredRent]
    totalPrice.forEach((data => {
      setSumTotlaPrice(prevState => prevState + Number(data.price))
    }))
  }
  //get Price Registered
  const getTotalPriceRegistered = () => {
    let totalPrice = [...authContext.userInfo[0].registeredRent]
    let totalPriceRegisrered = totalPrice.filter(data => data.register === 1)
    totalPriceRegisrered.forEach((data => {
      setSumTotlaPriceRegister(prevState => prevState + Number(data.price))
    }))
  }
  //get Price NoRegistered
  const getTotalPriceNoRegistered = () => {
    let totalPrice = [...authContext.userInfo[0].registeredRent]
    let totalPriceNoRegisrered = totalPrice.filter(data => data.register === 0)
    totalPriceNoRegisrered.forEach((data => {
      setSumTotlaPriceNoRegister(prevState => prevState + Number(data.price))
    }))
  }

  //get all users
  const getAllUsers = () => {
    fetch(`https://mkrentacar.liara.run/users`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      .then(result => {
        setAllUsers(result)
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }

  // get user info
  const getUserInfos = () => {
    let userArray = [...allUsers]
    let userFiltered = userArray.filter((data) => data.email == carInfo.email)
    let userIdAuth = userFiltered[0].id
    let registeredAllRent = userFiltered[0].registeredRent
    return { userIdAuth, registeredAllRent }
  }


  //Delete Car
  const deleteCar = () => {
    let userInfos = getUserInfos();
    let userInfosDelted = userInfos.registeredAllRent.filter((data) => {
      return data.id !== carId
    })

    fetch(`https://mkrentacar.liara.run/users/${userInfos.userIdAuth}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        registeredRent: userInfosDelted
      })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));


    fetch(`https://mkrentacar.liara.run/registeredRent/${carId}`, {
      method: "Delete",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      .then(result => {
        setShowDeleteModal(false)
        window.location.href = "/paneluser/rental"
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }


  useEffect(() => {
    getAllUsers()
    getTotalPrice()
    getTotalPriceRegistered()
    getTotalPriceNoRegistered()
  }, [])

  return (
    <>

      <div className='h-full font-light overflow-auto w-full mx-auto'>

        {authContext.userInfo[0].registeredRent.length !== 0 ? (
          <div>
            {/* info user price and brand */}
            <div div className='p-4 text-[13px] md:text-[16px] bg-[#454545] my-2 rounded-md grid grid-cols-1 md:grid-cols-2 gap-3'>
              <p className=''>{t("Rental cars")} :<span className='text-orangeCus2 font-bold'> {sumTotalsPrice.toLocaleString()} AED</span></p>
              <p className=''>{t("Rental cars")} ({t("register")}) :<span className='text-orangeCus2 font-bold'> { sumTotalsPriceRegister.toLocaleString()} AED</span></p>
              <p className=''>{t("Rental cars")} ({t("Pending")}):<span className='text-orangeCus2 font-bold'> {sumTotalsPriceNoRegister.toLocaleString()} AED</span></p>
              <p className='flex gap-2'> {t("Favorite Brand")} : <FavoriteBrand cars={authContext.userInfo[0].registeredRent} /></p>
            </div>
            <table>
              <tr className='child:p-2 child:text-[11px] md:child:text-[16px] md:child:p-4 sticky top-0 child:text-orangeCus2 child:bg-[#454545] rounded-md'>
                <th>#</th>
                <th>{t("CarName")}</th>
                <th>{t("CarImage")}</th>
                <th className='hidden sm:table-cell'>{t("CarBrand")}</th>
                <th className='hidden xl:table-cell'>{t("CarType")}</th>
                <th className='hidden xl:table-cell'>{t("Country")}</th>
                <th className='hidden md:table-cell'>{t("Price")}</th>
                <th>{t("Date")}</th>
                <th>{t("Status")}</th>
                <th>{t("Delete")}</th>
              </tr>
              {authContext.userInfo[0].registeredRent.map((data, index) => (
                <tr key={data.id} className='child:p-1 child:text-[11px] md:child:text-[16px] md:child:p-2 xl:child:p-3.5 child:text-center'>
                  <td>{index + 1}</td>
                  <td>{data.carName}</td>
                  <td className='flex justify-center'><img loading='lazy' width='50' src={data.carimg} alt="img" /></td>
                  <td className='hidden sm:table-cell'>{data.carBrand}</td>
                  <td className='hidden xl:table-cell'>{data.carType}</td>
                  <td className='hidden xl:table-cell'>{data.country}</td>
                  <td className='hidden md:table-cell'>{data.price} AED</td>
                  <td>{data.dateFull.slice(0, 10)}</td>
                  <td className='text-[23px]'>{data.register ?
                    (
                      <div className='flex justify-center text-[16px] items-center text-green-500'>
                        <TiTick />
                      </div>
                    ) : (
                      <div className='flex justify-center text-[16px] items-center text-yellow-500'>
                        <MdOutlinePendingActions />
                      </div>
                    )}</td>
                  <td>
                    <button onClick={() => {
                      setShowDeleteModal(true)
                      setCarInfo(data)
                      setCarId(data.id)
                    }} className='bg-red-500 text-white p-2 rounded-md cursor-pointer'>
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        ) : (
          <h2 className='bg-black/80 text-orangeCus2 text-[30px] text-center p-5 font-bold rounded-lg'>{t("You have not rented any cars yet")}😩</h2>

        )}

      </div >

      <Modal width="w-[400px]" height="h-auto" closedBox={showDeleteModal} setClosedBox={setShowDeleteModal} title={`Delete ${carInfo.carName}`}>
        <p className='text-[20px] mt-5'>{t("Do you intend to Delete a Rental Car")}?</p>
        <div className='flex gap-4 mt-5'>
          <button onClick={deleteCar} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
            Yes
          </button>
        </div>
      </Modal>
    </>
  )
}
