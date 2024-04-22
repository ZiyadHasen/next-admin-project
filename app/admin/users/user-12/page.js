'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
import Image from 'next/image';
import DateComponent from '../../../../components/Date'; // Changed the import name to avoid conflicts
import Table from '../../../../components/tableUser11';
import { useState } from 'react';
import cheked from '../../../../data/images/cheked.svg';
import unCheked from '../../../../data/images/uncheked.svg';

function Page() {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);
  const [optionThree, setOptionThree] = useState(false);
  const [optionFour, setOptionFour] = useState(false);
  return (
    <Sidebar>
      <main className='flex-1 text-white  bg-backG'>
        <div className='mx-4 mt-8'>
          <h1 className='font-bold text-base mb-2 text-black'>
            운영 관리<span className='m-2 '>&gt;</span>관리자 관리
          </h1>

          <div className='h-[714px] pt-2 pb-4 px-6 mb-10 bg-white '>
            {/* row one */}
            <h1 className='bg-[#EEEEEE] my-4 text-gray-600 text-sm font-bold p-2'>
              기본 정보
            </h1>
            {/* row two */}
            <div className='flex items-center gap-6 mt-2 h-[30px]:'>
              <div className='flex-1 border-b-[2px] border-gray-300'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-gray-600 text-sm font-bold '>
                    미션 번호
                  </h2>
                  <div>
                    <input
                      type='text'
                      placeholder='00001'
                      className='input  focus:outline-none focus:border-0   text-gray-600 text-sm h-[28px]  w-[250px] mb-[1px] rounded-none'
                    />
                  </div>
                </div>
              </div>
              <div className='flex-1'></div>
              <div className='flex-1'></div>
            </div>

            {/* row three */}
            <div className='flex items-center gap-6 mt-2 h-[30px] '>
              <div className='flex w-2/3 gap-10 items-center border-b-[2px] border-gray-400'>
                <h2 className='text-gray-600 text-sm font-bold w-[120px]  '>
                  미션명 *
                </h2>

                <input
                  type='text'
                  placeholder='RENEVV 9.5 쿠폰 만들기 미션'
                  className='input  focus:outline-none focus:border-0  border-gray-200  text-gray-600 text-sm h-[28px] w-full   mb-[1px] rounded-none'
                />
              </div>

              <div className='border-b-[2px] flex w-1/3 gap-12 items-center ml-6  border-gray-400 '>
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
                      활성
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* row four */}

            <div className='flex items-center gap-6 mt-10'>
              <div className=' flex flex-1 justify-between items-center border-b-[2px] border-gray-400 '>
                <h2 className='text-gray-600 text-sm font-bold mr-[2rem]'>
                  모델 유형
                </h2>
                <select className='text-sm text-black mx-4 pl-8 rounded-sm h-[28px] bg-white outline-none border-0'>
                  <option value='option1' className='text-sm'>
                    전체
                  </option>
                  <option value='option2' className='text-sm'>
                    RENEVV 11
                  </option>
                  <option value='option3' className='text-sm'>
                    RENEVV 12
                  </option>
                  <option value='option4' className='text-sm'>
                    RENEVV 13
                  </option>
                </select>
              </div>

              <div className='border-b-[2px] flex gap-12 items-center flex-1 ml-6 border-gray-400 '>
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
                      활성
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
                      비활성
                    </span>
                  </div>
                </div>
              </div>

              <div className=' flex-1 ml-6 border-b-2 border-gray-400 '>
                <input
                  type='text'
                  placeholder='미션명 검색'
                  className='input border-b-[2px] border-gray-300  text-gray-600 text-sm h-[28px]  w-full mb-[1px] rounded-none'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center  pt-8 pb-10 items-center mt-[3rem]  bg-white h-[52px] shadow-inner  border-t-[2px] border-gray-400'>
          <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
            확인
          </button>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
