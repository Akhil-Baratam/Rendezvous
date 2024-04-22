import React, {useState} from 'react'
import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/solid'


function Displaymodal({title, place, time, date, pernum, description, hashtag, closeDisplaymodel}) {

  const wrapperclose = (e) => {if(e.target.id === 'wrapper' ) closeDisplaymodel()};

 

  return (
    // <div className='fixed h-screen inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-md flex justify-center items-center' onClick={wrapperclose} id='wrapper'>
    //     <div className='gap-4 rounded-lg bg-white shadow-lg drop-shadow-lg p-2 my-1'>
    //         <div className=''>
    //             <div className='flex flex-grow items-center justify-between'>
    //                 <span className='font-semibold text-3xl pb-1'>{title}</span>
    //                 <span className='flex gap-4 pr-10 pt-1'>
    //                     <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{date}</p>
    //                     {/* <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2'>{time.stringify}</p> */}
    //                 </span>
    //             </div>
    //             <div>
    //                 <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{place}</p>
    //                 <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{pernum}</p>
    //                 <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#{hashtag}</p>
    //             </div>
    //             <div>
    //             <p className=' text-sm line-clamp-1 '> <span className='font-medium'>Description:</span> {description}</p>
    //             </div>
    //         </div>
    //         <div className=' pt-1'>
    //             <ChevronRightIcon className='h-6 cursor-pointer rounded-full hover:backdrop: hover:text-black hover:scale-125 hover:bg-slate-50 active:scale-90 ' /> 
    //         </div>
    //     </div>
    // </div>
    <div className='fixed h-screen inset-0 z-50 bg-black bg-opacity-15 backdrop-blur-sm flex justify-center items-center' onClick={wrapperclose} id='wrapper'>
    <form className='flex flex-col gap-4 w-2/5 rounded-lg bg-white shadow-lg drop-shadow-lg p-2 my-1'>
        <div className='flex items-center'>
            <p className=' w-11/12 pl-3 pt-2 font-medium text-xl'>{title}</p>
            <XMarkIcon className=' w-1/12 h-5 pt-1 px-2 cursor-pointer ' onClick={closeDisplaymodel} />
        </div>
        <p className='pl-4 text-lg text-gray-600 placeholder-gray-400 bg-transparent outline-none'  type="text" placeholder='Title?' />{date}<p/>
        <p className=''>{time}</p>

        <div className='flex gap-4'>
            <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{place}</p>
            <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{pernum}</p>
            <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#{hashtag}</p>
        </div>
        <p className=' px-4 py-2 resize-y text-sm text-gray-600 placeholder-gray-400 bg-transparent rounded-md outline-slate-200 focus:outline-slate-400'>{description}</p>
        <p className=' px-4 py-2 resize-y text-sm text-gray-600 placeholder-gray-400 bg-transparent rounded-md outline-slate-200 focus:outline-slate-400'>Address</p>
    </form>
</div>
  )
}

export default Displaymodal