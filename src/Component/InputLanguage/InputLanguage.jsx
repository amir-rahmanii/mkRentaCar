import React , {useState} from 'react'
import { SlArrowDown } from "react-icons/sl";
import { Link } from 'react-router-dom';

export default function InputLanguage({left}) {
    const [showSubGroup, setShowSubGroup] = useState(false)

    return (
        <div onClick={() => setShowSubGroup(prevState => !prevState)} className='relative text-white flex justify-end  cursor-pointer'>
            <div className='w-max flex items-center gap-2.5'>
                <button className='text-sm/[21px]'>English</button>
                <SlArrowDown className='w-2.5 h-2.5' />
            </div>
            {/* subGroup Language */}
            <div className={`absolute bg-black z-50 text-left flex flex-col text-xs/[30px] p-2 w-[150px] child-hover:text-orangeCus transition-all duration-300 child:transition-all child:duration-300 ${left ? 'left-0' : ''} ${showSubGroup ? 'top-[37px]' : 'top-[-200px]'}`}>
                <Link to='#'>English</Link>
                <Link to='#'> العربية </Link>
                <Link to='#'> Русский </Link>
            </div>
        </div>
    )
}
