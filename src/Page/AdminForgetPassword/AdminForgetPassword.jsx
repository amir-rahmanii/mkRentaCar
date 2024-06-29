import React, { useContext } from 'react'
import ForgetPass from '../../Component/Admins/ForgetPass/ForgetPass'
import AuthContext from '../../Context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function AdminForgetPassword() {
  const authContext = useContext(AuthContext);
  return (
    <>
      {authContext.isLoggedIn ? (
        <Navigate to='/' />
      ) : (
        <ForgetPass />
      )}
    </>
  )
}
