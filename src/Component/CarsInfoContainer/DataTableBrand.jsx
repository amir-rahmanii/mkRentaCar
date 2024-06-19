import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function DataTableBrand() {
    const [allBrands, setAllBrands] = useState([])
    const getallbrands = () => {
        fetch(`http://localhost:5000/allBrands`)
            .then(res => res.json())
            .then(result => {
                setAllBrands(result)
            })
    }

    useEffect(() => {
        getallbrands()
    }, [])
    return (
        <div className='p-10 w-full hidden lg:block font-medium'>
            <div className='border border-orangeCus'>
                <p className='border-b-2 p-[25px] border-orangeCus text-[19px]/[22.8px] text-orangeCus'>CAR’S BRAND</p>
                <div className='p-[25px] divide-y-2 divide-white/20'>
                    {allBrands.map((brand) => (
                        <Link key={brand.id} to={`/brands/${brand.href}`} className='flex gap-[15px] py-2.5'>
                            <img className='w-[30px] h-[30px]' src={brand.cover} alt="img" />
                            <p>{brand.title}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
