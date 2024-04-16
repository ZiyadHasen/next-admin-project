import React, { useState } from 'react';
import { data } from '../data/table-data';
import ForwArr from '../images/forwarArrow.svg';
import PrevArr from '../images/double-arrow-p.svg';
import Image from 'next/image';

const DataTable2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [header3Option, setHeader3Option] = useState(0);
  const [header6Option, setHeader6Option] = useState(0);
  const [tableData] = useState(data);

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
    <div className='container mx-auto '>
      <table className='min-w-full border-collapse border text-gray-600 border-gray-300'>
        <thead>
          <tr className='bg-transparent'>
            <th className='border py-2'>No</th>
            <th className='border px-4 py-2'>계정</th>
            <th className='border px-4 py-2'>
              <select
                className='border bg-inherit px-4 py-2'
                onChange={(e) => setHeader3Option(Number(e.target.value))}
              >
                <option value={0}>Option 1</option>
                <option value={1}>Option 2</option>
                <option value={2}>Option 3</option>
              </select>
            </th>
            <th className='border px-4 py-2'>연락처</th>
            <th className='border px-4 py-2'>접근기간</th>
            <th className='border px-4 py-2'>
              <select
                className=' border px-4 bg-inherit py-2 focus:border-none hover:border-none'
                onChange={(e) => setHeader6Option(Number(e.target.value))}
              >
                <option value={0}>Option 1</option>
                <option value={1}>Option 2</option>
                <option value={2}>Option 3</option>
              </select>
            </th>
            <th className='border px-4 py-2'>노출 여부</th>
            <th className='border px-4 py-2'>등록일시</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
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
              <td className='border text-center text-sm text-blue-400 border-gray-100 px-4 py-2'>
                {handleColumnChange(item.col3Options, header3Option)}
              </td>
              <td className='border text-center text-sm border-gray-100 px-4 py-2'>
                {item.col4}
              </td>
              <td className='border text-center text-sm border-gray-100 px-4 py-2'>
                {item.col5}
              </td>
              <td className='border text-center text-sm border-gray-100 px-4 py-2'>
                {handleColumnChange(item.col6Options, header6Option)}
              </td>
              <td className='border text-center text-sm border-gray-100 px-4 py-2'>
                {item.col7}
              </td>
              <td className='border text-center text-sm border-gray-100 px-4 py-2'>
                {item.col8}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='mt-4 flex items-center justify-center border-t-2 bg-white h-[60px]'>
        <button
          className={`mr-2 p-2 ${currentPage === 1 ? 'cursor-not-allowed' : ' hover:bg-gray-300'} text-white  rounded-full`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <Image src={PrevArr}></Image>
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`mr-2 p-0 ${currentPage === page ? 'text-black' : 'text-gray-400'} mx-2 text-medium font-medium  rounded-full`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
        <button
          className={`ml-2 p-2 ${currentPage === totalPages ? ' cursor-not-allowed' : ' hover:bg-gray-300'} text-white rounded-full`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <Image src={ForwArr}></Image>
        </button>
      </div>
    </div>
  );
};

export default DataTable2;
