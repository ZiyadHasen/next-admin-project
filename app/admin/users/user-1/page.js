'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
import spin from '../../../../data/images/spin.svg';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  const goNext = () => {
    router.push('/admin');
  };
  return (
    <Sidebar>
      {/* Your content here */}
      <main className='flex-1 text-black p-4 filter drop-shadow-md shadow-inner shadow-black/25 bg-backG'>
        <div className='mx-4 mt-8'>
          <div className='p-10 bg-white mb-4 flex justify-between h-[108px] border-stone-700'>
            <div className='text-[20px] font-bold  '>회원</div>
            <div>
              총 회원수{' '}
              <span className='mx-2 text-[#2f80ed] font-normal '>1,135</span>
            </div>
            <div className='w-[3px] h-[25px] bg-gray-500'></div>

            <div>
              카카오{' '}
              <span className='mx-2 text-[#2f80ed] font-normal '>1,152</span>
            </div>

            <div>
              네이버{' '}
              <span className='mx-2 text-[#2f80ed] font-normal '>1,152</span>
            </div>
            <div>
              애플
              <span className='mx-2 text-[#2f80ed] font-normal '>1,152</span>
            </div>
            <Image src={spin} alt='spin' width={24} height={24} />
          </div>
          {/* second */}
          <div className='flex flex-wrap mb-4 gap-8 justify-between '>
            <div className='flex-col bg-white my-4 flex-1'>
              <div className='flex border-b-[1px] border-[#bdbdbd] p-4 justify-between w-full'>
                <h1 className='text-[20px] font-bold  '>등록된 기기</h1>
                <Image src={spin} alt='spin' width={24} height={24} />
              </div>

              <div className='px-3 py-3'>
                <div className='p-4 flex justify-between w-full'>
                  <div className='-gray-700 '>RENEVV 9.5</div>
                  <div className='mx-2 text-[#2f80ed] font-normal '>1,152</div>
                </div>
                <div className='p-4 flex justify-between w-full'>
                  <div className='text-gray-700'>RENEVV 10.8</div>
                  <div className='mx-2 text-[#2f80ed] font-normal '>25</div>
                </div>
                <div className='p-4 flex justify-between w-full'>
                  <div className='-gray-700'>RENEVV 13</div>
                  <div className='mx-2 text-[#2f80ed] font-normal '>1152</div>
                </div>
              </div>
            </div>
            <div className='flex-col bg-white my-4  flex-1'>
              <div className='flex border-b-[1px] border-[#bdbdbd] p-4 justify-between w-full'>
                <h1 className='text-[20px] font-bold  '>등록된 기기</h1>
                <Image src={spin} alt='spin' width={24} height={24} />
              </div>
              <div className='px-3 py-3'>
                <div className='p-4 flex justify-between w-full'>
                  <div className='-gray-700'>오늘</div>
                  <div className='mx-2 text-[#2f80ed] font-normal '>156</div>
                </div>
                <div className='p-4 flex justify-between w-full'>
                  <div className='text-gray-700'>어제</div>
                  <div className='mx-2 text-[#2f80ed] font-normal '>712</div>
                </div>
                <div className='p-4 flex justify-between w-full'>
                  <div className='-gray-700'>최근 7일</div>
                  <div className='mx-2 text-[#2f80ed] font-normal'>3654</div>
                </div>
              </div>
            </div>
          </div>
          {/* third */}
          <div className='flex flex-wrap gap-8 justify-between'>
            <div className='flex-col bg-white flex-1 pb-6'>
              <div className='flex border-b-2 p-4 mb-2 justify-between w-full'>
                <h1 className='text-[20px] font-bold '>활성 미션</h1>
                <Image src={spin} alt='spin' width={24} height={24} />
              </div>
              <div>
                <div className='flex justify-between bg-[#e0e0e0] mx-4 mt-4 p-4 '>
                  <div className='text-sm font-bold text-gray-700'>
                    모델 유형
                  </div>
                  <div className='text-sm font-bold text-gray-700'>미션명</div>
                  <div className='text-sm font-bold text-gray-700'>미션명</div>
                </div>
                <ul className='px-6 py-2 overflow-y-auto max-h-[125px]'>
                  <li className='flex justify-between py-3 px-2 border-b-2'>
                    <div className='text-center text-sm'>RENEVV 9.5 </div>
                    <div
                      className='text-center text-sm  text-[#2f80ed] font-normal cursor-pointer'
                      onClick={goNext}
                    >
                      RENEVV 9.5 쿠폰 만들기 미션
                    </div>
                    <div className='text-center text-sm'>2023-12-27 22:30</div>
                  </li>

                  <li className='flex justify-between py-3 px-2 border-b-2'>
                    <div className='text-center text-sm'> RENEVV 10.8</div>
                    <div
                      className='text-center text-sm  text-[#2f80ed] font-normal cursor-pointer'
                      onClick={goNext}
                    >
                      RENEVV 10.8 쿠폰 만들기 미션
                    </div>
                    <div className='text-center text-sm'>2022-12-26 22:30 </div>
                  </li>
                  <li className='flex justify-between py-3 px-2 border-b-2'>
                    <div className='text-center text-sm'>RENEVV 13 </div>
                    <div
                      className='text-center text-sm  text-[#2f80ed] font-normal cursor-pointer'
                      onClick={goNext}
                    >
                      RENEVV 13 쿠폰 만들기 미션
                    </div>
                    <div className='text-center text-sm'>2022-12-26 22:30 </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='flex-col bg-white flex-1'>
              <div className='flex border-b-2 p-4 mb-2 justify-between w-full'>
                <h1 className='text-[20px] font-bold '>쿠폰 발급 기록</h1>
                <Image src={spin} alt='spin' width={24} height={24} />
              </div>

              <div>
                <div className='flex justify-between bg-[#eee] mx-4 mt-4 p-4 '>
                  <div className='text-sm font-bold text-gray-700'>
                    쿠폰 유형
                  </div>
                  <div className='text-sm font-bold text-gray-700'>
                    요청 계정
                  </div>
                  <div className='text-sm font-bold text-gray-700'>
                    발급 일시
                  </div>
                </div>
                <ul className='px-6 py-2 overflow-y-auto max-h-[125px]'>
                  <li className='flex justify-between py-3 px-2 border-b-2'>
                    <div className='flex-1 text-sm'>
                      <span>친구 추천</span>
                    </div>
                    <div className='flex-1 text-center text-sm  text-[#2f80ed] font-normal '>
                      <span>nam***@domain.co.kr</span>
                    </div>
                    <div className='flex-1 text-right text-sm'>
                      <span>2022-12-23 22:30</span>
                    </div>
                  </li>
                  <li className='flex justify-between py-3 px-2 border-b-2'>
                    <div className='flex-1 text-left text-sm'>
                      <span>추천인 코드 등록</span>
                    </div>
                    <div className='flex-1   text-[#2f80ed] font-normal  text-center text-sm'>
                      <span>nam***@domain.co.kr</span>
                    </div>
                    <div className='flex-1 text-right text-sm'>
                      <span>2022-12-23 22:30</span>
                    </div>
                  </li>
                  <li className='flex justify-between py-3 px-2 border-b-2'>
                    <div className='flex-1  text-sm'>
                      <span>추천인 코드 등록</span>
                    </div>
                    <div className='flex-1  text-center text-sm text-[#2f80ed] font-normal '>
                      <span>nam***@domain.co.kr</span>
                    </div>
                    <div className='flex-1 text-right text-sm'>
                      <span>2022-12-23 22:30</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
