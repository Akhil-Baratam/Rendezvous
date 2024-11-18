import React, { useEffect, useState, useCallback } from 'react'
import Dropdown from './Dropdown'
import Modal from './Modal';
import Post from './Post';
import { db } from './firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import FlipMove from 'react-flip-move';
import Hashtags from './Hashtags';

function Feed() {
  const [showModal, setShowModal] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedInterest, setSelectedInterest] = useState('');

  const interests = ["music", "dance", "films", "business"];

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setAllPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  const updateFilteredPosts = useCallback(() => setFilteredPosts(
      allPosts.filter((post) => {
        const placeMatches = !searchInput || post.place.toLowerCase().includes(searchInput.toLowerCase());
        const dateMatches = !selectedDate || post.date === selectedDate;
        const optionMatches = !selectedOption || post.participantLimit === selectedOption;
        const interestMatches = !selectedInterest || post.interests.includes(selectedInterest);
        return placeMatches && dateMatches && optionMatches && interestMatches;
      })
    ),
    [allPosts, searchInput, selectedDate, selectedInterest, selectedOption]
  );

  useEffect(() => {
    updateFilteredPosts();
  }, [updateFilteredPosts]);

  const handleClear = () => {
    setSearchInput('');
    setSelectedDate('');
    setSelectedOption('');
    setSelectedInterest('');
  }

  const handleCreateClick = (e) => {
    e.preventDefault();
    setShowModal(true);
  }

  return (
    <main className='flex flex-col lg:flex-row max-w-6xl mx-auto px-4'>
      <section className='lg:w-1/4 mb-8 lg:mb-0 lg:mr-8'>
        <h2 className='font-semibold text-2xl mb-4'>Hashtags</h2>
        <Hashtags
          interests={interests}
          selectedInterest={selectedInterest}
          handleInterestClick={setSelectedInterest}
        />
        <button onClick={handleClear} className='mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition duration-200'>
          Clear Filters
        </button>
      </section>

      <section className='lg:w-3/4'>
        <div className='mb-8'>
          <div className='flex flex-wrap gap-4 items-center'>
            <div className='flex-grow'>
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className='w-full p-2 border rounded-full'
                type="text"
                placeholder='Search place'
              />
            </div>
            <input
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className='p-2 border rounded-full'
              type="date"
            />
            <Dropdown value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} />
            <button
              onClick={handleCreateClick}
              className='px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition duration-200'
            >
              Create
            </button>
          </div>
        </div>

        {showModal && <Modal closeModal={() => setShowModal(false)} />}

        <div className="space-y-4">
          {filteredPosts.length === 0 ? (
            <p>No matching posts found.</p>
          ) : (
            <FlipMove>
              {filteredPosts.map((post) => (
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
              ))}
            </FlipMove>
          )}
        </div>
      </section>
    </main>
  )
}

export default Feed