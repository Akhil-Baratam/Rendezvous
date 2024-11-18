import React from 'react';
import Header from '@/components/Header';
import Feed from '@/components/Feed';
import Mapbox from '@/components/Mapbox';

function Explore() {
  return (
    <main className='font-RenFont'>
      <Header />
      <section className='relative flex justify-center gap-4 z-0 pl-2'>
        <div className='inline-flex w-3/5 pt-6 flex-grow overflow-y-auto'>
          <Feed className='inline-flex flex-grow' />
        </div>
        <div className='w-1/5 h-screen z-0 hidden drop lg:inline-flex lg:min-w-[400px]'>
          <div className='w-full fixed top-14 z-0 h-full overflow-hidden'>
            <Mapbox />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Explore;