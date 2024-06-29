import React, { useEffect, useState, useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link , useNavigate } from 'react-router-dom';
import AuthContext from '../../../Context/AuthContext';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { FaCheckCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ChangePass() {

    const [showErrorMessage, setshowErrorMessage] = useState(false)

    //Toast
    const notify = () => {
        toast('Password Changed successfully !', {
            icon: <FaCheckCircle color="green" />,
            type: 'success',
            theme: 'dark'
        });
    }

    //navigate
    const navigate = useNavigate()

    //change type password
    const [changeTypePassword, setChangeTypePassword] = useState(false)
    const [changeTypePasswordConfirm, setChangeTypePasswordConfirm] = useState(false)

    const authContext = useContext(AuthContext)

    return (
        <>
            <div className="bg-[url('/images/admin/banner.png')] bg-cover h-screen bg-[center_top] w-full aspect-[2/1] bg-no-repeat flex flex-col items-center  text-white font-light">
                <Link to='/'><img loading='lazy' className='w-[132px] h-[50px] mt-16' src="/images/logos/login.png" alt="img" /></Link>
                <p className='my-4 text-[15px]/[22.5px]'>Change Password</p>
                <Formik
                    initialValues={{ password: "", passwordConfirm: "" }}
                    validate={(values) => {
                        const errors = {};

                        if (!values.password) {
                            errors.password = "Required";
                        } else if (
                            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm.test(values.password)
                        ) {
                            errors.password = "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
                        }

                        if (!values.passwordConfirm) {
                            errors.passwordConfirm = "Required";
                        } else if (
                            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm.test(values.passwordConfirm)
                        ) {
                            errors.passwordConfirm = "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { resetForm }) => {

                        if (values.password === values.passwordConfirm) {
                            setshowErrorMessage(false)

                            fetch(`https://mkrentacar.liara.run/users/${authContext.idUserForPass}`, {
                                method: "PATCH",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify({ password: values.password })
                            })
                                .then(res => {
                                    if (!res.ok) {
                                        throw new Error('Network response was not ok');
                                    }
                                    return res.json();
                                })
                                .then(result => {
                                    notify()
                                    setTimeout(() => {
                                        navigate("/login")
                                    }, 2000);
                                })
                                .catch(error => console.error('There has been a problem with your fetch operation:', error));
                        } else {
                            setshowErrorMessage(true)
                        }

                        resetForm()

                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className='p-6 bg-white w-[350px] sm:w-[450px] font-medium flex flex-col text-black/70'>
                            <p className='text-[#4B38B3] font-medium text-center mb-6'>Welcome !</p>
                            <label htmlFor="password" className='text-black font-medium text-[13px]/[19px] mt-7 pb-1'>password</label>
                            <div className='flex items-center justify-between outline-none border border-[#CDE4DA] py-2 px-[14px] rounded-md'>
                                <Field className="outline-none flex-1"
                                    type={`${changeTypePassword ? 'text' : 'password'}`}
                                    placeholder="Enter password"
                                    name="password" />
                                <div onClick={() => setChangeTypePassword(prevstate => !prevstate)} className='text-[20px] cursor-pointer'>
                                    {changeTypePassword ? <IoIosEyeOff /> : <IoIosEye />}
                                </div>
                            </div>
                            <ErrorMessage className='text-red-600 text-[13px]/[19px] pt-1 w-full' name="password" component="div" />

                            <label htmlFor="passwordConfirm" className='text-black font-medium text-[13px]/[19px] mt-7 pb-1'>passwordConfirm</label>
                            <div className='flex items-center justify-between outline-none border border-[#CDE4DA] py-2 px-[14px] rounded-md'>
                                <Field className="outline-none flex-1"
                                    type={`${changeTypePasswordConfirm ? 'text' : 'passwordConfirm'}`}
                                    placeholder="Enter passwordConfirm"
                                    name="passwordConfirm" />
                                <div onClick={() => setChangeTypePasswordConfirm(prevstate => !prevstate)} className='text-[20px] cursor-pointer'>
                                    {changeTypePasswordConfirm ? <IoIosEyeOff /> : <IoIosEye />}
                                </div>
                            </div>
                            <ErrorMessage className='text-red-600 text-[13px]/[19px] pt-1 w-full' name="passwordConfirm" component="div" />

                            <button className='bg-[#45CB85] text-[15px]/[19px] text-white px-[14px] py-2 cursor-pointer mt-7 rounded-md transition-all duration-300 hover:bg-[#3aa76f]' type="submit" disabled={isSubmitting}>
                                Submit
                            </button>

                            {showErrorMessage && (
                                <p className='text-red-600 text-[16px]/[19px] pt-3'>Please enter Password and PasswordConfirm Correctly</p>
                            )}


                        </Form>
                    )}

                </Formik>
            </div>

            {/* notfy */}
            <ToastContainer />
        </>
    )
}
