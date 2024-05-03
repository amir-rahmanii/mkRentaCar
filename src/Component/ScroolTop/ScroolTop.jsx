import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { Link, animateScroll } from 'react-scroll'

export default function () {

    const [showMouse, setShowMouse] = useState(false)

    const handleClick = () => {
        animateScroll.scrollToTop({
            duration: 1200,
            delay: 0,
            smoth: 'easeInOutQuart'
        })

    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 800) {
                setShowMouse(true);
            } else {
                setShowMouse(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div>
            {showMouse && (
            <button onClick={handleClick} className='w-[35px] h-[35px] z-50 md:w-10 md:h-10 bg-orangeCus2 hover:bg-[#293957] transition-all duration-300  fixed md:bottom-9 cursor-pointer md:right-9 bottom-4 right-4 flex justify-center items-center text-white '>
                <IoIosArrowUp />
            </button>
            )}
        </div>
    )
}
