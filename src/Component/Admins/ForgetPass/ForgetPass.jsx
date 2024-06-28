import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext';

export default function ForgetPass() {

    const [allUsers, setAllUsers] = useState([])
    const [showErrorMessage, setshowErrorMessage] = useState(false)
    const authContext = useContext(AuthContext)

    const [numberValue, setNumberValue] = useState("")


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

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <div className="bg-[url('/images/admin/banner.png')] bg-cover h-screen bg-[center_top] w-full aspect-[2/1] bg-no-repeat flex flex-col items-center  text-white font-light">
            <Link to='/'><img loading='lazy' className='w-[132px] h-[50px] mt-16' src="/images/logos/login.png" alt="img" /></Link>
            <p className='my-4 text-[15px]/[22.5px]'>Forget password</p>
            <form className='p-6 bg-white w-[350px] sm:w-[450px] font-medium flex flex-col text-black/70'>
                <p className='text-[#4B38B3] font-medium text-center mb-6'>Welcome!</p>
                <label htmlFor="email" className='text-black font-medium text-[13px]/[19px] pb-1'>Cell Number</label>
                <input
                    className="outline-none  border border-[#CDE4DA] py-2 px-[14px] rounded-md"
                    type="text"
                    name="number"
                    placeholder="Enter CellNumber"
                />


                <label htmlFor="password" className='text-black font-medium text-[13px]/[19px] mt-7 pb-1'>Verification code</label>
                <div className='flex items-center justify-between outline-none border border-[#CDE4DA] py-2 px-[14px] rounded-md'>
                    <input className="outline-none flex-1"
                        type={`text`}
                        placeholder="Enter Verification code"
                        name="code" />
                    <button onClick={() => sendCodeVerify()} className='text-[13px] bg-green-600 py-2 px-4 text-white rounded-md cursor-pointer'>
                        <span>Send</span>
                    </button>
                </div>

                <button className='bg-[#45CB85] text-[15px]/[19px] text-white px-[14px] py-2 cursor-pointer mt-7 rounded-md transition-all duration-300 hover:bg-[#3aa76f]' type="submit">
                    Submit
                </button>
                {showErrorMessage && (
                    <p className='text-red-600 text-[16px]/[19px] pt-1'>Please enter Email and Password Correctly</p>
                )}
                <div className='border border-[#003ABC] rounded-full mt-8'>
                    <Link className='text-[#003ABC]' to='/login'>
                        <p className='text-center py-3'>back to login</p>
                    </Link>
                </div>
            </form>
        </div>
    )
}
