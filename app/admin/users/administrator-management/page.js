'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
import Image from 'next/image';
import DateComponent from '../../../../components/Date';
import Table from '../../../../components/tableUser2';
import { useState } from 'react';
import cheked from '../../../../data/images/cheked.svg';
import unCheked from '../../../../data/images/uncheked.svg';
import circle from '../../../../data/images/circle.svg';
import checkedCirle from '../../../../data/images/checkedCircle.svg';

function Page() {
  const [optionOne, setOptionOne] = useState(false);
  const [optionTwo, setOptionTwo] = useState(false);
  const [optionThree, setOptionThree] = useState(false);

  const [radioOne, setRadioOne] = useState(true);
  const [radioTwo, setRadioTwo] = useState(false);
  const [radioThree, setRadioThree] = useState(false);

  const changeRadioOne = () => {
    setRadioOne(true);
    setRadioTwo(false);
    setRadioThree(false);
  };
  const changeRadioTwo = () => {
    setRadioOne(false);
    setRadioTwo(true);
    setRadioThree(false);
  };
  const changeRadioThree = () => {
    setRadioOne(false);
    setRadioTwo(false);
    setRadioThree(true);
  };
  return (
    <Sidebar>
      <main className='flex-1 drop-shadow-md shadow-inner shadow-black/25te  bg-backG'>
        <div className='mx-4 mt-8'>
          <h1 className='font-bold text-base mb-2 text-black'>
            운영 관리<span className='m-2 '>&gt;</span>관리자 관리
          </h1>

          <div className='h-[170px] pt-6 pb-4 px-6 bg-white '>
            <div className='flex'>
              <div className='border-b-[2px] flex gap-[2rem] items-center border-gray-400 '>
                <h2 className='text-gray-600 font-lg font-bold mr-8 '>
                  등록 기간
                </h2>
                <DateComponent />
                <div className='flex items-center gap-4 ml-6'>
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
              <div className='mx-auto'></div>
            </div>
            {/* row two */}
            <div className='flex items-center gap-12 mt-4'>
              <div className=' flex flex-1 justify-between items-center border-b-[2px] border-gray-400 '>
                <div className='text-gray-600 font-lg font-bold mr-[2rem]'>
                  잠금 여부
                </div>
                <div className='flex items-center gap-4 mb-2'>
                  <div
                    className='flex justify-center items-center gap-2 cursor-pointer'
                    onClick={changeRadioOne}
                  >
                    {radioOne ? (
                      <Image src={checkedCirle} alt='checked' />
                    ) : (
                      <Image src={circle} alt='un-checked' />
                    )}

                    <span className='label-text text-sm text-[#616161] font-medium'>
                      전체
                    </span>
                  </div>
                  <div
                    className='flex justify-center items-center gap-2 cursor-pointer'
                    onClick={changeRadioTwo}
                  >
                    {radioTwo ? (
                      <Image src={checkedCirle} alt='checked' />
                    ) : (
                      <Image src={circle} alt='un-checked' />
                    )}

                    <span className='label-text text-sm text-[#616161] font-medium'>
                      전체
                    </span>
                  </div>
                  <div
                    className='flex justify-center items-center gap-2 cursor-pointer'
                    onClick={changeRadioThree}
                  >
                    {radioThree ? (
                      <Image src={checkedCirle} alt='checked' />
                    ) : (
                      <Image src={circle} alt='un-checked' />
                    )}

                    <span className='label-text text-sm text-[#616161] font-medium'>
                      전체
                    </span>
                  </div>
                </div>
              </div>
              <div className='border-b-[2px] ml-6 border-gray-400 '>
                <input
                  type='text'
                  placeholder='계정(이메일), 이름, 연락처 검색'
                  className='input focus:outline-none focus:border-0 bg-gray-50 text-[#616161] h-[30px] w-[380px] mb-1 rounded-none
                  placeholder:text-sm placeholder:font-bold
                  '
                />
              </div>
              <div className='flex  flex-1 items-center justify-end ml-auto mt-2 mb-4 gap-4 space-x-4'>
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
              운영 관리<span className='m-2 '>&gt;</span>관리자 관리
            </h1>
            <select className='text-sm text-black mx-4 pl-8 rounded-sm h-[28px] bg-white outline-none'>
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
        <div className='flex justify-center   py-9 items-center mt-[2rem]  bg-white h-[52px] shadow-inner  border-t-0 border-gray-400'>
          <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
            관리자 등록
          </button>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
