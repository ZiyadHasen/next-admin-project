'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
// import svg from '../../images/nike.svg';
import Image from 'next/image';
import DateComponent from '../../../../components/Date';
import Table from '../../../../components/tableUser20';

import { Select } from 'antd';

function Page() {
  return (
    <Sidebar>
      <main className='flex-1 text-white  bg-backG'>
        <div className='mx-4 mt-8'>
          <h1 className='font-bold text-base mb-2 text-black'>요청일</h1>

          <div className='h-[170px] pt-6 pb-4 px-6 bg-white '>
            <div className='flex justify-between items-center'>
              <div className='border-b-[2px] flex  gap-[1rem] items-center border-gray-400 '>
                <h2 className='text-gray-600 font-lg font-bold mr-[3rem] '>
                  등록 기간
                </h2>
                <DateComponent />
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
              <div className='border-b-[2px]  flex justify-between items-center border-gray-400'>
                <h1 className='font-bold text-base  mr-8 text-gray-600'>
                  노출 여부 *
                </h1>
                <div className='form-control inline-block '>
                  <label className='label cursor-pointer'>
                    <input
                      type='radio'
                      name='dateOption'
                      defaultChecked
                      className='radio mr-2'
                    />
                    <span className='label-text text-sm text-gray-600 font-medium'>
                      오늘
                    </span>
                  </label>
                </div>
                <div className='form-control inline-block '>
                  <label className='label cursor-pointer'>
                    <input
                      type='radio'
                      name='dateOption'
                      className='radio mr-2'
                    />
                    <span className='label-text'> 최근 7일</span>
                  </label>
                </div>
                <div className='form-control inline-block '>
                  <label className='label cursor-pointer'>
                    <input
                      type='radio'
                      name='dateOption'
                      className='radio mr-2'
                    />
                    <span className='label-text'> 최근 1개월</span>
                  </label>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-6 mt-4'>
              <div className=' flex flex-1 justify-between items-center border-b-[2px] border-gray-400 '>
                <h2 className='text-gray-600 text-sm font-bold '>쿠폰 유형</h2>
                <select className='select select-bordered pb-0  border-0 text-sm text-gray-600'>
                  <option disabled selected>
                    전체
                  </option>
                  <option>추천인 코드 등록</option>
                  <option>미션 완료</option>
                  <option>미션 완료</option>
                </select>
              </div>
              <div className='border-b-[2px] ml-6 border-gray-400 '>
                <input
                  type='text'
                  placeholder='쿠폰명 검색'
                  className='input focus:border-transparent border-gray-300 bg-gray-50 text-gray-600 h-[35px] w-[350px] mb-1 rounded-none'
                />
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
            엑셀파일 다운로드
          </button>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
