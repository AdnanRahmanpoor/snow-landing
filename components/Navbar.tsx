import { NavLinks } from '@/constants';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='w-full h-[64px] bg-slate-200 backdrop-blur-2'>
      <div className='w-full h-full flex flex-row justify-between m-auto'>
        <Link
          href='/'
          key='logo'
          className='cursor-pointer px-4 py-4 text-black font-black'
        >
          Snow
        </Link>
        <div className='w-[500px] h-full flex flex-row items-center justify-between pr-20'>
          {NavLinks.map((links) => (
            <Link
              title={links.name}
              key={links.name}
              href={links.href}
              className='cursor-pointer px-4 py-4 text-black z-50 '
            >
              {links.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
