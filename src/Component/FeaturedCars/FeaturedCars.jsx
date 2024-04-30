import React from 'react'

export default function FeaturedCars(props) {
  return (
    <div className='bg-blackBack pt-5 md:pt-[65px] font-bold'>
        <div className='container'>
            <div className='text-white flex flex-col items-center justify-center gap-[15px]'>
             <p className='text-lg/[21px] font-medium text-center'>{props.title}</p>
             <p className='text-xl/[24px] md:text-[35px]/[42px] text-center'>{props.select}</p>
             <p className='text-[#B8B8B8] text-base font-medium text-center'>{props.body}</p>
            </div>
        </div>
    </div>
  )
}
