import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-screen mx-auto'>
      <div className='flex gap-6 pt-20 text-6xl font-bold text-indigo-300 w-full justify-center container mx-auto'>
        Snow
      </div>
      <p className='text-center text-gray-500 mt-5 text-xl'>
        A white NextJS Landing Page Template
      </p>
      <Image
        src='/hero.jpg'
        alt='hero image -  mountain'
        width={900}
        height={450}
        className='items-center justify-center mx-auto my-[200px] rounded-md shadow-xl opacity-40'
      />
    </div>
  );
};

export default Hero;
