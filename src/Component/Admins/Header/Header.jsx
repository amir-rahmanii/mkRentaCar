import React, { useEffect, useState, useContext } from 'react'
import { MdOutlineMessage } from "react-icons/md";
import AuthContext from '../../../Context/AuthContext';
import { FaPlus } from "react-icons/fa6";
import Modal from '../Modal/Modal';
import Svgs from '../svg/Svgs';

export default function Header() {
  const [date, setDate] = useState(new Date())
  const [dateYear, setDateYear] = useState('')
  const [dateMonth, setDateMonth] = useState('')
  const [dateDate, setDateDate] = useState('')
  const [dateDay, setDateDay] = useState('')
  const authContext = useContext(AuthContext)
  let week = ["Monday", "Tuesday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  //total inventory Company 
  const [totalInventoryCompany, setTotalInventoryCompany] = useState(0)
  const [showRechrgeCompany, setShowRechrgeCompany] = useState(false)
  const [messageErrorCharge, setMessageErrorCharge] = useState(false)
  const [rechargeValue, setRechargeValue] = useState(0)

  const gettotalInventoryCompany = () => {
    fetch(`https://mkrentacar.liara.run/totalinventoryCompany/1`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      .then(result => {
        setTotalInventoryCompany(Number(result.price))
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }


  const rechargeHandler = () => {
    if (/^[1-9][0-9]{0,5}$/i.test(rechargeValue)) {
      setMessageErrorCharge(false)
      fetch(`https://mkrentacar.liara.run/totalinventoryCompany/1`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          price: totalInventoryCompany + Number(rechargeValue)
        })
      })
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json()
        })
        .then(result => {
          setShowRechrgeCompany(false)
          gettotalInventoryCompany()
          setRechargeValue(0)
        })
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
    } else {
      setMessageErrorCharge(true)
    }
  }



  useEffect(() => {
    setDateYear(date.getFullYear())
    setDateMonth(date.getMonth() + 1)
    setDateDate(date.getDate())
    setDateDay(week[date.getDay()])
    gettotalInventoryCompany()
  }, [])
  return (
    <>
      <div className='w-full bg-[#454545] font-medium px-4 py-2 flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <div className='rounded-full overflow-hidden '>
            <img loading='lazy' className='w-[50px] h-[50px]' src='/images/adminImage/user.png'></img>
          </div>
          <div className='flex flex-col items-center text-orangeCus2 font-bold'>
            <p>{authContext.userInfo[0].username}
              {/* <Svgs name='insta' width="39" height="38" viewBox="0 0 39 38" stroke='#43FF44' /> */}
            </p>
          </div>
          <div className='hidden md:flex flex-row gap-3 items-center text-orangeCus2 font-bold'>
            <p className='pl-8 text-white'>Total inventory of the company : <span className='text-orangeCus2 text-[20px]'> {totalInventoryCompany.toLocaleString()} AED </span></p>
            <button className='bg-violet-600 text-white p-2 rounded-md cursor-pointer' onClick={() => {
              setShowRechrgeCompany(true)
            }}>
              <FaPlus />
            </button>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <div className='text-[25px] relative p-2 w-[30px] h-[30px] flex justify-center items-center border rounded-full bg-white'>
            <MdOutlineMessage />
            <div className='absolute top-[-5px] right-0'>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
            </div>
          </div>
          <p className='text-orangeCus2 text-[15px] font-bold rounded-lg p-3 hidden xl:block'> <span className='pr-4'>{dateDay}</span>{dateMonth} / {dateDate} / {dateYear} </p>
        </div>
      </div>

      {/* is Recharge Wallet Company */}
      <Modal width="w-[400px]" height="h-auto" closedBox={showRechrgeCompany} setClosedBox={setShowRechrgeCompany} title={`Recharge Wallet Company`}>
        <p className={`text-[20px] mt-5`}>Enter the amount.</p>
        <input onChange={(e) => {
          setRechargeValue(e.target.value)
        }} type="text" value={rechargeValue} className='outline-none p-2 rounded-md text-black mt-2' placeholder='amount' />
        {messageErrorCharge && (
          <p className='text-red-600 font-medium mt-1'>Please enter the correct values (1 , 999999)</p>
        )}
        <div className='flex gap-4 mt-5'>
          <button onClick={rechargeHandler} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
            Yes
          </button>
        </div>
      </Modal>
    </>
  )
}
