import React from 'react'
import Button from '../../Component/Button/Button'

export default function Error404() {
  return (
    <div className='bg-black h-screen flex justify-center flex-col items-center'>
        <h3 className='text-center text-[60px] md:text-[120px] text-white'>404 Error</h3>
        <Button link="/"  classes='bg-neutral-700 text-[20px]/[35px] px-[5px] rounded-md px-8 xl:px-[11px] tracking-[1px]'>
            <span>Back Home</span>
        </Button>
    </div>
  )
}
