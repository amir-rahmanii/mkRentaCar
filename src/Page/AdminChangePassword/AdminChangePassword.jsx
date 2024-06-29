import React, { useContext } from 'react'
import AuthContext from '../../Context/AuthContext';
import { Navigate } from 'react-router-dom';
import ChangePass from '../../Component/Admins/ChangePass/ChangePass';

export default function AdminChangePassword() {
    //context
    const authContext = useContext(AuthContext);
    return (
        <>
            {authContext.isPasswordChange ? (
                <ChangePass />
            ) : (
                <Navigate to='/' />
            )}
        </>
    )
}
