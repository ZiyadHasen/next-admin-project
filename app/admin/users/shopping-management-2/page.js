'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
import Image from 'next/image';
import DateComponent from '../../../../components/Date2'; // Changed the import name to avoid conflicts
import Table from '../../../../components/tableUser11';
import { useState } from 'react';
import cheked from '../../../../data/images/cheked.svg';
import verify from '../../../../data/images/verify.svg';

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
      <main className='flex-1 text-white  filter drop-shadow-md shadow-inner- shadow-black/25 bg-backG'>
        <div className='mx-4  mt-8'>
          <h1 className='font-bold text-base mb-2 text-black'>
            운영 관리<span className='m-2 '>&gt;</span>관리자 관리
          </h1>

          <div className='h-[540px]  border-[1px] border-[#9E9E9E] pt-2 pb-4 px-6 mb-[15rem] bg-white '>
            <h1 className='bg-[#EEEEEE] my-4 text-[#616161] text-sm font-bold p-2'>
              기본 정보
            </h1>
            {/* row one*/}
            <div className='flex items-center gap-6 mt-4 h-[30px]'>
              <div className=' flex flex-1  border-b-[1px] border-[#151522] justify-between items-center  '>
                <h2 className='text-[#616161] text-sm font-bold '>모델명</h2>
                <select className='text-sm text-black mx-4 pl-8 rounded-sm h-[28px] bg-white outline-none border-0'>
                  <option value='option1' className='text-sm'>
                    공통
                  </option>
                  <option value='option2' className='text-sm'>
                    RENEVV 9.5
                  </option>
                  <option value='option3' className='text-sm'>
                    RENEVV 9.5
                  </option>
                  <option value='option3' className='text-sm'>
                    RENEVV 10
                  </option>
                </select>
              </div>
              <div className='flex-1 border-b-[1px] border-[#151522]'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    노출 순서
                  </h2>
                  <div>
                    <input
                      type='text'
                      placeholder='1'
                      className='input  focus:outline-none focus:border-0 border-[#E0E0E0]   text-[#616161] text-sm h-[28px]  w-[250px] mb-[1px] rounded-none'
                    />
                  </div>
                </div>
              </div>
              <div className='border-b-[1px] flex flex-1 gap-16 items-center   border-[#151522] '>
                <h2 className='text-[#616161] font-bold text-sm'>
                  노출 여부 *
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
                      노출
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
                      비노출
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* row two */}

            <div className='flex items-center gap-6 mt-4 h-[30px]:'>
              <div className='flex-1 border-b-[1px] border-[#151522]'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>작성자</h2>
                  <div>
                    <input
                      type='text'
                      placeholder='홍길동'
                      className='input  focus:outline-none focus:border-0   text-[#616161] text-sm h-[28px]  w-[250px] mb-[1px] rounded-none'
                    />
                  </div>
                </div>
              </div>
              <div className='flex-1 border-b-[1px] border-[#151522]'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    최종 등록일시
                  </h2>
                  <DateComponent />
                </div>
              </div>

              <div className='flex-1'></div>
            </div>
            <h1 className='bg-[#EEEEEE] my-4 text-[#616161] text-sm font-bold p-2'>
              가이드 내용
            </h1>
            {/* row three */}
            <div className='flex items-center gap-6 mt-4 h-[30px] '>
              <div className='flex flex-1 gap-10 items-center border-b-[1px] border-[#151522]'>
                <h2 className='text-[#616161] text-sm font-bold w-[120px]  '>
                  상품명 *
                </h2>

                <input
                  type='text'
                  placeholder='RENEVV 활성탄 필터 세트(3ea)'
                  className='input  focus:outline-none focus:border-0  border-gray-200  text-[#616161] text-sm h-[28px] w-full   mb-[1px] rounded-none'
                />
              </div>
            </div>
            {/* row four */}
            <div className='flex items-center gap-6 mt-4 h-[30px] '>
              <div className='flex flex-1 gap-10 items-center border-b-[1px] border-[#151522]'>
                <h2 className='text-[#616161] text-sm font-bold w-[120px]  '>
                  설명
                </h2>

                <input
                  type='text'
                  placeholder='건조 음식물 처리기의 필터 3개 세트'
                  className='input  focus:outline-none focus:border-0  border-gray-200  text-[#616161] text-sm h-[28px] w-full   mb-[1px] rounded-none'
                />
              </div>
            </div>
            {/* row five */}
            <div className='flex items-center gap-6 mt-4 h-[30px]'>
              <div className='flex-1 border-b-[1px] border-[#151522]'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>할인가</h2>
                  <div>
                    <input
                      type='text'
                      placeholder='45,000'
                      className='input  focus:outline-none focus:border-0 border-[#E0E0E0]   text-[#616161] text-sm h-[28px]  w-[250px] mb-[1px] rounded-none'
                    />
                  </div>
                </div>
              </div>
              <div className='flex-1 border-b-[1px] border-[#151522]'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>원가 *</h2>
                  <div>
                    <input
                      type='text'
                      placeholder='84,000'
                      className='input  focus:outline-none focus:border-0 border-[#E0E0E0]   text-[#616161] text-sm h-[28px]  w-[250px] mb-[1px] rounded-none'
                    />
                  </div>
                </div>
              </div>
              <div className='flex-1 border-b-[1px] border-[#151522]'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>할인율</h2>
                  <div>
                    <input
                      type='45%'
                      placeholder='1'
                      className='input  focus:outline-none focus:border-0 border-[#E0E0E0]   text-[#616161] text-sm h-[28px]  w-[250px] mb-[1px] rounded-none'
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* row six */}
            <div className='flex items-center gap-6 mt-4 h-[30px] '>
              <div className='flex flex-1 gap-10 items-center border-b-[1px] border-[#151522]'>
                <h2 className='text-[#616161] text-sm font-bold w-[120px]  '>
                  링크 주소 *
                </h2>

                <input
                  type='text'
                  placeholder='https://mayton.kr/LIVING/?idx=953'
                  className='input  focus:outline-none focus:border-0  border-gray-200  text-[#616161] text-sm h-[28px] w-full   mb-[1px] rounded-none'
                />
              </div>
            </div>

            {/* row seven */}
            <div className='flex items-start gap-8'>
              <div className='flex w-1/2 items-start gap-6  mt-4'>
                <div className=' flex flex-1 items-center border-b-[2px] gap-16  h-[30px] border-gray-500'>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    썸네일 *
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
        <div className='flex justify-center border-b-[1px] gap-10 pt-2   py-3items-center border-t-[1px] border-[#9E9E9E]   bg-white  '>
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
