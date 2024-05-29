import React, { useEffect, useState } from 'react'
import Sidebar from '../../../Component/Admins/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Header from '../../../Component/Admins/Header/Header'

export default function Dashbord() {
    const [allinfoAdmin, setAllInfoAdmin] = useState(null)

    useEffect(() => {
        let staorageItem = localStorage.getItem('admin')
        if (staorageItem == null) {
            setAllInfoAdmin(null)
        } else {
            setAllInfoAdmin(JSON.parse(staorageItem))
        }
    }, [])
    return (
        <>

            {allinfoAdmin == null ? (
                <h3 className='text-center'>Eror 404</h3>
            ) : (
                <div className='flex h-screen w-full'>
                    <div>
                        <Sidebar />
                    </div>
                    <div className='w-full'> 
                        <Header />
                        <Outlet />
                    </div>
                </div>
            )}

        </>
    )
}
