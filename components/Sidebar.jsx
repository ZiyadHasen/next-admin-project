import Link from 'next/link';
import { useRouter } from 'next/router';
import logo from '@/images/Logo.png';
import Image from 'next/image';

const Sidebar = ({ children }) => {
  return (
    <>
      <div className='border-6 shadow-lg flex justify-between p-4'>
        <Image src={logo} alt='logo' className='object-cover h-full' />

        <div className='flex'>
          <div className='text-sm font-bold mx-1 tracking-tight'>홍길동 님</div>
          <div className='text-sm font-light mx-1 tracking-tight text-neutral-400'>
            (정보수정)
          </div>
          <div className='text-sm font-light mx-1 px-2 border-l-2 border-r-2 border-neutral-400 text-neutral-400'>
            최근접속:2022-12-23 14:35
          </div>
          <div className='text-sm font-bold text-neutral-500 mx-1 tracking-tight'>
            로그아웃
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='text-black h-screen bg-white py-14 px-6 border w-[242px]'>
          <div className='mb-4'>
            <div className='flex items-center gap-1'>
              <div className='w-5 h-5 rounded-full bg-gray-400 mr-2'></div>
              <h1 className='font-medium text-gray-600 text-base'>운영 관리</h1>
            </div>
            <ul className='ml-7 mt-2'>
              <li className='flex my-1 ml-2 font-normal text-16 '>
                <span className='self-start text-xs'>&#x221F;</span>
                <span className='ml-1'>
                  <Link href='/admin/users/user-1'>관리자 관리</Link>
                </span>
              </li>
              <li className='flex my-1 ml-2 font-normal text-16'>
                <span className='self-start text-xs'>&#x221F;</span>
                <span className='ml-1'>
                  <Link href='/admin/users/user-2'>시리얼 넘버 관리</Link>
                </span>
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <div className='flex items-center gap-1'>
              <div className='w-5 h-5 rounded-full bg-gray-400 mr-2'></div>
              <h1 className='font-medium text-gray-600 text-base'>회원 관리</h1>
            </div>
            <ul className='ml-7'>
              <li className='flex my-1 ml-2 font-normal text-16 '>
                <span className='self-start text-xs'>&#x221F;</span>
                <span className='ml-1'>
                  <Link href='/admin/user'>회원 관리</Link>
                </span>
              </li>
              <li className='flex my-1 ml-2 font-normal text-16'>
                <span className='self-start text-xs'>&#x221F;</span>
                <span className='ml-1'>
                  <Link href='/admin/dashboard'>기기 관리</Link>
                </span>
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <div className='flex items-center gap-1'>
              <div className='w-5 h-5 rounded-full bg-gray-400 mr-2'></div>
              <h1 className='font-medium text-gray-600 text-base'>
                사용기록 관리
              </h1>
            </div>
            <ul className='ml-7'>
              <li className=' my-1 ml-2 font-normal text-16 '>
                <Link href='/admin/user'>└ 사용기록 관리</Link>
              </li>
              <li className=' my-1 ml-2 font-normal text-16'>
                <Link href='/admin/dashboard'>└ 미션 관리</Link>
              </li>
              <li className='my-1 ml-2 font-normal text-16'>
                <Link href='/admin/dashboard'>└ 쿠폰 관리</Link>
              </li>
              <li className='my-1 ml-2 font-normal text-16'>
                <Link href='/admin/dashboard'>└ 쿠폰 발급 관리</Link>
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <div className='flex items-center gap-1'>
              <div className='w-5 h-5 rounded-full bg-gray-400 mr-2'></div>
              <h1 className='font-medium text-gray-600 text-base'>앱 관리</h1>
            </div>
            <ul className='ml-7'>
              <li className=' my-1 ml-2 font-normal text-16 '>
                <Link href='/admin/user'>└ 가이드 관리</Link>
              </li>
              <li className=' my-1 ml-2 font-normal text-16 '>
                <Link href='/admin/user'>└ FAQ 관리</Link>
              </li>
              <li className=' my-1 ml-2 font-normal text-16 '>
                <Link href='/admin/user'>└ 쇼핑 관리</Link>
              </li>
              <li className='my-1 ml-2 font-normal text-16 '>
                <Link href='/admin/user'>└ 약관 관리</Link>
              </li>

              <li className='my-1 ml-2 font-normal text-16'>
                <Link href='/admin/dashboard'>└ 팝업 관리</Link>
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <div className='flex items-center gap-1'>
              <div className='w-5 h-5 rounded-full bg-gray-400 mr-2'></div>
              <h1 className='font-medium text-gray-600 text-base'>통계 관리</h1>
            </div>
            <ul className='ml-7'>
              <li className=' my-1 ml-2 font-normal text-16 '>
                <Link href='/admin/user'>└ 회원/기기 통계</Link>
              </li>
              <li className=' my-1 ml-2 font-normal text-16'>
                <Link href='/admin/dashboard'>└ 접속/사용 통계</Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Sidebar;
