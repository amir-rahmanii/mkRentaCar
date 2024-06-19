import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";

export default function SearchBar({ searchValueHandler }) {
    const [showBorderInputSearch, setshowBorderInputSearch] = useState(false)
    //Search Value
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        window.addEventListener('keydown', handleKeydown);
        return () => {
            window.removeEventListener('keydown', handleKeydown);
        }
    })

    const handleKeydown = (e) => {
        if (e.keyCode === 13) {
            searchValueHandler(searchValue)
        }
    }

    const submitSearchValue = () => {
        searchValueHandler(searchValue)
    }
    return (
        <div className={`flex items-center  gap-1.5 bg-neutral-700  text-white rounded-[15px] py-1.5 px-3 ${showBorderInputSearch ? 'border-4 border-[#031C3F]' : ''}`}>
            <input onChange={(e) => setSearchValue(e.target.value)} value={searchValue} type="text" placeholder='Search' className=' bg-neutral-700 w-32 outline-none' onBlur={() => setshowBorderInputSearch(false)} onFocus={() => setshowBorderInputSearch(true)} />
            <Link to="#">
                <IoSearch onClick={submitSearchValue} className='w-[21px] h-[25px]' />
            </Link>
        </div >
    )
}
