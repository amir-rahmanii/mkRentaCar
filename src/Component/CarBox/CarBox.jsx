import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { RiWhatsappFill } from "react-icons/ri";

export default function CarBox(props) {
    return (
        <div className='border-2 border-orangeCus rounded-2xl bg-none overflow-hidden'>
            <div className='bg-blackBack p-2.5 relative'>
                <Link to={`/cars/${props.hrefCarType}/${props.href}`}>
                    <img src={props.cover[0].img} alt="1" />
                </Link>
                {props.priceOffer !== "0" && (
                <div className='bg-orangeCus text-white font-medium text-xs/[23px] px-2 absolute top-[20px] left-0'>
                    <span>SPECIAL OFFER</span>
                </div>
                )}
            </div>

            <div className='bg-[#454545] text-white px-3 py-2.5 font-light'>
                {/* car name */}
                <Link to={`/cars/${props.hrefCarType}/${props.href}`} className='font-bold text-xl/[30px] my-[5px] hover:text-orangeCus2 transition-all duration-300 hover:decoration-orangeCus2 hover:underline'>{props.title}</Link>

                {/* type of cars */}
                <p className='tracking-[-0.3px] text-xs/[18px] py-0.5 mb-[5px] mt-2'>{props.carType}</p>

                {/* price */}
                <p className='font-bold my-[5px] text-[15px]/[22.5px]'>{props.price} AED</p>

                {/* price offers */}
                <p className='line-through mb-[5px] text-[11px]/[16.5px]'>{props.priceOffer} AED</p>

                {/* Daily */}
                <p className='text-sm/[21px] mb-[5px] mt-2'>Daily</p>

                {/* Buttons */}
                <div className='font-medium text-white flex justify-between mt-5'>
                    <Button link={`/cars/${props.hrefCarType}/${props.href}`} classes='bg-neutral-700 border text-xs/[18px] py-[5px] px-[7px] rounded-md'>
                        <span>Send Enquiry</span>
                    </Button>

                    <Link to='#' className='bg-[#05BB00] flex items-center gap-1.5 px-1.5 rounded-md text-[18px] group'>
                        <RiWhatsappFill />
                        <span className='text-[13px]/[19.5px] group-hover:text-orangeCus2 transition-all duration-300'>Chat With Us</span>
                    </Link>

                </div>
            </div>
        </div>
    )
}
