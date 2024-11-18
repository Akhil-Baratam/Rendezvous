import React from 'react'
import { useRouter } from 'next/router';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

function Banner() {
  const router = useRouter();

  return (
    <main className='flex flex-col container mx-auto py-10 '>
      <section className=''>
        <div className='flex flex-col col-span-2 pl-2 pr-10 py-8 '>
          <p className="text-6xl font-semibold md:text-7xl lg:text-9xl">Rendezvous</p>
          <p className='px-3 pt-10 font-normal text-gray-500 line-through decoration-1 md:font-medium'>A place where group of people meet at an agreed time and place</p>
          <p className='pt-4 pl-3 font-mediun md:font-medium'>Where strangers become known! Join the chaos and joy of meeting like-minded strangers.</p>
          <div>
          <button onClick={()=>{router.push('/explore')}} className=' flex items-center py-2 px-3 mt-10 font-semibold transition duration-150 text-white bg-black border-2 border-gray-400 rounded-full 
          shadow-md cursor-pointer hover:shadow-xl hover:scale-105 active:scale-90 '>Explore Ren <ArrowRightIcon className='h-5 pl-2' /> </button>
          </div>
        </div>
      </section>
      <section className='flex gap-16 max-w-max justify-between'>
        <div className='flex flex-col items-center p-16 border-3 rounded-lg shadow-md shadow-slate-800'>
          <p className=' font-normal'>Total Meets created:</p>
          <p className=' text-2xl'>515</p>
        </div>
        <div className='p-16 border-3 rounded-lg shadow-md shadow-slate-800'>Discover Meets </div>
        <div className='p-16 border-3 rounded-lg shadow-md shadow-slate-800'>chat with Meetmates</div>
      </section>
    </main>
  )
}

export default Banner
