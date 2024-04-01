import React, { useEffect, useCallback } from 'react'
import { useState } from 'react';
import Dropdown from './Dropdown'
import Modal from './Modal';
import Post from './Post';
import { db } from './firebase';
import { collection,onSnapshot, orderBy, query } from 'firebase/firestore';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import FlipMove from 'react-flip-move';


function Feed() {
  const [showModal, setShowModal] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  // Assuming you have an array of interests (e.g., ["music", "dance"])
  const interests = ["music", "dance", "films"];

  // Add a new state to manage the selected interest
  const [selectedInterest, setSelectedInterest] = useState(null);

  // Function to handle interest selection
  const handleInterestClick = (interest) => {
    setSelectedInterest(interest);
  };

  // Add a new state to manage the selected date
  const [selectedDate, setSelectedDate] = useState(null);

  // Function to handle date selection
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
  };

  // Add a new state to manage the selected dropdown option
  const [selectedOption, setSelectedOption] = useState(null);

  
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const fetching = onSnapshot(q, (snapshot) => {
      setAllPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
      
    });
    
  }, []);

  
  const [filteredPosts, setFilteredPosts] = useState('');  
  

  const updateFilteredPosts = useCallback(()=>{
    setFilteredPosts(
      allPosts.filter((post) => {
        // Filter by date (if a date is selected)
        const dateMatches = !selectedDate || post.date === selectedDate;
      
        // Filter by dropdown option (if an option is selected)
        const optionMatches =
          !selectedOption || post.participantLimit === selectedOption;
      
        // Filter by interest (if an interest is selected)
        const interestMatches =
          !selectedInterest || post.interests.includes(selectedInterest);
      
        // Combine all filters
        return dateMatches && optionMatches && interestMatches;
      })    
    )
    console.log(selectedDate)
    console.log(selectedOption)
    console.log(selectedInterest)
    console.log(filteredPosts)
  },[allPosts, selectedDate,selectedInterest,selectedOption]);

  useEffect(() => {
    updateFilteredPosts();
  }, [updateFilteredPosts]);

  const closeModel = () => {
    setShowModal(false) 
  };

  const handleClear = () => {
    setSelectedDate(null);
    setSelectedOption(null);
    setSelectedInterest(null);
  }

  return (
    <main className='flex flex-col flex-grow py-2 divide-y-2 gap-2 rounded-lg items-center'>
        <form className=' flex flex-col shrink items-center '>
          <div className=' flex border-2 rounded-full items-center gap-10 px-2 '>
            <div className='flex items-center py-2 rounded-full  '> 
              <MagnifyingGlassIcon className='hidden h-6 p-1 text-white bg-black rounded-full cursor-pointer md:inline-flex md:mx-2'/>
              <input className='pl-4 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none' type="text" placeholder='search the place' /> 
            </div>
            <input Value={selectedDate || ''} onChange={handleDateChange} className='' type="date" name="Date" id="date" />
            <Dropdown value={selectedOption} onChange={(e)=>{setSelectedOption(e.target.value)}} />
            <button onClick={ ()=>{setShowModal(true)}} className=' font-medium rounded-3xl text-white py-1 px-2 bg-gray-900 hover:bg-black focus:outline-none'> Create </button>
          </div>
          <button type='reset' onClick={handleClear} className='font-medium rounded-3xl text-white py-1 px-2 bg-gray-900 hover:bg-black focus:outline-none'>x Clear</button>
        </form>

        {showModal && <Modal closeModel={closeModel} />}

        <div className="flex gap-2">
          {interests.map((interest) => (
            <button
              key={interest}
              onClick={() => handleInterestClick(interest)}
              className={`bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold ${
                selectedInterest === interest ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {interest}
            </button>
          ))}
        </div>


        <section className="pt-2">
          {filteredPosts.length === 0 ? (
            <p>No matching posts found.</p>
          ) : (
            filteredPosts.map((post) => (
              <FlipMove key={post.id} className="z-0">
                <Post
                  key={post.id}
                  title={post.title}
                  place={post.place}
                  time={post.time}
                  date={post.date}
                  pernum={post.participantLimit}
                  description={post.description}
                  hashtag={post.interests}
                />
              </FlipMove>
            ))
          )}
        </section>

    </main>
  )
}

export default Feed