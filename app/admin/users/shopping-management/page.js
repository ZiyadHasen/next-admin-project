'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
import { useState } from 'react';
import Image from 'next/image';

import cheked from '../../../../data/images/cheked.svg';
import unCheckedCircle from '../../../../data/images/uncheked.svg';

import checkedCircle from '../../../../data/images/checkedCircle.svg';
import unCheked from '../../../../data/images/circle.svg';

import DateComponent from '../../../../components/Date';
import Table from '../../../../components/tableUser20';


function Page() {
  const [checkCircleOne, setChecCirclekOne] = useState(true);
  const [checkCircleTwo, setCheckCircleTwo] = useState(false);
  const [checkCircleThree, setCheckCircleThree] = useState(false);

  const [checkOne, setCheckOne] = useState(true);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckThree] = useState(false);


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
                <div>
                  
                <div className='flex justify-center items-center gap-4'>
                    <div
                      className='flex gap-1 justify-center items-center cursor-pointer'
                      onClick={() => {
                        setChecCirclekOne(true);
                        setCheckCircleTwo(false);
                        setCheckCircleThree(false);
                      }}
                    >
                      {checkCircleOne ? (
                        <Image src={cheked} alt='checked' />
                      ) : (
                        <Image src={unCheckedCircle} alt='un-checked' />
                      )}

                      <span className='text-[14px] font-medium text-[#9e9e9e]'>
                      오늘
                      </span>
                    </div>
                    <div
                      className='flex gap-1 justify-center items-center cursor-pointer'
                      onClick={() => {
                        setChecCirclekOne(false);
                        setCheckCircleTwo(true);
                        setCheckCircleThree(false);
                      }}
                    >
                      {checkCircleTwo ? (
                        <Image src={cheked} alt='checked' />
                      ) : (
                        <Image src={unCheckedCircle} alt='un-checked' />
                      )}

                      <span className='text-[14px] font-medium text-[#9e9e9e]'>
                      최근 7일
                      </span>
                    </div>
                    <div
                      className='flex gap-1 justify-center items-center cursor-pointer'
                      onClick={() => {
                        setChecCirclekOne(false);
                        setCheckCircleTwo(false);
                        setCheckCircleThree(true);
                      }}
                    >
                      {checkCircleThree ? (
                        <Image src={cheked} alt='checked' />
                      ) : (
                        <Image src={unCheckedCircle} alt='un-checked' />
                      )}

                      <span className='text-[14px] font-medium text-[#9e9e9e]'>
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
                <div className='flex justify-center items-center gap-4'>
                    <div
                      className='flex gap-1 justify-center items-center cursor-pointer'
                      onClick={() => {
                        setCheckOne(true);
                        setCheckTwo(false);
                        setCheckThree(false);
                      }}
                    >
                      {checkOne ? (
                        <Image src={checkedCircle} alt='checked' />
                      ) : (
                        <Image src={unCheked} alt='un-checked' />
                      )}

                      <span className='text-[14px] font-medium text-[#9e9e9e]'>
                      전체
                      </span>
                    </div>
                    <div
                      className='flex gap-1 justify-center items-center cursor-pointer'
                      onClick={() => {
                        setCheckOne(false);
                        setCheckTwo(true);
                        setCheckThree(false);
                      }}
                    >
                      {checkTwo ? (
                        <Image src={checkedCircle} alt='checked' />
                      ) : (
                        <Image src={unCheked} alt='un-checked' />
                      )}

                      <span className='text-[14px] font-medium text-[#9e9e9e]'>
                      노출
                      </span>
                    </div>
                    <div
                      className='flex gap-1 justify-center items-center cursor-pointer'
                      onClick={() => {
                        setCheckOne(false);
                        setCheckTwo(false);
                        setCheckThree(true);
                      }}
                    >
                      {checkThree ? (
                        <Image src={checkedCircle} alt='checked' />
                      ) : (
                        <Image src={unCheked} alt='un-checked' />
                      )}

                      <span className='text-[14px] font-medium text-[#9e9e9e]'>
                      비노출
                      </span>
                    </div>
                  </div>
              </div>
            </div>
            <div className='flex items-center gap-6 mt-4'>
              <div className=' flex flex-1 justify-between items-center border-b-[2px] border-gray-400 '>
                <h2 className='text-gray-600 text-sm font-bold '>모델명</h2>
                <select className='focus:outline-none  pb-0  border-0 text-sm text-gray-600'>
                  <option disabled selected>
                    전체
                  </option>
                  <option>RENEVV 9.5</option>
                  <option>RENEVV 10.8</option>
                  <option>RENEVV 13</option>
                </select>
              </div>
              <div className='pb-4'>

              <div className='border-b-[2px] ml-6 border-gray-400'>
                <input
                  type='text'
                  placeholder='제목, 작성자명 검색'
                  className='input focus:border-transparent focus:outline-none border-gray-300 bg-gray-50 text-gray-600 h-[30px] w-[350px] mb-1 rounded-none'
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

          <Table />
        </div>
        <div className='flex justify-center  py-6 items-center   bg-white h-[52px] shadow-inner  border-t-[2px] border-gray-400'>
          <button className='font-bold mx-4 text-center text-sm text-white bg-button hover:bg-gray-500 px-[5rem] py-2 rounded-[5px]'>
          등록
          </button>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
