import React, { useEffect, useState } from 'react';
import CarBoxInfo from "../CarBoxInfo/CarBoxInfo";
import { SlArrowDown } from "react-icons/sl";
import DataTableBrand from './DataTableBrand';
import { useParams } from 'react-router-dom';

export default function CarsInfoContainer({ currentItems }) {
    const [FilteredItem, setFilteredItem] = useState('Price High To Low')
    const [showFilteredItem, setShowFilteredItem] = useState(false)
    const params = useParams()


    return (
        <div className='bg-black font-light text-white pb-[35px]'>
            <div className='container'>
                {params.type && (
                    <h2 className='text-center text-4xl pt-3'>{params.type.toLocaleUpperCase()}</h2>
                )}
                {params.brand && (
                    <h2 className='text-center text-4xl pt-3'>{params.brand.toLocaleUpperCase()}</h2>
                )}
                <p className='p-[35px]'>If you want to rent a car in Dubai, there are plenty of options. However, if you want to experience the thrill of driving a sports car, renting a Mini in Dubai is definitely the way to go. These stylish and fun cars are the perfect way to explore all that Dubai has to offer.</p>
                {/* filtering */}
                <div className='pb-6 flex justify-center'>
                    <div onClick={() => setShowFilteredItem(prevstate => !prevstate)} className='relative text-[13px] '>
                        <div className='w-[150px] md:w-[285px] cursor-pointer h-[42px] px-[5px] border  border-white flex justify-between items-center'>
                            <span>{FilteredItem}</span>
                            <div className='bg-black w-5 h-5 flex items-center justify-center rounded-full'>
                                <SlArrowDown />
                            </div>
                        </div>

                        <div className={`bg-black absolute overflow-auto flex-col w-[150px] z-10 md:w-[285px] h-[90px] child:px-[5px] child:py-0.5 child:cursor-pointer child-hover:bg-orangeCus child:transition-all child:duration-300 border border-white ${showFilteredItem ? 'flex' : 'hidden'}`}>
                            <span onClick={(e) => {
                                e.preventDefault()
                                setFilteredItem("Price High To Low")
                            }}>Price High To Low</span>
                            <span onClick={(e) => {
                                e.preventDefault()
                                setFilteredItem("Price Low To High")
                            }}>Price Low To High</span>
                        </div>
                    </div>
                </div>
                {/* finish filtering */}
                {currentItems && (
                    <div className='flex flex-col lg:flex-row'>

                        {FilteredItem == "Price High To Low" && (
                            <div>
                                {currentItems.filter(car => car.isRegister === 1).slice().sort((priceA, priceB) => priceB.price - priceA.price).map((car) => (
                                    <div key={car.id}>
                                        <CarBoxInfo {...car} />
                                    </div>
                                ))}
                            </div>
                        )}
                        {FilteredItem == "Price Low To High" && (
                            <div>
                                {currentItems.filter(car => car.isRegister === 1).slice().sort((priceA, priceB) => priceA.price - priceB.price).map((car) => (
                                    <div key={car.id}>
                                        <CarBoxInfo {...car} />
                                    </div>
                                ))}
                            </div>
                        )}

                        <DataTableBrand />
                    </div>
                )}
            </div>
        </div >
    )
}
