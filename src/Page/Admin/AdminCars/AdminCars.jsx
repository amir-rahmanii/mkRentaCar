import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import { GiCancel } from "react-icons/gi";
import { TiTick } from "react-icons/ti";
import { BiShow } from "react-icons/bi";
import { FaRegEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import AddCars from '../../../Component/Admins/AddCars/AddCars';
import Modal from '../../../Component/Admins/Modal/Modal';
import FilterBar from '../../../Component/Admins/FilterBar/FilterBar';
import SearchBar from '../../../Component/Admins/SearchBar/SearchBar';


export default function AdminCars() {
  const [allcars, setAllcars] = useState([])
  const [allcarsFilters, setAllcarsFilters] = useState([])

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
  const [filteredValueBrand, setFilteredValueBrand] = useState([])
  //Update Car
  const [updateCarShow, setUpdateCarShow] = useState(false)

  //price updated
  const [priceOfferUppdated, setPriceOfferUppdated] = useState("")
  const [priceUppdated, setPriceUppdated] = useState("")

  //All brands
  const [allBrands, setAllBrands] = useState([])

  //Add new car
  const [showAddNewCar, setShowAddNewCar,] = useState(false)



  const getAllBrands = () => {
    fetch(`http://localhost:5000/allBrands`)
      .then(res => res.json())
      .then(result => {
        setAllBrands(result)

      })
  }

  const getAllCars = () => {
    fetch(`http://localhost:5000/cars`)
      .then(res => res.json())
      .then(result => {
        let newArray = result.reverse().filter(item => filteredValueBrand.includes(item.brand));
        setAllcars(newArray)
        setAllcarsFilters(result.reverse())
      })
  }

  const getAllCarsOld = () => {
    fetch(`http://localhost:5000/cars`)
      .then(res => res.json())
      .then(result => {
        let newArray = result.filter(item => filteredValueBrand.includes(item.brand));
        setAllcars(newArray)
      })
  }
  const getAllcarsHightoLow = () => {
    fetch(`http://localhost:5000/cars?_sort=price`)
      .then(res => res.json())
      .then(result => {
        let newArray = result.reverse().filter(item => filteredValueBrand.includes(item.brand));
        setAllcars(newArray)
      })
  }
  const getAllcarsLowtoHigh = () => {
    fetch(`http://localhost:5000/cars?_sort=price`)
      .then(res => res.json())
      .then(result => {
        let newArray = result.filter(item => filteredValueBrand.includes(item.brand));
        setAllcars(newArray)
      })
  }
  const getAllcarsisRegistered = () => {
    fetch(`http://localhost:5000/cars?isRegister=1`)
      .then(res => res.json())
      .then(result => {
        let newArray = result.reverse().filter(item => filteredValueBrand.includes(item.brand));
        setAllcars(newArray)
      })
  }
  const getAllcarsisNoRegistered = () => {
    fetch(`http://localhost:5000/cars?isRegister=0`)
      .then(res => res.json())
      .then(result => {
        let newArray = result.reverse().filter(item => filteredValueBrand.includes(item.brand));
        setAllcars(newArray)
      })
  }

  const filterPriceCars = () => {
    let arrayPushedFilters = []
    fetch(`http://localhost:5000/allBrands`)
      .then(res => res.json())
      .then(result => {
        result.filter(data => {
          if (data.searchFilter) {
            arrayPushedFilters.push(data.title)
          }
        })
        setFilteredValueBrand(arrayPushedFilters)
        setShowFilteredBrand(false)
        changeFilterdAction()
      })
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
    filterPriceCars()
  }, [])

  //chageInputBranding
  const chageInputBranding = (e, id) => {
    let itemValue = e.target.checked
    fetch(`http://localhost:5000/allBrands/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        searchFilter: itemValue
      })
    })
      .then(res => res.json())
  }


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

  const searchValueHandler = (e , value) => {
    e.preventDefault()
    let filterArray = [...allcarsFilters]
    if (value.trim()) {
      let userFilterValue = filterArray.filter(data => data.title.toLowerCase().includes(value.toLowerCase()) || data.brand.toLowerCase().includes(value.toLowerCase()) || data.carType.toLowerCase().includes(value.toLowerCase()))
      setAllcars(userFilterValue)
    } else {
      changeFilterdAction();
    }
  }


  useEffect(() => {
    changeFilterdAction()
  }, [filteredValue, filteredValueBrand])

  return (
    <>
      <div className='container font-medium '>
        <div className='flex justify-between shadow-lg px-4 items-center bg-black/80 mt-4 rounded-lg '>
          <p className='text-[25px] mt-4 mb-6 font-bold text-center text-orangeCus2'>List registration Cars</p>
          <div className=' flex gap-4'>
            <SearchBar searchValueHandler={searchValueHandler} />
            <button onClick={() => setShowFilteredBrand(true)} className='bg-orangeCus2 p-2 text-white rounded-lg'>
              Filter Brand
            </button>
            {/* Filter */}
            <FilterBar setShowFiltered={setShowFiltered} showFiltered={showFiltered} setFilteredValue={setFilteredValue} filteredValue={filteredValue} />
            {/* Filter */}

          </div>

        </div>
        <div className=' my-2'>
          <button onClick={() => setShowAddNewCar(true)} className='text-orangeCus2 p-2 rounded-md text-[25px] font-bold bg-[#454545] flex justify-center items-center gap-2'>Add New Car <FaPlus /> </button>
        </div>
        {allcars.length > 0 ? (
          <div className='shadow-lg  rounded-lg overflow-auto h-[430px]'>
            <table className='w-full text-center text-[15px] border-collapse border border-slate-500 '>
              <thead className='font-bold'>
                <tr className='child:p-4 child:text-orangeCus2 sticky top-0 child:bg-[#454545]'>
                  <th>Row</th>
                  <th>Name</th>
                  <th>Photo</th>
                  <th>PriceOf_Price</th>
                  <th>Car Type</th>
                  <th>Brand</th>
                  <th>Body</th>
                  <th>InfoCars</th>
                  <th>Status</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {allcars.map((car, index) => (
                  <tr key={car.id} className='child:p-2'>
                    <td className={`border border-slate-600 ${car.isRegister ? "bg-green-400" : "bg-red-400"}`}>{index + 1}</td>
                    <td>{car.title}</td>
                    <td><img width="80" src={car.cover[0].img} alt="img" /></td>
                    <td><span className='line-through font-light text-sm'>{car.priceOffer}</span> _ {car.price} AED</td>
                    <td>{car.carType}</td>
                    <td>{car.brand}</td>
                    <td>
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
                    <td>
                      <button className='bg-teal-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                        setInfoCar(car)
                        setBody(car.body)
                        setShowInfoCar(true)
                      }
                      }>
                        <BiShow />
                      </button>
                    </td>
                    <td>
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
                    <td>
                      <button className='bg-teal-500 text-white p-3 rounded-md cursor-pointer' onClick={() => {
                        setInfoCar(car)
                        setPriceUppdated(car.price)
                        setPriceOfferUppdated(car.priceOffer)
                        setUpdateCarShow(true)
                        setIdCar(car.id)
                      }} ><RxUpdate /></button>
                    </td>
                    <td>
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
          <h2 className='bg-black/80 mx-4 text-orangeCus2 text-[30px] text-center p-5 font-bold rounded-lg mt-5'>This filter was not found 😩</h2>
        )}
      </div>

      {/* info cars */}
      <Modal width="w-[850px]" height="h-auto" closedBox={showInfoCar} setClosedBox={setShowInfoCar} title={`${infocar.title} Info`}>
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
              <p className='text-[9px]/7 font-medium'>Car Name : <span className='text-orangeCus font-bold text-[11px]'>{infocar.title}</span></p>
              <p className='text-[9px]/7 font-medium'>Href : <span className='text-orangeCus font-bold text-[11px]'>{infocar.href}</span></p>
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
      </Modal>

      {/* is body */}
      <Modal width="w-[650px]" height="h-auto" closedBox={showBody} setClosedBox={setShowBody} title={`${infocar.title} body`}>
        <div className='flex items-center justify-between'>
          <div onClick={() => setEditBodyMode(prevstate => !prevstate)} className='bg-purple-500 font-bold text-[25px] p-3 flex justify-center items-center rounded-lg cursor-pointer'><FaRegEdit /></div>
        </div>
        {editBodyMode ? (
          <textarea value={body} onChange={(e) => setBody(e.target.value)} className='text-[20px] text-black mt-5 h-[300px] overflow-auto'></textarea>
        ) : (
          <p className='text-[20px] mt-5 h-[300px] overflow-auto'>{body}</p>
        )}
        {editBodyMode && (
          <button onClick={updateBody} className='bg-purple-500 mx-6 p-2 mt-4 rounded-lg'>
            Update
          </button>
        )}
      </Modal>


      {/* is regestired */}
      <Modal width="w-[400px]" height="h-auto" closedBox={showIsRegestr} setClosedBox={setShowIsRegestr} title={`${infocar.title} registration`}>
        <p className='text-[20px] mt-5'>Do you intend to register the carInfo?</p>
        <div className='flex gap-4 mt-5'>
          <button onClick={registeredCar} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
            Yes
          </button>
        </div>
      </Modal>

      {/* is regestired No */}
      <Modal width="w-[400px]" height="h-auto" closedBox={showIsRegestrNo} setClosedBox={setShowIsRegestrNo} title={`${infocar.title} registration`}>
        <p className='text-[20px] mt-5'>Do you intend to cancel register the carInfo?</p>
        <div className='flex gap-4 mt-5'>
          <button onClick={registeredCarNo} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
            Yes
          </button>
        </div>
      </Modal>

      {/* is Deleted */}
      <Modal width="w-[400px]" height="h-auto" closedBox={DeleteCarShow} setClosedBox={setDeleteCarShow} title={`Delete ${infocar.title}`}>
        <p className='text-[20px] mt-5'>Do you intend to Delete a Car?</p>
        <div className='flex gap-4 mt-5'>
          <button onClick={deleteCar} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
            Yes
          </button>
        </div>
      </Modal>


      {/*updated Car*/}
      <Modal width="w-[650px]" height="h-auto" closedBox={updateCarShow} setClosedBox={setUpdateCarShow} title={`Update ${infocar.title} Info`}>
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
          <button onClick={UpdatePriceCars} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
            Update
          </button>
        </div>
      </Modal>


      {/*filter brand Car*/}
      <Modal width="w-[650px]" height="h-auto" closedBox={showFilteredBrand} setClosedBox={setShowFilteredBrand} title="Filter Brand Info">
        <p className='text-[20px] mt-5'>Choose your brands.</p>
        <div className='grid grid-cols-3 gap-4 mt-4'>
          {allBrands.map((brand) => (
            <div className='flex items-center gap-2' key={brand.id}>
              <input type="checkbox" className="w-[14px] h-[14px] accent-orangeCus" defaultChecked={brand.searchFilter} onChange={(e) => chageInputBranding(e, brand.id)} />
              <img className='w-[20px] h-[20px]' src={brand.cover} alt="img" />
              <p className='text-xl'>{brand.title}</p>
            </div>
          ))}

        </div>
        <div className='flex gap-4 mt-4'>
          <button onClick={filterPriceCars} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
            Filter
          </button>
        </div>
      </Modal>

      {/* Add New Car */}
      <Modal width="w-[1300px]" height="h-[550px]" closedBox={showAddNewCar} setClosedBox={setShowAddNewCar} title="Add Car">
        <AddCars getAllCars={getAllCars} />
      </Modal>

    </>
  )
}
