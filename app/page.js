'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/Logo.png';
import { useState } from 'react';

function HomePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
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
  };

  return (
    <div>
      <div className='border-2 shadow-xl flex p-6'>
        <Image src={logo} alt='logo' />
      </div>
      <div className='flex  justify-center  min-h-screen bg-white'>
        <div className=' rounded-md w-full max-w-xs mt-[10rem]'>
          <h2 className='text-lg pt-2 mb-4 text-center text-gray-400 font-bold bg-neutral-200 '>
            관리자
          </h2>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-semi-bold text-gray-600'
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
                <p className='text-red-500 text-xs mt-1'>enter valid email</p>
              )}
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-semi-bold text-gray-600'
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
                <p className='text-red-500 text-xs mt-1'>
                  the paswword is too short
                </p>
              )}
            </div>
            <div>
              <button
                type='submit'
                className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none'
              >
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
