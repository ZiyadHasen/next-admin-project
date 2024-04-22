'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../data/images/Logo.png';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const router = useRouter();

  // const validateEmail = (email) => {
  //   const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //   return regex.test(email);
  // };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let emailError = '';
    let passwordError = '';

    if (!validateEmail(email)) {
      emailError = '올바른 이메일 형식을 입력하세요.';
    }

    if (password.length < 6) {
      passwordError = '비밀번호는 최소 6자 이상이어야 합니다.';
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }
    router.push('/admin/users/user-1');
  };

  return (
    <div className='font-spoqa '>
      <div className='border-b-[1px] filter drop-shadow-md shadow-black/25 border-[#eeeeee] shadow-xl flex p-6'>
        <Image src={logo} alt='logo' />
      </div>
      <div className='flex  justify-center   bg-white'>
        <div className=' rounded-md w-full max-w-xs mt-[10rem]'>
          <h2 className='py-[6px] text-[16px]  mb-4 text-center text-[#9e9e9e] font-bold bg-[#f5f5f5] '>
            관리자
          </h2>
          <form className='space-y-4'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-[550] text-[#828282]'
              >
                이메일
              </label>
              <div className='border-b border-gray-300'>
                <input
                  placeholder='name@domain.co.kr'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='mt-1 p-2 w-full focus:outline-none  border-0 placeholder-gray-200 placeholder-text-xs text-sm'
                />
              </div>
              {errors.email && (
                <p className=' text-[13px] text-[#eb5757] mt-1'>
                  ※ 이메일 형식에 맞게 입력해 주세요.
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-[550] text-[#828282]'
              >
                비밀번호
              </label>
              <div className='border-b border-gray-300'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  placeholder='******'
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='mt-1 p-2 w-full  border-0 focus:outline-none placeholder-gray-200 placeholder-text-xs text-sm'
                />
              </div>
              {errors.password && (
                <p className='text-[13px] text-[#eb5757]'>
                  ※ 유효 기간내 접근이 가능합니다. 관리자에게 연락해 주세요.
                </p>
              )}
            </div>

            <button
              type='submit'
              className='w-full py-2 mt-2  text-[16px] px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-button  focus:outline-none'
              onClick={handleSubmit}
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
