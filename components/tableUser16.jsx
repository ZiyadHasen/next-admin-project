import React, { useState } from 'react';
import { data } from '../data/tableDataUser16';

// import ForwArr from '../images/forwarArrow.svg';
// import PrevArr from '../images/double-arrow-p.svg';
import ForwArr from '../data/images/forwarArrow.svg';
import PrevArr from '../data/images/double-arrow-p.svg';

import Image from 'next/image';

const DataTable2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [header2Option, setHeader2Option] = useState(0);
  const [header3Option, setHeader3Option] = useState(0);
  const [header5Option, setHeader5Option] = useState(0);
  const [header6Option, setHeader6Option] = useState(0);

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
    <div className='container  xxl:[1500px] xxl:[1800px]'>
      <table className='min-w-full border-collapse border text-gray-600 border-gray-300'>
        <thead>
          <tr className='bg-transparent'>
            <th className='border py-2'>No</th>

            <th className='border  py-2'>
              <select
                className='border bg-inherit px-4 py-2'
                onChange={(e) => setHeader2Option(Number(e.target.value))}
              >
                <option value={0}>모델명</option>
                <option value={1}>Option 2</option>
                <option value={2}>Option 3</option>
              </select>
            </th>
            <th className='border  py-2'>
              <select
                className='border bg-inherit px-4 py-2'
                onChange={(e) => setHeader3Option(Number(e.target.value))}
              >
                <option value={0}>가이드 종류</option>
                <option value={1}>Option 2</option>
                <option value={2}>Option 3</option>
              </select>
            </th>
            <th className='border py-2'>제목</th>
            <th className='border px-0 py-2'>
              <select
                className=' border px-0 bg-inherit py-2 focus:border-none hover:border-none'
                onChange={(e) => setHeader5Option(Number(e.target.value))}
              >
                <option value={0}>노출 순서</option>
                <option value={1}>Option 2</option>
                <option value={2}>Option 3</option>
              </select>
            </th>
            <th className='border px-4 py-2'>
              <select
                className=' border px-4 bg-inherit py-2 focus:border-none hover:border-none'
                onChange={(e) => setHeader6Option(Number(e.target.value))}
              >
                <option value={0}>노출</option>
                <option value={1}>Option 2</option>
                <option value={2}>Option 3</option>
              </select>
            </th>
            <th className='border py-2'>작성자</th>
            <th className='border py-2'>등록 일시</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr
              className={`text-center text-sm border border-gray-100 px-4 py-2 ${
                index >= itemsPerPage - 6 ? 'bg-gray-50' : 'bg-white'
              }`}
              key={item.id}
            >
              <td
                className={`border text-center text-sm border-gray-100 px-4 py-2 ${
                  index >= itemsPerPage - 6 ? 'text-gray-400' : 'text-green-500'
                }`}
              >
                {item.col1}
              </td>
              <td
                className={`border text-center text-sm border-gray-100 px-4 py-2 ${
                  index >= itemsPerPage - 6 ? 'text-gray-400' : 'text-gray-600 '
                }`}
              >
                {handleColumnChange(item.col2Options, header2Option)}
              </td>
              <td
                className={`border text-center text-sm border-gray-100 px-4 py-2 ${
                  index >= itemsPerPage - 6 ? 'text-gray-400' : 'text-gray-600 '
                }`}
              >
                {handleColumnChange(item.col3Options, header3Option)}
              </td>
              <td
                className={`border text-center text-sm border-gray-100 px-4 py-2 ${
                  index >= itemsPerPage - 6 ? 'text-blue-300' : 'text-blue-500 '
                }`}
              >
                {item.col4}
              </td>
              <td
                className={`border-b text-center text-sm border-gray-200 px-4 py-2 ${
                  index >= itemsPerPage - 6 ? 'text-gray-400' : 'text-gray-600 '
                }`}
              >
                {handleColumnChange(item.col5Options, header5Option)}
              </td>
              <td
                className={`border text-center text-sm border-gray-100 px-4 py-2 ${
                  index >= itemsPerPage - 6 ? 'text-gray-400' : 'text-green-500'
                }`}
              >
                {handleColumnChange(item.col6Options, header6Option)}
              </td>
              <td
                className={`border text-center text-sm border-gray-100 px-4 py-2 ${
                  index >= itemsPerPage - 6 ? 'text-gray-400' : 'text-gray-600 '
                }`}
              >
                {item.col7}
              </td>

              <td
                className={`border text-center text-sm border-gray-100 px-4 py-2 ${
                  index >= itemsPerPage - 6 ? 'text-gray-400' : 'text-gray-600 '
                }`}
              >
                {item.col8}
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
