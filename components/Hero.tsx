import Image from 'next/image';
import React from 'react';
import { LoadReveal, OnScrollReveal } from '@/utils/motion';

const Hero = () => {
  return (
    <div className='w-full h-screen mx-auto mb-[8rem]'>
      <LoadReveal>
        <div className='flex flex-col gap-6 mt-20  w-full items-center justify-center container max-w-[1100px]  mx-auto'>
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

          <OnScrollReveal>
            <Image
              src='/hero.jpg'
              alt='hero image -  mountain'
              width={700}
              height={350}
              className='items-center justify-center mx-auto  rounded-md shadow-xl'
            />
          </OnScrollReveal>
        </div>
      </LoadReveal>
    </div>
  );
};

export default Hero;
