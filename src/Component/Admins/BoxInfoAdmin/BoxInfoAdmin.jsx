import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

export default function BoxInfoAdmin({title , number , status}) {
    return (
        <div className='p-5 bg-[#454545] text-white rounded-xl shadow-[0_0px_23px_0px_rgba(253,177,0)]'>
            <p className='text-[20px]'>Number of <span className='text-orangeCus'>{title}</span> this month</p>
            <p className='text-[25px] text-orangeCus  py-2'>{number}</p>
            <p className='text-[13px] flex items-center gap-2'>{status} compared to the previous month {status === "increased" ? <FaArrowTrendUp color='green' className='text-[20px]' /> : <FaArrowTrendDown color='red' className='text-[20px]' /> } </p>
        </div>
    )
}
