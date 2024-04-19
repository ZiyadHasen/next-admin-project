'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
import Image from 'next/image';
import DateComponent from '../../../../components/Date'; // Changed the import name to avoid conflicts
import Table from '../../../../components/tableUser13';

function Page() {
  return (
    <Sidebar>
      <main className='flex-1 text-white  bg-backG'>
        <div className='mx-4 mt-8'>
          <h1 className='font-bold text-base mb-2 text-black'>
            운영 관리<span className='m-2 '>&gt;</span>관리자 관리
          </h1>

          <div className='h-[134px] pt-2 pb-4 px-6 bg-white '>
            <div className='flex items-center gap-6 mt-2'>
              <div className=' flex flex-1 justify-between items-center border-b-[2px] border-gray-400 '>
                <h2 className='text-gray-600 text-sm font-bold mr-[2rem]'>
                  쿠폰 유형
                </h2>
                <select className='select select-bordered pb-0  border-0 text-sm text-gray-600'>
                  <option disabled selected>
                    전체
                  </option>
                  <option>추천인 코드 등록</option>
                  <option>미션 완료</option>
                  <option>미션 완료</option>
                </select>
              </div>
              <div className='border-b-[2px] flex justify-between items-center flex-1 ml-6 border-gray-400 '>
                <h2 className='text-gray-600 font-bold text-sm'>활성 여부</h2>
                <div className='flex'>
                  <div className='form-control mr-2'>
                    <label className='label cursor-pointer'>
                      <input
                        type='radio'
                        name='lockOption'
                        defaultChecked
                        className='radio mr-4 text-sm'
                      />
                      <span className='label-text text-sm text-gray-600 font-medium'>
                        오늘
                      </span>
                    </label>
                  </div>
                  <div className='form-control  mr-1'>
                    <label className='label cursor-pointer'>
                      <input
                        type='radio'
                        name='lockOption'
                        className='radio text-sm mr-4'
                      />
                      <span className='label-text'> 최근 7일</span>
                    </label>
                  </div>
                  <div className='form-control  mr-1'>
                    <label className='label cursor-pointer'>
                      <input
                        type='radio'
                        name='lockOption'
                        className='radio text-sm mr-4'
                      />
                      <span className='label-text'> 최근 1개월</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className='border-b-[2px] flex-1 ml-6 border-gray-400 '>
                <input
                  type='text'
                  placeholder='계정(이메일), 이름, 연락처 검색'
                  className='input focus:border-transparent border-gray-300 bg-gray-50 text-gray-600 text-sm h-[35px] w-full mb-1 rounded-none'
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
