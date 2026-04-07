import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet, useLocation } from 'react-router';
import Footer from '../Components/Footer';

const Root = () => {

  const path = useLocation();

  useEffect(() => {
    window.scrollTo({top:0, behavior: 'smooth'});
  }, [path]);

  return (
    <>
      <header className='shadow-sm fixed w-full bg-white z-20'>
        <Navbar />
      </header>
      <main className='pt-15 min-h-[80vh]'>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Root;