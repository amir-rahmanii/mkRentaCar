import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import './AddCars.css'

export default function AddCars({ getAllCars }) {
    //allTypeCars
    const [allTypeCars, setAllTypeCars] = useState([])
    const [hrefCarTypeValue, sethrefCarTypeValue] = useState('-1')
    const [CarTypeValue, setCarTypeValue] = useState('-1')
    //allBrands
    const [allBrandCars, setAllBrandCars] = useState([])
    const [hrefCarBrandValue, sethrefCarBrandValue] = useState('-1')
    const [CarBrandValue, setCarBrandValue] = useState('-1')

    //valueBody
    const [bodyValue, setBodyValue] = useState('')

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
                initialValues={{
                    title: '', href: '', priceOffer: '', price: '', color: '', engine: '',
                    MileageDailyKM: '', CostofExtraKm: '', SecurityAmountAED: '', Freepickup: 'Yes',
                    aux: 'Yes', usb: 'Yes', Bluetooth: 'Yes', Automotic: 'Yes', frontReverseCamera: 'Yes', Parksensor: 'Yes',
                    Navigation: 'Yes', CustomerService: 'Yes', FreeCancellation: 'Yes', FullInsurance: 'Yes', CruiseControl: 'Yes',
                    Luggage: '2', Doors: '4', Seats: '4', isRegister: '1', img1: '', img2: '', img3: '', img4: '', img5: '', img6: ''
                }}
                validate={values => {
                    const errors = {};
                    if (!values.title) {
                        errors.title = 'Required *';
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
                    }

                    if (!values.engine) {
                        errors.engine = 'Required *';
                    }

                    if (!values.MileageDailyKM) {
                        errors.MileageDailyKM = 'Required *';
                    } else if (!/^[1-9][0-9]{1,8}$/i.test(values.MileageDailyKM)) {
                        errors.MileageDailyKM = 'Invalid MileageDailyKM';
                    }
                    if (!values.CostofExtraKm) {
                        errors.CostofExtraKm = 'Required *';
                    } else if (!/^[1-9][0-9]{1,8}$/i.test(values.CostofExtraKm)) {
                        errors.CostofExtraKm = 'Invalid CostofExtraKm';
                    }
                    if (!values.SecurityAmountAED) {
                        errors.SecurityAmountAED = 'Required *';
                    } else if (!/^[1-9][0-9]{1,8}$/i.test(values.SecurityAmountAED)) {
                        errors.SecurityAmountAED = 'Invalid SecurityAmountAED';
                    }

                    if (!values.img1) {
                        errors.img1 = 'Required *';
                    }
                    if (!values.img2) {
                        errors.img2 = 'Required *';
                    }
                    if (!values.img3) {
                        errors.img3 = 'Required *';
                    }
                    if (!values.img4) {
                        errors.img4 = 'Required *';
                    }
                    if (!values.img5) {
                        errors.img5 = 'Required *';
                    }
                    if (!values.img6) {
                        errors.img6 = 'Required *';
                    }





                    return errors;
                }}
                onSubmit={(values, { resetForm }) => {

                    let newObj = {
                        id: uuidv4(),
                        title: values.title,
                        href: values.href,
                        hrefCarType: hrefCarTypeValue,
                        carType: CarTypeValue,
                        hrefBrand: hrefCarBrandValue,
                        brand: CarBrandValue,
                        priceOffer: Number(values.priceOffer),
                        price: Number(values.price),
                        color: values.color,
                        engine: values.engine,
                        Freepickup: values.Freepickup,
                        aux: values.aux,
                        usb: values.usb,
                        Bluetooth: values.Bluetooth,
                        Automotic: values.Automotic,
                        Parksensor: values.Parksensor,
                        Navigation: values.Navigation,
                        frontReverseCamera: values.frontReverseCamera,
                        FullInsurance: values.FullInsurance,
                        FreeCancellation: values.FreeCancellation,
                        CustomerService: values.CustomerService,
                        Luggage: Number(values.Luggage),
                        Doors: Number(values.Doors),
                        Seats: Number(values.Seats),
                        CruiseControl: values.CruiseControl,
                        isRegister: Number(values.isRegister),
                        CostofExtraKm: Number(values.CostofExtraKm),
                        MileageDailyKM: Number(values.MileageDailyKM),
                        SecurityAmountAED: Number(values.SecurityAmountAED),

                        cover: [
                            {
                                id: uuidv4(),
                                img: values.img1
                            },
                            {
                                id: uuidv4(),
                                img: values.img2
                            },
                            {
                                id: uuidv4(),
                                img: values.img3
                            },
                            {
                                id: uuidv4(),
                                img: values.img4
                            },
                            {
                                id: uuidv4(),
                                img: values.img5
                            },
                            {
                                id: uuidv4(),
                                img: values.img6
                            }
                        ],
                        PaymentType: "Credit Card & Cash",
                        SecurityType: "Credit Card & Cash",
                        body: bodyValue
                    }
                    fetch(`http://localhost:5000/cars`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newObj)
                    })
                        .then((res) => {
                            console.log(res);
                            setShowAddNewCar(false)
                            getAllCars()
                        })

                    resetForm();


                }}
            >
                {({ isSubmitting }) => (
                    <Form className='flex flex-col gap-4 w-full px-[25px] pt-[25px] text-base' >
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
                            <div className='my-8'>
                                <p className='text-orangeCus2 text-center font-medium text-[22px]'>images</p>
                                <div className='grid grid-cols-2 gap-x-4 gap-y-8 mt-4'>
                                    {/* img1 */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="img1" placeholder='URL img1' />
                                        <ErrorMessage className='text-orangeCus2' name="img1" component="div" />
                                    </div>
                                    {/*finish img1 */}
                                    {/* img2 */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="img2" placeholder='URL img2' />
                                        <ErrorMessage className='text-orangeCus2' name="img2" component="div" />
                                    </div>
                                    {/*finish img2 */}
                                    {/* img3 */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="img3" placeholder='URL img3' />
                                        <ErrorMessage className='text-orangeCus2' name="img3" component="div" />
                                    </div>
                                    {/*finish img3 */}
                                    {/* img4 */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="img4" placeholder='URL img4' />
                                        <ErrorMessage className='text-orangeCus2' name="img4" component="div" />
                                    </div>
                                    {/*finish img4 */}
                                    {/* img5 */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="img5" placeholder='URL img5' />
                                        <ErrorMessage className='text-orangeCus2' name="img5" component="div" />
                                    </div>
                                    {/*finish img5 */}
                                    {/* img6 */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="img6" placeholder='URL img6' />
                                        <ErrorMessage className='text-orangeCus2' name="img6" component="div" />
                                    </div>
                                    {/*finish img6 */}
                                </div>
                            </div>
                            <div className='my-8'>
                                <p className='text-orangeCus2 text-center font-medium text-[22px]'>Technical Specifications</p>
                                <div className='grid grid-cols-5 gap-x-4 gap-y-8 mt-4'>
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
                                    {/* MileageDailyKM */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="MileageDailyKM" placeholder='MileageDailyKM' />
                                        <ErrorMessage className='text-orangeCus2' name="MileageDailyKM" component="div" />
                                    </div>
                                    {/*finish MileageDailyKM */}
                                    {/* CostofExtraKm */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="CostofExtraKm" placeholder='CostofExtraKm' />
                                        <ErrorMessage className='text-orangeCus2' name="CostofExtraKm" component="div" />
                                    </div>
                                    {/*finish CostofExtraKm */}
                                    {/* SecurityAmountAED */}
                                    <div>
                                        <Field className="px-4 py-2.5 w-full text-black/70 outline-none rounded-md" type="text" name="SecurityAmountAED" placeholder='SecurityAmountAED' />
                                        <ErrorMessage className='text-orangeCus2' name="SecurityAmountAED" component="div" />
                                    </div>
                                    {/*finish SecurityAmountAED */}


                                    {/* Freepickup */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>Freepickup:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="Freepickup" value="Yes" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="Freepickup" value="No" />
                                        </label>
                                    </div>
                                    {/*finish Freepickup */}
                                    {/* aux */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>aux:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="aux" value="Yes" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="aux" value="No" />
                                        </label>
                                    </div>
                                    {/*finish aux */}
                                    {/* usb */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>usb:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="usb" value="Yes" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="usb" value="No" />
                                        </label>
                                    </div>
                                    {/*finish usb */}
                                    {/* Bluetooth */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>Bluetooth:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="Bluetooth" value="Yes" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="Bluetooth" value="No" />
                                        </label>
                                    </div>
                                    {/*finish Bluetooth */}
                                    {/* Automotic */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>Automotic:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="Automotic" value="Yes" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="Automotic" value="No" />
                                        </label>
                                    </div>
                                    {/*finish Automotic */}
                                    {/* Parksensor */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>Parksensor:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="Parksensor" value="Yes" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="Parksensor" value="No" />
                                        </label>
                                    </div>
                                    {/*finish Parksensor */}
                                    {/* Navigation */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>Navigation:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="Navigation" value="Yes" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="Navigation" value="No" />
                                        </label>
                                    </div>
                                    {/*finish Navigation */}
                                    {/* frontReverseCamera */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold text-[12px]'>frontReverseCamera:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="frontReverseCamera" value="Yes" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="frontReverseCamera" value="No" />
                                        </label>
                                    </div>
                                    {/*finish frontReverseCamera */}
                                    {/* FullInsurance */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>FullInsurance:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="FullInsurance" value="Yes" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="FullInsurance" value="No" />
                                        </label>
                                    </div>
                                    {/*finish FullInsurance */}
                                    {/* FreeCancellation */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold text-[12px]'>FreeCancellation:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="FreeCancellation" value="Yes" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="FreeCancellation" value="No" />
                                        </label>
                                    </div>
                                    {/*finish FreeCancellation */}
                                    {/* CustomerService */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold text-[12px]'>CustomerService:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="CustomerService" value="Yes" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="CustomerService" value="No" />
                                        </label>
                                    </div>
                                    {/*finish CustomerService */}
                                    {/* Seats */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>Seats:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>2</span>
                                            <Field type="radio" name="Seats" value="2" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>4</span>
                                            <Field type="radio" name="Seats" value="4" />
                                        </label>
                                    </div>
                                    {/*finish Seats */}
                                    {/* Doors */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>Doors:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>2</span>
                                            <Field type="radio" name="Doors" value="2" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>4</span>
                                            <Field type="radio" name="Doors" value="4" />
                                        </label>
                                    </div>
                                    {/*finish Doors */}
                                    {/* Luggage */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>Luggage:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>2</span>
                                            <Field type="radio" name="Luggage" value="2" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>4</span>
                                            <Field type="radio" name="Luggage" value="4" />
                                        </label>
                                    </div>
                                    {/*finish Luggage */}
                                    {/* CruiseControl */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>CruiseControl:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="CruiseControl" value="Yes" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="CruiseControl" value="No" />
                                        </label>
                                    </div>
                                    {/*finish CruiseControl */}
                                    {/* isRegister */}
                                    <div className='flex justify-center mt-2.5 gap-2' role="group" aria-labelledby="my-radio-group">
                                        <div className='font-bold'>isRegister:</div>
                                        <label>
                                            <span className='mr-1 text-sm'>Yes</span>
                                            <Field type="radio" name="isRegister" value="1" />
                                        </label>
                                        <label>
                                            <span className='mr-1 text-sm'>No</span>
                                            <Field type="radio" name="isRegister" value="0" />
                                        </label>
                                    </div>
                                    {/*finish isRegister */}
                                </div>
                            </div>
                            <div className='my-8'>
                                <p className='text-orangeCus2 text-center font-medium text-[22px]'>body</p>
                                <textarea onChange={(e) => setBodyValue(e.target.value)} value={bodyValue} className='w-full text-black h-40 outline-none mt-4'>
                                </textarea>
                            </div>
                        </div>

                        <button className='w-full px-4 py-2.5 rounded-md tracking-[1px] bg-green-500 text-white flex items-center justify-center font-medium' type="submit" disabled={isSubmitting}>
                            ADD CAR
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
