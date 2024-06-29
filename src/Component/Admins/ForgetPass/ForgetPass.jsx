import React, { useEffect, useState, useContext } from 'react'
import { Link , useNavigate } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext';
import { FaCheckCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgetPass() {

    const [allUsers, setAllUsers] = useState([])
    const [showErrorMessageNumber, setshowErrorMessageNumber] = useState(false)
    const [showErrorMessageCode, setshowErrorMessageCode] = useState(false)
    const [numberValue, setNumberValue] = useState("")
    const [codeValue, setCodeValue] = useState("")
    const [randumNumber, setRandumNumber] = useState(0)

    //for Timer
    const [seconds, setSeconds] = useState(30);
    const [isRunning, setIsRunning] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  
    //navigate
    let navigate = useNavigate()

    //context
    const authContext = useContext(AuthContext);


    //Toast
    const notify = () => {
        let randumMath = Math.floor(Math.random() * 9999);
        setRandumNumber(randumMath)
        toast(randumMath, {
            icon: <FaCheckCircle color="green" />,
            type: 'success',
            theme: 'dark'
        });
    }


    const getAllUsers = () => {
        fetch(`https://mkrentacar.liara.run/users`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json()
            })
            .then((result) => {
                setAllUsers(result)
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));

    }


    //sendCodeVerify
    const sendCodeVerify = (e) => {
        e.preventDefault()
        let usersFiltered = [...allUsers]
        let fillterNumber = usersFiltered.filter(data => data.cellNumber === numberValue)
        if (fillterNumber.length > 0) {
            setshowErrorMessageNumber(false);
            setIsRunning(true);
            setIsButtonDisabled(true);
            setSeconds(30);
            notify();
        } else {
            setshowErrorMessageNumber(true)
        }
    }

    //submitFormHandler
    const submitHandler = (e) => {
        e.preventDefault();
        setshowErrorMessageNumber(false);
        setshowErrorMessageCode(false)
        let usersFiltered = [...allUsers]
        let fillterNumber = usersFiltered.filter(data => data.cellNumber === numberValue)

        if (fillterNumber.length > 0) {
            if (codeValue && (randumNumber == codeValue)) {
                authContext.passwordChange(true)
                authContext.passwordChangeIdUser(fillterNumber[0].id)
                navigate('/change-password')
            } else {
                setshowErrorMessageCode(true)
            }

        } else {
            setshowErrorMessageNumber(true)
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    //timer
    useEffect(() => {
        let timer;
        if (isRunning && seconds > 0) {
          timer = setTimeout(() => setSeconds(seconds - 1), 1000);
        } else if (seconds === 0) {
          setIsRunning(false);
          setIsButtonDisabled(false);
        }
        return () => clearTimeout(timer);
      }, [isRunning, seconds]);

    return (
        <>
            <div className="bg-[url('/images/admin/banner.png')] bg-cover h-screen bg-[center_top] w-full aspect-[2/1] bg-no-repeat flex flex-col items-center  text-white font-light">
                <Link to='/'><img loading='lazy' className='w-[132px] h-[50px] mt-16' src="/images/logos/login.png" alt="img" /></Link>
                <p className='my-4 text-[15px]/[22.5px]'>Forget password</p>
                <form onSubmit={submitHandler} className='p-6 bg-white w-[350px] sm:w-[450px] font-medium flex flex-col text-black/70'>
                    <p className='text-[#4B38B3] font-medium text-center mb-6'>Welcome!</p>
                    <label htmlFor="number" className='text-black font-medium text-[13px]/[19px] pb-1'>Cell Number</label>
                    <input
                        className="outline-none  border border-[#CDE4DA] py-2 px-[14px] rounded-md"
                        type="text"
                        id='number'
                        onChange={(e) => setNumberValue(e.target.value)}
                        value={numberValue}
                        name="number"
                        placeholder="Enter CellNumber"
                    />
                    {showErrorMessageNumber && (
                        <p className='text-red-600 text-[16px]/[19px] pt-1'>Please enter Cell Number Correctly</p>
                    )}


                    <label htmlFor="code" className='text-black font-medium text-[13px]/[19px] mt-7 pb-1'>Verification code</label>
                    <div className='flex items-center justify-between outline-none border border-[#CDE4DA] py-2 px-[14px] rounded-md'>
                        <input className="outline-none flex-1"
                            type={`text`}
                            id='code'
                            onChange={(e) => setCodeValue(e.target.value)}
                            value={codeValue}
                            placeholder="Enter code"
                            name="code" />
                        <button disabled={isButtonDisabled} onClick={sendCodeVerify} className={`text-[13px] ${isButtonDisabled ? "bg-green-300" : "bg-green-600 cursor-pointer"}  py-2 px-3 md:px-6 text-white rounded-md`}>
                            <span>Send</span>
                        </button>
                        {/* timer */}
                        {isRunning && <div className='ml-2 mr-3'>{seconds}s</div>}
                    </div>
                    {showErrorMessageCode && (
                        <p className='text-red-600 text-[16px]/[19px] pt-1'>Please enter Code Correctly</p>
                    )}

                    <button className='bg-[#45CB85] text-[15px]/[19px] text-white px-[14px] py-2 cursor-pointer mt-7 rounded-md transition-all duration-300 hover:bg-[#3aa76f]' type="submit">
                        Submit
                    </button>

                    <div className='border border-[#003ABC] rounded-full mt-8'>
                        <Link className='text-[#003ABC]' to='/login'>
                            <p className='text-center py-3'>back to login</p>
                        </Link>
                    </div>
                </form>
            </div>

            {/* notfy */}
            <ToastContainer />
        </>
    )
}
