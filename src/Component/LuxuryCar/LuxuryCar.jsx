import React from 'react'
import Button from '../Button/Button'

export default function LuxuryCar() {
    return (
        <div className="luxuryCars bg-[center_top] w-full h-[200px] xs:h-[500px] aspect-[2/1] bg-no-repeat bg-cover text-black font-medium">
            <div className='hidden md:flex flex-col justify-center items-center gap-[150x] pt-14'>
                <p className='text-[40px]/[48px] font-bold pb-2.5'>Rent a Luxury Car in Dubai</p>
                <p className='pb-2.5'>At Masterkey, we understand that driving is more than just a means of transportation; it's a passion</p>
                <Button link='#' classes='bg-neutral-700 px-5 text-base/[45px] tracking-[1px]'>
                    <span>SEND INQUIRY NOW</span>
                </Button>
            </div>
        </div>
    )
}
