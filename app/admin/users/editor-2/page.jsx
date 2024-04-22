'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useRouter } from 'next/navigation';

function Page() {

  const router = useRouter();
  const goNext = () => {
    router.push('/admin');
  };

  return (
    <Sidebar>
      <main className='flex-1 text-black p-4 filter drop-shadow-md shadow-inner shadow-black/25 bg-backG'>
        <div className='mx-4 mt-8'>
            <div className='text-[20px] font-bold  '>앱 관리 &gt; 약관 관리</div>

            <div className='flex  items-center '>
                <p className='text-[14px] font-bold px-[16px] py-[4px] border-[1px] border-[#eee] border-b-0 bg-[#fff]'>이용 약관</p>
                <p className='text-[14px] font-bold px-[16px] py-[4px] border-[1px] border-[#eee] bg-[#fff]'>개인정보 처리방침</p>
                <p className='text-[14px] font-bold px-[16px] py-[4px] border-[1px] border-[#eee] bg-[#fff]'>개인정보 수집 및 이용동의</p>
            </div>

            <section>
                <article>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event ) => {
                        console.log( event );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
                </article>
            </section>
          
          
         
        </div>
      </main>
    </Sidebar>
  );
}

export default Page;
