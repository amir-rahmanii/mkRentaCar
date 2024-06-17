import React, { useContext } from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import Footer from '../../Component/Footer/Footer'
import CopyRight from '../../Component/CopyRight/CopyRight'
import ScroolTop from '../../Component/ScroolTop/ScroolTop'
import AuthContext from '../../Context/AuthContext'
import Error404 from '../Error404/Error404'
import { NavLink, Outlet } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";

export default function PanelUser() {
  const authContext = useContext(AuthContext);
  return (
    <div>
      {authContext.userInfo[0] ? (
        <>
          <Header />
          <Menu />
          <div className='bg-black font-medium'>
            <div className='container pt-[50px] pb-[200px]'>
              <div className='flex border h-[400px] border-white/50 rounded-xl'>
                {/* SideBar */}
                <div className='border-r border-white/50 text-white flex flex-col py-2 px-2 gap-4'>
                  <NavLink className={`text-[18px]/[30px] bg-[#454545] text-white px-4 md:px-14 py-2 rounded-xl hover:opacity-85 transition-all duration-300 flex justify-center items-center gap-1`} to='/paneluser'> <span className='hidden md:block'>Home</span> <FaHome /></NavLink>
                  <NavLink className={({ isActive }) => isActive ? `bg-orangeCus2 text-[18px]/[30px] px-4 md:px-14 py-2 rounded-xl flex justify-center items-center gap-1` : `bg-[#454545] text-[18px]/[30px] hover:bg-orangeCus2   md:px-14 px-4 py-2 rounded-xl transition-all duration-300 flex justify-center items-center gap-1`} to='rental'> <span className='hidden md:block'>Rental</span> <IoCarSport/></NavLink>
                </div>
                <div className='text-white py-2 px-2'>
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
          <Footer />
          <CopyRight />
          <ScroolTop />
        </>
      ) : (
        <Error404 />
      )}

    </div>
  )
}
