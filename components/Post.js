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
<main className=" justify-center">
  <div ref={ref} className="flex flex-1 justify-between items-center flex-grow max-w-xl md:max-w-2xl overflow-hidden rounded shadow-lg mt-2 p-4">
    <div className="flex flex-col flex-grow md:mr-4">
      <div className="flex justify-between items-center">
        <span className=" flex-none font-semibold text-2xl md:text-3xl mb-2 md:mb-0">{title}</span>
        <div className=' justify-self-end'>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 md:ml-auto">{date}</span>
        </div>
        
      </div>
      <div className="mt-2">
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{place}</p>
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{pernum}</p>
        <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{hashtag}</p>
      </div>
      <div className="mt-2">
        <p className="text-sm line-clamp-1"> <span className="font-medium">Description:</span> {description}</p>
      </div>
    </div>
    <div className="flex-shrink-0 h-32 max-w-16 content-center pt-1 cursor-pointer rounded-md hover:scale-125 hover:text-white hover:bg-gray-900 active:scale-90" onClick={handleDisplaymodal}>
      <ChevronRightIcon className="h-10 cursor-pointer duration-150 hover:scale-105" /> 
    </div>
  </div>
  {displaymodal && <Displaymodal title={title} place={place} time={time} date={date} pernum={pernum} description={description} hashtag={hashtag} closeDisplaymodel={closeDisplaymodel} />}
</main>



  )
}
)

Post.displayName = 'Post';

export default Post