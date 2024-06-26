import React, { useEffect, useState, useContext } from 'react'
import { SlArrowDown } from "react-icons/sl";
import Button from '../Button/Button';
import AuthContext from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function MainPhotos() {
    const [allCars, setAllCars] = useState([])
    const [typeOfCar, setTypeOfCar] = useState('All Car Type')
    const [showTypeOfCar, setShowTypeOfCar] = useState(false)
    const [allOfCarBrands, setAllOfCarBrands] = useState('All Car Brands')
    const [showAllOfCarBrands, setShowAllOfCarBrands] = useState(false)
    const [allCarType, setAllCarType] = useState([])
    const [allCarBrand, setAllCarBrand] = useState([])
    //context
    const authContext = useContext(AuthContext)

    //navigate
    const navigate = useNavigate()

    //translate
    const { t } = useTranslation()

    const getAllCars = () => {
        fetch(`https://mkrentacar.liara.run/cars`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json()
            })
            .then(result => {
                setAllCars(result)
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));

    }

    const getAllCarBrand = () => {
        fetch(`https://mkrentacar.liara.run/allBrands`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json()
            })
            .then(result => {
                setAllCarBrand(result)
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));

    }

    const getAllCarType = () => {
        fetch(`https://mkrentacar.liara.run/carType`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json()
            })
            .then(result => {
                setAllCarType(result)
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));

    }

    


    useEffect(() => {
        getAllCars()
        getAllCarType()
        getAllCarBrand()
    }, [])


    const searchValueHandler = (e) => {
        e.preventDefault()
        let filterArray = [...allCars]
        if (typeOfCar === "All Car Type" && allOfCarBrands === "All Car Brands") {
            authContext.searchFunc(filterArray)
        } else if (typeOfCar !== "All Car Type" && allOfCarBrands === "All Car Brands" ) {
            let carsFilterValue = filterArray.filter(data => data.carType.toLowerCase() === typeOfCar.toLowerCase())
            authContext.searchFunc(carsFilterValue)
        }else if(allOfCarBrands !== "All Car Brands" && typeOfCar === "All Car Type"){
            let carsFilterValue = filterArray.filter(data => data.brand.toLowerCase() === allOfCarBrands.toLowerCase())
            authContext.searchFunc(carsFilterValue)
        }else{
            let carsFilterValue = filterArray.filter(data => (data.brand.toLowerCase() === allOfCarBrands.toLowerCase()) && (data.carType.toLowerCase() === typeOfCar.toLowerCase()))
            authContext.searchFunc(carsFilterValue)
        }
        navigate("/cars-search")
    }

    return (
        <div className={`bg-[url('/images/0.png')] bg-[center_top] w-full h-[300px] xs:h-auto aspect-[2/1] bg-no-repeat bg-cover flex justify-center items-end text-white font-light pb-3 md:pb-8`}>


            <div>
                <p className='text-center text-[45px]/[54px] hidden md:block'>{t("Luxury Car Rental In Dubai")}</p>
                <div className='mt-2.5 text-[18px]/[27px] font-medium hidden md:block'>
                    <p className='text-center'>{t("If you are the type of person who can spot a supercar")}</p>
                    <p className='text-center'>{t("a mile away, then")} <span className='text-orangeCus'>{t("Masterkey Luxury Car Rentals")}</span> {t("will help you realize your dream")}</p>
                </div>

                {/* Serch box type*/}
                <div className='pt-2.5 flex flex-col items-center md:flex md:flex-row gap-3 md:gap-6 font-medium'>
                    <div className='flex gap-6'>
                        <div onClick={() => setShowTypeOfCar(prevstate => !prevstate)} className='relative text-[13px] '>
                            <div className='w-[150px] md:w-[285px] cursor-pointer h-[42px] px-[5px] border  border-white flex justify-between items-center'>
                                <span>{typeOfCar}</span>
                                <div className='bg-black w-5 h-5 flex items-center justify-center rounded-full'>
                                    <SlArrowDown />
                                </div>
                            </div>

                            <div className={`bg-black absolute overflow-auto flex-col w-[150px] z-10 md:w-[285px] h-[90px] child:px-[5px] child:py-0.5 child:cursor-pointer child-hover:bg-orangeCus child:transition-all child:duration-300 border border-white ${showTypeOfCar ? 'flex' : 'hidden'}`}>
                                <span onClick={() => setTypeOfCar("All Car Type")}>All Car Type</span>
                                {allCarType.map(type => (
                                    <span key={type.id} onClick={() => setTypeOfCar(type.title)}>{type.title}</span>
                                ))}
                            </div>
                        </div>

                        {/* All Brand Serach */}
                        <div onClick={() => setShowAllOfCarBrands(prevstate => !prevstate)} className='relative text-[13px] '>
                            <div className='w-[150px] md:w-[285px] cursor-pointer h-[42px] px-[5px] border  border-white flex justify-between items-center'>
                                <span>{allOfCarBrands}</span>
                                <div className='bg-black w-5 h-5 flex items-center justify-center rounded-full'>
                                    <SlArrowDown />
                                </div>
                            </div>

                            <div className={`bg-black absolute overflow-auto flex-col w-[150px] z-10 md:w-[285px] h-[90px] child:px-[5px] child:py-0.5 child:cursor-pointer child-hover:bg-orangeCus child:transition-all child:duration-300 border border-white ${showAllOfCarBrands ? 'flex' : 'hidden'}`}>
                                <span onClick={() => setTypeOfCar("All Car Brands")}>All Car Brands</span>
                                {allCarBrand.map(type => (
                                    <span key={type.id} onClick={() => setAllOfCarBrands(type.title)}>{type.title}</span>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* searchBox Handler */}
                    <div onClick={searchValueHandler}>
                        <Button link="#" classes='bg-neutral-700 px-4 md:px-0 text-[15px]/[40px] rounded-md md:rounded-none font-light tracking-[1px] w-full md:w-[228px]' >
                            <span>{t("Search")}</span>
                        </Button>
                    </div>

                </div>



            </div>

        </div>
    )
}




