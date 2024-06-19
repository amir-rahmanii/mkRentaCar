import React, { useState } from 'react'
import { useContext } from 'react'
import AuthContext from '../../Context/AuthContext'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Modal from '../../Component/Admins/Modal/Modal';

export default function PanelUserIndex() {
    const authContext = useContext(AuthContext)
    const [showChangePassword, setShowChangePassword] = useState(false)
    const [showWrongPassword, setShowWrongPassword] = useState(false)

    const changePasswordHandler = () => {
        window.location.href = "/paneluser";
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
                                    setShowChangePassword(true)
                                }
                                )
                        } else {
                            setShowWrongPassword(true)
                        }
                        resetForm();
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className='flex flex-col items-center gap-10 xl:gap-28'>
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
                                    <div className='flex items-center gap-2'>
                                        <label className='w-[95px] text-center hidden md:block' htmlFor="">Role</label>
                                        <Field name="role" id="role" type="text" className='text-black/70 bg-white/80 p-3 rounded-lg' value={authContext.userInfo[0].role} disabled />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <label className='w-[95px] text-center hidden md:block' htmlFor="password">Current password</label>
                                        <div className='flex flex-col'>
                                            <Field name="password" id="password" type="password" className='text-black/70 p-3 rounded-lg outline-none' placeholder='Current password' />
                                            <ErrorMessage className='text-red-600 text-[16px]/[19px] pt-1' name="password" component="div" />
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <label className='w-[95px] text-center hidden md:block' htmlFor="newpassword">New password</label>
                                        <div className='flex flex-col'>
                                            <Field name="newpassword" id="newpassword" type="password" className='text-black/70 p-3 rounded-lg outline-none' placeholder='New password' />
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

            {/* Show Change Password */}
            <Modal width="w-auto md:w-[400px]" height="h-auto" closedBox={showChangePassword} setClosedBox={setShowChangePassword} title={`Do you want to change your password?`}>
                <div className='flex gap-4 mt-5'>
                    <button onClick={changePasswordHandler} className='bg-green-600 mx-6 w-full p-2 rounded-lg'>
                        Yes
                    </button>
                </div>
            </Modal>

            {/* Wrong Password */}
            <Modal width="w-auto md:w-[400px]" height="h-auto" closedBox={showWrongPassword} setClosedBox={setShowWrongPassword} title={`Your password does not match`}>
            </Modal>
        </>
    )
}


