import React, {useState} from 'react'
import Dropdown from './Dropdown'
import { db } from './firebase';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { XMarkIcon } from '@heroicons/react/24/solid';

async function addPostToFirestore(title, place, date, dropdownValue, time, interests, address, description) {
    try{
        //still need to add regex and make that if any field empty return false and dont submit
        const postref = await addDoc(collection(db, "posts"),{
            title: title,
            place: place,
            date: date,
            participantLimit: dropdownValue,
            time: time,
            interests: interests,
            address: address,
            description: description,
            timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", postref.id);
        return true;
    } catch (error) {
        console.error("Error adding document ", error)
        return false;
    }
 
  }

function Modal({closeModel}) {

  const [title, setTitle] = useState("");
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [dropdownValue, setDropdownValue] = useState('option1'); 
  const [time, setTime] = useState('');
  const [interests, setInterests] = useState('');
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");

  const wrapperclose = (e) => {if(e.target.id === 'wrapper' ) closeModel()};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addPostToFirestore(title, place, date, dropdownValue, time, interests, address, description);
    if (added) {
        setTitle("");
        setPlace("");
        setDate("");
        setDropdownValue("");
        setTime("");
        setInterests("");
        setAddress("");
        setDescription("");
    }
    closeModel();
  };

  return (
    <div className='fixed inset-0 z-10 bg-black bg-opacity-25 backdrop-blur-md flex justify-center items-center' onClick={wrapperclose} id='wrapper'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 rounded-lg bg-white shadow-lg drop-shadow-lg p-2 my-1'>
            <div className='flex items-center'>
                <p className=' w-11/12 pl-3 pt-2 font-medium text-xl'>Create New MeetCard</p>
                <XMarkIcon className=' w-1/12 h-5 pt-1 px-2 cursor-pointer ' onClick={closeModel} />
            </div>
            <input className='pl-4 text-lg text-gray-600 placeholder-gray-400 bg-transparent outline-none' value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" placeholder='Title?' />
            <div className='flex gap-4'>
                <input className=' pl-4 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none' value={place} onChange={(e)=>{setPlace(e.target.value)}} type="search" placeholder='Place' />
                <input className=' cursor-pointer border-none outline-none text-gray-600' value={date} onChange={(e)=>{setDate(e.target.value)}} type="date" name="date" id="" />
                <Dropdown value={dropdownValue} onChange={(e)=>{setDropdownValue(e.target.value)}} className='text-gray-600' />
            </div>
            <div className='flex gap-4'>
                <input className=' border-none outline-none text-gray-600 pr-20 pl-4' value={time} onChange={(e)=>{setTime(e.target.value)}} type="time" name="Time" id="" />
                <input className=' w-2/3 pl-4 text-sm text-gray-600 placeholder-gray-400 bg-transparent outline-none' value={interests} onChange={(e)=>{setInterests(e.target.value)}} type="text" placeholder='Interests: ' />
            </div>
            <textarea className=' px-4 py-2 resize-y text-sm text-gray-600 placeholder-gray-400 bg-transparent rounded-md outline-slate-200 focus:outline-slate-400' value={address} onChange={(e)=>{setAddress(e.target.value)}} name="Address" id="" placeholder='Address:' cols="30" rows="1"></textarea>
            <textarea className=' px-4 py-2 resize-y text-sm text-gray-600 placeholder-gray-400 bg-transparent rounded-md outline-slate-200 focus:outline-slate-400' value={description} onChange={(e)=>{setDescription(e.target.value)}} name="Address" id="" placeholder='Description:' cols="30" rows="5"></textarea>
            
            <button type='submit' className='text-xl font-normal w-24 place-self-center py-3 px-2' >Submit</button>
        </form>
    </div>
  )
}

export default Modal