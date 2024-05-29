import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const [allInfoAdmin , setAllInfoAdmin] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
     fetch(`http://localhost:5000/admin`)
     .then(res => res.json())
     .then((result) => {
      setAllInfoAdmin(result[0])
      console.log(result[0]);
     })
  } , [])

  return (
    <div className="bg-[url('/images/admin/banner.png')] bg-cover h-screen bg-[center_top] w-full aspect-[2/1] bg-no-repeat flex flex-col items-center  text-white font-light">
      <img className='w-[132px] h-[50px] mt-16' src="https://mkrentacar.com/public/assets/images/logo.png" alt="img" />
      <p className='my-4 text-[15px]/[22.5px]'>Admin Login</p>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          if(values.email == allInfoAdmin.email && values.password == allInfoAdmin.password){
            console.log(values);
            let newAdminInfo = {email : values.email , password : values.password}
            localStorage.setItem("admin" ,JSON.stringify(newAdminInfo))
            navigate('/dashbord')
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className='p-6 bg-white w-auto sm:w-[450px] font-medium flex flex-col text-black/70'>
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
            <Field className="outline-none border border-[#CDE4DA] py-2 px-[14px] rounded-md"
              type="password"
              placeholder="Enter Password"
              name="password" />
            <ErrorMessage className='text-red-600 text-[13px]/[19px] pt-1' name="password" component="div" />

            <button className='bg-[#45CB85] text-[15px]/[19px] text-white px-[14px] py-2 cursor-pointer mt-7 rounded-md transition-all duration-300 hover:bg-[#3aa76f]' type="submit" disabled={isSubmitting}>
              Sign in
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
