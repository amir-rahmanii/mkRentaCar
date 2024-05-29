import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";

export default function Sidebar() {
    return (
        <div className='bg-gradient-to-r from-purple-700 to-purple-900 w-52 h-full text-white font-medium p-4'>
            <h2 className='text-[25px] text-center font-bold'>Admin Panel</h2>
            <div className='mt-5'>
                <ul className='divide-y-2 divide-white/30 text-[24px] flex flex-col gap-1 overflow-auto child:p-2 child:rounded-md'>
                    <NavLink to='/dashbord' className='bg-black mb-5 flex items-center gap-2'>Home <FaHome /> </NavLink>

                    <NavLink to='registers' className={({ isActive }) =>
                        isActive ? " w-full bg-orangeCus2 flex items-center gap-2" : "text-white flex items-center gap-2"
                    }>Registers <GiArchiveRegister /></NavLink>


                    <NavLink to='cars' className={({ isActive }) =>
                        isActive ? " w-full bg-orangeCus2 flex items-center gap-2" : "text-white flex items-center gap-2"
                    }>Cars <IoCarSport /></NavLink>


                    <NavLink to='carType' className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }>CarType</NavLink>


                    <NavLink to='carBrand' className={({ isActive }) =>
                        isActive ? "active-link" : ""
                    }>CarBrand</NavLink>

                </ul>
            </div>
        </div>
    )
}
