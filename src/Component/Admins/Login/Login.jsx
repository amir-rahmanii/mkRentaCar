import React, { useEffect, useState, useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

export default function Login() {

  const [allUsers, setAllUsers] = useState([])
  const [showErrorMessage, setshowErrorMessage] = useState(false)

  //change type password
  const [changeTypePassword, setChangeTypePassword] = useState(false)
  const authContext = useContext(AuthContext)


  const getAllUsers = () => {
    fetch(`https://mkrentacar.liara.run/users`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json()
      })
      .then((result) => {
        setAllUsers(result)
      })
      .catch(error => console.error('There has been a problem with your fetch operation:', error));

  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="bg-[url('/images/admin/banner.png')] bg-cover h-screen bg-[center_top] w-full aspect-[2/1] bg-no-repeat flex flex-col items-center  text-white font-light">
      <Link to='/'><img loading='lazy' className='w-[132px] h-[50px] mt-16' src="/images/logos/login.png" alt="img" /></Link>
      <p className='my-4 text-[15px]/[22.5px]'>Login</p>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm.test(values.password)
          ) {
            errors.password = "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          allUsers.filter((data) => {
            if (data.email == values.email && data.password == values.password) {
              authContext.login(data, data.token)
              window.location.href = "/";
            } else {
              setshowErrorMessage(true)
            }
          })
          resetForm()

        }}
      >
        {({ isSubmitting }) => (
          <Form className='p-6 bg-white w-[350px] sm:w-[450px] font-medium flex flex-col text-black/70'>
            <p className='text-[#4B38B3] font-medium text-center mb-6'>Welcome Back!</p>
            <label htmlFor="email" className='text-black font-medium text-[13px]/[19px] pb-1'>Email</label>
            <Field
              className="outline-none  border border-[#CDE4DA] py-2 px-[14px] rounded-md"
              type="email"
              name="email"
              placeholder="Enter Email"
            />
            <ErrorMessage className='text-red-600 text-[13px]/[19px] pt-1' name="email" component="div" />

            <label htmlFor="password" className='text-black font-medium text-[13px]/[19px] mt-7 pb-1'>Password</label>
            <div className='flex items-center justify-between outline-none border border-[#CDE4DA] py-2 px-[14px] rounded-md'>
              <Field className="outline-none flex-1"
                type={`${changeTypePassword ? 'text' : 'password'}`}
                placeholder="Enter Password"
                name="password" />
              <div onClick={() => setChangeTypePassword(prevstate => !prevstate)} className='text-[20px] cursor-pointer'>
                {changeTypePassword ? <IoIosEyeOff /> : <IoIosEye />}
              </div>
            </div>
            <ErrorMessage className='text-red-600 text-[13px]/[19px] pt-1 w-full' name="password" component="div" />
            <Link to="/forget-password" className='text-[#4B38B3] text-end mt-4'>Forget Password ?</Link>


            <button className='bg-[#45CB85] text-[15px]/[19px] text-white px-[14px] py-2 cursor-pointer mt-7 rounded-md transition-all duration-300 hover:bg-[#3aa76f]' type="submit" disabled={isSubmitting}>
              Sign in
            </button>
            {showErrorMessage && (
              <p className='text-red-600 text-[16px]/[19px] pt-1'>Please enter Email and Password Correctly</p>
            )}
            <div className='border border-[#003ABC] rounded-full mt-8'>
              <Link className='text-[#003ABC]' to='/register'>
                <p className='text-center py-3'>Create an account</p>
              </Link>
            </div>
          </Form>
        )}

      </Formik>
    </div>
  )
}
