import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SlArrowDown } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { BiShow } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


export default function AdminCars() {
  const [allcars, setAllcars] = useState([])

  // info car
  const [showInfoCar, setShowInfoCar] = useState(false)
  const [infocar, setInfoCar] = useState({})
  const [showBody, setShowBody] = useState(false)
  //body
  const [body, setBody] = useState("")
  const [editBodyMode, setEditBodyMode] = useState(false)
  // is registered
  const [showIsRegestr, setShowIsRegestr] = useState(false)
  const [showIsRegestrNo, setShowIsRegestrNo] = useState(false)
  const [DeleteCarShow, setDeleteCarShow] = useState(false)
  const [idCar, setIdCar] = useState('')
  //showFiltered
  const [showFiltered, setShowFiltered] = useState(false)
  const [filteredValue, setFilteredValue] = useState("Default")
  //showFilteredBrand
  const [showFilteredBrand, setShowFilteredBrand] = useState(false)
  const [filteredValueBrand, setFilteredValueBrand] = useState("All Cars")
  //Update Car
  const [updateCarShow, setUpdateCarShow] = useState(false)

  //price updated
  const [priceOfferUppdated, setPriceOfferUppdated] = useState("")
  const [priceUppdated, setPriceUppdated] = useState("")

  //All brands
  const [allBrands, setAllBrands] = useState([])


  const getAllBrands = () => {
    fetch(`http://localhost:5000/allBrands`)
      .then(res => res.json())
      .then(result => {
        setAllBrands(result)
      })
  }

  const getAllCars = () => {
    if (filteredValueBrand == "All Cars") {
      fetch(`http://localhost:5000/cars`)
        .then(res => res.json())
        .then(result => {
          setAllcars(result.reverse())
        })
    } else {
      fetch(`http://localhost:5000/cars?brand=${filteredValueBrand}`)
        .then(res => res.json())
        .then(result => {
          setAllcars(result.reverse())
        })
    }
  }
  const getAllCarsOld = () => {
    if (filteredValueBrand == "All Cars") {
      fetch(`http://localhost:5000/cars`)
        .then(res => res.json())
        .then(result => {
          setAllcars(result)
        })
    } else {
      fetch(`http://localhost:5000/cars?brand=${filteredValueBrand}`)
        .then(res => res.json())
        .then(result => {
          setAllcars(result)
        })
    }
  }
  const getAllcarsHightoLow = () => {
    if (filteredValueBrand == "All Cars") {
      fetch(`http://localhost:5000/cars?_sort=price`)
        .then(res => res.json())
        .then(result => {
          setAllcars(result.reverse())
        })
    } else {
      fetch(`http://localhost:5000/cars?_sort=price&brand=${filteredValueBrand}`)
        .then(res => res.json())
        .then(result => {
          setAllcars(result.reverse())
        })
    }
  }
  const getAllcarsLowtoHigh = () => {
    if (filteredValueBrand == "All Cars") {
      fetch(`http://localhost:5000/cars?_sort=price`)
        .then(res => res.json())
        .then(result => {
          setAllcars(result)
        })
    } else {
      fetch(`http://localhost:5000/cars?_sort=price&brand=${filteredValueBrand}`)
        .then(res => res.json())
        .then(result => {
          setAllcars(result)
        })
    }
  }
  const getAllcarsisRegistered = () => {
    if (filteredValueBrand == "All Cars") {
      fetch(`http://localhost:5000/cars?isRegister=1`)
        .then(res => res.json())
        .then(result => {
          setAllcars(result)
        })
    } else {
      fetch(`http://localhost:5000/cars?isRegister=1&brand=${filteredValueBrand}`)
        .then(res => res.json())
        .then(result => {
          setAllcars(result)
        })
    }
  }
  const getAllcarsisNoRegistered = () => {
    if (filteredValueBrand == "All Cars") {
      fetch(`http://localhost:5000/cars?isRegister=0`)
        .then(res => res.json())
        .then(result => {
          setAllcars(result)
        })
    } else {
      fetch(`http://localhost:5000/cars?isRegister=0&brand=${filteredValueBrand}`)
        .then(res => res.json())
        .then(result => {
          setAllcars(result)
        })
    }
  }

  const changeFilterdAction = () => {
    if (filteredValue == "Default") {
      getAllCars()
    } else if (filteredValue == "Old registration") {
      getAllCarsOld()
    } else if (filteredValue == "Price High to Low") {
      getAllcarsHightoLow()
    } else if (filteredValue == "Price Low to High") {
      getAllcarsLowtoHigh()
    } else if (filteredValue == "Is Register") {
      getAllcarsisRegistered()
    } else {
      getAllcarsisNoRegistered()
    }
  }


  useEffect(() => {
    getAllCars()
    getAllBrands()
  }, [])


  //  For register
  const registeredCar = () => {
    fetch(`http://localhost:5000/cars/${idCar}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isRegister: 1
      })
    })
      .then((res) => {
        setShowIsRegestr(false)
        changeFilterdAction()
      })
  }


  //  For register No
  const registeredCarNo = () => {
    fetch(`http://localhost:5000/cars/${idCar}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isRegister: 0
      })
    })
      .then((res) => {
        setShowIsRegestrNo(false)
        changeFilterdAction()
      })
  }

  //Delete user

  const deleteCar = () => {
    fetch(`http://localhost:5000/cars/${idCar}`, {
      method: "Delete",
    })
      .then((res) => {
        setDeleteCarShow(false)
        changeFilterdAction()
      })
  }

  //UpdatePriceCars
  const UpdatePriceCars = () => {
    if (priceUppdated.trim() && priceOfferUppdated.trim()) {
      fetch(`http://localhost:5000/cars/${idCar}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          price: priceUppdated,
          priceOffer: priceOfferUppdated
        })
      })
        .then((res) => {
          setUpdateCarShow(false)
          changeFilterdAction()
        })
    }
  }

  //Update body 
  const updateBody = () => {
    if (body.trim()) {
      fetch(`http://localhost:5000/cars/${idCar}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          body: body
        })
      })
        .then((res) => {
          setShowBody(false)
          changeFilterdAction()

        })
    }
  }



  useEffect(() => {
    changeFilterdAction()
  }, [filteredValue, filteredValueBrand])

  return (
    <>
      <div className='px-4 font-medium '>
        <div className='flex justify-between shadow-lg px-4 items-center bg-black/80 mt-4 rounded-lg mx-4'>
          <p className='text-[25px] mt-4 mb-6 font-bold text-center text-orangeCus2'>List registration Cars</p>
          <div className=' flex gap-4'>
            {/* Filter brand */}
            <div onClick={() => setShowFilteredBrand(prevstate => !prevstate)} className='w-[200px]'>
              <div className='w-[200px] bg-[#cccccc] cursor-pointer h-[42px] px-[5px] border  border-bg-[#cccccc] flex justify-between items-center'>
                <div className='flex items-center'>
                  <span className='text-black/70 line-clamp-1'>{filteredValueBrand}</span>
                </div>
                <div className='bg-[#cccccc] w-5 h-5 flex items-center justify-center rounded-full'>
                  <SlArrowDown />
                </div>
              </div>

              <div className={`bg-[#cccccc] absolute overflow-auto h-[200px] flex-col z-10 w-[200px] child:px-[5px] child:py-2 child:cursor-pointer text-black/70 child:transition-all child:duration-300 border border-white ${showFilteredBrand ? 'flex' : 'hidden'}`}>
                <div onClick={() => { setFilteredValueBrand("All Cars") }} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' >
                  <span className={`line-clamp-1`} >All Cars</span>
                </div>
                {allBrands.map((brand) => (
                  <div onClick={() => { setFilteredValueBrand(brand.title) }} key={brand.id} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' >
                    <span className={`line-clamp-1`} >{brand.title}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Filter brand */}
            {/* Filter */}
            <div onClick={() => setShowFiltered(prevstate => !prevstate)} className='w-[200px]'>
              <div className='w-[200px] bg-[#cccccc] cursor-pointer h-[42px] px-[5px] border  border-bg-[#cccccc] flex justify-between items-center'>
                <div className='flex items-center'>
                  <span className='text-black/70 line-clamp-1'>{filteredValue}</span>
                </div>
                <div className='bg-[#cccccc] w-5 h-5 flex items-center justify-center rounded-full'>
                  <SlArrowDown />
                </div>
              </div>

              <div className={`bg-[#cccccc] absolute h-[200px] overflow-auto flex-col z-10 w-[200px] child:px-[5px] child:py-2 child:cursor-pointer text-black/70 child:transition-all child:duration-300 border border-white ${showFiltered ? 'flex' : 'hidden'}`}>
                <div onClick={() => setFilteredValue("Default")} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' >
                  <span className={`line-clamp-1`} >Default</span>
                </div>
                <div onClick={() => setFilteredValue("Old registration")} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' >
                  <span className={`line-clamp-1`} >Old registration</span>
                </div>
                <div onClick={() => setFilteredValue("Price High to Low")} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' >
                  <span className={`line-clamp-1`} >Price High to Low</span>
                </div>
                <div onClick={() => setFilteredValue("Price Low to High")} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' >
                  <span className={`line-clamp-1`} >Price Low to High</span>
                </div>
                <div onClick={() => setFilteredValue("Is Register")} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' >
                  <span className={`line-clamp-1`} >Is Register</span>
                </div>
                <div onClick={() => setFilteredValue("Is No Register")} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' >
                  <span className={`line-clamp-1`} >Is No Register</span>
                </div>
              </div>
            </div>
            {/* Filter */}

          </div>

        </div>
        <div className='mx-4 my-2'>
          <button className='text-orangeCus2 p-2 rounded-md text-[25px] font-bold bg-[#454545] flex justify-center items-center gap-2'>Add New Car <FaPlus /> </button>
        </div>
        {allcars.length > 0 ? (
          <div className='shadow-lg p-4 rounded-lg overflow-auto h-[430px]'>
            <table className='w-full text-center border-collapse border border-slate-500 '>
              <thead className='font-bold'>
                <tr className='child:p-4 child:text-orangeCus2 child:bg-[#454545]'>
                  <th className='border border-slate-600'>Row</th>
                  <th className='border border-slate-600'>Name</th>
                  <th className='border border-slate-600'>Href</th>
                  <th className='border border-slate-600'>PriceOf_Price</th>
                  <th className='border border-slate-600'>Car Type</th>
                  <th className='border border-slate-600'>Brand</th>
                  <th className='border border-slate-600'>Body</th>
                  <th className='border border-slate-600'>InfoCars</th>
                  <th className='border border-slate-600'>Register</th>
                  <th className='border border-slate-600'>Update</th>
                  <th className='border border-slate-600'>Delete</th>
                </tr>
              </thead>
              <tbody>
                {allcars.map((car, index) => (
                  <tr key={car.id} className='child:p-2'>
                    <td className={`border border-slate-600 ${car.isRegister ? "bg-green-400" : "bg-red-400"}`}>{index + 1}</td>
                    <td className='border border-slate-600 '>{car.title}</td>
                    <td className='border border-slate-600'>{car.href}</td>
                    <td className='border border-slate-600'><span className='line-through font-light text-sm'>{car.priceOffer}</span> _ {car.price}</td>
                    <td className='border border-slate-600'>{car.carType}</td>
                    <td className='border border-slate-600'>{car.brand}</td>
                    <td className='border border-slate-600'>
                      <button className='bg-purple-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                        setBody(car.body)
                        setInfoCar(car)
                        setIdCar(car.id)
                        setShowBody(true)
                      }
                      }>
                        <BiShow />
                      </button>
                    </td>
                    <td className='border border-slate-600'>
                      <button className='bg-teal-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                        setInfoCar(car)
                        setBody(car.body)
                        setShowInfoCar(true)
                      }
                      }>
                        <BiShow />
                      </button>
                    </td>
                    <td className='border border-slate-600'>
                      {car.isRegister ? (
                        <button className='bg-red-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                          setInfoCar(car)
                          setShowIsRegestrNo(true)
                          setIdCar(car.id)
                        }}>
                          <GiCancel />
                        </button>
                      ) : (
                        <button className='bg-green-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                          setInfoCar(car)
                          setShowIsRegestr(true)
                          setIdCar(car.id)
                        }}>
                          <TiTick />
                        </button>
                      )}
                    </td>
                    <td className='border border-slate-600'>
                      <button className='bg-teal-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                        setInfoCar(car)
                        setPriceUppdated(car.price)
                        setPriceOfferUppdated(car.priceOffer)
                        setUpdateCarShow(true)
                        setIdCar(car.id)
                      }} ><RxUpdate /></button>
                    </td>
                    <td className='border border-slate-600'>
                      <button className='bg-red-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                        setInfoCar(car)
                        setDeleteCarShow(true)
                        setIdCar(car.id)
                      }}>
                        <MdDelete />
                      </button>
                    </td>
                  </tr>

                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2 className='bg-black/80 text-orangeCus2 text-[30px] text-center p-5 font-bold rounded-lg mt-5'>This filter was not found 😩</h2>
        )}
      </div>

      {/* info cars */}

      <div onClick={() => setShowInfoCar(false)} className={`bg-black/40 fixed font-medium inset-0 w-full h-full z-50 transition-all  ${showInfoCar ? 'visible opacity-100' : 'opacity-0 invisible'}`}>
        <div className='flex h-screen z-50 justify-center items-center '>
          <div onClick={(e) => {
            e.stopPropagation()
          }} className='flex flex-col z-50 w-auto m-4 sm:w-[750px] p-3 bg-[#454545] text-white font-light shadow-[0_0px_23px_0px_rgba(253,177,0)] hover:outline hover:outline-orangeCus rounded-[15px]'>
            <p className='text-orangeCus2 font-bold text-[25px]'>{infocar.title} Info</p>
            <div className='flex items-center gap-12 mt-2'>
              {infocar.cover && (
                <div className='grid grid-cols-2 gap-3'>
                  {infocar.cover.map((car) => (
                    <div key={car.id} className='rounded-xl overflow-hidden'>
                      <img className='w-[150px]' src={car.img} alt="img" />
                    </div>
                  ))}
                </div>
              )}
              <div className='text-white flex flex-col gap-2'>
                <p className='text-orangeCus2 font-medium text-[25px]'>Technical Specifications</p>
                <div className={`overflow-hidden cursor-pointer w-full grid grid-cols-2 gap-x-20 transition-all duration-500`}>
                  <p className='text-[9px]/7 font-medium'>Href CarType : <span className='text-orangeCus font-bold text-[11px]'>{infocar.hrefCarType}</span></p>
                  <p className='text-[9px]/7 font-medium'>Href CarBrand : <span className='text-orangeCus font-bold text-[11px]'>{infocar.hrefBrand}</span></p>
                  <p className='text-[9px]/7 font-medium'>COLOR : <span className='text-orangeCus font-bold text-[11px]'>{infocar.color}</span></p>
                  <p className='text-[9px]/7 font-medium'>ENGINE : <span className='text-orangeCus font-bold text-[11px]'>{infocar.engine}</span></p>
                  <p className='text-[9px]/7 font-medium'>FREE PICKUP-DROP OFF : <span className='text-orangeCus font-bold text-[11px]'>{infocar.Freepickup}</span></p>
                  <p className='text-[9px]/7 font-medium'>AUX : <span className='text-orangeCus font-bold text-[11px]'>{infocar.aux}</span></p>
                  <p className='text-[9px]/7 font-medium'>USB : <span className='text-orangeCus font-bold text-[11px]'>{infocar.usb}</span></p>
                  <p className='text-[9px]/7 font-medium'>Bluetooth : <span className='text-orangeCus font-bold text-[11px]'>{infocar.Bluetooth}</span></p>
                  <p className='text-[9px]/7 font-medium'>Automotic : <span className='text-orangeCus font-bold text-[11px]'>{infocar.Automotic}</span></p>
                  <p className='text-[9px]/7 font-medium'>Parking Sensor  : <span className='text-orangeCus font-bold text-[11px]'>{infocar.Parksensor}</span></p>
                  <p className='text-[9px]/7 font-medium'>Navigation : <span className='text-orangeCus font-bold text-[11px]'>{infocar.Navigation}</span></p>
                  <p className='text-[9px]/7 font-medium'>Front & Reverse Camera  : <span className='text-orangeCus font-bold text-[11px]'>{infocar.frontReverseCamera}</span></p>
                  <p className='text-[9px]/7 font-medium'>Full Insurance  : <span className='text-orangeCus font-bold text-[11px]'>{infocar.FullInsurance}</span></p>
                  <p className='text-[9px]/7 font-medium'>Free Cancellation  : <span className='text-orangeCus font-bold text-[11px]'>{infocar.FreeCancellation}</span></p>
                  <p className='text-[9px]/7 font-medium'>24/7 Customer Service : <span className='text-orangeCus font-bold text-[11px]'>{infocar.CustomerService}</span></p>
                  <p className='text-[9px]/7 font-medium'>Seats : <span className='text-orangeCus font-bold text-[11px]'>{infocar.Seats}</span></p>
                  <p className='text-[9px]/7 font-medium'>Doors  : <span className='text-orangeCus font-bold text-[11px]'>{infocar.Doors}</span></p>
                  <p className='text-[9px]/7 font-medium'>Luggage  : <span className='text-orangeCus font-bold text-[11px]'>{infocar.Luggage}</span></p>
                  <p className='text-[9px]/7 font-medium'>Security Type  : <span className='text-orangeCus font-bold text-[11px]'>{infocar.SecurityType}</span></p>
                  <p className='text-[9px]/7 font-medium'>Payment Type  : <span className='text-orangeCus font-bold text-[11px]'>{infocar.PaymentType}</span></p>
                  <p className='text-[9px]/7 font-medium'>Mileage Daily, KM  : <span className='text-orangeCus font-bold text-[11px]'>{infocar.MileageDailyKM}</span></p>
                  <p className='text-[9px]/7 font-medium'>Cost of Extra Km  : <span className='text-orangeCus font-bold text-[11px]'>{infocar.CostofExtraKm}</span></p>
                  <p className='text-[9px]/7 font-medium'>Security Amount, AED  : <span className='text-orangeCus font-bold text-[11px]'>{infocar.SecurityAmountAED}</span></p>
                  <p className='text-[9px]/7 font-medium'>Cruise Control  : <span className='text-orangeCus font-bold text-[11px]'>{infocar.CruiseControl}</span></p>
                </div>
              </div>

            </div>
            <button onClick={() => {
              setShowInfoCar(false)
            }} className='bg-green-600 mt-3 p-2 rounded-md'>Ok</button>
          </div>
        </div>
      </div>

      {/* is body */}
      <div onClick={() => setShowBody(false)} className={`bg-black/40 fixed font-medium inset-0 w-full h-full z-50 transition-all  ${showBody ? 'visible opacity-100' : 'opacity-0 invisible'}`}>
        <div className='flex h-screen z-50 justify-center items-center '>
          <div onClick={(e) => {
            e.stopPropagation()
          }} className='flex flex-col z-50 w-auto m-4 sm:w-[700px] overflow-auto p-3 bg-[#454545] text-white font-light shadow-[0_0px_23px_0px_rgba(253,177,0)] hover:outline hover:outline-orangeCus rounded-[15px]'>
            <div className='flex items-center justify-between'>
              <p className='text-orangeCus2 font-bold text-[25px]'>{infocar.title} body</p>
              <div onClick={() => setEditBodyMode(prevstate => !prevstate)} className='bg-purple-500 font-bold text-[25px] p-3 flex justify-center items-center rounded-lg cursor-pointer'><FaRegEdit /></div>
            </div>
            {editBodyMode ? (
              <textarea value={body} onChange={(e) => setBody(e.target.value)} className='text-[20px] text-black mt-5 h-[300px] overflow-auto'></textarea>
            ) : (
              <p className='text-[20px] mt-5 h-[300px] overflow-auto'>{body}</p>
            )}
            {editBodyMode && (
              <button onClick={updateBody} className='bg-purple-500 w-full p-2 mt-4 rounded-lg'>
                Update
              </button>
            )}
            <button onClick={() => setShowBody(false)} className='bg-green-500 w-full p-2 mt-2 rounded-lg'>
              ok
            </button>
          </div>
        </div>
      </div>

      {/* is regestired */}
      <div onClick={() => setShowIsRegestr(false)} className={`bg-black/40 fixed font-medium inset-0 w-full h-full z-50 transition-all  ${showIsRegestr ? 'visible opacity-100' : 'opacity-0 invisible'}`}>
        <div className='flex h-screen z-50 justify-center items-center '>
          <div onClick={(e) => {
            e.stopPropagation()
          }} className='flex flex-col z-50 w-auto m-4 sm:w-[400px] p-3 bg-[#454545] text-white font-light shadow-[0_0px_23px_0px_rgba(253,177,0)] hover:outline hover:outline-orangeCus rounded-[15px]'>
            <p className='text-orangeCus2 font-bold text-[25px]'>{infocar.title} registration</p>
            <p className='text-[20px] mt-5'>Do you intend to register the carInfo?</p>
            <div className='flex gap-4 mt-5'>
              <button onClick={registeredCar} className='bg-green-600 w-full p-2 rounded-lg'>
                Yes
              </button>
              <button onClick={() => setShowIsRegestr(false)} className='bg-red-600 w-full p-2 rounded-lg'>
                No
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* is regestired No */}
      <div onClick={() => setShowIsRegestrNo(false)} className={`bg-black/40 fixed font-medium inset-0 w-full h-full z-50 transition-all  ${showIsRegestrNo ? 'visible opacity-100' : 'opacity-0 invisible'}`}>
        <div className='flex h-screen z-50 justify-center items-center '>
          <div onClick={(e) => {
            e.stopPropagation()
          }} className='flex flex-col z-50 w-auto m-4 sm:w-[400px] p-3 bg-[#454545] text-white font-light shadow-[0_0px_23px_0px_rgba(253,177,0)] hover:outline hover:outline-orangeCus rounded-[15px]'>
            <p className='text-orangeCus2 font-bold text-[25px]'>{infocar.title} registration</p>
            <p className='text-[20px] mt-5'>Do you intend to cancel register the carInfo?</p>
            <div className='flex gap-4 mt-5'>
              <button onClick={registeredCarNo} className='bg-green-600 w-full p-2 rounded-lg'>
                Yes
              </button>
              <button onClick={() => setShowIsRegestrNo(false)} className='bg-red-600 w-full p-2 rounded-lg'>
                No
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* is Deleted */}
      <div onClick={() => {
        setDeleteCarShow(false)
      }} className={`bg-black/40 fixed font-medium inset-0 w-full h-full z-50 transition-all  ${DeleteCarShow ? 'visible opacity-100' : 'opacity-0 invisible'}`}>
        <div className='flex h-screen z-50 justify-center items-center '>
          <div onClick={(e) => {
            e.stopPropagation()
          }} className='flex flex-col z-50 w-auto m-4 sm:w-[400px] p-3 bg-[#454545] text-white font-light shadow-[0_0px_23px_0px_rgba(253,177,0)] hover:outline hover:outline-orangeCus rounded-[15px]'>
            <p className='text-orangeCus2 font-bold text-[25px]'>Delete {infocar.title}</p>
            <p className='text-[20px] mt-5'>Do you intend to Delete a Car?</p>
            <div className='flex gap-4 mt-5'>
              <button onClick={deleteCar} className='bg-green-600 w-full p-2 rounded-lg'>
                Yes
              </button>
              <button onClick={() => setDeleteCarShow(false)} className='bg-red-600 w-full p-2 rounded-lg'>
                No
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*updated Car*/}
      <div onClick={() => {
        setUpdateCarShow(false)
      }} className={`bg-black/40 fixed font-medium inset-0 w-full h-full z-50 transition-all  ${updateCarShow ? 'visible opacity-100' : 'opacity-0 invisible'}`}>
        <div className='flex h-screen z-50 justify-center items-center '>
          <div onClick={(e) => {
            e.stopPropagation()
          }} className='flex flex-col z-50 w-[550px] m-4 p-3 bg-[#454545] text-white font-light shadow-[0_0px_23px_0px_rgba(253,177,0)] hover:outline hover:outline-orangeCus rounded-[15px]'>
            <p className='text-orangeCus2 font-bold text-[25px]'>Update {infocar.title} Info</p>
            <p className='text-[20px] mt-5'>Do you want to change the price?</p>
            {infocar.price && (
              <div className='grid grid-cols-2 mt-5'>
                <div className='flex flex-col gap-2 items-center'>
                  <label htmlFor="priceOffer">priceOffer</label>
                  <input type="text" className='text-black p-2 outline-none rounded-md' id='priceOffer' name='priceOffer' value={priceOfferUppdated} onChange={(e) => !isNaN(e.target.value) && setPriceOfferUppdated(e.target.value)} />
                </div>
                <div className='flex flex-col gap-2 items-center'>
                  <label htmlFor="price">price</label>
                  <input type="text" className='text-black p-2 outline-none rounded-md' id='price' name='price' value={priceUppdated} onChange={(e) => !isNaN(e.target.value) && setPriceUppdated(e.target.value)} />
                </div>

              </div>
            )}
            <div className='flex gap-4 mt-4'>
              <button onClick={UpdatePriceCars} className='bg-green-600 w-full p-2 rounded-lg'>
                Update
              </button>
            </div>
            <div className='flex gap-4 mt-2'>
              <button onClick={() => setUpdateCarShow(false)} className='bg-red-600 w-full p-2 rounded-lg'>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
