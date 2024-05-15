import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import CarsInfoContainer from '../CarsInfoContainer';



export default function PaginatedItems({ allCars, itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);


  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = allCars.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allCars.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allCars.length;
    setItemOffset(newOffset);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
  };

  return (
    <>
      <div>
        <CarsInfoContainer currentItems={currentItems} />
        <div className='bg-black'>
          <div className='container text-white'>
            <div className='w-auto lg:w-[866px] xl:w-[966px] flex justify-center pb-[35px]'>
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                className='flex items-center divide-x-2 divide-white/20 font-medium text-base border'
                pageClassName='py-3'
                nextClassName={`py-3`}
                previousClassName={`py-3`}
                pageLinkClassName='py-3 px-4 hover:bg-orangeCus2 cursor-pointer transition-all duration-300'
                nextLinkClassName='py-3 px-4 hover:bg-orangeCus2 cursor-pointer transition-all duration-300'
                previousLinkClassName='py-3 px-4 hover:bg-orangeCus2 cursor-pointer transition-all duration-300'
                activeLinkClassName='bg-orangeCus2'
                disableInitialCallback={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}