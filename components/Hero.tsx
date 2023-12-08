import React from 'react';

const Hero = () => {
  return (
    <div className='w-full h-full container mx-auto'>
      <div className='flex flex-row items-center justify-center w-full'>
        <div className='flex flex-col'>
          <h1>Left</h1>
        </div>
        <div className='w-full h-full flex justify-center items-center'>
          <h2>Right</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
