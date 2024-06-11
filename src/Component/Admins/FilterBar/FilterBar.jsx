import React from 'react'
import { SlArrowDown } from "react-icons/sl";

export default function FilterBar({setShowFiltered,showFiltered , setFilteredValue , filteredValue}) {
  return (
    <div onClick={() => setShowFiltered(prevstate => !prevstate)} className='w-[200px]'>
    <div className='w-[200px] bg-[#cccccc] cursor-pointer h-[42px] px-[5px] border  border-bg-[#cccccc] flex justify-between items-center'>
      <div className='flex items-center'>
        <span className='text-black/70 line-clamp-1'>{filteredValue}</span>
      </div>
      <div className='bg-[#cccccc] w-5 h-5 flex items-center justify-center rounded-full'>
        <SlArrowDown />
      </div>
    </div>

    <div className={`bg-[#cccccc] absolute h-[200px] overflow-auto flex-col z-10 w-[200px] child:px-[5px] child:py-2 child:cursor-pointer text-black/70 child:transition-all child:duration-300 border border-white ${showFiltered ? 'flex' : 'hidden'}`}>
      <div onClick={() => setFilteredValue("Default")} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' >
        <span className={`line-clamp-1`} >Default</span>
      </div>
      <div onClick={() => setFilteredValue("Old registration")} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' >
        <span className={`line-clamp-1`} >Old registration</span>
      </div>
      <div onClick={() => setFilteredValue("Price High to Low")} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' >
        <span className={`line-clamp-1`} >Price High to Low</span>
      </div>
      <div onClick={() => setFilteredValue("Price Low to High")} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' >
        <span className={`line-clamp-1`} >Price Low to High</span>
      </div>
      <div onClick={() => setFilteredValue("Is Register")} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' >
        <span className={`line-clamp-1`} >Is Register</span>
      </div>
      <div onClick={() => setFilteredValue("Is No Register")} className='flex items-center gap-1 hover:bg-[#5897FB] hover:text-white' >
        <span className={`line-clamp-1`} >Is No Register</span>
      </div>
    </div>
  </div>
  )
}
