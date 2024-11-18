import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { XMarkIcon } from '@heroicons/react/24/solid';

async function addPostToFirestore(postData) {
  try {
    const postRef = await addDoc(collection(db, "posts"), {
      ...postData,
      timestamp: serverTimestamp(),
    });
    console.log("Document written with ID: ", postRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document ", error)
    return false;
  }
}

function Modal({ closeModal }) {
  const [formData, setFormData] = useState({
    title: "",
    place: "",
    date: "",
    participantLimit: "",
    time: "",
    interests: "",
    address: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const added = await addPostToFirestore(formData);
    setIsSubmitting(false);
    if (added) {
      setFormData({
        title: "",
        place: "",
        date: "",
        participantLimit: "",
        time: "",
        interests: "",
        address: "",
        description: "",
      });
      closeModal();
    } else {
      alert("Failed to create post. Please try again.");
    }
  };

  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-md flex justify-center items-center' onClick={(e) => e.target === e.currentTarget && closeModal()}>
      <form onSubmit={handleSubmit} className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md' onClick={(e) => e.stopPropagation()}>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-semibold'>Create New MeetCard</h2>
          <XMarkIcon className='h-6 w-6 cursor-pointer' onClick={closeModal} />
        </div>
        <input
          className='w-full p-2 mb-4 border rounded'
          name="title"
          value={formData.title}
          onChange={handleChange}
          type="text"
          placeholder='Title'
          required
        />
        <div className='flex gap-4 mb-4'>
          <input
            className='flex-1 p-2 border rounded'
            name="place"
            value={formData.place}
            onChange={handleChange}
            type="text"
            placeholder='Place'
            required
          />
          <input
            className='flex-1 p-2 border rounded'
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
            required
          />
        </div>
        <div className='flex gap-4 mb-4'>
          <input
            className='flex-1 p-2 border rounded'
            name="time"
            value={formData.time}
            onChange={handleChange}
            type="time"
            required
          />
          <Dropdown
            value={formData.participantLimit}
            onChange={(e) => handleChange({ target: { name: 'participantLimit', value: e.target.value } })}
          />
        </div>
        <input
          className='w-full p-2 mb-4 border rounded'
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          type="text"
          placeholder='Interests (comma-separated)'
          required
        />
        <textarea
          className='w-full p-2 mb-4 border rounded'
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder='Address'
          rows={2}
          required
        ></textarea>
        <textarea
          className='w-full p-2 mb-4 border rounded'
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder='Description'
          rows={4}
          required
        ></textarea>
        <button
          type='submit'
          disabled={isSubmitting}
          className='w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-200 disabled:bg-gray-400'
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default Modal