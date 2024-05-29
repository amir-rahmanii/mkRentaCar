import React, { useEffect, useState } from 'react'

export default function Header() {
    const [date , setDate] = useState(new Date())
    const [dateYear , setDateYear] = useState('')
    const [dateMonth , setDateMonth] = useState('')
    const [dateDate , setDateDate] = useState('')
    const [dateDay , setDateDay] = useState('')
    let week = ["Monday" , "Tuesday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];


    useEffect(() => {
      setDateYear(date.getFullYear())
      setDateMonth(date.getMonth() + 1)
      setDateDate(date.getDate())
      setDateDay(week[date.getDay()])
    } , [])
  return (
    <div className='w-full bg-gradient-to-r from-purple-700 to-purple-900 font-medium p-5 flex justify-between items-center'>
        <p className='text-[25px] text-white font-bold '>Welcome amir</p>
        <p className='text-orangeCus2 text-[20px] font-bold bg-white rounded-lg p-3'> <span className='pr-4'>{dateDay}</span>{dateMonth} / {dateDate} / {dateYear} </p>
    </div>
  )
}
