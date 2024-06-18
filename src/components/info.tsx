import React from 'react'
import { info_content } from '@/lib/data'
import { IconChevronRight } from '@tabler/icons-react';
import { UseInViewMotion } from '@/lib/hooks';

export default function Info() {
  return (
    <section className='lg:px-horizontal-padding-desktop px-horizontal-padding-mobile lg:py-section-desktop py-section-mobile'>
      <UseInViewMotion className='lg:grid grid-cols-2 flex flex-col gap-12' translate={{ y: -50 }}>
      {info_content.map((items, index) => (
        <div key={index} className='flex flex-col gap-2.5'>
          <div className='flex flex-row justify-between items-center '>
            <p className='font-primary font-normal text-textPrimary lg:text-4xl text-3xl break-words'>{items.title}</p>
            <IconChevronRight stroke={1.5} size={40} />
          </div>
          <p>{items.text}</p>
        </div>
      ))}
      </UseInViewMotion>
    </section>
  )
}
