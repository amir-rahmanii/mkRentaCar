import React, { useEffect, useState } from 'react'
import { SlArrowDown } from "react-icons/sl";

export default function TableOneCar({ oneBrand }) {
    const [oneBrands, setOneBrands] = useState(oneBrand)
    const [oneBrandsInfo, setOneBrandsInfo] = useState({})

    const [countryCodeValue, setCountryCodeValue] = useState('Afghanistan')
    const [showCountryCode, setShowCountryCode] = useState(false)
    const [countreyCodes, setCountreyCodes] = useState([])
    const [countryDialCode, setCountryDialCode] = useState("+93")


    const getallbrand = () => {
        fetch(`http://localhost:5000/allBrands?href=${oneBrands}`)
            .then(res => res.json())
            .then(result => {
                setOneBrandsInfo(result[0])
            })
    }

    const getallcountreyCodes = () => {
        fetch(`http://localhost:5000/countreyCodes`)
            .then(res => res.json())
            .then(result => {
                setCountreyCodes(result)
            })
    }


    useEffect(() => {
        getallbrand()
        getallcountreyCodes()
    }, [])
    return (
        <div className='p-10 w-[440px] hidden lg:block font-medium'>
            {oneBrandsInfo && (
                <div className='border border-orangeCus'>
                    <p className='border-b-2 p-[25px] border-orangeCus text-[19px]/[22.8px] text-orangeCus'>CAR’S BRAND</p>
                    <div className='flex p-[25px] gap-[15px] items-center'>
                        <img className="w-5 h-7 xl:w-7 xl:h-8" loading='lazy' src={oneBrandsInfo.cover} alt="img" />
                        <p className='text-white'>{oneBrandsInfo.title}</p>
                    </div>
                </div>
            )}
            {countreyCodes && (
                <div className='border border-orangeCus mt-[30px]'>
                    <p className='p-[25px] text-[19px]/[22.8px] text-orangeCus'>SEND ENQUIRY</p>
                    <div className='p-[25px] gap-6 items-center flex flex-col'>
                        <input type="text" name="name" id="name" className='px-4 py-2.5 w-full text-black/70' placeholder='Name' />
                        <div onClick={() => setShowCountryCode(prevstate => !prevstate)} className='relative w-full'>
                            <div className='w-full bg-white cursor-pointer h-[42px] px-[5px] border  border-white flex justify-between items-center'>
                                <div className='flex items-center'>
                                    <span className='text-black/70 line-clamp-1'>{countryCodeValue}</span>
                                    {countryDialCode && (
                                        <span className='line-clamp-1 text-black/70'>({countryDialCode})</span>
                                    )}
                                </div>
                                <div className='bg-white w-5 h-5 flex items-center justify-center rounded-full'>
                                    <SlArrowDown />
                                </div>
                            </div>

                            <div className={`bg-white absolute overflow-auto flex-col z-10 w-full h-[160px] child:px-[5px] child:py-1 child:cursor-pointer text-black/70 child-hover:bg-[#5897FB] child-hover:text-white child:transition-all child:duration-300 border border-white ${showCountryCode ? 'flex' : 'hidden'}`}>
                                {countreyCodes.map((code, index) => (
                                    <div onClick={() => {
                                        setCountryCodeValue(code.name)
                                        setCountryDialCode(code.dial_code)
                                    }} className='flex items-center gap-1' key={index}>
                                        <img loading='lazy' className='w-5 h-7 xl:w-7 xl:h-8' src={code.image} alt="img" />
                                        <span className={`${countryCodeValue == code.name ? 'text-red-600' : ''} line-clamp-1`}>{code.name}</span>
                                        {code.dial_code && (
                                            <span className='line-clamp-1'>({code.dial_code})</span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <input type="text" name="telephone" id="telephone" className='px-4 py-2.5 w-full text-black/70' placeholder='Telephone' />
                        <input type="text" name="email" id="email" className='px-4 py-2.5 w-full text-black/70' placeholder='Email' />
                    </div>
                </div>
            )}
        </div>
    )
}
