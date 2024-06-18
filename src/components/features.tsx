import React from 'react';
import Image from 'next/image';
import { features_content } from '@/lib/data';
import { UseInViewMotion } from '@/lib/hooks';

export default function Features() {
  return (
    <section className='lg:px-horizontal-padding-desktop px-horizontal-padding-mobile lg:py-section-desktop py-section-mobile'>
      
      <div className='lg:grid grid-cols-5 flex flex-col gap-2.5'>
        <UseInViewMotion className='flex flex-col col-span-2 sm:p-16 p-8 justify-center items-center bg-primaryHover rounded-card' translate={{ x: -50 }} delay="400ms">
          <p className='font-primary font-medium text-textSecondary text-4xl text-center break-words'>{features_content.left_content.text}</p>
        </UseInViewMotion>
        <div className='lg:grid grid-rows-2 col-span-3 flex flex-col gap-2.5'>
          <UseInViewMotion className='flex flex-col justify-center gap-5 bg-secondaryHover sm:p-16 p-8 rounded-card' translate={{ y: -50 }} delay="400ms">
            <p className='font-primary font-medium text-textPrimary text-4xl break-words'>{features_content.top_right_content.text1}</p>
            <p className='font-primary font-medium text-textPrimary text-xl break-words'>{features_content.top_right_content.text2}</p>
          </UseInViewMotion>
          <UseInViewMotion className='flex sm:flex-row flex-col gap-5 items-center justify-between sm:p-16 p-8 bg-accent1 rounded-card' translate={{ y: 50 }} delay="400ms">
            <p className='font-primary font-medium text-textPrimary text-4xl break-words'>{features_content.bottom_right_content.text}</p>
            <Image src={features_content.bottom_right_content.src} alt={features_content.bottom_right_content.alt} className='h-[150px] w-auto'/>
          </UseInViewMotion>
        </div>
      </div>
    </section>
  );
}
