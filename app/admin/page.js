'use client';
import React from 'react';
import Sidebar from '../../components/Sidebar';

function Page() {
  return (
    <Sidebar>
      {/* Your content here */}
      <main className='flex-1 text-white p-4 bg-gray-200'>
        <h1>ROOT</h1>
      </main>
    </Sidebar>
  );
}

export default Page;
