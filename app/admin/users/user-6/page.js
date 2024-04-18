'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
// import svg from '../../images/nike.svg';
import Image from 'next/image';
import Date from '../../../../components/Date';
import Table from '../../../../components/tableUser6';

import { Select } from 'antd';

function Page() {
  return (
    <Sidebar>
      <main className='flex-1 text-white  bg-backG'>
        <div className='mx-4 mt-8 mb-[2rem]'>
          <h1 className='font-bold text-base mb-2 text-black'>
            운영 관리<span className='m-2 '>&gt;</span>관리자 관리
          </h1>

          <div className='h-[124px] pt-4 pb-4 px-6 bg-white '>
            <div className='flex items-center'>
              <div className='border-b-[2px] flex-1 flex gap-[1rem] items-center border-gray-400 '>
                <h2 className='text-gray-600 font-lg font-bold mr-[4rem] '>
                  등록 기간
                </h2>
                <Date />
                <div>
                  <div className='form-control inline-block mr-2'>
                    <label className='label cursor-pointer'>
                      <input
                        type='radio'
                        name='dateOption'
                        defaultChecked
                        className='radio mr-4'
                      />
                      <span className='label-text text-sm text-gray-600 font-medium'>
                        오늘
                      </span>
                    </label>
                  </div>
                  <div className='form-control inline-block mr-2'>
                    <label className='label cursor-pointer'>
                      <input
                        type='radio'
                        name='dateOption'
                        className='radio mr-4'
                      />
                      <span className='label-text'> 최근 7일</span>
                    </label>
                  </div>
                  <div className='form-control inline-block mr-2'>
                    <label className='label cursor-pointer'>
                      <input
                        type='radio'
                        name='dateOption'
                        className='radio mr-4'
                      />
                      <span className='label-text'> 최근 1개월</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className='border-b-[2px] mt-2 pb-1 ml-6 border-gray-400 '>
                <input
                  type='text'
                  placeholder='계정(이메일), 이름, 연락처 검색'
                  className='input focus:border-transparent border-gray-300 bg-gray-50 text-gray-600 h-[28px] w-[320px]  rounded-none'
                />
              </div>
              {/* <div className='mx-auto'></div> */}
            </div>
            <div className='flex justify-center mt-4 '>
              <button className='text-white text-center text-sm font-bold px-8 py-1 rounded-[4px] bg-button mr-4'>
                초기화
              </button>
              <button className='text-white text-center text-sm font-bold px-8 py-1 rounded-[4px] bg-button'>
                검색
              </button>
            </div>
          </div>
          {/* 2nd section */}
          <section className='flex justify-between px-4 mt-[4rem] pb-2  border-b-[2px] border-gray-400'>
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
          </section>
          <div className='h-[554px]'>
            <Table />
          </div>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
