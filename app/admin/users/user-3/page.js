'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
import Image from 'next/image';
import Date from '../../../../components/Date';
import Table from '../../../../components/tableUser1';

function Page() {
  return (
    <Sidebar>
      <main className='flex-1 flex flex-col justify-between  text-white  bg-backG'>
        <div className=' text-white   bg-backG'>
          <div className='mx-4 mt-8'>
            <h1 className='font-bold text-base mb-2 text-black'>
              운영 관리<span className='m-2 '>&gt;</span>관리자 관리
            </h1>

            <div className='h-[306px] px-6 py-2 bg-white '>
              <h1 className='bg-zinc-200 my-4 text-gray-600 text-sm font-bold p-2'>
                기본 정보
              </h1>
              {/* first row  */}
              <div className='flex mt-5 gap-8 h-[30px]'>
                <div className='flex-1 flex items-center pb-3 justify-between border-b-[2px] border-gray-400 '>
                  <div className='text-gray-600 text-sm  font-bold mr-4'>
                    관리자 번호
                  </div>
                  <div className='ml-6'>
                    <input
                      type='text'
                      placeholder='00001'
                      className='input text-gray-600 h-[28px] w-[200px] mb-1 border-none active:border-none focus:border-none rounded-none'
                    />
                  </div>
                </div>

                <div className='flex-1 flex items-center justify-between pb-4 border-b-[2px]  border-gray-400'>
                  <div className='text-gray-600 text-sm font-bold  w-[180px]'>
                    등록일시
                  </div>
                  <div className='ml-6 '>
                    <Date height={12} />
                  </div>
                </div>
                <div className='flex-1'></div>
              </div>

              {/* second row */}
              <div className='flex gap-6 mt-4 h-[30px]'>
                <div className='flex-1 flex items-center  justify-between border-b-[2px] border-gray-400 '>
                  <div className='text-gray-600 text-sm  font-bold mr-4'>
                    계정(이메일) *
                  </div>
                  <div className='ml-6'>
                    <input
                      type='text'
                      placeholder='name@domain.co.kr'
                      className='input focus:border-transparent px-2 border-gray-300 active:border-none focus:border-none bg-gray-50 text-gray-600 h-[28px] w-[230px] mb-1 rounded-none'
                    />
                  </div>
                </div>
                <div className='flex-1  flex items-center justify-between border-b-[2px] border-gray-400 '>
                  <div className='text-gray-600 text-sm  font-bold mr-4 '>
                    비밀번호 *
                  </div>
                  <div className='ml-6'>
                    <input
                      type='text'
                      placeholder='********'
                      className='input focus:border-transparent px-2 border-gray-300 active:border-none focus:border-none bg-gray-50 text-gray-600 h-[28px] w-[230px] mb-1 rounded-none'
                    />
                  </div>
                </div>
                <div className='flex-1 flex items-center justify-between border-b-[2px] border-gray-400 '>
                  <div className='text-gray-600  text-sm font-bold mr-4'>
                    비밀번호 확인 *
                  </div>
                  <div className='ml-6'>
                    <input
                      type='text'
                      placeholder='*********'
                      className='input focus:border-transparent px-2 border-gray-300 active:border-none focus:border-none bg-gray-50 text-gray-600 h-[28px] w-[230px] mb-1 rounded-none'
                    />
                  </div>
                </div>
              </div>
              {/* third row */}
              <div className='flex gap-10 mt-5 h-[30px]'>
                <div className='flex-2/3 flex items-center pb-3 justify-between border-b-[2px] border-gray-400 '>
                  <div className='text-gray-600 text-sm font-bold mr-4'>
                    관리자 번호
                  </div>
                  <div className='ml-6'>
                    <Date />
                  </div>
                  <div className=''>
                    <input
                      type='text'
                      placeholder='00001'
                      className='input text-gray-600 h-[28px] w-[280px] mb-1 border-none active:border-none focus:border-none rounded-none'
                    />
                  </div>
                </div>

                <div className='flex-1/3 flex items-center justify-self-end pb-4 border-b-[2px] justify-between border-gray-400'>
                  <div className='text-gray-600 text-sm font-bold mr-[6rem]'>
                    등록일시
                  </div>
                  <div className='flex'>
                    <div className='form-control mr-2'>
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
                    <div className='form-control  mr-1'>
                      <label className='label cursor-pointer'>
                        <input
                          type='radio'
                          name='dateOption'
                          className='radio mr-4'
                        />
                        <span className='label-text'> 최근 7일</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* fourth */}

              <div className='h-[30px]  gap-[4rem] flex flex-shrink justify-between items-center w-1/3 border-b-[2px] border-gray-400 mt-4'>
                <div className='text-gray-600 text-sm font-bold flex-shrink mr-4'>
                  등록일시
                </div>
                <div className='flex flex-shrink'>
                  <div className='form-control mr-2'>
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
                  <div className='form-control  mr-1'>
                    <label className='label cursor-pointer'>
                      <input
                        type='radio'
                        name='dateOption'
                        className='radio mr-4'
                      />
                      <span className='label-text'> 최근 7일</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-110px  bg-white border-t-[2px] border-gray-400'>
          <div className='flex gap-6 justify-center   items-center mt-[2rem]   '>
            <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
              관리자 등록
            </button>
            <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
              관리자 등록
            </button>
          </div>
          <div className='flex gap-6 justify-center my-4   items-center    '>
            <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
              관리자 등록
            </button>
            <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
              관리자 등록
            </button>
          </div>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
