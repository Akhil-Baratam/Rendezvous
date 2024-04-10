import React from 'react';
import Header from '@/components/Header';
import Feed from '@/components/Feed';
import Mapbox from '@/components/Mapbox';

function Explore() {
  return (
    <main className='font-RenFont'>
      <Header />
      <section className='relative flex justify-center gap-4 pl-2'>
        
        {/* Feed */}
        <div className='inline-flex w-3/5 pt-6 flex-grow overflow-y-auto'>
          <Feed />
        </div>

        {/* Mapbox */}
        <div className=' w-1/5 h-screen hidden drop lg:inline-flex lg:min-w-[400px] '>
          <div className=' w-full fixed top-14 h-full overflow-hidden'>
            <Mapbox />
          </div>
          
        </div>
      </section>
    </main>
  );
}

export default Explore;
