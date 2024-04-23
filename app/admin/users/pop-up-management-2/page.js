'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
import Image from 'next/image';
import DateComponent from '../../../../components/Date2';
import Table from '../../../../components/tableUser11';
import { useState } from 'react';

import cheked from '../../../../data/images/cheked.svg';
import unCheked from '../../../../data/images/uncheked.svg';

import checkedCircle from '../../../../data/images/checkedCircle.svg';
import unCheckedCircle from '../../../../data/images/circle.svg';

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
      <main className='flex-1 text-white  filter drop-shadow-md shadow-inner- shadow-black/25 bg-backG'>
        <div className='mx-4  mt-8'>
          <h1 className='font-bold text-base mb-2 text-black'>
            운영 관리<span className='m-2 '>&gt;</span>관리자 관리
          </h1>

          <div className='h-[430px]  border-[1px] border-[#9E9E9E] pt-2 pb-4 px-6 mb-[15rem] bg-white '>
            <h1 className='bg-[#EEEEEE] my-4 text-[#616161] text-sm font-bold p-2'>
              기본 정보
            </h1>
            {/* row one*/}
            <div className='flex items-center gap-6 mt-4 h-[30px]'>
              <div className='flex-1 border-b-[1px] border-[#151522]'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    팝업 번호
                  </h2>
                  <div>
                    <input
                      type='text'
                      placeholder='9090988'
                      className='input  focus:outline-none focus:border-0    text-[#616161] text-sm h-[28px]  w-[250px] mb-[1px] rounded-none'
                    />
                  </div>
                </div>
              </div>

              <div className='flex-1 border-b-[1px] border-[#151522]'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>작성자</h2>
                  <div>
                    <input
                      type='text'
                      placeholder='admin@admin.co.kr'
                      className='input  focus:outline-none focus:border-0    text-[#616161] text-sm h-[28px]  w-[250px] mb-[1px] rounded-none'
                    />
                  </div>
                </div>
              </div>
              <div className='flex-1 border-b-[1px] border-[#151522]'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    작성일시
                  </h2>
                  <DateComponent />
                </div>
              </div>
            </div>
            {/* row two */}

            <div className='flex  items-center gap-8  mt-4'>
              <div className='border-b-[2px] flex gap-20 w-2/6   mt-1 items-center pb-[2px]  border-gray-400'>
                <h2 className='text-[#616161] text-sm font-bold '>
                  숨김 여부 *
                </h2>
                <div className='flex items-center gap-4 '>
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
                      숨김
                    </span>
                  </div>
                </div>
              </div>

              <div className='border-b-[2px] w-3/6  items-center flex  gap-16  border-gray-400 '>
                <h2 className='text-gray-600 font-sm font-bold  '>
                  노출 기간 *
                </h2>
                <DateComponent />

                <div className='flex items-center gap-4 '>
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
                      무제한
                    </span>
                  </div>
                </div>
              </div>
              <div className='w-1/6'></div>
            </div>
            <h1 className='bg-[#EEEEEE] my-4 text-[#616161] text-sm font-bold p-2'>
              가이드 내용
            </h1>
            {/* row three */}
            <div className='flex items-center gap-6 mt-4 h-[30px] '>
              <div className='flex flex-1 gap-10 items-center border-b-[1px] border-[#151522]'>
                <h2 className='text-[#616161] text-sm font-bold w-[120px]  '>
                  제목 *
                </h2>

                <input
                  type='text'
                  placeholder='홈 메인 2022 1차 이벤트 배너'
                  className='input  focus:outline-none focus:border-0  text-[#616161] text-sm h-[28px] w-full   mb-[1px] rounded-none'
                />
              </div>
            </div>
            {/* last */}
            <div className='flex items-start gap-8'>
              <div className='flex w-1/2 items-start gap-6  mt-4'>
                <div className=' flex flex-1 items-center border-b-[2px] gap-16  h-[30px] border-gray-500'>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    이미지(mobile) *
                  </h2>
                  <h2 className='text-[#9E9E9E] text-sm font-medium '>
                    (320x470)
                  </h2>
                </div>
                <div className='w-[150px] h-[100px] bg-[#9E9E9E] relative flex items-center justify-center'>
                  <input
                    type='file'
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                    accept='image'
                  />
                  <span className='text-white bg-[#333333] text-sm px-1'>
                    +
                  </span>
                </div>
              </div>

              <div className=' flex-1  '></div>
            </div>
            {/* last row */}
            <div className='border-b-[2px] flex gap-20    mt-1 items-center pb-[2px]  border-gray-400'>
              <h2 className='text-[#616161] text-sm font-bold '>링크 주소 *</h2>
              <div className='flex items-center gap-4 '>
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
                    링크 없음
                  </span>
                </div>
              </div>
              <div className='mr-12'>
                <input
                  type='text'
                  placeholder='www.careview.co.kr/event/001.html'
                  className='input  focus:outline-none focus:border-0  text-[#616161] text-sm h-[28px] w-[252px]   mb-[1px] rounded-none'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center gap-10  shadow-outline py-3  items-center mt-40   bg-white   '>
          <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
            취소
          </button>
          <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
            등록
          </button>
        </div>
        <div className='flex justify-center border-b-[1px] gap-10 pt-2  pb-4 py-3 items-center border-t-[1px] border-[#EEEEEE]   bg-white  '>
          <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
            취소
          </button>
          <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
            저장
          </button>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
