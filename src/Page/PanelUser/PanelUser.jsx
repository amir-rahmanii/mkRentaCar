import React, { useContext, useState } from 'react'
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
import { BiSolidCommentDetail } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import Modal from '../../Component/Admins/Modal/Modal'
import i18n from '../../i18n'
import { useTranslation } from 'react-i18next'

export default function PanelUser() {
  const authContext = useContext(AuthContext);
  const [ShowLogOut ,setShowLogOut] = useState(false)

  //translate
  const {t} = useTranslation()

  const logOutHandler = (e) => {
    e.preventDefault()
    authContext.logout();
    window.location.href = "/";
  }
  return (
    <div>
      {authContext.userInfo[0] ? (
        <>
          <Header />
          <Menu />
          <div className={`bg-black font-medium ${i18n.language === "ar" ? "rtlArabic" : ''}`}>
            <div className='container pt-[50px] pb-[200px]'>
              <div className='flex border h-auto border-white/50 rounded-xl'>
                {/* SideBar */}
                <div className={`${i18n.language === "ar" ? "border-l" : "border-r"} border-white/50 text-white flex flex-col py-2 px-2 gap-4`}>
                  <NavLink className={`text-[18px]/[30px] bg-[#454545] text-white px-4 md:px-10 py-2 rounded-xl hover:opacity-85 transition-all duration-300 flex justify-center items-center gap-1`} to='/paneluser'> <span className='hidden md:block'>{t("Home")}</span> <FaHome /></NavLink>
                  <NavLink className={({ isActive }) => isActive ? `bg-orangeCus2 text-[18px]/[30px] px-4 md:px-10 py-2 rounded-xl flex justify-center items-center gap-1` : `bg-[#454545] text-[18px]/[30px] hover:bg-orangeCus2   md:px-10 px-4 py-2 rounded-xl transition-all duration-300 flex justify-center items-center gap-1`} to='rental'> <span className='hidden md:block'>{t("Rental")}</span> <IoCarSport /></NavLink>
                  <NavLink className={({ isActive }) => isActive ? `bg-orangeCus2 text-[18px]/[30px] px-4 md:px-10 py-2 rounded-xl flex justify-center items-center gap-1` : `bg-[#454545] text-[18px]/[30px] hover:bg-orangeCus2   md:px-10 px-4 py-2 rounded-xl transition-all duration-300 flex justify-center items-center gap-1`} to='Comment'> <span className='hidden md:block'>{t("Comments")}</span> <BiSolidCommentDetail /></NavLink>
                  <NavLink onClick={() => setShowLogOut(true)} className="bg-red-500 gap-1 text-[18px]/[30px] hover:bg-red-400   md:px-10 px-4 py-2 rounded-xl transition-all duration-300 flex justify-center items-center"><span className='hidden md:block'>{t("Logout")}</span> <HiOutlineLogout /></NavLink>
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

          {/* is Logout */}
          <Modal width="w-[400px]" height="h-auto" closedBox={ShowLogOut} setClosedBox={setShowLogOut} title={`Logout`}>
            <p className={`text-[20px] mt-5 ${i18n.language === "ar" ? "rtlArabic" : ''}`}>{t("Do you want to logout")}?</p>
            <div className='flex gap-4 mt-5'>
              <button onClick={logOutHandler} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
                Yes
              </button>
            </div>
          </Modal>
        </>
      ) : (
        <Error404 />
      )}

    </div>
  )
}
