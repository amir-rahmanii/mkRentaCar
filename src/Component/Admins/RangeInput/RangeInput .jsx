import React, { useState } from 'react';

const RangeInput = ({rangePriceValue , setRangePriceValue}) => {

    const handleRangeChange = (e) => {
        setRangePriceValue(e.target.value);
    };



    return (
        <div className='font-medium'>
            <p className='text-[20px] py-2'>Price Filter</p>
            <input
                className='range accent-orangeCus w-full'
                type="range"
                min={0}
                max={10000}
                value={rangePriceValue}
                onChange={handleRangeChange}
            />
            <p>Selected Price: <span className='text-orangeCus text-[20px]'> {rangePriceValue.toLocaleString()} AED</span></p>
        </div>
    );
};

export default RangeInput;