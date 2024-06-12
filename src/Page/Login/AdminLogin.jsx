import React , {useContext} from 'react'
import Login from '../../Component/Admins/Login/Login'
import AuthContext from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom';

export default function AdminLogin() {
  const authContext = useContext(AuthContext);
  return (
    <>
      {authContext.isLoggedIn ? (
        <Navigate to='/' />
      ) : (
        <Login />
      )}
    </>
  )
}
