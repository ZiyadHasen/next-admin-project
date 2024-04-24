import React, { useState } from 'react';
import { data } from '../data/tableDataUser22';
import ForwArr from '../data/images/forwarArrow.svg';
import PrevArr from '../data/images/double-arrow-p.svg';
import Image from 'next/image';

const DataTable2 = () => {
  return (
    <div className=''>
      <table className='min-w-full mt-4 border-y-[3px] border-gray-500  '>
        <thead>
          <tr className='bg-[#E0E0E0]'>
            <th className='px-5 py-3 border-b-2 border-[#E0E0E0] text-start text-sm font-bold text-[#4F4F4F] '>
              일자
            </th>
            <th className='px-5 py-3 border-b-2 border-[#E0E0E0]text-center text-sm font-bold text-[#4F4F4F] '>
              신규 기기 / 전체 기기
            </th>
            <th className='px-5 py-3 border-b-2 border-[#E0E0E0]text-center text-sm font-bold text-[#4F4F4F] '>
              |
            </th>
            <th className='px-10 py-3 border-b-2 border-[#E0E0E0]text-center text-sm font-bold text-[#4F4F4F] '>
              RENEVV 9.5
            </th>
            <th className='px-10 py-3 border-b-2 border-[#E0E0E0]text-center text-sm font-bold text-[#4F4F4F] '>
              RENEVV 10.8
            </th>
            <th className='px-10 py-3 border-b-2 border-[#E0E0E0]text-center text-sm font-bold text-[#4F4F4F] '>
              RENEVV 13
            </th>
            <th className='px-5 py-3 border-b-2 border-[#E0E0E0]text-center text-sm font-bold text-[#4F4F4F] '>
              미정
            </th>
            <th className='px-5 py-3 border-b-2 border-[#E0E0E0]text-center text-sm font-bold text-[#4F4F4F] '>
              미정
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-white'>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-start text-[#4F4F4F] text-sm'>
              2022-09-29
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm flex justify-between'>
              <span>1200</span>
              <span>14000</span>
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              |
            </td>

            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              543
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              453
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              356
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              -
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm '>
              -
            </td>
          </tr>
          <tr className='bg-white'>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-start text-[#4F4F4F] text-sm'>
              2022-09-29
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm flex justify-between'>
              <span>1200</span>
              <span>14000</span>
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              |
            </td>

            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              543
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              453
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              356
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              -
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm '>
              -
            </td>
          </tr>
          <tr className='bg-white'>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-start text-[#4F4F4F] text-sm'>
              2022-09-29
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm flex justify-between'>
              <span>1200</span>
              <span>14000</span>
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              |
            </td>

            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              543
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              453
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              356
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              -
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm '>
              -
            </td>
          </tr>
          <tr className='bg-white'>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-start text-[#4F4F4F] text-sm'>
              2022-09-29
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm flex justify-between'>
              <span>1200</span>
              <span>14000</span>
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              |
            </td>

            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              543
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              453
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              356
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              -
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm '>
              -
            </td>
          </tr>
          <tr className='bg-white'>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-start text-[#4F4F4F] text-sm'>
              2022-09-29
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm flex justify-between'>
              <span>1200</span>
              <span>14000</span>
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              |
            </td>

            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              543
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              453
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              356
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm'>
              -
            </td>
            <td className='px-5 py-3 border-b border-[#E0E0E0] text-center text-[#4F4F4F] text-sm '>
              -
            </td>
          </tr>
        </tbody>
      </table>
      ;
    </div>
  );
};

export default DataTable2;
