import React, { useState, useEffect, useContext } from 'react'
import { SlArrowDown } from "react-icons/sl";
import { v4 as uuidv4 } from 'uuid';
import AuthContext from '../../Context/AuthContext'
import Modal from "../../Component/Admins/Modal/Modal"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next'

export default function PanelUserComment() {
  const [allCars, setAllCars] = useState([])
  const [allCarsSearched, setAllCarsSearched] = useState([])
  const [carsNameValue, setCarsNameValue] = useState('Bentley Bentayga')
  const [carsImgValue, setCarsImgValue] = useState('/images/cars/bentleyBentayga.jpg')
  const [showCarsName, setShowCarsName] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [scoreValue, setScoreValue] = useState('Excellent')
  const [showScore, setshowScore] = useState(false)
  const [commentValue, setCommentValue] = useState("")


  //translate
  const { t } = useTranslation()
  //Toast

  const notify = () => {
    toast('Comment added successfully!', {
      icon: <FaCheckCircle color="green" />,
      type: 'success',
      theme: 'dark'
    });
  }
  //Modal
  const [modalAddCommentShow, setModalAddCommentShow] = useState(false)

  //Auth
  const authContext = useContext(AuthContext)

  //Date
  const [fullYear, setFullYear] = useState(new Date())

  //for score
  const allScore = ["Excellent", "VeryGood", "Good", "Bad", "Very Bad"]

  //Error
  const [showErrorMessage, setShowErrorMessage] = useState(false)

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
        setAllCarsSearched(result)
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }

  useEffect(() => {
    getAllCars()
  }, [])

  useEffect(() => {
    let searchFiltered = allCarsSearched.slice().filter(car => car.title.toLowerCase().includes(searchValue.toLowerCase()))
    setAllCars(searchFiltered)
  }, [searchValue])

  const addCommentHandler = () => {
    if (commentValue.trim().length >= 30) {
      setShowErrorMessage(false)
      let newObj = {
        id: uuidv4(),
        carName: carsNameValue,
        score: scoreValue,
        name: authContext.userInfo[0].username,
        body: commentValue,
        isRegister: 0,
        date: fullYear
      }

      fetch(`https://mkrentacar.liara.run/comments`, {

        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newObj)
      })
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json()
        })
        .then(result => {
          console.log(result);
          setCommentValue('')
          setModalAddCommentShow(false)
          setCarsNameValue('Bentley')
          setCarsImgValue("/images/cars/bentleyBentayga.jpg")
          setScoreValue("Excellent")
          notify()
        })
        .catch(error => console.error('There has been a problem with your fetch operation:', error));
    } else {
      setShowErrorMessage(true)
      setModalAddCommentShow(false)
    }
  }

  return (
    <>
      <div className='flex flex-col items-center gap-8 md:gap-14 h-full w-full overflow-auto'>
        <p className='text-[20px]'>{t("Register your desired comment about our cars")} ❤️</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 h-auto mx-auto'>
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='relative w-[250px] md:w-auto text-black'>
              <div onClick={() => setShowCarsName(prevstate => !prevstate)} className='w-full h-[60px] bg-white cursor-pointer px-[5px] border  border-white flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                  <img loading='lazy' className='w-16 h-14' src={carsImgValue} alt="img" />
                  <span className='text-black/70 line-clamp-1'>{carsNameValue}</span>
                </div>
                <div className='bg-white w-5 h-5 flex items-center justify-center rounded-full'>
                  <SlArrowDown />
                </div>
              </div>

              <div className={`${showCarsName ? 'block' : 'hidden'} bg-white absolute overflow-auto flex-col z-10 w-full h-[220px] child:px-[5px] child:py-1 child:cursor-pointer text-black/70 child:transition-all child:duration-300 border border-white`}>
                <div className='border border-black/70 m-2'>
                  <input className='w-full outline-none' type="text" placeholder='Search' onChange={(e) => setSearchValue(e.target.value)} />
                </div>
                <div>
                  {allCars.map((car, index) => (
                    <div onClick={() => {
                      setShowCarsName(false)
                      setCarsNameValue(car.title)
                      setCarsImgValue(car.cover[0].img)
                    }} className='flex my-0.5 items-center gap-1 hover:bg-[#5897FB] hover:text-white' key={index}>
                      <img loading='lazy' className='w-16 h-14' src={car.cover[0].img} alt="img" />
                      <span className={`${carsNameValue == car.name ? 'text-red-600' : ''} line-clamp-1`}>{car.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='relative w-[200px] md:w-auto text-black'>
              <div onClick={() => setshowScore(prevstate => !prevstate)} className='w-full h-[60px] bg-white cursor-pointer px-[5px] border  border-white flex justify-between items-center'>
                <div className='flex items-center gap-1'>
                  <span className='text-black/70 line-clamp-1'>{scoreValue}</span>
                </div>
                <div className='bg-white w-5 h-5 flex items-center justify-center rounded-full'>
                  <SlArrowDown />
                </div>
              </div>

              <div className={`${showScore ? 'block' : 'hidden'} bg-white absolute overflow-auto flex-col z-10 w-full h-[150px] child:px-[5px] child:py-1 child:cursor-pointer text-black/70 child:transition-all child:duration-300 border border-white`}>
                <div>
                  {allScore.map((score, index) => (
                    <div key={index} onClick={() => {
                      setshowScore(false)
                      setScoreValue(score)
                    }} className='flex my-0.5 items-center gap-1 hover:bg-[#5897FB] hover:text-white'>
                      <span className={`${scoreValue === score ? 'text-red-600' : ''} line-clamp-1`}>{score}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Comments */}
          <div className=' w-full xl:w-[500px] text-black/70 flex flex-col gap-0.5'>
            <textarea onChange={(e) => setCommentValue(e.target.value)} value={commentValue} className='w-full h-[140px] p-3 border-4 border-[#031C3F] outline-none rounded-xl' placeholder={`${t("Write your Comment")}...❤️`}></textarea>
            {showErrorMessage && (
              <p className='text-red-500'>{t("Please fill in the comment section")}</p>
            )}
            <span className={`${commentValue.length >= 30 ? "text-green-500" : "text-red-500"}`}>{commentValue.length} / 30</span>
          </div>
        </div>
        <button onClick={() => setModalAddCommentShow(true)} className='px-4 py-2.5 rounded-md tracking-[1px] bg-green-500 text-white flex items-center justify-center font-medium' type="submit">
          {t("SUBMIT")}
        </button>
      </div>

      {/* is Submmit Comment */}
      <Modal width="w-[400px]" height="h-auto" closedBox={modalAddCommentShow} setClosedBox={setModalAddCommentShow} title={`Comment Submit `}>
        <p className='text-[20px] mt-5'>{t("Do you intend to submit comment")} ?</p>
        <div className='flex gap-4 mt-5'>
          <button onClick={addCommentHandler} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
            Yes
          </button>
        </div>
      </Modal>

      {/* notfy */}
      <ToastContainer />
    </>
  )
}
