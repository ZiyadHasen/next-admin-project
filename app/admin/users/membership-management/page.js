'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
// import svg from '../../images/nike.svg';
import Image from 'next/image';
import DateComponent from '../../../../components/Date';
import Table from '../../../../components/tableUser6';
import { useState } from 'react';
import cheked from '../../../../data/images/cheked.svg';
import unCheked from '../../../../data/images/uncheked.svg';

import { Select } from 'antd';

function Page() {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);
  const [optionThree, setOptionThree] = useState(false);
  const [optionFour, setOptionFour] = useState(false);

  return (
    <Sidebar>
      <main className='flex-1 text-white  bg-backG'>
        <div className='mx-4 mt-8 mb-[2rem]'>
          <h1 className='font-bold text-base mb-2 text-black'>
            운영 관리<span className='m-2 '>&gt;</span>관리자 관리
          </h1>

          <div className='h-[124px] pt-4 pb-4 px-6 bg-white '>
            <div className='flex justify-between'>
              <div className='border-b-[2px] flex gap-4 items-center border-gray-400 '>
                <h2 className='text-gray-600 font-lg font-bold mr-4 '>
                  등록 기간
                </h2>
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
                      오늘
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
                      최근 7일
                    </span>
                  </div>
                  <div
                    className='flex justify-center items-center gap-2 cursor-pointer'
                    onClick={() => {
                      setOptionFour((prev) => !prev);
                    }}
                  >
                    {optionFour ? (
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
              <div className='border-b-[2px] ml-2 border-gray-400 '>
                <input
                  type='text'
                  placeholder='계정(이메일), 이름, 연락처 검색'
                  className='input focus:outline-none focus:border-0 bg-gray-50 text-[#616161] h-[35px] w-[380px]  rounded-none
                  placeholder:text-sm placeholder:font-bold
                  '
                />
              </div>
            </div>
            <div className='flex justify-center mt-4 '>
              <button className='text-white text-center text-sm font-bold px-8 py-1 rounded-[4px] bg-button mr-4'>
                초기화
              </button>
              <button className='text-white text-center text-sm font-bold px-8 py-1 rounded-[4px] bg-button'>
                검색
              </button>
            </div>
          </div>
          {/* 2nd section */}
          <section className='flex justify-between px-4 mt-[4rem] pb-2  border-b-[2px] border-gray-400'>
            <h1 className='font-bold text-base  text-[#9e9e9e]'>
              검색 <span className=' text-black '>254</span>개 / 전체
              <span className='text-black'> 1,357 </span> 개
            </h1>

            <select className='text-sm text-black mx-4 pl-8 rounded-sm h-[28px] bg-white focus:border-none outline-none'>
              <option value='option1' className='text-sm'>
                10개 보기
              </option>
              <option value='option2' className='text-sm'>
                20개 보기{' '}
              </option>
              <option value='option3' className='text-sm'>
                50개 보기
              </option>
              <option value='option4' className='text-sm'>
                100개 보기
              </option>
            </select>
          </section>
          <div className='h-[554px]'>
            <Table />
          </div>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
