'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
// import svg from '../../images/nike.svg';
import Image from 'next/image';
import DateComponent from '../../../../components/Date';
import Table from '../../../../components/tableUser18';
import { useState } from 'react';

import verify from '../../../../data/images/verify.svg';
import cheked from '../../../../data/images/cheked.svg';
import unCheked from '../../../../data/images/uncheked.svg';

import checkedCircle from '../../../../data/images/checkedCircle.svg';
import unCheckedCircle from '../../../../data/images/circle.svg';

import { Select } from 'antd';

function Page() {
  const [checkOne1, setCheckOne1] = useState(true);
  const [checkOne2, setCheckOne2] = useState(false);
  const [checkOne3, setCheckOne3] = useState(false);

  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);
  const [optionThree, setOptionThree] = useState(false);

  return (
    <Sidebar>
      <main className='flex-1 text-white  bg-backG'>
        <div className='mx-4 mt-8'>
          <h1 className='font-bold text-base mb-2 text-black'>요청일</h1>

          <div className='h-[170px] pt-6 pb-4 px-6 bg-white '>
            <div className='flex justify-between items-center'>
              <div className='border-b-[2px] flex  gap-[1rem] items-center border-gray-400 '>
                <h2 className='text-gray-600 font-lg font-bold mr-[3rem] '>
                  등록일
                </h2>
                <DateComponent />
                <div className=' flex gap-4 items-center flex-1 ml-6'>
                  <h2 className='text-gray-600 font-bold text-sm'>활성 여부</h2>
                  <div className='flex items-center gap-6 ml-4 mb-1'>
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

                      <span className='label-text text-sm text-[#616161] font-medium'>
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

                      <span className='label-text text-sm text-[#616161] font-medium'>
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

                      <span className='label-text text-sm text-[#616161] font-medium'>
                        최근 1개월
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='border-b-[2px]  flex justify-between items-center border-gray-400'>
                <h1 className='font-bold text-base  mr-8 text-gray-600'>
                  노출 여부 *
                </h1>

                <div className='flex gap-5'>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckOne1(true);
                      setCheckOne2(false);
                      setCheckOne3(false);
                    }}
                  >
                    {checkOne1 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      전체
                    </span>
                  </div>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckOne1(false);
                      setCheckOne2(true);
                      setCheckOne3(false);
                    }}
                  >
                    {checkOne2 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      노출
                    </span>
                  </div>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckOne1(false);
                      setCheckOne2(false);
                      setCheckOne3(true);
                    }}
                  >
                    {checkOne3 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      비노출
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-6 mt-4'>
              <div className=' flex flex-1 justify-between items-center border-b-[2px] border-gray-400 '>
                <h2 className='text-gray-600 text-sm font-bold '>모델명</h2>
                <select className=' px-4 focus:outline-none pb-0  border-0 text-sm text-gray-600'>
                  <option disabled selected>
                    전체
                  </option>
                  <option>RENEVV 10.8</option>
                  <option>RENEVV 10.8</option>
                  <option>RENEVV 10.8</option>
                </select>
              </div>
              <div className='border-b-[2px] ml-6 border-gray-400 '>
                <input
                  type='text'
                  placeholder='쿠폰명 검색'
                  className='input focus:border-transparent border-gray-300 bg-gray-50 text-gray-600 h-[35px] w-[350px] mb-1 rounded-none'
                />
              </div>
              <div className='flex items-center justify-center ml-[8rem] mt-2 mb-4 gap-4 space-x-4'>
                <button className='text-white text-center text-lg px-6 py-1 rounded-[4px] bg-button'>
                  초기화
                </button>
                <button className='text-white text-center text-lg px-6 py-1 rounded-[4px] bg-button'>
                  검색
                </button>
              </div>
            </div>
          </div>

          <Table />
        </div>
        <div className='flex justify-center  py-6 items-center   bg-white h-[52px] shadow-inner  border-t-[2px] border-gray-400'>
          <button className='font-bold mx-4 text-center text-sm text-white bg-button hover:bg-gray-500 px-[5rem] py-2 rounded-[5px]'>
            엑셀파일 다운로드
          </button>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
