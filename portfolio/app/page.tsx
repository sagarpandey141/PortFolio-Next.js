//./app/page.tsx
"use client"
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Hero from './ui/Hero';
import Experience from './ui/Experience';
import Client from './ui/Client';
import Contact from './ui/Contact';
import { Toaster } from 'react-hot-toast';

const Home = () => {

  return (
    <div className='  overflow-hidden'>
         <Hero/>
         <Experience/>
         <Client/>
         <Toaster position='top-center'/>
         <Contact/>
    </div>
  );
};

export default Home;
