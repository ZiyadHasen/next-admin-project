'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
import Image from 'next/image';
import DateComponent from '../../../../components/Date2'; // Changed the import name to avoid conflicts
import Table from '../../../../components/tableUser11';
import { useState } from 'react';
import cheked from '../../../../data/images/cheked.svg';
import unCheked from '../../../../data/images/uncheked.svg';

import checkedCircle from '../../../../data/images/checkedCircle.svg';
import unCheckedCircle from '../../../../data/images/circle.svg';

function Page() {
  const [checkOne1, setCheckOne1] = useState(true);
  const [checkOne2, setCheckOne2] = useState(false);
  // row one
  const [checkTwo1, setCheckTwo1] = useState(true);
  const [checkTwo2, setCheckTwo2] = useState(false);
  // second
  const [checkTwo3, setCheckTwo3] = useState(true);
  const [checkTwo4, setCheckTwo4] = useState(false);
  const [checkTwo5, setCheckTwo5] = useState(false);

  // row two
  const [checkThree1, setCheckThree1] = useState(true);
  const [checkThree2, setCheckThree2] = useState(false);
  // second
  const [checkThree3, setCheckThree3] = useState(true);
  const [checkThree4, setCheckThree4] = useState(false);
  const [checkThree5, setCheckThree5] = useState(false);
  // row one
  const [checkFour1, setCheckFour1] = useState(true);
  const [checkFour2, setCheckFour2] = useState(false);
  // second
  const [checkFour3, setCheckFour3] = useState(true);
  const [checkFour4, setCheckFour4] = useState(false);
  const [checkFour5, setCheckFour5] = useState(false);

  // row one
  const [checkFive1, setCheckFive1] = useState(true);
  const [checkFive2, setCheckFive2] = useState(false);
  // second
  const [checkFive3, setCheckFive3] = useState(true);
  const [checkFive4, setCheckFive4] = useState(false);
  const [checkFive5, setCheckFive5] = useState(false);

  return (
    <Sidebar>
      <main className='flex-1 text-white  bg-backG'>
        <div className='mx-4 mt-8'>
          <h1 className='font-bold text-base mb-2 text-black'>
            운영 관리<span className='m-2 '>&gt;</span>관리자 관리
          </h1>

          <div className='h-[714px] pt-2 pb-4 px-6 mb-10 bg-white '>
            {/* row one */}
            <h1 className='bg-[#EEEEEE] my-4 text-[#616161] text-sm font-bold p-2'>
              기본 정보
            </h1>
            {/* row two */}
            <div className='flex items-center gap-6 mt-2 h-[30px]:'>
              <div className='flex-1 border-b-[2px] border-gray-300'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    미션 번호
                  </h2>
                  <div>
                    <input
                      type='text'
                      placeholder='00001'
                      className='input  focus:outline-none focus:border-0   text-[#616161] text-sm h-[28px]  w-[250px] mb-[1px] rounded-none'
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
                <h2 className='text-[#616161] text-sm font-bold w-[120px]  '>
                  미션명 *
                </h2>

                <input
                  type='text'
                  placeholder='RENEVV 9.5 쿠폰 만들기 미션'
                  className='input  focus:outline-none focus:border-0  border-gray-200  text-[#616161] text-sm h-[28px] w-full   mb-[1px] rounded-none'
                />
              </div>

              <div className='border-b-[2px] flex w-1/3 gap-16 items-center ml-6  border-gray-400 '>
                <h2 className='text-[#616161] font-bold text-sm'>
                  활성 여부 *
                </h2>
                <div className='flex gap-5'>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckOne1(true);
                      setCheckOne2(false);
                    }}
                  >
                    {checkOne1 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      비활성
                    </span>
                  </div>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckOne1(false);
                      setCheckOne2(true);
                    }}
                  >
                    {checkOne2 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      활성
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* row four */}

            <div className='flex items-center gap-6 mt-4'>
              <div className='flex-1 border-b-[2px] border-gray-500'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    미션 점수 *
                  </h2>
                  <div>
                    <input
                      type='text'
                      placeholder='10,000'
                      className='input  focus:outline-none focus:border-0  border-[1px] border-[#E0E0E0] text-[#616161] text-sm h-[28px]  w-[250px] mb-[1px] rounded-none'
                    />
                  </div>
                </div>
              </div>
              <div className=' flex flex-1 justify-between items-center border-b-[2px] border-gray-400 '>
                <h2 className='text-[#616161] text-sm font-bold mr-[2rem]'>
                  모델 유형 *
                </h2>
                <select className='text-sm text-black mx-4 pl-8 rounded-sm h-[28px] bg-white outline-none border-0'>
                  <option value='option1' className='text-sm'>
                    RENEVV 9.5
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

              <div className=' flex-1  '></div>
            </div>

            {/* row five */}
            <div className='flex items-center gap-6 mt-4'>
              <div className='border-b-[2px] flex  flex-1 gap-16 items-center  border-gray-400 '>
                <h2 className='text-[#616161] font-bold text-sm'>
                  활성 여부 *
                </h2>
                <div className='flex gap-5'>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckTwo1(true);
                      setCheckTwo2(false);
                    }}
                  >
                    {checkTwo1 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      비활성
                    </span>
                  </div>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckTwo1(false);
                      setCheckTwo2(true);
                    }}
                  >
                    {checkTwo2 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      활성
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 gap-4 '>
                <div className=' flex flex-1 border-b-[2px] border-gray-400 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>횟수 *</h2>
                  <input
                    type='text'
                    placeholder=''
                    className='input  focus:outline-none focus:border-0  border-[1px] border-[#E0E0E0] text-[#616161] text-sm h-[28px]  w-[45px] mb-[1px] rounded-none'
                  />
                </div>
                <div className=' flex flex-1 border-b-[2px] border-gray-400 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>횟수 *</h2>
                  <input
                    type='text'
                    placeholder=''
                    className='input  focus:outline-none focus:border-0  border-[1px] border-[#E0E0E0] text-[#616161] text-sm h-[28px]  w-[45px] mb-[1px] rounded-none'
                  />
                </div>
              </div>
              <div className='border-b-[2px] flex flex-1 gap-16 items-center  border-gray-400 '>
                <h2 className='text-[#616161] font-bold text-sm'>
                  활성 여부 *
                </h2>
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
                      비활성
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
                      활성
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* row six */}
            <div className='flex items-center gap-6 mt-4'>
              <div className='border-b-[2px] flex  flex-1 gap-16 items-center  border-gray-400 '>
                <h2 className='text-[#616161] font-bold text-sm'>
                  활성 여부 *
                </h2>
                <div className='flex gap-5'>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckThree1(true);
                      setCheckThree2(false);
                    }}
                  >
                    {checkThree1 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      비활성
                    </span>
                  </div>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckThree1(false);
                      setCheckThree2(true);
                    }}
                  >
                    {checkThree2 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      활성
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 gap-4 '>
                <div className=' flex flex-1 border-b-[2px] border-gray-400 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>횟수 *</h2>
                  <input
                    type='text'
                    placeholder=''
                    className='input  focus:outline-none focus:border-0  border-[1px] border-[#E0E0E0] text-[#616161] text-sm h-[28px]  w-[45px] mb-[1px] rounded-none'
                  />
                </div>
                <div className=' flex flex-1 border-b-[2px] border-gray-400 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>횟수 *</h2>
                  <input
                    type='text'
                    placeholder=''
                    className='input  focus:outline-none focus:border-0  border-[1px] border-[#E0E0E0] text-[#616161] text-sm h-[28px]  w-[45px] mb-[1px] rounded-none'
                  />
                </div>
              </div>
              <div className='border-b-[2px] flex flex-1 gap-16 items-center  border-gray-400 '>
                <h2 className='text-[#616161] font-bold text-sm'>
                  활성 여부 *
                </h2>
                <div className='flex gap-5'>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckThree3(true);
                      setCheckThree4(false);
                      setCheckThree5(false);
                    }}
                  >
                    {checkThree3 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      비활성
                    </span>
                  </div>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckThree3(false);
                      setCheckThree4(true);
                      setCheckThree5(false);
                    }}
                  >
                    {checkThree4 ? (
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
                      setCheckThree3(false);
                      setCheckThree4(false);
                      setCheckThree5(true);
                    }}
                  >
                    {checkThree5 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      활성
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* row seven */}
            <div className='flex items-center gap-6 mt-4'>
              <div className='border-b-[2px] flex  flex-1 gap-16 items-center  border-gray-400 '>
                <h2 className='text-[#616161] font-bold text-sm'>
                  활성 여부 *
                </h2>
                <div className='flex gap-5'>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckFour1(true);
                      setCheckFour2(false);
                    }}
                  >
                    {checkFour1 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      비활성
                    </span>
                  </div>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckFour1(false);
                      setCheckFour2(true);
                    }}
                  >
                    {checkFour2 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      활성
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 gap-4 '>
                <div className=' flex flex-1 border-b-[2px] border-gray-400 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>횟수 *</h2>
                  <input
                    type='text'
                    placeholder=''
                    className='input  focus:outline-none focus:border-0  border-[1px] border-[#E0E0E0] text-[#616161] text-sm h-[28px]  w-[45px] mb-[1px] rounded-none'
                  />
                </div>
                <div className=' flex flex-1 border-b-[2px] border-gray-400 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>횟수 *</h2>
                  <input
                    type='text'
                    placeholder=''
                    className='input  focus:outline-none focus:border-0  border-[1px] border-[#E0E0E0] text-[#616161] text-sm h-[28px]  w-[45px] mb-[1px] rounded-none'
                  />
                </div>
              </div>
              <div className='border-b-[2px] flex flex-1 gap-16 items-center  border-gray-400 '>
                <h2 className='text-[#616161] font-bold text-sm'>
                  활성 여부 *
                </h2>
                <div className='flex gap-5'>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckFour3(true);
                      setCheckFour4(false);
                      setCheckFour5(false);
                    }}
                  >
                    {checkFour3 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      비활성
                    </span>
                  </div>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckFour3(false);
                      setCheckFour4(true);
                      setCheckFour5(false);
                    }}
                  >
                    {checkFour4 ? (
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
                      setCheckFour3(false);
                      setCheckFour4(false);
                      setCheckFour5(true);
                    }}
                  >
                    {checkFour5 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      활성
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* row eight */}
            <div className='flex items-center gap-6 mt-4'>
              <div className='border-b-[2px] flex  flex-1 gap-16 items-center  border-gray-400 '>
                <h2 className='text-[#616161] font-bold text-sm'>
                  활성 여부 *
                </h2>
                <div className='flex gap-5'>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckFive1(true);
                      setCheckFive2(false);
                    }}
                  >
                    {checkFive1 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      비활성
                    </span>
                  </div>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckFive1(false);
                      setCheckFive2(true);
                    }}
                  >
                    {checkFive2 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      활성
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex flex-1 gap-4 '>
                <div className=' flex flex-1 border-b-[2px] border-gray-400 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>횟수 *</h2>
                  <input
                    type='text'
                    placeholder=''
                    className='input  focus:outline-none focus:border-0  border-[1px] border-[#E0E0E0] text-[#616161] text-sm h-[28px]  w-[45px] mb-[1px] rounded-none'
                  />
                </div>
                <div className=' flex flex-1 border-b-[2px] border-gray-400 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>횟수 *</h2>
                  <input
                    type='text'
                    placeholder=''
                    className='input  focus:outline-none focus:border-0  border-[1px] border-[#E0E0E0] text-[#616161] text-sm h-[28px]  w-[45px] mb-[1px] rounded-none'
                  />
                </div>
              </div>
              <div className='border-b-[2px] flex flex-1 gap-16 items-center  border-gray-400 '>
                <h2 className='text-[#616161] font-bold text-sm'>
                  활성 여부 *
                </h2>
                <div className='flex gap-5'>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckFive3(true);
                      setCheckFive4(false);
                      setCheckFive5(false);
                    }}
                  >
                    {checkFive3 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      비활성
                    </span>
                  </div>
                  <div
                    className='flex gap-1 justify-center items-center cursor-pointer'
                    onClick={() => {
                      setCheckFive3(false);
                      setCheckFive4(true);
                      setCheckFive5(false);
                    }}
                  >
                    {checkFive4 ? (
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
                      setCheckFive3(false);
                      setCheckFive4(false);
                      setCheckFive5(true);
                    }}
                  >
                    {checkFive5 ? (
                      <Image src={checkedCircle} alt='checked' />
                    ) : (
                      <Image src={unCheckedCircle} alt='un-checked' />
                    )}

                    <span className='tetx-[14px] font-medium text-[#9e9e9e]'>
                      활성
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* row nine */}
            <h1 className='bg-[#EEEEEE] my-4 text-[#616161] text-sm font-bold p-2'>
              기본 정보
            </h1>
            {/* row 10 */}
            <div className='flex items-center gap-6 mt-2 h-[30px] '>
              <div className='flex w-2/3 justify-between items-center border-b-[2px] border-gray-400'>
                <h2 className='text-[#616161] text-sm font-bold w-[120px]  '>
                  쿠폰 선택 *
                </h2>
                <select className='text-sm text-black mx-4 pl-8 rounded-sm h-[28px] bg-white outline-none border-0'>
                  <option value='option1' className='text-sm text-[#616161] '>
                    (미션완료) 장바구니 할인 쿠폰 (10,000원)
                  </option>
                  <option value='option2' className=' text-sm text-[#616161] '>
                    (미션 완료) 장바구니 할인 쿠폰 (5,000원)
                  </option>
                  <option value='option3' className=' text-sm text-[#616161] '>
                    (미션 완료) 장바구니 할인 쿠폰 (10,000원)
                  </option>
                  <option value='option4' className='text-sm text-[#616161] '>
                    (미션 완료) 장바구니 할인 쿠폰 (15,000원)
                  </option>
                </select>
              </div>

              <div className='flex w-1/3  border-gray-400 '></div>
            </div>
            {/* row-11 */}
            <div className='flex items-start gap-6  mt-4'>
              <div className=' flex items-center border-b-[2px] gap-16 mt-2 h-[30px] border-gray-500'>
                <h2 className='text-[#616161] text-sm font-bold '>
                  미션 이미지*
                </h2>
                <h2 className='text-[#9E9E9E] text-sm font-medium '>
                  (320x470)
                </h2>
              </div>
              <div class='w-[150px] h-[100px] bg-[#9E9E9E] relative flex items-center justify-center'>
                <input
                  type='file'
                  class='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                  accept='image'
                />
                <span class='text-white bg-[#333333] text-sm px-1'>+</span>
              </div>
            </div>
            {/* row 12 */}
            <h1 className='bg-[#EEEEEE] my-4 text-[#616161] text-sm font-bold p-2'>
              기본 정보
            </h1>
            {/* row 13 */}
            <div className='flex items-center gap-6 mt-2 h-[30px]:'>
              <div className='flex-1 border-b-[2px] border-gray-300'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    등록일시
                  </h2>
                  <DateComponent />
                </div>
              </div>
              <div className='flex-1 border-b-[2px] border-gray-300'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    활성일시
                  </h2>
                  <DateComponent />
                </div>
              </div>
              <div className='flex-1'></div>
            </div>
          </div>
        </div>
        {/* <div className='flex justify-center  items-center mt-[3rem]  bg-white h-[52px] shadow-inner  border-t-[2px] border-gray-400'> */}
        <div className='flex justify-center gap-10   items-center   bg-white h-[52px] shadow-inner  '>
          <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
            취소
          </button>
          <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
            등록
          </button>
        </div>
        <div className='flex justify-center border-b-[1px] gap-10  items-center   bg-white h-[52px] '>
          <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
            취소
          </button>
          <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
            저장
          </button>
        </div>
        <div className='flex justify-center gap-10    items-center   bg-white h-[52px] '>
          <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
            확인
          </button>
        </div>

        {/* </div> */}
      </main>
    </Sidebar>
  );
}

export default Page;
