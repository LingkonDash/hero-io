import React from 'react';
import { FaGithub } from 'react-icons/fa';
import MyNavLink from './Shared/MyNavLink';

const Navbar = () => {
  return (
    <nav className='max-w-400 mx-auto p-3 md:px-10 flex justify-between items-center'>

      <h1 className='text-3xl font-bold text-purple-500'>HERO.IO</h1>

      <ul className='hidden sm:flex justify-center items-center gap-4'>
        <li><MyNavLink to='' >Home</MyNavLink></li>
        <li><MyNavLink to='/apps' >App</MyNavLink></li>
        <li><MyNavLink to='/installed' >Installation</MyNavLink></li>
      </ul>

      <button className='btn bg-purple-600 hover:bg-purple-500 text-white'> <FaGithub /> Contribute</button>
    </nav>
  );
};

export default Navbar;