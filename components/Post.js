import React, { forwardRef, useState } from 'react'
import Displaymodal from './Displaymodal'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const Post = forwardRef(({ title, place, time, date, pernum, description, hashtag }, ref) => {
  const [displaymodal, setDisplaymodal] = useState(false);

  const handleDisplaymodal = (e) => {
    e.preventDefault();
    setDisplaymodal(true);
  }

  return ( 
    <div ref={ref} className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <span className="text-sm bg-gray-200 rounded-full px-3 py-1">{date}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-2">
          <span className="text-sm bg-gray-200 rounded-full px-3 py-1">{place}</span>
          <span className="text-sm bg-gray-200 rounded-full px-3 py-1">{pernum}</span>
          <span className="text-sm bg-gray-200 rounded-full px-3 py-1">#{hashtag}</span>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        <button 
          onClick={handleDisplaymodal}
          className="flex items-center justify-center w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-200"
        >
          View Details
          <ChevronRightIcon className="h-5 w-5 ml-2" />
        </button>
      </div>
      {displaymodal && (
        <Displaymodal
          title={title}
          place={place}
          time={time}
          date={date}
          pernum={pernum}
          description={description}
          hashtag={hashtag}
          closeDisplaymodel={() => setDisplaymodal(false)}
        />
      )}
    </div>
  )
})

Post.displayName = 'Post';

export default Post