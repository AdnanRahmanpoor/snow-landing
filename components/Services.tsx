import React from 'react'

const Services = () => {
  return (
    <div className='w-full h-screen mx-auto mb-[8rem] bg-gray-50 text-center'>
      <div className='container max-w-[1100px]  mx-auto'>
        <div className='text-6xl font-bold text-indigo-300 py-10'>
          Our Services
        </div>

        <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 px-6'>
          <div className='h-[16rem] rounded-lg bg-gray-200  hover:bg-black transition-all hover:duration-500'></div>
          <div className='h-[16rem] rounded-lg bg-gray-200  hover:bg-black transition-all hover:duration-500'></div>
          <div className='h-[16rem] rounded-lg bg-gray-200  hover:bg-black transition-all hover:duration-500'></div>
        </div>
      </div>
    </div>
  );
}

export default Services