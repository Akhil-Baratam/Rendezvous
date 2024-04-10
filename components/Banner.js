import React from 'react'
import { useRouter } from 'next/router';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

function Banner() {
  const router = useRouter();

  return (
    <main className='flex container mx-auto py-10 '>
      <section className='grid grid-cols-3 gap-x-6 gap-y-4'>
        <div className='flex flex-col col-span-2 border-black border-2 rounded-xl gap-1 pl-6 pr-10 py-8 '>
          <p className="text-6xl font-semibold md:text-7xl lg:text-9xl">Rendezvous</p>
          <p className='px-3 pt-10 font-normal text-gray-500 line-through decoration-1 md:font-medium'>A place where group of people meet at an agreed time and place</p>
          <p className='pt-4 pl-3 font-mediun md:font-medium'>Where strangers become known! Join the chaos and joy of meeting like-minded strangers.</p>
          <div>
          <button onClick={()=>{router.push('/explore')}} className=' flex items-center py-2 px-3 mt-10 font-semibold transition duration-150 text-white bg-black border-2 border-gray-400 rounded-full 
          shadow-md cursor-pointer hover:shadow-xl hover:scale-105 active:scale-90 '>Explore Ren <ArrowRightIcon className='h-5 pl-2' /> </button>
          </div>
        </div>

        <div className='flex flex-col items-center justify-evenly gap-5 col-span-1 row-span-2 border-black border-2 rounded-xl'>
          <div className='flex flex-col items-center'>
            <p className=" h-8 font-semibold pb-2 ">Explore by place</p>
            <div className='grid  grid-cols-3 gap-4 '>
              <p className=' text-sm text-center border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-105 active:scale-95'>/ Banglore</p>
              <p className=' text-sm text-center border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-105 active:scale-95'>/ Hyderabad</p>
              <p className=' text-sm text-center border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-105 active:scale-95'>/ Mumbai</p>
              <p className=' text-sm text-center border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-105 active:scale-95'>/ Delhi</p>
              <p className=' text-sm text-center border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-105 active:scale-95'>/ Chennai</p>
              <p className=' text-sm text-center border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-105 active:scale-95'>/ Jalandhar</p>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            <p className=" h-8 font-semibold pb-4 ">Explore by Interests</p>
            <div className='grid  grid-cols-3 gap-4 '>
              <p className=' text-sm border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-100 active:scale-95'>/ Music</p>
              <p className=' text-sm border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-100 active:scale-95'>/ Music</p>
              <p className=' text-sm border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-100 active:scale-95'>/ Music</p>
              <p className=' text-sm border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-100 active:scale-95'>/ Music</p>
              <p className=' text-sm border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-100 active:scale-95'>/ Music</p>
              <p className=' text-sm border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-100 active:scale-95'>/ Music</p>
              <p className=' text-sm border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-100 active:scale-95'>/ Music</p>
              <p className=' text-sm border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-100 active:scale-95'>/ Music</p>
              <p className=' text-sm border-2 border-gray-900 rounded-full px-2 py-1 cursor-pointer hover:shadow-md hover:scale-100 active:scale-95'>/ Music</p>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center col-span-1 border-black border-2 rounded-xl'>
          <p className=' font-bold'>How it Works?</p>
        </div>

        <div className='flex flex-col items-center justify-center gap-1 p-5 col-span-1 border-black border-2 rounded-xl'>
          <p className='p-4 font-semibold md:font-medium'>Meets Organized</p>
          <p className='text-3xl font-semibold md:font-medium'>1504</p>
        </div>
      </section>
    </main>
  )
}

export default Banner
