import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import './AddCars.css'

export default function AddCars() {
    //allTypeCars
    const [allTypeCars, setAllTypeCars] = useState([])
    const [hrefCarTypeValue, sethrefCarTypeValue] = useState('-1')
    const [CarTypeValue, setCarTypeValue] = useState('-1')
    //allBrands
    const [allBrandCars, setAllBrandCars] = useState([])
    const [hrefCarBrandValue, sethrefCarBrandValue] = useState('-1')
    const [CarBrandValue, setCarBrandValue] = useState('-1')

    const getAllCarType = () => {
        fetch(`http://localhost:5000/carType`)
            .then((res => res.json()))
            .then(result => {
                setAllTypeCars(result)
            })
    }

    const getAllCarBrand = () => {
        fetch(`http://localhost:5000/allBrands`)
            .then((res => res.json()))
            .then(result => {
                setAllBrandCars(result)
            })
    }

    useEffect(() => {
        getAllCarType()
        getAllCarBrand()
    }, [])
    return (
        <div className='font-medium'>

            <Formik
                initialValues={{ title: '', href: '', priceOffer: '', price: '' , color:'' , engine:'' , Freepickup: 'Yes',
                 aux:'Yes', usb:'Yes'
                 }}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Required *';
                    } else if (!/^([A-Z0-9]){3,30}$/i.test(values.title)) {
                        errors.title = 'Invalid title';
                    }

                    if (!values.href) {
                        errors.href = 'Required *';
                    } else if (!/^([A-Z0-9]){3,30}$/i.test(values.href)) {
                        errors.href = 'Invalid href address';
                    }

                    if (!values.priceOffer) {
                        errors.priceOffer = 'Required *';
                    } else if (!/^[1-9][0-9]{1,8}$/i.test(values.priceOffer)) {
                        errors.priceOffer = 'Invalid priceOffer';
                    }

                    if (!values.price) {
                        errors.price = 'Required *';
                    } else if (!/^[1-9][0-9]{1,8}$/i.test(values.price)) {
                        errors.price = 'Invalid price';
                    }

                    if (!values.color) {
                        errors.color = 'Required *';
                    } else if (!/^[A-Z]{2,20}$/i.test(values.color)) {
                        errors.color = 'Invalid color';
                    }

                    if (!values.engine) {
                        errors.engine = 'Required *';
                    } else if (!/^[A-Z0-9]{1,15}$/i.test(values.engine)) {
                        errors.engine = 'Invalid engine';
                    }

               
                    


                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {

                    let newObj = {
                        id: uuidv4(),
                        name: values.name,
                        telephone: values.telephone,
                        email: values.email,
                        carType: allCars.carType,
                        carName: allCars.title,
                        carBrand: oneBrandsInfo.title,
                        carimg: allCars.cover[0].img,
                        price: allCars.price,
                        countryCode: countryDialCode,
                        country: countryCodeValue,
                        register: 0,
                        dateFull: fullYear
                    }
                    fetch(`http://localhost:5000/registeredRent`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newObj)
                    })
                        .then((res) => {
                            console.log(res);
                            if (res.status === 201) {
                                setShowSubmitRegestrid(true)
                                values.name = ""
                                values.telephone = ""
                                values.email = ""
                            }
                        })


                }}
            >
                {({ isSubmitting }) => (
                    <Form className='flex flex-col gap-4 w-full p-[25px] text-base' >
                        <div>
                            <div className='grid grid-cols-3 gap-6'>
                                {/* title */}
                                <div>
                                    <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="title" placeholder='title' />
                                    <ErrorMessage className='text-orangeCus2' name="title" component="div" />
                                </div>
                                {/* finish title */}

                                {/* href */}
                                <div>
                                    <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="href" placeholder='href' />
                                    <ErrorMessage className='text-orangeCus2' name="href" component="div" />
                                </div>
                                {/*finish href */}

                                {/* hrefCarType */}
                                <div>
                                    <select onChange={(e) => sethrefCarTypeValue(e.target.value)} name="carType" id="carType" className='text-black/70 w-full px-4 py-2.5 outline-none rounded-md'>
                                        <option value="-1">Choose href CarType</option>
                                        {allTypeCars.map((type) => (
                                            <option key={type.id} value={type.href}>{type.href}</option>
                                        ))}
                                    </select>
                                </div>
                                {/* finish hrefCarType */}

                                {/* CarType */}
                                <div>
                                    <select onChange={(e) => setCarTypeValue(e.target.value)} name="carType" id="carType" className='text-black/70 w-full px-4 py-2.5 outline-none rounded-md'>
                                        <option value="-1">Choose CarType</option>
                                        {allTypeCars.map((type) => (
                                            <option key={type.id} value={type.title}>{type.title}</option>
                                        ))}
                                    </select>
                                </div>
                                {/* finish CarType */}
                                {/* CarBrand */}
                                <div>
                                    <select onChange={(e) => setCarBrandValue(e.target.value)} name="carBrand" id="carBrand" className='text-black/70 w-full px-4 py-2.5 outline-none rounded-md'>
                                        <option value="-1">Choose CarBrand</option>
                                        {allBrandCars.map((brand) => (
                                            <option key={brand.id} value={brand.title}>{brand.title}</option>
                                        ))}
                                    </select>
                                </div>
                                {/* finish CarBrand */}
                                {/* hrefCarBrand */}
                                <div>
                                    <select onChange={(e) => sethrefCarBrandValue(e.target.value)} name="hrefcarBrand" id="hrefcarBrand" className='text-black/70 w-full px-4 py-2.5 outline-none rounded-md'>
                                        <option value="-1">Choose href CarBrand</option>
                                        {allBrandCars.map((brand) => (
                                            <option key={brand.id} value={brand.href}>{brand.href}</option>
                                        ))}
                                    </select>
                                </div>
                                {/* finish hrefCarBrand */}
                                {/* priceOffer */}
                                <div>
                                    <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="priceOffer" placeholder='priceOffer' />
                                    <ErrorMessage className='text-orangeCus2' name="priceOffer" component="div" />
                                </div>
                                {/*finish priceOffer */}
                                {/* price */}
                                <div>
                                    <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="price" placeholder='price' />
                                    <ErrorMessage className='text-orangeCus2' name="price" component="div" />
                                </div>
                                {/*finish price */}
                            </div>
                            <div className='mt-6'>
                                <p className='text-orangeCus2 text-center font-medium text-[22px]'>Technical Specifications</p>
                                <div className='grid grid-cols-5 gap-4 mt-4'>
                                    {/* color */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="color" placeholder='color' />
                                        <ErrorMessage className='text-orangeCus2' name="color" component="div" />
                                    </div>
                                    {/*finish color */}
                                    {/* engine */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="engine" placeholder='engine' />
                                        <ErrorMessage className='text-orangeCus2' name="engine" component="div" />
                                    </div>
                                    {/*finish engine */}


                                    {/* Freepickup */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>Freepickup:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="Freepickup" value="Yes"/>
                                        </label>
                                        <label>
                                        <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="Freepickup" value="No"/>
                                        </label>
                                    </div>
                                    {/*finish Freepickup */}
                                    {/* aux */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>aux:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="aux" value="Yes"/>
                                        </label>
                                        <label>
                                        <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="aux" value="No"/>
                                        </label>
                                    </div>
                                    {/*finish aux */}
                                    {/* usb */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>usb:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="usb" value="Yes"/>
                                        </label>
                                        <label>
                                        <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="usb" value="No"/>
                                        </label>
                                    </div>
                                    {/*finish usb */}
                                    {/* Bluetooth */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="Bluetooth" placeholder='Bluetooth' />
                                        <ErrorMessage className='text-orangeCus2' name="Bluetooth" component="div" />
                                    </div>
                                    {/*finish Bluetooth */}
                                    {/* Automotic */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="Automotic" placeholder='Automotic' />
                                        <ErrorMessage className='text-orangeCus2' name="Automotic" component="div" />
                                    </div>
                                    {/*finish Automotic */}
                                    {/* Parksensor */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="Parksensor" placeholder='Parksensor' />
                                        <ErrorMessage className='text-orangeCus2' name="Parksensor" component="div" />
                                    </div>
                                    {/*finish Parksensor */}
                                    {/* Navigation */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="Navigation" placeholder='Navigation' />
                                        <ErrorMessage className='text-orangeCus2' name="Navigation" component="div" />
                                    </div>
                                    {/*finish Navigation */}
                                    {/* frontReverseCamera */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="frontReverseCamera" placeholder='frontReverseCamera' />
                                        <ErrorMessage className='text-orangeCus2' name="frontReverseCamera" component="div" />
                                    </div>
                                    {/*finish frontReverseCamera */}
                                    {/* FullInsurance */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="FullInsurance" placeholder='FullInsurance' />
                                        <ErrorMessage className='text-orangeCus2' name="FullInsurance" component="div" />
                                    </div>
                                    {/*finish FullInsurance */}
                                    {/* FreeCancellation */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="FreeCancellation" placeholder='FreeCancellation' />
                                        <ErrorMessage className='text-orangeCus2' name="FreeCancellation" component="div" />
                                    </div>
                                    {/*finish FreeCancellation */}
                                </div>
                            </div>
                        </div>

                        <button className='text-sm w-full px-4 py-2.5 rounded-md tracking-[1px] bg-green-500 text-white flex items-center justify-center font-medium' type="submit" disabled={isSubmitting}>
                            Add Car
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
