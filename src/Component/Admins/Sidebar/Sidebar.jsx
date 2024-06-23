import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import AuthContext from '../../../Context/AuthContext';
import Modal from '../Modal/Modal';

export default function Sidebar() {
    const authContext = useContext(AuthContext)
    const [ShowLogOut, setShowLogOut] = useState(false)
    const logOutHandler = (e) => {
        e.preventDefault()
        authContext.logout();
        window.location.href = "/";
    }
    return (
        <>
            <div className='relative'>
                <div className='bg-[#454545] w-20 xl:w-72 overflow-y-auto z-50 fixed top-0 bottom-0 text-white font-medium p-4'>
                    <div className='flex justify-center'>
                        <Link to='/'>
                            <img loading='lazy' className='w-[155px]' src="https://mkrentacar.com/public/assets/images/logo.png" alt="logo" />
                        </Link>
                    </div>
                    <div className='mt-5'>
                        <ul className='divide-y-2 divide-white/30 text-[24px] flex flex-col gap-4 xl:gap-2 overflow-auto child:p-2 child:xl:rounded-md child:rounded-full'>
                            <NavLink to='/dashbord' className='bg-black mb-5 flex items-center gap-2 justify-center xl:justify-between'><span className='hidden xl:block'>Home</span> <FaHome /> </NavLink>

                            <NavLink to='rental' className={({ isActive }) =>
                                isActive ? " w-full bg-orangeCus2 flex items-center gap-2 justify-center xl:justify-between" : "text-white flex items-center  justify-center xl:justify-between gap-2 hover:bg-orangeCus2 duration-300 transition-all"
                            }><span className='hidden xl:block'>Rental</span> <GiArchiveRegister /></NavLink>

                            <NavLink to='cars' className={({ isActive }) =>
                                isActive ? " w-full bg-orangeCus2 flex items-center gap-2 justify-center xl:justify-between" : "text-white flex items-center gap-2 hover:bg-orangeCus2 duration-300 transition-all justify-center xl:justify-between"
                            }><span className='hidden xl:block'>Cars</span> <IoCarSport /></NavLink>

                            <NavLink to='users' className={({ isActive }) =>
                                isActive ? " w-full bg-orangeCus2 flex items-center gap-2 justify-center xl:justify-between" : "justify-center xl:justify-between text-white flex items-center gap-2 hover:bg-orangeCus2 duration-300 transition-all"
                            }><span className='hidden xl:block'>Users</span> <FaUsers /></NavLink>

                            <NavLink to='comments' className={({ isActive }) =>
                                isActive ? " w-full bg-orangeCus2 flex items-center gap-2 justify-center xl:justify-between" : "justify-center xl:justify-between text-white flex items-center gap-2 hover:bg-orangeCus2 duration-300 transition-all"
                            }><span className='hidden xl:block'>Comments</span> <BiSolidCommentDetail /></NavLink>

                            <NavLink onClick={() => setShowLogOut(true)} to='#'
                                className="w-full bg-red-500 text-white flex items-center gap-2 hover:bg-red-400 duration-300 transition-all justify-center xl:justify-between"
                            ><span className='hidden xl:block'>LogOut</span> <HiOutlineLogout /></NavLink>
                        </ul>
                    </div>
                </div>

            </div>

            {/* is Logout */}
            <Modal width="w-[400px]" height="h-auto" closedBox={ShowLogOut} setClosedBox={setShowLogOut} title={`Logout`}>
                <p className='text-[20px] mt-5'>Do you want to logout?</p>
                <div className='flex gap-4 mt-5'>
                    <button onClick={logOutHandler} className='bg-green-600 mx-6 w-full p-2 rounded-xl'>
                        Yes
                    </button>
                </div>
            </Modal>
        </>
    )
}
