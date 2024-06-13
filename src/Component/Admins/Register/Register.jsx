import React, { useContext } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import AuthContext from '../../../Context/AuthContext';

export default function Register() {
    const authContext = useContext(AuthContext)






    return (
        <div className="bg-[url('/images/admin/banner.png')] bg-cover h-screen bg-[center_top] w-full aspect-[2/1] bg-no-repeat flex flex-col items-center  text-white font-light">
            <Link to='/'><img className='w-[132px] h-[50px] mt-5' src="https://mkrentacar.com/public/assets/images/logo.png" alt="img" /></Link>
            <p className='my-4 text-[15px]/[22.5px]'>Register</p>
            <Formik
                initialValues={{ username: "", cellNumber: "", email: "", password: "" }}
                validate={(values) => {
                    const errors = {};
                    if (!values.cellNumber) {
                        errors.cellNumber = "Required";
                    } else if (!/^\d{11}$/i.test(values.cellNumber)) {
                        errors.cellNumber = "Invalid cellNumber";
                    }

                    if (!values.username) {
                        errors.username = "Required";
                    } else if (!/^\w{6,15}$/i.test(values.username)) {
                        errors.username = "Minimum 6 characters and Maximum 15 characters ";
                    }

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

                onSubmit={(values, { setSubmitting }) => {
                    let newObj = {
                        id: uuidv4(),
                        username: values.username,
                        email: values.email,
                        password: values.password,
                        cellNumber: values.cellNumber,
                        token: uuidv4(),
                        role: "user",
                        registeredRent: []
                    }

                    fetch(`http://localhost:5000/users`, {
                        method: "POST",
                        headers: {
                            "Content-Type" : "application/json"
                        },
                        body:JSON.stringify(newObj)
                    })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        authContext.login(result , result.token);
                        window.location.href = "/";
                    })

                }}
            >
                {({ isSubmitting }) => (
                    <Form className='p-6 bg-white w-auto sm:w-[450px] font-medium flex flex-col text-black/70'>
                        <p className='text-[#4B38B3] font-medium text-center mb-6'>Welcome!</p>
                        <label htmlFor="username" className='text-black font-medium text-[13px]/[19px] pb-1'>Username</label>
                        <Field
                            className="outline-none  border border-[#CDE4DA] py-2 px-[14px] rounded-md"
                            type="username"
                            name="username"
                            placeholder="Enter Username"
                        />
                        <ErrorMessage className='text-red-600 text-[13px]/[19px] pt-1' name="username" component="div" />
                        <label htmlFor="cellNumber" className='text-black font-medium text-[13px]/[19px] mt-7 pb-1'>CellNumber</label>
                        <Field
                            className="outline-none  border border-[#CDE4DA] py-2 px-[14px] rounded-md"
                            type="cellNumber"
                            name="cellNumber"
                            placeholder="Enter CellNumber"
                        />
                        <ErrorMessage className='text-red-600 text-[13px]/[19px] pt-1' name="cellNumber" component="div" />

                        <label htmlFor="email" className='text-black font-medium text-[13px]/[19px]  mt-7 pb-1'>Email</label>
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
                            Create an account
                        </button>
                        <div className='mt-8 text-black '>
                            <p className='text-center py-3'>Already have an account? <Link className='text-[#188FFF]' to='/login'> Sign in</Link></p>
                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    )
}
