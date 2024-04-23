'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
// import spin from '../../../../images/spin.svg';
import Image from 'next/image';
import Date from '../../../../components/Date2';

function Page() {
  return (
    <Sidebar>
      {/* Your content here */}
      <main className='flex-1 text-black p-4 bg-backG'>
        <div className='mx-4 mt-4'>
          <h1 className='font-bold text-base mb-2 text-black'>
            회원 관리<span className='m-2 '>&gt;</span>회원 관리
            <span className='m-2 '>&gt;</span>회원 상세
          </h1>
          {/* section one */}
          <section className='h-[214px] px-6 py-2 bg-white '>
            <h1 className='bg-zinc-100 my-4 text-gray-600 text-sm font-bold p-2'>
              기본 정보
            </h1>
            {/* first row  */}
            <div className='flex mt-3 gap-8 h-[30px]'>
              <div className='flex-1  flex items-center justify-between border-b-[2px] border-gray-500 '>
                <div className='text-gray-600 text-sm  font-bold mr-4 '>
                  회원 번호
                </div>
                <div className='ml-6'>
                  <input
                    type='text'
                    placeholder='00001'
                    className='input focus:border-transparent px-2  active:border-none focus:border-none text-gray-700 h-[28px] w-[230px] mb-1 rounded-none'
                  />
                </div>
              </div>

              <div className='flex-1  flex items-center justify-between border-b-[2px] border-gray-500 '>
                <div className='text-gray-600 text-sm  font-bold mr-4 '>
                  계정(이메일)
                </div>
                <div className='ml-6'>
                  <input
                    type='text'
                    placeholder='홍길동'
                    className='input focus:border-transparent px-2  active:border-none focus:border-none text-gray-600 h-[28px] w-[230px] mb-1 rounded-none'
                  />
                </div>
              </div>
              <div className='flex-1  flex items-center justify-between border-b-[2px] border-gray-500 '>
                <div className='text-gray-600 text-sm  font-bold mr-4 '>
                  회원 가입 일시
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
                  연락처
                </div>
                <div className='ml-6'>
                  <input
                    type='text'
                    placeholder='홍길동'
                    className='input focus:border-transparent px-2  active:border-none focus:border-none text-gray-700 h-[28px] w-[230px] mb-1 rounded-none'
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
                    placeholder='010-1234-5678'
                    className='input focus:border-transparent px-2  active:border-none focus:border-none text-gray-600 h-[28px] w-[230px] mb-1 rounded-none'
                  />
                </div>
              </div>
              <div className='flex-1  flex items-center justify-between border-b-[2px] border-gray-500 '>
                <div className='text-gray-600 text-sm  font-bold mr-4 '>
                  추천인 코드
                </div>
                <div className='ml-6'>
                  <input
                    type='text'
                    placeholder='MK09SAM81Z'
                    className='input focus:border-transparent px-2  active:border-none focus:border-none text-gray-600 h-[28px] w-[230px] mb-1 rounded-none'
                  />
                </div>
              </div>
            </div>

            {/* third row */}
            <div className='flex mt-3 gap-6 h-[30px]'>
              <div className='flex-1  flex items-center justify-between border-b-[4px] border-gray-300 '>
                <div className='text-gray-600 text-sm  font-bold mr-4 '>
                  소셜
                </div>
                <div className='ml-6'>
                  <input
                    type='text'
                    placeholder='카카오'
                    className='input focus:border-transparent px-2  active:border-none focus:border-none text-gray-600 h-[28px] w-[230px] mb-1 rounded-none'
                  />
                </div>
              </div>
              <div className='  flex flex-1 items-center justify-between border-b-[4px] border-gray-300 '>
                <div className='text-gray-600 text-sm  font-bold mr-4 '>
                  등록된 기기(주/부)
                </div>
                <div className='ml-6'>
                  <input
                    type='text'
                    placeholder='2/1'
                    className='input focus:border-transparent px-2  active:border-none focus:border-none text-gray-600 h-[28px] w-[210px] mb-1 rounded-none'
                  />
                </div>
              </div>
              <div className=' flex flex-1 items-center justify-between border-b-[4px] border-gray-300 '>
                <div className='text-gray-600 text-sm  font-bold mr-4 '>
                  리네브 스토어 연결
                </div>
                <div className='ml-6'>
                  <input
                    type='text'
                    placeholder='store_id@renevv.store'
                    className='input focus:border-transparent px-2  active:border-none focus:border-none text-gray-600 h-[28px] w-[210px] mb-1 rounded-none'
                  />
                </div>
              </div>
            </div>
          </section>
          {/* second section */}
          <section className='mt-10 h-[254px]'>
            <div className='flex-col bg-white flex-1 pb-6'>
              <div className=' border-b-2 p-4 mb-2 '>
                <h1 className='text-lg text-gray-600 font-bold '>
                  등록 기기 정보
                </h1>
              </div>
              <div>
                <ul className='px-6 py-2 '>
                  <li className=' flex justify-between bg-gray-100  mt-4 p-4 '>
                    <h3 className='text-sm font-bold text-gray-700'>No</h3>
                    <h3 className='text-sm -ml-12 font-bold text-gray-700'>
                      등록 기기 정보
                    </h3>
                    <h3 className='text-sm font-bold text-gray-700'>
                      시리얼 넘버
                    </h3>
                    <h3 className='text-sm font-bold text-gray-700'>
                      기기 등록 일시
                    </h3>
                    <h3 className='text-sm font-bold text-gray-700'>권한</h3>
                    <h3 className='text-sm font-bold text-gray-700'>
                      계정 등록 일시
                    </h3>
                  </li>
                  <li className='flex justify-between py-2 px-2 border-b-2'>
                    <div className='text-center text-sm'>1 </div>
                    <div className='text-center text-sm font-normal '>
                      RENEVV 10.8
                    </div>
                    <div className='text-center text-sm text-blue-500'>
                      2024030200198
                    </div>
                    <div className='text-center text-sm'>2023-12-27 22:30</div>
                    <div className='text-center text-sm'>주계정</div>
                    <div className='text-center text-sm'>2023-12-27 22:30</div>
                  </li>
                  <li className='flex justify-between py-2 px-2 border-b-2'>
                    <div className='text-center text-sm'>2 </div>
                    <div className='text-center text-sm  font-normal '>
                      RENEVV 10.8
                    </div>
                    <div className='text-center text-sm text-blue-500'>
                      2024030200198
                    </div>
                    <div className='text-center text-sm'>2023-12-27 22:30</div>
                    <div className='text-center text-sm'>주계정</div>
                    <div className='text-center text-sm'>2023-12-27 22:30</div>
                  </li>
                  <li className='flex justify-between py-2 px-2 border-b-2'>
                    <div className='text-center text-sm'>3</div>
                    <div className='text-center text-sm   font-normal '>
                      RENEVV 10.8
                    </div>
                    <div className='text-center text-sm text-blue-500'>
                      2024030200198
                    </div>
                    <div className='text-center text-sm'>2023-12-27 22:30</div>
                    <div className='text-center text-sm'>주계정</div>
                    <div className='text-center text-sm'>2023-12-27 22:30</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          {/* section 3 */}
          <section className=' my-[4rem]  h-[254px]'>
            <div className='flex-col bg-white flex-1 pb-6'>
              <div className=' border-b-2 p-4 mb-2 '>
                <h1 className='text-lg text-gray-600 font-bold '>활성 미션</h1>
              </div>
              <div>
                <div className='px-6 py-2 '>
                  <table className='table'>
                    {/* head */}

                    <thead className=' bg-gray-100 '>
                      <tr>
                        <th className='text-sm font-bold text-gray-600'>No</th>
                        <th className='text-sm font-bold text-gray-600'>
                          쿠폰 유형
                        </th>
                        <th className='text-sm font-bold text-gray-600'>
                          쿠폰명
                        </th>
                        <th className='text-sm font-bold text-gray-600'>
                          할인
                        </th>
                        <th className='text-sm font-bold text-gray-600'>
                          {' '}
                          연결 쿠폰 ID
                        </th>
                        <th className='text-sm font-bold text-gray-600'>
                          쿠폰 발급 일시
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr className=' border-b-2'>
                        <th>1</th>
                        <td>친구 추천</td>
                        <td>장바구니 할인 쿠폰</td>
                        <td>10,000 원</td>
                        <td>1456015484975135</td>
                        <td>2023.08.28. 12:31</td>
                      </tr>
                      {/* row 2 */}
                      <tr className=' border-b-2'>
                        <th>2</th>
                        <td>미션</td>
                        <td>장바구니 할인 쿠폰</td>
                        <td>5000 원</td>
                        <td>1456015484975135</td>
                        <td>2023.08.28. 12:31</td>
                      </tr>
                      {/* row 3 */}
                      <tr className=' border-b-2'>
                        <th>2</th>
                        <td>추천인 코드 등록</td>
                        <td>장바구니 할인 쿠폰</td>
                        <td>100%</td>
                        <td>1456015484975135</td>
                        <td>2023.08.28. 12:31</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          {/* third  section*/}
          <section className='flex flex-wrap gap-8 justify-between h-[254px]'>
            <div className='flex-col bg-white flex-1 pb-6'>
              <h1 className='text-lg border-b-2 p-4 mb-2  text-gray-600 font-bold '>
                활성 미션
              </h1>

              <div>
                <div className='flex justify-between bg-gray-100 mx-6 mt-4 p-4 '>
                  <div className='text-sm font-bold text-gray-700'>No</div>
                  <div className='text-sm font-bold text-gray-700'>
                    내가 등록한 친구
                  </div>
                  <div className='text-sm font-bold text-gray-700'>
                    등록 일시
                  </div>
                </div>
                <ul className='px-6 py-2 overflow-y-auto max-h-[125px]'>
                  <li className='flex justify-between py-2 px-2 border-b-2'>
                    <div className='text-center text-sm'>1 </div>

                    <div className='text-center text-sm  text-blue-500 font-normal '>
                      emaiil_id@domain.co.kr
                    </div>
                    <div className='text-center text-sm'>2023-12-27 22:30</div>
                  </li>
                  <li className='flex justify-between py-2 px-2 '>
                    <div className='text-center text-sm'> </div>

                    <div className='text-center text-sm  text-blue-500 font-normal '></div>
                    <div className='text-center text-sm'></div>
                  </li>
                  <li className='flex justify-between py-2 px-2 '>
                    <div className='text-center text-sm'> </div>

                    <div className='text-center text-sm  text-blue-500 font-normal '></div>
                    <div className='text-center text-sm'></div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex-col bg-white flex-1 pb-6'>
              <h1 className='text-lg border-b-2 p-4 mb-2  text-gray-600 font-bold '>
                활성 미션
              </h1>

              <div>
                <div className='flex gap-[7rem] bg-gray-100 mx-6 mt-4 p-4 '>
                  <div className='text-sm  font-bold text-gray-700'>No</div>
                  <div className='text-sm font-bold text-gray-700'>
                    내가 등록한 친구
                  </div>
                  <div className='text-sm font-bold text-gray-700'>
                    등록 일시
                  </div>
                </div>
                <ul className='px-6 py-2 overflow-y-auto max-h-[125px]'>
                  <li className='flex justify-between py-2 px-2 border-b-2'>
                    <div className='text-center text-sm'>1 </div>

                    <div className='text-center text-sm  text-blue-500 font-normal '>
                      emaiil_id@domain.co.kr
                    </div>
                    <div className='text-center text-sm'>2023-12-27 22:30</div>
                  </li>
                  <li className='flex justify-between py-2 px-2 border-b-2'>
                    <div className='text-center text-sm'>1 </div>

                    <div className='text-center text-sm  text-blue-500 font-normal '>
                      emaiil_id@domain.co.kr
                    </div>
                    <div className='text-center text-sm'>2023-12-27 22:30</div>
                  </li>
                  <li className='flex justify-between py-2 px-2 border-b-2'>
                    <div className='text-center text-sm'>1 </div>

                    <div className='text-center text-sm  text-blue-500 font-normal '>
                      emaiil_id@domain.co.kr
                    </div>
                    <div className='text-center text-sm'>2023-12-27 22:30</div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <div className='flex justify-center  py-6 items-center mt-[3rem]  bg-white h-[52px] shadow-inner  border-t-[2px] border-gray-400'>
            <button className='font-bold text-center text-sm text-white bg-button px-[5rem] py-2 rounded-[5px]'>
              확인
            </button>
          </div>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
