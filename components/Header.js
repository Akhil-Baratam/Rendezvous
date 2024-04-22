import React from 'react'
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from '@/Slices/userSlice';
import { useRouter } from 'next/router';
import { Bars3Icon, MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';

function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isIndexPage = router.pathname === '/home' || router.pathname === '/';

  const logoutofApp = () => {
    dispatch(logout());
    auth.signOut();
  }


  return (
<header className="sticky top-0 z-50 grid grid-cols-3 p-3 space-x-4 bg-white shadow-md md:px-10">
  {/* Left */}
  <div className="flex items-center cursor-pointer">
    <Image
      src="/logo.png"
      alt="Rendezvous"
      width={80}
      height={50}
      objectFit="contain"
      onClick={() => {
        router.push('/');
      }}
    />
  </div>

  {/* Middle - Search */}
  {isIndexPage && (
    <div className="flex items-center py-2 rounded-full md:border-2 md:border-gray-300">
      <input
        className="flex-grow pl-4 pr-2 py-1 text-sm text-gray-600 placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0"
        type="text"
        placeholder="Search the place"
      />
      <MagnifyingGlassIcon className="h-6 p-1 text-white bg-black rounded-full cursor-pointer md:inline-flex md:mx-2" />
    </div>
  )}

  {/* Right */}
  <div className="flex items-center col-end-4 justify-end space-x-6 text-gray-500">
    <p onClick={() => router.push('/home')} className="hidden font-normal cursor-pointer font-RenFont lg:inline-flex hover:text-black">Home</p>
    <p onClick={() => router.push('/explore')} className="hidden font-normal cursor-pointer font-RenFont lg:inline-flex hover:text-black">Explore REN</p>
    <p className="hidden font-normal cursor-pointer font-RenFont lg:inline-flex hover:text-black">Contact Us</p>
    {/* <div className='flex items-center p-1 space-x-1 bg-gray-900 rounded-full cursor-pointer hover:bg-gray-900'>
        <SunIcon className='h-3.5 text-orange-400' />
        <GlobeAsiaAustraliaIcon className='h-4 text-blue-200'/>
        <MoonIcon className='h-2.5 text-orange-100' />
      </div> */}
    <div className="flex items-center space-x-2">
      <Bars3Icon className="h-6 cursor-pointer lg:hidden hover:text-black" />
      <UserCircleIcon onClick={logoutofApp} className="h-6 transition duration-150 cursor-pointer hover:text-black hover:scale-105 active:scale-90" />
    </div>
  </div>
</header>

  )
}

export default Header


