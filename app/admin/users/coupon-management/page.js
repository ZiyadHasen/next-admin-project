'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
import Image from 'next/image';
import DateComponent from '../../../../components/Date'; // Changed the import name to avoid conflicts
import Table from '../../../../components/tableUser13';
import { useState } from 'react';
import cheked from '../../../../data/images/cheked.svg';
import unCheked from '../../../../data/images/uncheked.svg';
import checkedCircle from '../../../../data/images/checkedCircle.svg';
import unCheckedCircle from '../../../../data/images/circle.svg';

function Page() {
  // second
  const [checkTwo3, setCheckTwo3] = useState(true);
  const [checkTwo4, setCheckTwo4] = useState(false);
  const [checkTwo5, setCheckTwo5] = useState(false);

  return (
    <Sidebar>
      <main className='flex-1 text-white  bg-backG'>
        <div className='mx-4 mt-8'>
          <h1 className='font-bold text-base mb-2 text-black'>
            운영 관리<span className='m-2 '>&gt;</span>관리자 관리
          </h1>

          <div className='h-[134px] pt-2 pb-4 px-6 mb-10 bg-white '>
            <div className='flex items-center gap-6 mt-6'>
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
                <div className='flex gap-5'>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckTwo3(true);
                      setCheckTwo4(false);
                      setCheckTwo5(false);
                    }}
                  >
                    {checkTwo3 ? (
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
                      setCheckTwo3(false);
                      setCheckTwo4(true);
                      setCheckTwo5(false);
                    }}
                  >
                    {checkTwo4 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      활성
                    </span>
                  </div>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckTwo3(false);
                      setCheckTwo4(false);
                      setCheckTwo5(true);
                    }}
                  >
                    {checkTwo5 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
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
            <div className='flex items-center justify-center ml-auto my-4 gap-4 space-x-4'>
              <button className='text-white text-center text-lg px-6 py-1 rounded-[4px] bg-button'>
                초기화
              </button>
              <button className='text-white text-center text-lg px-6 py-1 rounded-[4px] bg-button'>
                검색
              </button>
            </div>
          </div>
          <div className='flex justify-between px-4 mt-10 pb-2  border-b-[2px] border-gray-400'>
            <h1 className='font-bold text-base  text-black'>
              운영 관리<span className='m-2 '>&gt;</span>관리자 관리
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
