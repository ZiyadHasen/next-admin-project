import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import logo from '../data/images/Logo.png';
import Image from 'next/image';

const Sidebar = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  console.log("The current route is ", pathname)
  return (
    <>
      <div className='   border-b-2 flex justify-between p-4'>
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
        <div className='text-black h-screen bg-white py-14   w-[242px]'>
          <div className='mb-4'>
            <div className='flex items-center gap-1 px-6'>
              <div className='w-5 h-5 rounded-full bg-[#9e9e9e] mr-2'></div>
              <h1 className='font-semibold text-[#616161] text-base '>
                운영 관리
              </h1>
            </div>
            <ul className='mt-2'>
              <li className={`my-2 pl-14
              ${pathname == "/admin/users/user-2" ? "bg-[#eee] font-bold py-1" : "font-normal"}
              `}>

                <Link href='/admin/users/user-2'>└ 관리자 관리</Link>
              </li>
              <li className='my-2 pl-14 font-normal text-[16px]'>
                <Link href='/admin/users/user-2'>└ 시리얼 넘버 관리</Link>
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <div className='flex items-center gap-1 px-6'>
              <div className='w-5 h-5 rounded-full bg-[#9e9e9e] mr-2'></div>
              <h1 className='font-semibold text-[#616161] text-base'>
                회원 관리
              </h1>
            </div>
            <ul className=''>
              <li className='my-2 pl-14 font-normal text-[16px] '>
                <Link href='/admin/user'>└ 회원 관리</Link>
              </li>
              <li className=' my-2 pl-14 font-normal text-[16px]'>
                <Link href='/admin/dashboard'>└ 기기 관리</Link>
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <div className='flex items-center gap-1 px-6'>
              <div className='w-5 h-5 rounded-full bg-[#9e9e9e] mr-2'></div>
              <h1 className='font-semibold text-[#616161] text-base'>
                사용기록 관리
              </h1>
            </div>
            <ul className=''>
              <li className=' my-2 pl-14 font-normal text-[16px] '>
                <Link href='/admin/user'>└ 사용기록 관리</Link>
              </li>
              <li className=' my-2 pl-14 font-normal text-[16px]'>
                <Link href='/admin/dashboard'>└ 미션 관리</Link>
              </li>
              <li className='my-2 pl-14 font-normal text-[16px]'>
                <Link href='/admin/dashboard'>└ 쿠폰 관리</Link>
              </li>
              <li className='my-2 pl-14 font-normal text-[16px]'>
                <Link href='/admin/dashboard'>└ 쿠폰 발급 관리</Link>
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <div className='flex items-center gap-1 px-6'>
              <div className='w-5 h-5 rounded-full bg-[#9e9e9e] mr-2'></div>
              <h1 className='font-semibold text-[#616161] text-base'>
                앱 관리
              </h1>
            </div>
            <ul className=''>
              <li className=' my-2 pl-14 font-normal text-[16px] '>
                <Link href='/admin/user'>└ 가이드 관리</Link>
              </li>
              <li className=' my-2 pl-14 font-normal text-[16px] '>
                <Link href='/admin/user'>└ FAQ 관리</Link>
              </li>
              <li className=' my-2 pl-14 font-normal text-[16px] '>
                <Link href='/admin/user'>└ 쇼핑 관리</Link>
              </li>
              <li className='my-2 pl-14 font-normal text-[16px] '>
                <Link href='/admin/user'>└ 약관 관리</Link>
              </li>

              <li className='my-2 pl-14 font-normal text-[16px]'>
                <Link href='/admin/dashboard'>└ 팝업 관리</Link>
              </li>
            </ul>
          </div>
          <div className='mb-4'>
            <div className='flex items-center gap-1 px-6'>
              <div className='w-5 h-5 rounded-full bg-[#9e9e9e] mr-2'></div>
              <h1 className='font-semibold text-[#616161] text-base'>
                통계 관리
              </h1>
            </div>
            <ul className=''>
              <li className=' my-2 pl-14 font-normal text-[16px] '>
                <Link href='/admin/user'>└ 회원/기기 통계</Link>
              </li>
              <li className=' my-2 pl-14 font-normal text-[16px]'>
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
