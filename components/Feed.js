import React, { useState, useCallback } from 'react'
import Dropdown from './Dropdown'
import Modal from './Modal';
import Post from './Post';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import FlipMove from 'react-flip-move';
import Hashtags from './Hashtags';

function Feed({ posts }) {
  const [showModal, setShowModal] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchInput, setSearchInput] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedInterest, setSelectedInterest] = useState('');

  const interests = ["music", "dance", "films", "business"];

  const updateFilteredPosts = useCallback(() => setFilteredPosts(
      posts.filter((post) => {
        const placeMatches = !searchInput || post.place.toLowerCase().includes(searchInput.toLowerCase());
        const dateMatches = !selectedDate || post.date === selectedDate;
        const optionMatches = !selectedOption || post.participantLimit === selectedOption;
        const interestMatches = !selectedInterest || post.interests.includes(selectedInterest);
        return placeMatches && dateMatches && optionMatches && interestMatches;
      })
    ),
    [posts, searchInput, selectedDate, selectedInterest, selectedOption]
  );

  React.useEffect(() => {
    updateFilteredPosts();
  }, [updateFilteredPosts, posts]);

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