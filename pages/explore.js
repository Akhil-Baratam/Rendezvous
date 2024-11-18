import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Feed from '@/components/Feed';
import MapboxWithMarkers from '@/components/MapboxWithMarkers';
import { db } from '@/components/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

function Explore() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          longitude: doc.data().longitude || 0, // Add default values
          latitude: doc.data().latitude || 0,
        }))
      );
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className='font-RenFont'>
      <Header />
      <section className='relative flex justify-center gap-4 z-0 pl-2'>
        <div className='inline-flex w-3/5 pt-6 flex-grow overflow-y-auto'>
          <Feed className='inline-flex flex-grow' posts={posts} />
        </div>
        <div className='w-1/5 h-screen z-0 hidden drop lg:inline-flex lg:min-w-[400px]'>
          <div className='w-full fixed top-14 z-0 h-full overflow-hidden'>
            <MapboxWithMarkers posts={posts} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Explore;