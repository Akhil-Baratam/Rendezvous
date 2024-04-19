import React,{forwardRef} from 'react'
import { useState } from 'react'
import Displaymodal from './Displaymodal'
import { ChevronRightIcon } from '@heroicons/react/24/solid'


const Post = forwardRef( ({title, place, time, date, pernum, description, hashtag}, ref) => {

    const [displaymodal, setDisplaymodal] = useState(false);

    const handleDisplaymodal = (e) => {
        e.preventDefault();
        setDisplaymodal(true);
    }
    const closeDisplaymodel = () => {
        setDisplaymodal(false); 
      }

    return ( 
        <main>

            <div ref={ref} className=' flex max-w-2xl rounded overflow-hidden shadow-md mt-2 p-4 z-0'>        
                <div className='z-0'>
                    <div className='flex flex-grow items-center justify-between'>
                        <span className='font-semibold text-3xl pb-1'>{title}</span>
                        <span className='flex gap-4 pr-10 pt-1'>
                            <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{date}</p>
                            {/* <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-medium text-gray-700 mr-2 mb-2'>{time.stringify}</p> */}
                        </span>
                    </div>
                    <div>
                        <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{place}</p>
                        <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>{pernum}</p>
                        <p className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#{hashtag}</p>
                    </div>
                    <div>
                    <p className=' text-sm line-clamp-1 '> <span className='font-medium'>Description:</span> {description}</p>
                    </div>
                </div>
                <div className=' pt-1' onClick={handleDisplaymodal}>
                    <ChevronRightIcon className='h-6 cursor-pointer rounded-full hover:backdrop: hover:text-black hover:scale-125 hover:bg-slate-50 active:scale-90 ' /> 
                </div>

            </div>
            {displaymodal && <Displaymodal title={title} place={place} time={time} date={date} pernum={pernum} description={description} hashtag={hashtag} closeDisplaymodel={closeDisplaymodel}  />}

        </main>

  )
}
)

Post.displayName = 'Post';

export default Post