'use client';
import React from 'react';
import Sidebar from '../../../../components/Sidebar';

function Page() {
  return (
    <Sidebar>
      {/* Your content here */}
      <main className='flex-1 text-black p-4 bg-gray-200'>
        <h1>product-3</h1>
      </main>
    </Sidebar>
  );
}

export default Page;
