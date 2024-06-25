import React, { useEffect, useState, useContext } from 'react'
import Sidebar from '../../../Component/Admins/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../../../Component/Admins/Header/Header'
import AuthContext from '../../../Context/AuthContext'
import Error404 from '../../Error404/Error404'

export default function Dashbord() {
    const authContext = useContext(AuthContext);

    return (
        <>
            {authContext.userInfo[0] ? (
                <div>
                    {authContext.userInfo[0].role == "user"  ? (
                        <Error404 />
                    ) : (
                        <div className="flex w-full">
                            <div className=''>
                                <Sidebar />
                            </div>
                            <div className='w-full ml-[80px] xl:ml-[285px]'>
                                <Header />
                                <Outlet />
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <Error404 />
            )}

        </>
    )
}
