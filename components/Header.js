import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from '@/Slices/userSlice';
import { useRouter } from 'next/router';
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log(user);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
    router.push('/');
  };

  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-9xl flex items-center justify-between py-3 md:px-4">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/logo.png"
            alt="Rendezvous"
            width={80}
            height={50}
            objectFit="contain"
          />
        </Link>

        {router.pathname === '/' && (
          <div className="flex items-center py-2 rounded-full md:border-2 md:border-gray-300">
            <input
              className="flex-grow pl-4 pr-2 py-1 text-sm text-gray-600 placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0"
              type="text"
              placeholder="Search the place"
            />
            <MagnifyingGlassIcon className="h-6 p-1 text-white bg-black rounded-full cursor-pointer md:inline-flex md:mx-2" />
          </div>
        )}

        <nav className="hidden lg:flex items-center space-x-6 text-gray-500">
          {!user ? <Link href="/" className="nav-link">Home</Link> : <Link href="/profile" className="nav-link">Profile</Link>}
          <Link href="/explore" className="nav-link">Explore REN</Link>
          <Link href="/contact" className="nav-link">Contact Us</Link>
          
          {user ? (
            <button onClick={logoutOfApp} className="nav-link">
              Logout
            </button>
          ) : (<Link href="/login" className="nav-link">Login
              </Link>)}
        </nav>

        <div className="lg:hidden">
          <Bars3Icon onClick={toggleMenu} className="h-6 cursor-pointer text-gray-500 hover:text-black" />
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <nav className="flex flex-col items-center py-4 space-y-4">
          {!user ? <Link href="/" className="nav-link">Home</Link> : <Link href="/profile" className="nav-link">Profile</Link>}
            <Link href="/explore" className="nav-link">Explore REN</Link>
            <Link href="/contact" className="nav-link">Contact Us</Link>
            {user ? (
              <button onClick={logoutOfApp} className="nav-link">
                Logout
              </button>
            ) : (
              <Link href="/login" className="nav-link">
                Log in
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;