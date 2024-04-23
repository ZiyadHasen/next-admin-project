'use client';
import React from 'react';
import { useState } from 'react';
import Sidebar from '../../../../components/Sidebar';
// import svg from '../../images/nike.svg';
import Image from 'next/image';


import cheked from '../../../../data/images/cheked.svg';
import unChecked from '../../../../data/images/uncheked.svg';

import checkedCircle from '../../../../data/images/checkedCircle.svg';
import unCheckedCircle from '../../../../data/images/circle.svg';


import DateComponent from '../../../../components/Date';
import Table from '../../../../components/tableUser16';



function Page() {
  const [checkOne, setCheckOne] = useState(true);
  const [checkTwo, setCheckTwo] = useState(false);
  const [checkThree, setCheckThree] = useState(false);
  const [checkFour, setCheckFour] = useState(false);

  const [checkCircleOne, setChecCirclekOne] = useState(true);
  const [checkCircleTwo, setCheckCircleTwo] = useState(false);
  const [checkCircleThree, setCheckCircleThree] = useState(false);



  return (
    <Sidebar>
      <main className='flex-1 text-white  bg-backG'>
        <div className='mx-4 mt-8'>
          <h1 className='font-bold text-base mb-2 text-black'>앱 관리 &gt; 가이드 관리</h1>

          <div className='h-[170px] pt-4 pb-[170px] px-6 bg-white '>
            <div className='flex'>
              <div className='border-b-[2px] flex gap-[2rem] items-center border-gray-400 '>
                <h2 className='text-gray-600 font-lg font-bold mr-[4rem] '>
                등록일
                </h2>
                <DateComponent />
                <div>


                <div className='flex justify-center items-center gap-4'>
                    <div
                      className='flex gap-1 justify-center items-center cursor-pointer'
                      onClick={() => {
                        setCheckOne(true);
                        setCheckTwo(false);
                        setCheckThree(false);
                        setCheckFour(false);
                        
                      }}
                    >
                      {checkOne ? (
                        <Image src={cheked} alt='checked' />
                      ) : (
                        <Image src={unChecked} alt='un-checked' />
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
                        setCheckFour(false);
                      }}
                    >
                      {checkTwo ? (
                        <Image src={cheked} alt='checked' />
                      ) : (
                        <Image src={unChecked} alt='un-checked' />
                      )}

                      <span className='text-[14px] font-medium text-[#9e9e9e]'>
                      오늘
                      </span>
                    </div>
                    <div
                      className='flex gap-1 justify-center items-center cursor-pointer'
                      onClick={() => {
                        setCheckOne(false);
                        setCheckTwo(false);
                        setCheckThree(true);
                        setCheckFour(false);
                      }}
                    >
                      {checkThree ? (
                        <Image src={cheked} alt='checked' />
                      ) : (
                        <Image src={unChecked} alt='un-checked' />
                      )}

                      <span className='text-[14px] font-medium text-[#9e9e9e]'>
                      최근 7일
                      </span>
                    </div>
                    <div
                      className='flex gap-1 justify-center items-center cursor-pointer'
                      onClick={() => {
                        setCheckOne(false);
                        setCheckTwo(false);
                        setCheckThree(false);
                        setCheckFour(true);
                      }}
                    >
                      {checkFour ? (
                        <Image src={cheked} alt='checked' />
                      ) : (
                        <Image src={unChecked} alt='un-checked' />
                      )}

                      <span className='text-[14px] font-medium text-[#9e9e9e]'>
                      최근 1개월
                      </span>
                    </div>
                  </div>
                
                
                </div>
              </div>
              <div className='mx-auto'></div>
            </div>
            <div className='flex h-[30px] items-center gap-6 mt-4'>
              <div className=' flex flex-1 justify-between items-center border-b-[2px] border-gray-400 '>
                <h2 className='text-gray-600 text-sm font-bold '>쿠폰 유형</h2>
                <select className='select select-bordered pb-0 border-0 text-sm text-gray-600'>
                  <option value='' disabled>
                    전체
                  </option>
                  <option value='추천인 코드 등록'>추천인 코드 등록</option>
                  <option value='미션 완료'>미션 완료</option>
                  <option value='미션 완료'>미션 완료</option>
                </select>
              </div>
              <div className='border-b-[2px] flex-1 items-center flex justify-between ml-6 border-gray-400 mt-5'>
                <h2 className='text-gray-600 text-sm font-bold mr-4'>
                  쿠폰 유형
                </h2>
               
                
                <div className='flex justify-center items-center gap-4 pb-2'>
                    <div
                      className='flex gap-1 justify-center items-center cursor-pointer'
                      onClick={() => {
                        setChecCirclekOne(true);
                        setCheckCircleTwo(false);
                        setCheckCircleThree(false);
                        
                      }}
                    >
                      {checkCircleOne ? (
                        <Image src={checkedCircle} alt='checked' />
                      ) : (
                        <Image src={unCheckedCircle} alt='un-checked' />
                      )}

                      <span className='text-[14px] font-medium text-[#9e9e9e]'>
                      전체
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
                        <Image src={checkedCircle} alt='checked' />
                      ) : (
                        <Image src={unCheckedCircle} alt='un-checked' />
                      )}

                      <span className='text-[14px] font-medium text-[#9e9e9e]'>
                      노출
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
                        <Image src={checkedCircle} alt='checked' />
                      ) : (
                        <Image src={unCheckedCircle} alt='un-checked' />
                      )}

                      <span className='text-[14px] font-medium text-[#9e9e9e]'>
                      비노출
                      </span>
                    </div>
                   
                   
                  </div>
              </div>
              <div className='pt-[10.5px]'>

              <div className='border-b-[2px] ml-6 border-gray-400 '>
                <input
                  type='text'
                  placeholder='쿠폰명 검색'
                  className='input focus:border-transparent border-gray-300 bg-gray-50 text-gray-600 h-[35px] w-[380px] mb-1 rounded-none'
                  />
              </div>
                  </div>
            </div>
            <div className='flex items-center justify-center  mt-8  gap-4 space-x-4'>
              <button className='text-white text-center text-lg px-6 py-1 rounded-[4px] bg-button'>
                초기화
              </button>
              <button className='text-white text-center text-lg px-6 py-1 rounded-[4px] bg-button'>
                검색
              </button>
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
