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
      <main className='flex-1 text-white filter drop-shadow-md shadow-inner shadow-black/25 bg-backG'>
        <div className='mx-4 mt-8'>
          <h1 className='font-bold text-base mb-2 text-black'>
            운영 관리<span className='m-2 '>&gt;</span>관리자 관리
          </h1>

          <div className='h-[550px] pt-2 pb-4 px-6 mb-[5rem] bg-white '>
            {/* row one */}
            <h1 className='bg-[#EEEEEE] my-4 text-[#616161] text-sm font-bold p-2'>
              기본 정보
            </h1>
            {/* row two */}
            <div className='flex items-center gap-6 mt-4 h-[30px]:'>
              <div className='flex-1 border-b-[2px] border-gray-300'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    미션 번호
                  </h2>
                  <select className='text-sm text-black mx-4 pl-8 rounded-sm h-[28px] bg-white outline-none border-0'>
                    <option value='option1' className='text-sm'>
                      선택
                    </option>
                    <option value='option2' className='text-sm'>
                      친구 추천
                    </option>
                    <option value='option3' className='text-sm'>
                      추천인 코드 등록
                    </option>
                    <option value='option4' className='text-sm'>
                      미션 완료
                    </option>
                  </select>
                </div>
              </div>
              <div className='border-b-[2px] flex w-1/3 gap-16 items-center ml-6  border-gray-400 '>
                <h2 className='text-[#616161] font-bold text-sm'>
                  default 설정
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
                      미설정
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
                      설정
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex-1'></div>
            </div>

            {/* row three */}
            <div className='flex items-center gap-6 mt-4 h-[30px] '>
              <div className='flex flex-1 gap-10 items-center border-b-[2px] border-gray-400'>
                <h2 className='text-[#616161] text-sm font-bold w-[120px]  '>
                  미션명 *
                </h2>

                <input
                  type='text'
                  placeholder='장바구니 할인 쿠폰'
                  className='input  focus:outline-none focus:border-0  border-gray-200  text-[#616161] text-sm h-[28px] w-full   mb-[1px] rounded-none'
                />
              </div>
            </div>
            {/* row four */}
            <div className='flex items-center gap-6 mt-4 h-[30px] '>
              <div className='flex flex-1 gap-10 items-center border-b-[2px] border-gray-400'>
                <h2 className='text-[#616161] text-sm font-bold w-[120px]  '>
                  미션명 *
                </h2>

                <input
                  type='text'
                  placeholder='추천한 친구가 추천인 코드를 등록하면 내게 발급되는 쿠폰입니다.'
                  className='input  focus:outline-none focus:border-0  border-gray-200  text-[#616161] text-sm h-[28px] w-full   mb-[1px] rounded-none'
                />
              </div>
            </div>

            {/* row five */}

            <div className='flex items-start gap-8'>
              <div className='border-b-[2px] flex  flex-1 justify-between mt-6  border-gray-400 '>
                <h2 className='text-[#616161] font-bold text-sm'>
                  활성 여부 *
                </h2>
                <div className='flex gap-4'>
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
                <div className=''>
                  <input
                    type='text'
                    placeholder=''
                    className='input   focus:outline-none focus:border-0  border-[1px] border-[#E0E0E0] text-[#616161] text-sm h-[28px]  w-[80px] mb-[1px] rounded-none'
                  />
                </div>
              </div>
              {/* row six */}
              <div className='flex items-start gap-6  mt-4'>
                <div className=' flex items-center border-b-[2px] gap-16 mt-4 h-[30px] border-gray-500'>
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
              <div className=' flex-1  '></div>
            </div>
            {/*  row seven */}
            <div className='flex items-center gap-6 mt-4 h-[30px] '>
              <div className='flex gap-10 items-center border-b-[2px] border-gray-400'>
                <h2 className='text-[#616161] text-sm font-bold    '>
                  연결할 쿠폰 ID *
                </h2>

                <input
                  type='text'
                  placeholder='1456015484975135'
                  className='input  focus:outline-none focus:border-0  border-gray-200  text-[#616161] text-sm h-[28px] w-[290px]   mb-[1px] rounded-none'
                />
              </div>
              <div className='flex gap-[16px] h-[28px] px-[10px] rounded-[5px] bg-[#9E9E9E]'>
                <Image src={verify} alt='verify' />
                <button className=' font-bold text-sm'>연결 체크</button>
              </div>
            </div>
            {/* row seven */}
            <h1 className='bg-[#EEEEEE] my-4 text-[#616161] text-sm font-bold p-2'>
              기본 정보
            </h1>
            {/* row 10 */}
            <div className='flex items-center gap-6 mt-4 h-[30px]:'>
              <div className='flex-1 border-b-[2px] border-gray-300'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    미션 번호
                  </h2>
                  <div>
                    <input
                      type='text'
                      placeholder='email_id@domain.co.kr'
                      className='input  focus:outline-none focus:border-0   text-[#616161] text-sm h-[28px]  w-[250px] mb-[1px] rounded-none'
                    />
                  </div>
                </div>
              </div>
              <div className='flex-1 border-b-[2px] border-gray-300'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    미션 번호
                  </h2>
                  <DateComponent />
                </div>
              </div>

              <div className='flex-1'></div>
            </div>
            <div className='flex items-center gap-6 mt-4 h-[30px]:'>
              <div className='flex-1 border-b-[2px] border-gray-300'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    미션 번호
                  </h2>
                  <div>
                    <input
                      type='text'
                      placeholder='email_id@domain.co.kr'
                      className='input  focus:outline-none focus:border-0   text-[#616161] text-sm h-[28px]  w-[250px] mb-[1px] rounded-none'
                    />
                  </div>
                </div>
              </div>
              <div className='flex-1 border-b-[2px] border-gray-300'>
                <div className=' flex flex-1 justify-between items-center  '>
                  <h2 className='text-[#616161] text-sm font-bold '>
                    미션 번호
                  </h2>
                  <DateComponent />
                </div>
              </div>

              <div className='flex-1'></div>
            </div>
          </div>
        </div>

        <div className='flex justify-center gap-10   items-center mt-40   bg-white h-[52px] shadow-inner  '>
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
      </main>
    </Sidebar>
  );
}

export default Page;
