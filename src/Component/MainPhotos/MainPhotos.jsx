import React, { useState } from 'react'
import { SlArrowDown } from "react-icons/sl";
import Button from '../Button/Button';

export default function MainPhotos() {
    const [typeOfCar , setTypeOfCar] = useState('All Car Type')
    const [showTypeOfCar , setShowTypeOfCar] = useState(false)
    const [allOfCarBrands , setAllOfCarBrands] = useState(' All Car Brands')
    const [showAllOfCarBrands , setShowAllOfCarBrands] = useState(false)
    return (
        <div className="bg-[url('https://mkrentacar.com/public/uploads/Banner/j4juq3hjUl.jpg')] bg-[center_top] w-full h-[200px] xs:h-auto aspect-[2/1] bg-no-repeat bg-cover flex justify-center items-end text-white font-light pb-8">
            <div>
                <p className='text-center text-[45px]/[54px]'>Luxury Car Rental In Dubai</p>
                <div className='mt-2.5 text-[18px]/[27px] font-medium'>
                    <p className='text-center'>If you are the type of person who can spot a supercar</p>
                    <p className='text-center'>a mile away, then <span className='text-orangeCus'>Masterkey Luxury Car Rentals</span> will help you realize your dream.</p>
                </div>

                {/* Serch box type*/}
                <div className='pt-2.5 flex gap-6 font-medium'>
                    <div onClick={() => setShowTypeOfCar(prevstate => !prevstate)} className='relative text-[13px] '>
                        <div  className=' w-[285px] cursor-pointer h-[42px] px-[5px] border  border-white flex justify-between items-center'>
                            <span>{typeOfCar}</span>
                            <div className='bg-black w-5 h-5 flex items-center justify-center rounded-full'>
                                <SlArrowDown />
                            </div>
                        </div>

                        <div className={`bg-black absolute overflow-auto flex-col w-[285px] h-[90px] child:px-[5px] child:py-0.5 child:cursor-pointer child-hover:bg-orangeCus child:transition-all child:duration-300 border border-white ${showTypeOfCar ? 'flex' : 'hidden'}`}>
                                <span onClick={(e) => setTypeOfCar(e.target.innerHTML)}>All Car Type</span>
                                <span onClick={(e) => setTypeOfCar(e.target.innerHTML)}>SUV Cars</span>
                                <span onClick={(e) => setTypeOfCar(e.target.innerHTML)}>Sports Cars</span>
                                <span onClick={(e) => setTypeOfCar(e.target.innerHTML)}>Luxury Cars</span>
                                <span onClick={(e) => setTypeOfCar(e.target.innerHTML)}>Exotic Cars</span>
                                <span onClick={(e) => setTypeOfCar(e.target.innerHTML)}>Convertible Cars</span>
                                <span onClick={(e) => setTypeOfCar(e.target.innerHTML)}>Economy Cars</span>
                        </div>
                    </div>
                    
                        {/* All Brand Serach */}
                    <div onClick={() => setShowAllOfCarBrands(prevstate => !prevstate)} className='relative text-[13px] '>
                        <div  className=' w-[285px] cursor-pointer h-[42px] px-[5px] border  border-white flex justify-between items-center'>
                            <span>{allOfCarBrands}</span>
                            <div className='bg-black w-5 h-5 flex items-center justify-center rounded-full'>
                                <SlArrowDown />
                            </div>
                        </div>

                        <div className={`bg-black absolute overflow-auto flex-col w-[285px] h-[90px] child:px-[5px] child:py-0.5 child:cursor-pointer child-hover:bg-orangeCus child:transition-all child:duration-300 border border-white ${showAllOfCarBrands ? 'flex' : 'hidden'}`}>
                                <span onClick={(e) => setAllOfCarBrands(e.target.innerHTML)}>All Car Brands</span>
                        </div>
                    </div>

                    {/* searchBox Handler */}
                    <Button link="#" classes='text-[15px]/[40px] font-light tracking-[1px] w-[228px]' >
                        <span>Search</span>
                    </Button>

                </div>

            
           
            </div>
        </div>
    )
}




