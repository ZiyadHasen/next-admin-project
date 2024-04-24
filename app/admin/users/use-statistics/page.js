'use client';
import React, { useState } from 'react';
import Sidebar from '../../../../components/Sidebar';
import Image from 'next/image';
import DateComponent from '../../../../components/Date';

import cheked from '../../../../data/images/cheked.svg';
import unCheked from '../../../../data/images/uncheked.svg';
import { Select } from 'antd';
import Table1 from '../../../../components/tableUser25-1';
import Table2 from '../../../../components/tableUser25-2';

function Page() {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);
  const [optionThree, setOptionThree] = useState(false);
  const [activeButton, setActiveButton] = useState('회원 통계');

  const [tableView, setTableView] = useState(false);

  return (
    <Sidebar>
      <main className='flex-1 text-white  bg-backG'>
        <div className='mx-4 mt-8 mb-[2rem]'>
          <h1 className='font-bold  text-base mb-6 text-[#4F4F4F]'>
            운영 관리<span className='m-2 '>&gt;</span>관리자 관리
          </h1>

          <div className='h-[114px]  bg-white '>
            <div className=''>
              <button
                className={`px-[16px] py-[4px] text-[#616161] text-sm font-bold ${
                  activeButton === '회원 통계'
                    ? 'border-t-2 border-l-2 border-r-2 border-gray-400 rounded-t-[4px]'
                    : ''
                }`}
                onClick={() => {
                  setActiveButton('회원 통계');

                  setTableView(false);
                }}
              >
                회원 통계
              </button>
              <button
                className={`px-[16px] py-[4px] text-[#616161] text-sm font-bold ${
                  activeButton === '기기 통계'
                    ? 'border-t-2 border-l-2 border-r-2 border-gray-400 rounded-t-[4px]'
                    : ''
                }`}
                onClick={() => {
                  setActiveButton('기기 통계');

                  setTableView(true);
                }}
              >
                기기 통계
              </button>
            </div>
            <div
              className={`flex justify-between ${
                activeButton ? 'border-t-2 border-[#828282]' : ''
              }`}
            >
              <div className='border-b-[2px] ml-3 mt-6 flex gap-4 pr-20  items-center border-gray-400 '>
                <h2 className='text-gray-600 font-lg font-bold mr-12 '>
                  등록 기간
                </h2>
                J
                <DateComponent />
                <div className='flex items-center gap-4 ml-4'>
                  <div
                    className='flex justify-center items-center gap-2 cursor-pointer'
                    onClick={() => {
                      setOptionOne((prev) => !prev);
                    }}
                  >
                    {optionOne ? (
                      <Image src={cheked} alt='checked' />
                    ) : (
                      <Image src={unCheked} alt='un-checked' />
                    )}

                    <span className='label-text text-sm text-[#BDBDBD] font-medium'>
                      오늘
                    </span>
                  </div>

                  <div
                    className='flex justify-center items-center gap-2 cursor-pointer'
                    onClick={() => {
                      setOptionTwo((prev) => !prev);
                    }}
                  >
                    {optionTwo ? (
                      <Image src={cheked} alt='checked' />
                    ) : (
                      <Image src={unCheked} alt='un-checked' />
                    )}

                    <span className='label-text text-sm text-[#BDBDBD] font-medium'>
                      최근 7일
                    </span>
                  </div>

                  <div
                    className='flex justify-center items-center gap-2 cursor-pointer'
                    onClick={() => {
                      setOptionThree((prev) => !prev);
                    }}
                  >
                    {optionThree ? (
                      <Image src={cheked} alt='checked' />
                    ) : (
                      <Image src={unCheked} alt='un-checked' />
                    )}

                    <span className='label-text text-sm text-[#BDBDBD] font-medium'>
                      최근 7일
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex justify-center h-[30px] mt-4  mx-4'>
                <button className='text-white text-center text-sm font-bold px-8 py-1 rounded-[4px] bg-button mr-4'>
                  초기화
                </button>
                <button className='text-white text-center text-sm font-bold px-8 py-1 rounded-[4px] bg-button'>
                  검색
                </button>
              </div>
            </div>
          </div>
          <h1 className='font-bold  text-base mt-16 text-[#9E9E9E]'>
            검색<span className='text-[#4F4F4F] font-bold '>154</span> 개
          </h1>
          {tableView ? <Table2 /> : <Table1 />}
        </div>
        <div className='flex justify-center  pt-8 pb-10 items-center mt-[6rem]  bg-white h-[52px] shadow-inner  border-t-[2px] border-gray-400'>
          <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
            엑셀파일 다운로드
          </button>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
