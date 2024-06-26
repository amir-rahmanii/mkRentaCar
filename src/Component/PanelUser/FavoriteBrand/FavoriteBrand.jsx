import React, { useReducer, useEffect } from 'react';

// Initial state
const initialState = {
    carCount: {},
    mostFrequentCar: null,
    maxCount: 0,
};

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_CAR':
            const carBrand = action.payload.carBrand;
            const updatedCarCount = { ...state.carCount };
            updatedCarCount[carBrand] = (updatedCarCount[carBrand] || 0) + 1;

            let mostFrequentCar = state.mostFrequentCar;
            let maxCount = state.maxCount;

            if (updatedCarCount[carBrand] > maxCount) {
                mostFrequentCar = carBrand;
                maxCount = updatedCarCount[carBrand];
            }

            return {
                carCount: updatedCarCount,
                mostFrequentCar: mostFrequentCar,
                maxCount: maxCount,
            };
        default:
            return state;
    }
};

// CarList component
const FavoriteBrand = ({ cars }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        cars.forEach(car => {
            dispatch({ type: 'ADD_CAR', payload: car });
        });
    }, [cars]);

    return (
        <div>
            {state.mostFrequentCar ? (
                <p className='text-orangeCus2 font-bold'>{state.mostFrequentCar}</p>
            ) : (
                <p className='text-orangeCus2 font-bold'>No cars found.</p>
            )}
        </div>
    );
};


export default FavoriteBrand