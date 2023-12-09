import Image from 'next/image';
import React from 'react';
import { LoadReveal, OnScrollReveal } from '@/utils/motion';

const Hero = () => {
  return (
    <div className='w-full h-screen mx-auto'>
      <LoadReveal>
        <div className='flex flex-col gap-6 pt-20  w-full items-center justify-center container max-w-[960px]  mx-auto'>
          <div className='text-6xl font-bold text-indigo-300'>Snow</div>
          <p className='text-center text-gray-500 mt-5 text-xl'>
            A white NextJS Landing Page Template
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
            voluptate cum officia voluptatibus quasi tenetur, quod tempora optio
            similique? Deleniti est unde, natus earum nam necessitatibus
            distinctio dolorem? Pariatur, optio? Amet sed quasi voluptatibus
            totam, libero assumenda in nobis quod modi aliquam mollitia, enim
            earum reiciendis culpa. Ab aliquid, repellendus quisquam voluptatem
            minima provident dolorum voluptates illo optio saepe ipsam?
          </p>
        </div>

        <OnScrollReveal>
          <Image
            src='/hero.jpg'
            alt='hero image -  mountain'
            width={900}
            height={450}
            className='items-center justify-center mx-auto lg:my-[100px] md:my-[20px]  rounded-md shadow-xl'
          />
        </OnScrollReveal>
      </LoadReveal>
    </div>
  );
};

export default Hero;
