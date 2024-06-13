import React, { useContext } from 'react'
import Header from '../../Component/Header/Header'
import Menu from '../../Component/Menu/Menu'
import Footer from '../../Component/Footer/Footer'
import CopyRight from '../../Component/CopyRight/CopyRight'
import ScroolTop from '../../Component/ScroolTop/ScroolTop'
import AuthContext from '../../Context/AuthContext'
import Error404 from '../Error404/Error404'
import { NavLink } from 'react-router-dom'

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
              <div className='flex border border-white/50 rounded-xl'>
                {/* SideBar */}
                <div className='border-r border-white/50 text-white flex flex-col py-2 gap-4 child-hover:bg-orangeCus2 px-2 child:px-14 child:py-2 child:rounded-xl'>
                  <NavLink className={({ isActive }) => isActive ? `bg-orangeCus2 text-[18px]/[30px]` : `bg-black`} to='/paneluser'>Home</NavLink>
                  <NavLink className={({ isActive }) => isActive ? `bg-orangeCus2 text-[18px]/[30px]` : `bg-black`} to='Rental'>Rental</NavLink>
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
