import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import CarsInfoContainer from '../CarsInfoContainer';
import i18n from '../../../i18n';



export default function PaginatedItems({ allCars, itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [showPrevious, setShowPrevious] = useState(false)
  const [showNext, setShowNext] = useState(true)


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

    // For checked page previus
    if (event.selected > 0) {
      setShowPrevious(true)
    } else {
      setShowPrevious(false)
    }

    // For checked page next
    if (event.selected + 1 == pageCount) {
      setShowNext(false)
    } else {
      setShowNext(true)
    }
  };

  return (
    <>
      <div>
        <CarsInfoContainer currentItems={currentItems} />
        <div className={`bg-black ${i18n.language === "ar" ? 'rtlArabic' : ""}`}>
          <div className='container text-white'>
            <div className={`w-auto ${pageCount === 1 ? 'hidden' : 'flex'} lg:w-[866px] xl:w-[966px] justify-center pb-[35px]`}>
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
                nextClassName={`py-3 ${showNext ? 'block' : 'hidden'} `}
                previousClassName={`py-3 ${showPrevious ? 'block' : 'hidden'}`}
                pageLinkClassName='py-3 px-4 hover:bg-orangeCus2 cursor-pointer transition-all duration-300'
                nextLinkClassName='py-3 px-4 hover:bg-orangeCus2 cursor-pointer transition-all duration-300'
                previousLinkClassName='py-3 px-4 hover:bg-orangeCus2 cursor-pointer transition-all duration-300'
                activeLinkClassName='bg-orangeCus2'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}