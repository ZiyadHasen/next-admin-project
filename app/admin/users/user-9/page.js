'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
// import svg from '../../images/nike.svg';
import Image from 'next/image';
import Date from '../../../../components/Date2';
import Table from '../../../../components/tableUser9';

import { Select } from 'antd';

function Page() {
  return (
    <Sidebar>
      <main className='flex-1 text-white  bg-backG'>
        <div className='mx-4 mt-8 mb-[2rem]'>
          <section className=' text-white mb-10   bg-backG'>
            <div className=' mt-8'>
              <h1 className='font-bold text-base mb-2 text-black'>
                운영 관리<span className='m-2 '>&gt;</span>관리자 관리
              </h1>
              {/* section one */}
              <div className='h-[214px] border-[1px] border-gray-500 px-6 py-2 bg-white '>
                <h1 className='bg-[#EEEEEE] my-4 text-gray-600 text-sm font-bold p-2'>
                  기본 정보
                </h1>
                {/* first row  */}
                <div className='flex mt-3 gap-8 h-[30px]'>
                  <div className='flex-1  flex items-center justify-between border-b-[2px] border-gray-500 '>
                    <div className='text-gray-600 text-sm  font-bold mr-4 '>
                      모델명
                    </div>
                    <div className='ml-6'>
                      <input
                        type='text'
                        placeholder='RENEVV 9.5'
                        className='input focus:border-transparent px-2  focus:border-0 focus:outline-none text-gray-700 h-[28px] w-[230px] mb-1 rounded-none'
                      />
                    </div>
                  </div>

                  <div className='flex-1  flex items-center justify-between border-b-[2px] border-gray-500 '>
                    <div className='text-gray-600 text-sm  font-bold mr-4 '>
                      제품 번호
                    </div>
                    <div className='ml-6'>
                      <input
                        type='text'
                        placeholder='94C96039A781'
                        className='input focus:border-transparent px-2  focus:outline-none focus:border-0 text-gray-600 h-[28px] w-[230px] mb-1 rounded-none'
                      />
                    </div>
                  </div>
                  <div className='flex-1  flex items-center justify-between border-b-[2px] border-gray-500 '>
                    <div className='text-gray-600 text-sm  font-bold mr-4 '>
                      최초 등록 일시
                    </div>
                    <div className='ml-6'>
                      <Date />
                    </div>
                  </div>
                </div>

                {/* second row */}
                <div className='flex mt-3 gap-8 h-[30px]'>
                  <div className='flex-1  flex items-center justify-between border-b-[2px] border-gray-500 '>
                    <div className='text-gray-600 text-sm  font-bold mr-4 '>
                      시리얼 넘버
                    </div>
                    <div className='ml-6'>
                      <input
                        type='text'
                        placeholder='2024030200198'
                        className='input focus:border-transparent px-2  focus:border-0 focus:outline-none text-gray-700 h-[28px] w-[230px] mb-1 rounded-none'
                      />
                    </div>
                  </div>

                  <div className='flex-1  flex items-center justify-between border-b-[2px] border-gray-500 '>
                    <div className='text-gray-600 text-sm  font-bold mr-4 '>
                      주계정
                    </div>
                    <div className='ml-6'>
                      <input
                        type='text'
                        placeholder='name@domain.co.kr'
                        className='input focus:border-transparent px-2  focus:border-0 focus:outline-none text-gray-600 h-[28px] w-[230px] mb-1 rounded-none'
                      />
                    </div>
                  </div>
                  <div className='flex-1  flex items-center justify-between border-b-[2px] border-gray-500 '>
                    <div className='text-gray-600 text-sm  font-bold mr-4 '>
                      주계정 등록 일시
                    </div>
                    <div className='ml-6'>
                      <Date />
                    </div>
                  </div>
                </div>

                {/* third row */}
                <div className='flex mt-3 gap-8 h-[30px]'>
                  <div className='flex-1 '></div>

                  <div className='flex-1  flex items-center justify-between border-b-[4px] border-gray-300 '>
                    <div className='text-gray-600 text-sm  font-bold mr-4 '>
                      부계정
                    </div>
                    <div className='ml-6'>
                      <input
                        type='text'
                        placeholder='94C96039A781'
                        className='input focus:border-transparent px-2  focus:border-0 focus:outline-none text-gray-600 h-[28px] w-[230px] mb-1 rounded-none'
                      />
                    </div>
                  </div>
                  <div className='flex-1  flex items-center justify-between border-b-[4px] border-gray-300 '>
                    <div className='text-gray-600 text-sm  font-bold mr-4 '>
                      부계정 등록 일시
                    </div>
                    <div className='ml-6'>
                      <Date />
                    </div>
                  </div>
                </div>

                {/* fourth */}
              </div>
            </div>
          </section>

          {/* 2nd section */}
          <div className='px-4 py-2 bg-white border-[1px] border-gray-500 '>
            <h1 className='bg-[#EEEEEE] my-4 text-gray-600 text-sm font-bold p-2'>
              기본 정보
            </h1>
            {/* first row  */}
            <div className='flex mt-3 gap-8 h-[30px]'>
              <div className='flex-1  flex items-center justify-between border-b-[2px] border-gray-400 '>
                <h1 className='text-gray-600 text-sm mb-2 font-bold mr-2 '>
                  미션 시작 일시
                </h1>
                <Date />
              </div>

              <div className='flex-1  flex items-center justify-between border-b-[2px] border-gray-400 '>
                <h1 className='text-gray-600 text-sm  font-bold mr-4 '>
                  미션 완수 점수
                </h1>
                <div className='ml-6'>
                  <input
                    type='text'
                    placeholder='10000'
                    className='input focus:border-transparent px-2  focus:border-0 focus:outline-none text-gray-400 h-[28px] w-[230px] mb-1 rounded-none'
                  />
                </div>
              </div>
              <div className='flex-1  flex items-center justify-between border-b-[2px] border-gray-400 '>
                <div className='text-gray-600 text-sm  font-bold mr-4 '>
                  진행율
                </div>
                <div className='ml-6'>
                  <input
                    type='text'
                    placeholder='2.1%'
                    className='input focus:border-transparent px-2  focus:border-0 focus:outline-none text-gray-400 h-[28px] w-[230px] mb-1 rounded-none'
                  />
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <Table />
            </div>
          </div>
        </div>
        <div className='flex justify-center  py-6 items-center mt-[2rem]  bg-white h-[52px] shadow-inner  border-t-[2px] border-gray-400'>
          <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
            확인
          </button>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
