import React from 'react'
import { potential_content } from '@/lib/data'
import { UseInViewMotion } from '@/lib/hooks'

export default function Potential() {
  return (
    <section className='flex flex-col gap-12 lg:px-horizontal-padding-desktop px-horizontal-padding-mobile lg:py-section-desktop py-section-mobile'>
      <UseInViewMotion translate={{ x: 50 }}>
        <h2 className='lg:text-6xl text-5xl font-medium font-primary'>
          {potential_content.title}
          <br />
          {potential_content.title2}
        </h2>
      </UseInViewMotion>
      <UseInViewMotion className='flex flex-col gap-2' translate={{ x: -50 }}>
      <p className='lg:text-3xl text-2xl font-base font-secondary'>{potential_content.text}</p>
      </UseInViewMotion>
    </section>
  )
}
