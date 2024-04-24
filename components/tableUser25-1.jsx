import React, { useState } from 'react';
import { data } from '../data/tableDataUser22';
import ForwArr from '../data/images/forwarArrow.svg';
import PrevArr from '../data/images/double-arrow-p.svg';
import Image from 'next/image';
import dot from '../data/images/dot.svg';

const DataTable2 = () => {
  return (
    <div className=''>
      <table className='min-w-full mt-4 border-y-[3px] border-gray-500  '>
        <thead>
          <tr className='bg-[#E0E0E0]'>
            <th className='px-5 py-3 border-b-2 border-[#E0E0E0] text-start text-sm font-bold text-[#4F4F4F] '>
              일자
            </th>

            <th className='px-10 py-3 border-b-2 border-[#E0E0E0]text-center text-sm font-bold text-[#4F4F4F] '>
              iOS
            </th>
            <th className='px-10 py-3 border-b-2 border-[#E0E0E0]text-center text-sm font-bold text-[#4F4F4F] '>
              Android
            </th>
            <th className='px-10 py-3 border-b-2 border-[#E0E0E0]text-center text-sm font-bold text-[#4F4F4F] '>
              합계
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-white'>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-start text-[#4F4F4F] text-sm'>
              2022-09-29
            </td>

            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              1,151
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              2,999
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              2,999
            </td>
          </tr>
          <tr className='bg-white'>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-start text-[#4F4F4F] text-sm'>
              2022-09-29
            </td>

            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              1,151
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              2,999
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              2,999
            </td>
          </tr>
          <tr className='bg-white'>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-end text-[#4F4F4F] text-sm'></td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-end text-[#4F4F4F] text-sm'></td>

            <td className=' py-3 flex justify-start gap-6 items-center border-b border-[#E0E0E0] text-start text-[#4F4F4F] text-sm'>
              <Image src={dot} alt='dot' />
              <Image src={dot} alt='dot' />
              <Image src={dot} alt='dot' />
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'></td>
          </tr>

          <tr className='bg-white'>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-start text-[#4F4F4F] text-sm'>
              2022-09-29
            </td>

            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              1,151
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              2,999
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              2,999
            </td>
          </tr>
          <tr className='bg-white'>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-start text-[#4F4F4F] text-sm'>
              2022-09-29
            </td>

            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              1,151
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              2,999
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              2,999
            </td>
          </tr>
        </tbody>
      </table>
      ;
    </div>
  );
};

export default DataTable2;
