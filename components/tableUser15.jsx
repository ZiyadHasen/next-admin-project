import React, { useState } from 'react';
import { data } from '../data/tableDataUser15';
import ForwArr from '../images/forwarArrow.svg';
import PrevArr from '../images/double-arrow-p.svg';
import Image from 'next/image';

const DataTable2 = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [header8Option, setHeader8Option] = useState(0);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleColumnChange = (columnOptions, selectedIndex) => {
    return columnOptions[selectedIndex];
  };

  return (
    <div className='container mx-auto'>
      <table className='min-w-full border-collapse border text-gray-600 border-gray-300'>
        <thead>
          <tr className='bg-transparent'>
            <th className='border py-2'>No</th>
            <th className='border px-4 py-2'>쿠폰 유형</th>
            <th className='border px-4 py-2'>쿠폰명</th>
            <th className='border px-4 py-2'>요청 계정</th>
            <th className='border px-4 py-2'>요청 일시</th>
            <th className='border px-4 py-2'>발급 일시</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr
              className={`text-center text-sm border border-gray-100 px-4 py-2 ${
                index >= itemsPerPage - 4 ? 'bg-white' : 'bg-white'
              }`}
              key={item.id}
            >
              <td className='border text-center text-sm border-gray-100 px-4 py-2'>
                {item.col1}
              </td>
              <td className='border text-center text-sm border-gray-100 px-4 py-2'>
                {item.col2}
              </td>
              <td className='border text-center text-sm border-gray-100 px-4 py-2'>
                {item.col3}
              </td>
              <td className='border text-center text-sm text-blue-500 border-gray-100 px-4 py-2'>
                {item.col4}
              </td>
              <td className='border text-center text-sm border-gray-100 px-4 py-2'>
                {item.col5}
              </td>
              <td className='border text-center text-sm border-gray-100 px-4 py-2'>
                {item.col6}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className=' flex items-center justify-center border-t-2 bg-backG mb-6 h-[60px]'>
        <button
          className={`mr-2 p-2 ${
            currentPage === 1 ? 'cursor-not-allowed' : ' hover:bg-gray-300'
          } text-white  rounded-full`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Image src={PrevArr} alt='something'></Image>
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`mr-2 p-0 ${
              currentPage === page ? 'text-black' : 'text-gray-400'
            } mx-2 text-medium font-medium  rounded-full`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={`ml-2 p-2 ${
            currentPage === totalPages
              ? ' cursor-not-allowed'
              : ' hover:bg-gray-300'
          } text-white rounded-full`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Image src={ForwArr} alt='arrow'></Image>
        </button>
      </div>
    </div>
  );
};

export default DataTable2;
