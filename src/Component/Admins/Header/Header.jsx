import React, { useEffect, useState , useContext } from 'react'
import { MdOutlineMessage } from "react-icons/md";
import AuthContext from '../../../Context/AuthContext';

export default function Header() {
  const [date, setDate] = useState(new Date())
  const [dateYear, setDateYear] = useState('')
  const [dateMonth, setDateMonth] = useState('')
  const [dateDate, setDateDate] = useState('')
  const [dateDay, setDateDay] = useState('')
  const authContext = useContext(AuthContext)
  let week = ["Monday", "Tuesday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


  useEffect(() => {
    setDateYear(date.getFullYear())
    setDateMonth(date.getMonth() + 1)
    setDateDate(date.getDate())
    setDateDay(week[date.getDay()])
  }, [])
  return (
    <div className='w-full bg-[#454545] font-medium px-4 py-2 flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <div className='rounded-full overflow-hidden '>
          <img className='w-[50px] h-[50px]' src='/images/adminImage/user.png'></img>
        </div>
        <div className='flex flex-col items-center text-orangeCus2 font-bold'>
          <p>{authContext.userInfo[0].username}</p>
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
  )
}
