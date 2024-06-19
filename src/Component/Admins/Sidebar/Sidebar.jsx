import React , {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { BiSolidCommentDetail } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import AuthContext from '../../../Context/AuthContext';

export default function Sidebar() {
    const authContext = useContext(AuthContext)
    const logOutHandler = (e) => {
        e.preventDefault()
        authContext.logout();
        window.location.href = "/";
    }
    return (
        <div className='bg-[#454545] w-72 h-full text-white font-medium p-4'>
            <div className='flex justify-center'>
                <img className='w-[155px]' src="https://mkrentacar.com/public/assets/images/logo.png" alt="logo" />
            </div>
            <div className='mt-5'>
                <ul className='divide-y-2 divide-white/30 text-[24px] flex flex-col gap-1 overflow-auto child:p-2 child:rounded-md'>
                    <NavLink to='/dashbord' className='bg-black mb-5 flex items-center gap-2'>Home <FaHome /> </NavLink>

                    <NavLink to='registers' className={({ isActive }) =>
                        isActive ? " w-full bg-orangeCus2 flex items-center gap-2" : "text-white flex items-center gap-2 hover:bg-orangeCus2 duration-300 transition-all"
                    }>Registers <GiArchiveRegister /></NavLink>

                    <NavLink to='cars' className={({ isActive }) =>
                        isActive ? " w-full bg-orangeCus2 flex items-center gap-2" : "text-white flex items-center gap-2 hover:bg-orangeCus2 duration-300 transition-all"
                    }>Cars <IoCarSport /></NavLink>

                    <NavLink to='users' className={({ isActive }) =>
                        isActive ? " w-full bg-orangeCus2 flex items-center gap-2" : "text-white flex items-center gap-2 hover:bg-orangeCus2 duration-300 transition-all"
                    }>Users <FaUsers /></NavLink>

                    <NavLink to='comments' className={({ isActive }) =>
                        isActive ? " w-full bg-orangeCus2 flex items-center gap-2" : "text-white flex items-center gap-2 hover:bg-orangeCus2 duration-300 transition-all"
                    }>Comments <BiSolidCommentDetail /></NavLink>

                    <NavLink onClick={logOutHandler} to='#' 
                       className="w-full bg-red-500 text-white flex items-center gap-2 hover:bg-red-400 duration-300 transition-all"
                    >Log Out <HiOutlineLogout /></NavLink>
                </ul>
            </div>
        </div>
    )
}
