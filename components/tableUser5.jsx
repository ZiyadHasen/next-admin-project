import React, { useState } from 'react';
import { data } from '../data/tableDataUser5';
import ForwArr from '../data/images/forwarArrow.svg';
import PrevArr from '../data/images/double-arrow-p.svg';
import Image from 'next/image';

const DataTable2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [tableData] = useState(data);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='container mx-auto'>
      <table className='min-w-full border-collapse border text-gray-600 border-gray-300'>
        <thead>
          <tr className='bg-transparent'>
            <th className='border py-2'>No</th>
            <th className='border px-4 py-2'>계정</th>
            <th className='border px-4 py-2'>접근기간</th>
            <th className='border px-4 py-2'>등록일시</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr
              className='bg-white text-center text-sm border border-gray-100 px-4 py-2'
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
              <td className='border text-center text-sm border-gray-100 px-4 py-2'>
                {item.col4}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='mt-4 flex items-center justify-center border-t-2 bg-backG h-[60px]'>
        <button
          className={`mr-2 p-2 ${
            currentPage === 1 ? 'cursor-not-allowed' : ' hover:bg-gray-300'
          } text-white  rounded-full`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Image src={PrevArr} alt='somthing' />
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
          <Image src={ForwArr} alt='arrow' />
        </button>
      </div>
    </div>
  );
};

export default DataTable2;
