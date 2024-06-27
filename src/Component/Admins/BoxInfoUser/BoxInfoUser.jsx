import React, { useReducer, useEffect, useState } from 'react';

const initialState = {
    totalSpent: 0,
    buyerCount: {},
    countryCount: {},
    carCount: {},
    topBuyer: '',
    topCountry: '',
    topCar: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PURCHASES':
            const { purchases } = action.payload;
            let totalSpent = 0;
            const buyerCount = {};
            const countryCount = {};
            const carCount = {};

            purchases.forEach(purchase => {
                totalSpent += Number(purchase.price);

                if (buyerCount[purchase.name]) {
                    buyerCount[purchase.name] += Number(purchase.price);
                } else {
                    buyerCount[purchase.name] = Number(purchase.price);
                }

                if (countryCount[purchase.country]) {
                    countryCount[purchase.country] += Number(purchase.price);
                } else {
                    countryCount[purchase.country] = Number(purchase.price);
                }

                if (carCount[purchase.carName]) {
                    carCount[purchase.carName] += 1;
                } else {
                    carCount[purchase.carName] = 1;
                }
            });

            const topBuyer = Object.keys(buyerCount).reduce((a, b) => buyerCount[a] > buyerCount[b] ? a : b, '');
            const topCountry = Object.keys(countryCount).reduce((a, b) => countryCount[a] > countryCount[b] ? a : b, '');
            const topCar = Object.keys(carCount).reduce((a, b) => carCount[a] > carCount[b] ? a : b, '');

            return {
                totalSpent,
                buyerCount,
                countryCount,
                carCount,
                topBuyer,
                topCountry,
                topCar,
            };

        default:
            return state;
    }
};

const BoxInfoUser = () => {
    const [purchases, setPurchases] = useState([]);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch(`https://mkrentacar.liara.run/registeredRent`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(result => {
                console.log(result); // چاپ داده‌ها برای بررسی
                setPurchases(result);
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }, []);

    useEffect(() => {
        if (purchases.length > 0) {
            dispatch({ type: 'SET_PURCHASES', payload: { purchases } });
        }
    }, [purchases]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
            <div className='p-5 bg-indigo-800 text-white rounded-xl'>
                <p className='text-[20px]'>Total income : </p>
                <p className='text-[25px]  py-2 text-orangeCus font-bold'>{state.totalSpent}</p>
            </div>
            <div className='p-5 bg-green-800 text-white font-medium rounded-xl'>
                <p className='text-[16px]'>The user who has rented the most cars : </p>
                <p className='text-[25px]  py-2 text-orangeCus font-bold'>{state.topBuyer}</p>
            </div>
            <div className='p-5 bg-amber-800 text-white rounded-xl'>
                <p className='text-[16px]'>Which country is the most rented  from ?</p>
                <p className='text-[25px]  py-2 text-orangeCus font-bold'>{state.topCountry}</p>
            </div>
            <div className='p-5 bg-rose-800 text-white rounded-xl'>
                <p className='text-[20px]'>The most popular car : </p>
                <p className='text-[25px] py-2 text-orangeCus font-bold'>{state.topCar}</p>
            </div>

        </div>
    );
};

export default BoxInfoUser;
