import React, { useEffect, useState, useContext } from 'react'
import { SlArrowDown } from "react-icons/sl";
import MyCalendar from './MyCalendar';
import { v4 as uuidv4 } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import Modal from '../Admins/Modal/Modal'

export default function TableOneCar({ oneBrand, allCars }) {
    const [oneBrands, setOneBrands] = useState(oneBrand)
    const [oneBrandsInfo, setOneBrandsInfo] = useState({})

    const [countryCodeValue, setCountryCodeValue] = useState('Afghanistan')
    const [showCountryCode, setShowCountryCode] = useState(false)
    const [countreyCodes, setCountreyCodes] = useState([])
    const [countreyCodesSaerched, setCountreyCodesSaerched] = useState([])
    const [countryDialCode, setCountryDialCode] = useState("+93")
    const [searchValue, setSearchValue] = useState('')
    const [showMessageErrorLogin, SetShowMessageErrorLogin] = useState(false)

    //for Date
    const [fullYear, setFullYear] = useState(new Date())
    const [showSubmitRegestrid, setShowSubmitRegestrid] = useState(false)

    const navigate = useNavigate();
    const authContext = useContext(AuthContext)


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
                setCountreyCodesSaerched(result)
            })
    }

    useEffect(() => {
        getallbrand()
        getallcountreyCodes()
    }, [])

    useEffect(() => {
        let searchFiltered = countreyCodes.slice().filter(code => code.name.includes(searchValue))
        setCountreyCodesSaerched(searchFiltered)
    }, [searchValue])

    const addRentalCar = () => {
        if (authContext.isLoggedIn) {
            let newObj = {
                id: uuidv4(),
                name: authContext.userInfo[0].username,
                telephone: authContext.userInfo[0].cellNumber,
                email: authContext.userInfo[0].email,
                carType: allCars.carType,
                carName: allCars.title,
                carBrand: oneBrandsInfo.title,
                carimg: allCars.cover[0].img,
                price: allCars.price,
                countryCode: countryDialCode,
                country: countryCodeValue,
                register: 0,
                dateFull: fullYear
            }
            fetch(`http://localhost:5000/registeredRent`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newObj)
            })
                .then((res) => {
                    if (res.status === 201) {
                        setShowSubmitRegestrid(true)
                    }
                })

            fetch(`http://localhost:5000/users/${authContext.userInfo[0].id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    registeredRent : [newObj]
            })
            })
                .then((res) => {
                    if (res.status === 201) {
                        setShowSubmitRegestrid(true)
                    }
                })

        } else {
            SetShowMessageErrorLogin(true);
        }
    }


    return (
        <>
            <div className='p-10 w-auto lg:w-[440px] font-medium'>
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
                        <div>
                            <div className='flex flex-col items-center gap-6 w-full p-[25px] text-base' >
                                {/* Contry code */}
                                <div className='relative w-full'>
                                    <div onClick={() => setShowCountryCode(prevstate => !prevstate)} className='w-full bg-white cursor-pointer h-[42px] px-[5px] border  border-white flex justify-between items-center'>
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

                                    <div className={`${showCountryCode ? 'block' : 'hidden'} bg-white absolute overflow-auto flex-col z-10 w-full h-[210px] child:px-[5px] child:py-1 child:cursor-pointer text-black/70 child:transition-all child:duration-300 border border-white`}>
                                        <div className='border border-black/70 m-2'>
                                            <input className='w-full outline-none' type="text" placeholder='Search' onChange={(e) => setSearchValue(e.target.value)} />
                                        </div>
                                        <div>
                                            {countreyCodesSaerched.map((code, index) => (
                                                <div onClick={() => {
                                                    setCountryCodeValue(code.name)
                                                    setCountryDialCode(code.dial_code)
                                                    setShowCountryCode(false)
                                                }} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' key={index}>
                                                    <img loading='lazy' className='w-5 h-7 xl:w-7 xl:h-8' src={code.image} alt="img" />
                                                    <span className={`${countryCodeValue == code.name ? 'text-red-600' : ''} line-clamp-1`}>{code.name}</span>
                                                    {code.dial_code && (
                                                        <span className='line-clamp-1'>({code.dial_code})</span>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Contry code */}

                                <MyCalendar fullYear={fullYear} setFullYear={setFullYear} />

                                <button onClick={addRentalCar} className='bg-neutral-700 text-sm w-[160px] px-4 py-2.5 rounded-sm tracking-[1px] text-white hover:bg-orangeCus transition-all duration-300 flex items-center justify-center' type="submit">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                )
                }
            </div >
            <div onClick={() => setShowSubmitRegestrid(false)} className={`bg-black/40 fixed inset-0 w-full h-full z-50 transition-all  ${showSubmitRegestrid ? 'visible opacity-100' : 'opacity-0 invisible'}`}>
                <div className='flex h-screen z-50 justify-center items-center '>
                    <div onClick={(e) => {
                        e.stopPropagation()
                    }} className='flex flex-col z-50 w-auto m-4 sm:w-[500px] p-3 bg-[#454545] text-white font-light shadow-[0_0px_23px_0px_rgba(253,177,0)] hover:outline hover:outline-orangeCus rounded-[15px]'>
                        <p className='text-orangeCus2 font-bold text-[25px]'>successfully registered</p>
                        <p className='pt-1.5'><span className='font-medium text-orangeCus'>{allCars.title}</span> rental has been successfully registered and our colleagues will call your number in the next 24 hours.</p>
                        <p className='pt-1.5'>By referring to this section <Link className='text-blue-600 font-medium'>rules</Link> , you can read the rules for renting a car</p>
                        <p className='pt-1.5'>If you have a problem with the registration and need more explanations, contact our support. <span className='text-orangeCus font-medium'>(+9999999999)</span></p>
                        <button onClick={() => {
                            setShowSubmitRegestrid(false)
                            navigate('/')
                        }} className='bg-green-600 mt-3 p-2 rounded-md'>Ok</button>
                    </div>
                </div>
            </div>

            {/* is Deleted */}
            <Modal width="w-[400px]" height="h-auto" closedBox={showMessageErrorLogin} setClosedBox={SetShowMessageErrorLogin} title={`Login Or Register`}>
                <p className='text-[20px] my-5'>To rent a car, you must first <Link className='text-[#188FFF] font-bold underline' to="/login">login</Link> or <Link className='text-[#188FFF] font-bold line underline' to="/register">register</Link> .</p>
            </Modal>
        </>
    )
}
