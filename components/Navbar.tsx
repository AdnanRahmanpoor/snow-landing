import { NavLinks } from '@/constants';
import { LoadReveal } from '@/utils/motion';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className='w-full h-[64px] bg-slate-200 backdrop-blur-2'>
      <LoadReveal>
        <div className='w-full h-full flex flex-row justify-between	mx-auto container max-w-[960px]'>
          <Link
            href='/'
            key='logo'
            className='cursor-pointer py-4 text-black font-black'
          >
            Snow
          </Link>
          <div className='w-[500px] h-full flex flex-row items-center justify-end'>
            {NavLinks.map((links) => (
              <Link
                title={links.name}
                key={links.name}
                href={links.href}
                className='cursor-pointer py-4 text-black z-50 mr-6'
              >
                {links.name}
              </Link>
            ))}
          </div>
        </div>
      </LoadReveal>
    </nav>
  );
};

export default Navbar;
