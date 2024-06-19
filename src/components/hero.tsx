import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { intro_content } from '@/lib/data'
import { UseInViewMotion } from '@/lib/hooks'

export default function Hero() {
  return (
    <section className=' flex sm:flex-row flex-col-reverse justify-between items-center gap-5 gap-y-12 sm:min-h-[calc(100dvh-100px)] min-h-[calc(100dvh-800px)] lg:px-horizontal-padding-desktop px-horizontal-padding-mobile lg:py-section-desktop py-section-mobile'>
      <UseInViewMotion className='flex flex-col gap-16' translate={{ x: -50 }} delay="400ms">
        <div className='flex flex-col gap-2 break-words'>
          <h1 className='lg:text-6xl text-5xl font-semibold font-primary'>magmuug</h1>
          <p className='lg:text-6xl text-5xl font-semibold font-primary'>{intro_content.content[0]}</p>
          <p className='lg:text-6xl text-5xl font-semibold font-primary'>{intro_content.content[1]}</p>
          <p className='lg:text-6xl text-5xl font-semibold font-primary text-primary'>{intro_content.content[2]}</p>
        </div>
        <Link href={intro_content.button.hash} className='sm:w-fit w-auto lg:text-2xl text-xl sm:text-left text-center font-semibold font-primary text-textSecondary py-4 px-12 bg-primary rounded-button'>{intro_content.button.text}</Link>
      </UseInViewMotion>
      <UseInViewMotion className='grow flex flex-row justify-center items-center' translate={{ x: 50 }} delay="400ms">
        <div className='relative max-w-[450px]'>
          <Image src={intro_content.splash.src} alt={intro_content.splash.alt} priority={true} className='absolute w-auto'/>
          <Image src={intro_content.image.src} alt={intro_content.image.alt} priority={true} className='w-auto rotate-[-10deg]'/>
        </div>
      </UseInViewMotion>
    </section>
  )
}