import React , {useContext} from 'react'
import Register from '../../Component/Admins/Register/Register'
import AuthContext from '../../Context/AuthContext'
import { Navigate } from 'react-router-dom';

export default function AdminCreateRegister() {
  const authContext = useContext(AuthContext);

  return (
    <>
    {authContext.isLoggedIn ? (
      <Navigate to='/' />
    ) : (
      <Register />
    )}
    </>
  )
}
