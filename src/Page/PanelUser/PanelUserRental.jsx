import React from 'react'
import { useContext } from 'react'
import AuthContext from '../../Context/AuthContext'
import { MdOutlinePendingActions } from "react-icons/md";
import { TiTick } from "react-icons/ti";

export default function PanelUserRental() {

  const authContext = useContext(AuthContext)

  return (
    <div className='h-full font-light overflow-auto w-full mx-auto'>
      {authContext.userInfo[0].registeredRent.length !== 0 ? (
        <table>
          <tr className='child:p-2 child:text-[11px] md:child:text-[16px] md:child:p-4 sticky top-0 child:text-orangeCus2 child:bg-[#454545] rounded-md'>
            <th>#</th>
            <th>CarName</th>
            <th>CarImage</th>
            <th className='hidden sm:table-cell'>CarBrand</th>
            <th className='hidden sm:table-cell'>CarType</th>
            <th className='hidden xl:table-cell'>Country</th>
            <th className='hidden md:table-cell'>Price</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
          {authContext.userInfo[0].registeredRent.map((data, index) => (
            <tr key={data.id} className='child:p-1 child:text-[11px] md:child:text-[16px] md:child:p-2 xl:child:p-3.5 child:text-center'>
              <td>{index + 1}</td>
              <td>{data.carName}</td>
              <td className='flex justify-center'><img loading='lazy' width='80' src={data.carimg} alt="img" /></td>
              <td className='hidden sm:table-cell'>{data.carBrand}</td>
              <td className='hidden sm:table-cell'>{data.carType}</td>
              <td className='hidden xl:table-cell'>{data.country}</td>
              <td className='hidden md:table-cell'>{data.price} AED</td>
              <td>{data.dateFull.slice(0, 10)}</td>
              <td className='text-[23px]'>{data.register ?
                (
                  <div className='flex justify-center items-center text-green-500'>
                    <TiTick />
                  </div>
                ) : (
                  <div className='flex justify-center items-center text-yellow-500'>
                    <MdOutlinePendingActions />
                  </div>
                )}</td>
            </tr>
          ))}
        </table>
      ) : (
        <h2 className='bg-black/80 text-orangeCus2 text-[30px] text-center p-5 font-bold rounded-lg'>You have not rented any cars yet😩</h2>

      )}

    </div>
  )
}
