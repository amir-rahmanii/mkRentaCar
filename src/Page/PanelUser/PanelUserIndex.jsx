import React, { useState } from 'react'
import { useContext } from 'react'
import AuthContext from '../../Context/AuthContext'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdError } from "react-icons/md";
import { FaCheckCircle } from 'react-icons/fa';
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

export default function PanelUserIndex() {
    const authContext = useContext(AuthContext)
    //change type password
    const [changeTypePasswordCurrent, setChangeTypePasswordCurrent] = useState(false)
    const [changeTypePasswordNew, setChangeTypePasswordNew] = useState(false)


    //Toast
    const notify = () => {
        toast('Password Changed successfully , After three seconds, the page will reload!', {
            icon: <FaCheckCircle color="green" />,
            type: 'success',
            theme: 'dark'
        });
    }

    //Toast wrong password
    const notifyWrong = () => {
        toast('Your Password does not match!', {
            icon: <MdError color="red" />,
            type: 'error',
            theme: 'dark'
        });
    }

    return (
        <>
            <div className='overflow-auto h-full font-medium'>

                <Formik
                    initialValues={{
                        username: '', email: '', cellNumber: '', role: '', password: '', newpassword: '',
                    }}
                    validate={values => {
                        const errors = {};
                        if (!values.password) {
                            errors.password = "Required";
                        } else if (
                            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm.test(values.password)
                        ) {
                            errors.password = "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
                        }
                        if (!values.newpassword) {
                            errors.newpassword = "Required";
                        } else if (
                            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm.test(values.newpassword)
                        ) {
                            errors.newpassword = "Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character:";
                        }
                        return errors;
                    }}

                    onSubmit={(values, { resetForm }) => {
                        if (authContext.userInfo[0].password == values.password) {
                            fetch(`http://localhost:5000/users/${authContext.userInfo[0].id}`, {
                                method: "PATCH",
                                headers: {
                                    "Content-type": "application/json"
                                },
                                body: JSON.stringify({
                                    password: values.newpassword
                                })
                            })
                                .then(res => {
                                    return res.json()
                                })
                                .then(result => {
                                    notify()
                                    resetForm()
                                    setTimeout(() => {
                                        window.location.href = "/paneluser"
                                    }, 3000);
                                })
                        } else {
                            notifyWrong()
                            resetForm()
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className='flex flex-col items-center gap-10 xl:gap-18'>
                            <div>
                                <p className='text-[20px]'>{authContext.userInfo[0].username} Select the desired section in the left sidebar ❤️</p>
                                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  mt-5 gap-5 md:gap-8 xl:gap-10'>
                                    <div className='flex items-center gap-2'>
                                        <label className='w-[95px] text-center hidden md:block' htmlFor="">Username</label>
                                        <Field name="username" id="username" type="text" className='text-black/70 bg-white/80 p-3 rounded-lg' value={authContext.userInfo[0].username} disabled />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <label className='w-[95px] text-center hidden md:block' htmlFor="">Email</label>
                                        <Field name="email" id="email" type="text" className='text-black/70 bg-white/80 p-3 rounded-lg' value={authContext.userInfo[0].email} disabled />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <label className='w-[95px] text-center hidden md:block' htmlFor="">CellNumber</label>
                                        <Field name="cellNumber" id="cellNumber" type="text" className='text-black/70 bg-white/80 p-3 rounded-lg' value={authContext.userInfo[0].cellNumber} disabled />
                                    </div>
                                    <div className='flex items-start gap-2'>
                                        <label className='w-[95px] text-center hidden md:block mt-3' htmlFor="">Role</label>
                                        <Field name="role" id="role" type="text" className='text-black/70 bg-white/80 p-3 rounded-lg' value={authContext.userInfo[0].role} disabled />
                                    </div>
                                    <div className='flex items-start gap-2'>
                                        <label className='w-[95px] text-center hidden md:block' htmlFor="password">Current password</label>
                                        <div className='flex flex-col items-start'>
                                            <div className='flex justify-between items-center p-3 rounded-lg bg-white'>
                                                <Field name="password" id="password" type={`${changeTypePasswordCurrent ? 'text' : 'password'}`} className='text-black/70 outline-none' placeholder='Current password' />
                                                <div onClick={() => setChangeTypePasswordCurrent(prevstate => !prevstate)} className='text-black text-[20px]'>
                                                    {changeTypePasswordCurrent ? <IoIosEyeOff /> : <IoIosEye />}
                                                </div>
                                            </div>
                                            <ErrorMessage className='text-red-600 text-[16px]/[19px] pt-1' name="password" component="div" />
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-2'>
                                        <label className='w-[95px] text-center hidden md:block' htmlFor="newpassword">New password</label>
                                        <div className='flex flex-col items-start'>
                                            <div className='flex justify-between items-center p-3 rounded-lg bg-white'>
                                                <Field name="newpassword" id="newpassword" type={`${changeTypePasswordNew ? 'text' : 'password'}`} className='text-black/70 outline-none' placeholder='New password' />
                                                <div onClick={() => setChangeTypePasswordNew(prevstate => !prevstate)} className='text-black text-[20px]'>
                                                    {changeTypePasswordNew ? <IoIosEyeOff /> : <IoIosEye />}
                                                </div>
                                            </div>
                                            <ErrorMessage className='text-red-600 text-[16px]/[19px] pt-1' name="newpassword" component="div" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className='px-4 py-2.5 rounded-md tracking-[1px] bg-green-500 text-white flex items-center justify-center font-medium' type="submit" disabled={isSubmitting}>
                                SUBMIT
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
            {/* notfy */}
            <ToastContainer />
        </>
    )
}


