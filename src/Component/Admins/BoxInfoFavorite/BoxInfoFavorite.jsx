import React, { useReducer, useEffect, useState } from 'react';

const initialState = {
  brandCount: {},
  brandPrices: {},
  sortedBrands: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_BRANDS':
      const brandCount = {};
      const brandPrices = {};

      action.payload.forEach(brand => {
        brandCount[brand.carBrand] = (brandCount[brand.carBrand] || 0) + 1;
        brandPrices[brand.carBrand] = (brandPrices[brand.carBrand] || 0) + Number(brand.price);
      });

      const sortedBrands = Object.keys(brandCount).sort((a, b) => brandCount[b] - brandCount[a]);

      return {
        ...state,
        brandCount,
        brandPrices,
        sortedBrands,
      };

    default:
      return state;
  }
};


const BoxInfoFavorite = () => {
    const [brands, setBrands] = useState([])

    useEffect(() => {
        fetch(`https://mkrentacar.liara.run/registeredRent`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json()
            })
            .then(result => {
                setBrands(result)
            })
            .catch(error => console.error('There has been a problem with your fetch operation:', error));
    }, [])

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: 'SET_BRANDS', payload: brands });
    }, [brands]);

    return (
        <div className='p-5 bg-[#454545] text-white rounded-xl shadow-[0_0px_23px_0px_rgba(253,177,0)]'>
            <p className='text-[20px]'>The most popular rental Car <span className='text-orangeCus'> Brand : </span></p>
            <table className='text-[16px] mt-2'>
                <thead>
                    <tr className='child:py-2 child:px-3'>
                        <th className='text-orangeCus'>BrandName</th>
                        <th className='text-orangeCus'>Number</th>
                        <th className='text-green-500'>Income</th>
                    </tr>
                </thead>
                <tbody>
                    {state.sortedBrands.map(brand => (
                        <tr key={brand} className='child:py-2 child:px-3 text-[16px] font-bold'>
                            <td className='text-center'>{brand}</td>
                            <td className='text-center' >{state.brandCount[brand]}</td>
                            <td>{state.brandPrices[brand]} AED</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BoxInfoFavorite;
