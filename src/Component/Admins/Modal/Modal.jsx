import React from 'react'

export default function Modal({width, height , closedBox, setClosedBox, title, children }) {
    return (
        <div onClick={() => {
            setClosedBox(false)
        }} className={`bg-black/40 fixed font-medium inset-0 w-full h-full z-50 transition-all  ${closedBox ? 'visible opacity-100' : 'opacity-0 invisible'}`}>
            <div className='flex h-screen z-50 justify-center items-center '>
                <div onClick={(e) => {
                    e.stopPropagation()
                }} className={`flex flex-col z-50 ${width} ${height} overflow-auto m-4 p-3 bg-[#454545] text-white font-light shadow-[0_0px_23px_0px_rgba(253,177,0)] hover:outline hover:outline-orangeCus rounded-[15px]`}>
                    <p className='text-orangeCus2 font-bold text-[25px]'>{title}</p>
                    {children}
                    <div className='flex gap-4 mt-2'>
                        <button onClick={() => setClosedBox(false)} className='bg-red-600 mx-6 w-full p-2 rounded-lg'>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
