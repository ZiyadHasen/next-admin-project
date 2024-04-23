'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
// import svg from '../../images/nike.svg';
import Image from 'next/image';
import DateComponent from '../../../../components/Date';
import Table from '../../../../components/tableUser15';
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
        <div className='mx-4 mt-8'>
          <h1 className='font-bold text-base mb-2 text-black'>요청일</h1>

          <div className='h-[170px] pt-6 pb-4 px-6 bg-white '>
            <div className='flex'>
              <div className='border-b-[2px] flex gap-[2rem] items-center border-gray-400 '>
                <h2 className='text-gray-600 font-lg font-bold mr-[4rem] '>
                  요청일
                </h2>
                <DateComponent />
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
                      전체
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
              <div className='mx-auto'></div>
            </div>
            <div className='flex items-center gap-6 mt-4'>
              <div className=' flex flex-1 justify-between items-center border-b-[2px] border-gray-400 '>
                <h2 className='text-gray-600 text-sm font-bold '>쿠폰 유형</h2>
                <select className=' select-bordered px-2 focus:outline-none pb-0  border-0 text-sm text-gray-600'>
                  <option disabled selected>
                    전체
                  </option>
                  <option>추천인 코드 등록</option>
                  <option>미션 완료</option>
                  <option>미션 완료</option>
                </select>
              </div>
              <div className='pb-4'>
                <div className='border-b-[2px] ml-6 border-gray-400 '>
                  <input
                    type='text'
                    placeholder='쿠폰명 검색'
                    className='input focus:outline-none border-gray-300 bg-gray-50 text-gray-600 h-[35px] w-[350px] mb-1 rounded-none'
                  />
                </div>
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
          <div className='flex justify-between px-4 mt-[4rem] pb-2  border-b-[2px] border-gray-400'>
            <h1 className='font-bold text-base  text-black'>
              검색 254개 <span className='mx-1'>/</span>전체 1,357개
            </h1>

            <select className='text-sm text-black mx-4 pl-8 rounded-sm h-[28px] bg-white focus:border-none hover:border-none'>
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
          </div>

          <Table />
        </div>
        <div className='flex justify-center  py-6 items-center my-[2rem]  bg-white h-[52px] shadow-inner  border-t-[2px] border-gray-400'>
          <button className='font-bold mx-4 text-center text-sm text-white bg-button hover:bg-gray-500 px-[5rem] py-2 rounded-[5px]'>
            엑셀파일 다운로드
          </button>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
