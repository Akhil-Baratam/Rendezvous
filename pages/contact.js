import React from 'react';
import Header from '@/components/Header';
import Contactbox from '@/components/Contactbox';

function Contact() {
  return (
    <main className='font-RenFont'>
      <Header />
      <section className='relative flex justify-center gap-4 z-0 pl-2'>
        <Contactbox />
      </section>
    </main>
  );
}

export default Contact;