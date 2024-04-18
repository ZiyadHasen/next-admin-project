'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
// import svg from '../../images/nike.svg';
import Image from 'next/image';
import Date from '../../../../components/Date';
import Table from '../../../../components/tableUser8';

import { Select } from 'antd';

function Page() {
  return (
    <Sidebar>
      <main className='flex-1 text-white  bg-backG'>
        <div className='mx-4 mt-8 mb-[2rem]'>
          <h1 className='font-bold text-base mb-2 text-black'>
            운영 관리<span className='m-2 '>&gt;</span>관리자 관리
          </h1>
          <div className='h-[170px] pt-6 pb-4 px-6 bg-white '>
            <div className='flex'>
              <div className='border-b-[2px] flex gap-[2rem] items-center border-gray-400 '>
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
              <div className='mx-auto'></div>
            </div>
            <div className='flex items-center gap-6 mt-4'>
              <div className=' flex justify-between items-center w-[25rem] border-b-[2px] border-gray-400 '>
                <div className='text-gray-600  font-lg font-bold mr-[2rem]'>
                  잠금 여부
                </div>
                <select className='select select-bordered  border-0 text-gray-600'>
                  <option disabled selected>
                    Normal
                  </option>
                  <option>Normal Apple</option>
                  <option>Normal Orange</option>
                  <option>Normal Tomato</option>
                </select>
              </div>
              <div className='border-b-[2px] ml-6 border-gray-400 '>
                <input
                  type='text'
                  placeholder='계정(이메일), 이름, 연락처 검색'
                  className='input focus:border-transparent border-gray-300 bg-gray-50 text-gray-600 h-[35px] w-[25rem] mb-1 rounded-none'
                />
              </div>
              <div className='flex items-center justify-center ml-auto mt-2 mb-4 gap-4 space-x-4'>
                <button className='text-white text-center text-lg px-6 py-1 rounded-[4px] bg-button'>
                  초기화
                </button>
                <button className='text-white text-center text-lg px-6 py-1 rounded-[4px] bg-button'>
                  검색
                </button>
              </div>
            </div>
          </div>
          {/* 2nd section */}
          <section className='flex justify-between px-4 mt-[4rem] pb-2  border-b-[2px] border-gray-400'>
            <h1 className='font-bold text-base  text-black'>
              운영 관리<span className='m-2 '>&gt;</span>관리자 관리
            </h1>

            <select className='text-sm text-black mx-4 pl-8 pr-2 rounded-sm h-[28px] bg-white focus:border-none hover:border-none'>
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
