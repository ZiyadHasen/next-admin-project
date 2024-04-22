'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
import Image from 'next/image';
import DateComponent from '../../../../components/Date'; // Changed the import name to avoid conflicts
import Table from '../../../../components/tableUser22';
import cheked from '../../../../data/images/cheked.svg';
import unCheked from '../../../../data/images/uncheked.svg';
import { useState } from 'react';

function Page() {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);
  const [optionThree, setOptionThree] = useState(false);
  const [optionFour, setOptionFour] = useState(false);
  const [optionFive, setOptionFive] = useState(false);

  // the second selection
  const [optionTwo1, setOptionTwo1] = useState(false);
  const [optionTwo2, setOptionTwo2] = useState(false);
  const [optionTwo3, setOptionTwo3] = useState(false);
  const [optionTwo4, setOptionTwo4] = useState(false);
  return (
    <Sidebar>
      <main className='flex-1 text-white  bg-backG'>
        <div className='mx-4 mt-8 mb-12'>
          <h1 className='font-bold text-base mb-2 text-black'>
            운영 관리<span className='m-2 '>&gt;</span>관리자 관리
          </h1>

          <div className='h-[175px] border-[#9E9E9E] border-[1px] pt-6 pb-4 px-6 bg-white '>
            {/* row one*/}
            <div className='flex justify-between'>
              <div className='border-b-[2px] flex gap-16 pr-4 items-center border-gray-400 '>
                <h2 className='text-gray-600 font-lg font-bold mr-6 '>
                  노출 여부
                </h2>

                <div className='flex items-center gap-8 ml-6'>
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
                      노출 예정
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
                      노출중
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
                      노출 종료
                    </span>
                  </div>
                  <div
                    className='flex justify-center items-center gap-2 cursor-pointer'
                    onClick={() => {
                      setOptionFive((prev) => !prev);
                    }}
                  >
                    {optionFive ? (
                      <Image src={cheked} alt='checked' />
                    ) : (
                      <Image src={unCheked} alt='un-checked' />
                    )}

                    <span className='label-text text-sm text-[#616161] font-medium'>
                      숨김
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex-1'></div>
            </div>
            {/* row two*/}
            <div className='flex items-center gap-8 justify-between mt-4'>
              <div className='border-b-[2px] justify-center items-center flex  gap-8  border-gray-400 '>
                <div className=' flex items-center gap-16'>
                  <h2 className='text-gray-600 font-lg font-bold  '>
                    노출 기간
                  </h2>
                  <DateComponent />
                </div>
                <div className='flex items-center gap-4 ml-4 pr-8'>
                  <div
                    className='flex justify-center items-center gap-2 cursor-pointer'
                    onClick={() => {
                      setOptionTwo1((prev) => !prev);
                    }}
                  >
                    {optionTwo1 ? (
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
                      setOptionTwo2((prev) => !prev);
                    }}
                  >
                    {optionTwo2 ? (
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
                      setOptionTwo3((prev) => !prev);
                    }}
                  >
                    {optionTwo3 ? (
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
                      setOptionTwo4((prev) => !prev);
                    }}
                  >
                    {optionTwo4 ? (
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
              <div className='flex-1 border-b-[2px] justify-center   mt-1 items-center   border-gray-400'>
                <input
                  type='text'
                  placeholder='제목, 작성자 검색'
                  className='input  focus:outline-none focus:border-0  flex-1 justify-center  w-full  text-[#616161] text-sm h-[32px]  rounded-none'
                />
              </div>
            </div>
            {/* second row */}

            <div className='flex items-center justify-center  mt-3  gap-4 '>
              <button className='text-white text-center text-lg px-6 py-1 rounded-[4px] bg-button'>
                초기화
              </button>
              <button className='text-white text-center text-lg px-6 py-1 rounded-[4px] bg-button'>
                검색
              </button>
            </div>
          </div>
          <div className='flex justify-between px-4 mt-[4rem] pb-2  border-b-[2px] border-gray-400'>
            <h1 className=' text-sm  text-[#9E9E9E]'>
              검색개<span className='m-2 text-black font-bold'>254</span>전체{' '}
              <span className='m-2 text-black font-bold'>1,357</span>개
            </h1>
            <select className='text-sm text-black mx-4 pl-8 rounded-sm h-[28px] bg-white outline-none border-0'>
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

        <div className='flex justify-center gap-10 py-2 items-center bg-white'>
          <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
            팝업 등록
          </button>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
