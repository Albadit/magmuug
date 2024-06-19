import React from 'react'
import Link from 'next/link'
import Logo from '@/components/icons/logo'
import { footerlinks } from '@/lib/data'

export default function Footer() {
  return (
    <footer className='bg-primary font-primary text-textSecondary fill-textSecondary flex flex-col gap-8 py-12 lg:px-horizontal-padding-desktop px-horizontal-padding-mobile'>
      <div className='flex lg:flex-row flex-col-reverse justify-between gap-8'>
        <div className='flex flex-row gap-20'>
          <Logo className='lg:block hidden h-[120px] w-auto'/>
          <nav>
            <ul className='flex flex-col gap-3.5 text-base'>
            {footerlinks.map((link, index) => (
              <li key={index}>
                <Link href={link.hash}>{link.name}</Link>
              </li>
            ))}
            </ul>
          </nav>
        </div>
        <div className='flex flex-row gap-[1px] font-primary font-bold md:text-5xl text-4xl'>
          <span>mag</span>
          <Logo className='md:h-10 h-8 w-auto mt-3'/>
          <span>uug</span>
        </div>
      </div>
      <hr />
      <div className='flex md:flex-row flex-col gap-4'>
        <span>© 2024 magmuug, Inc. All rights reserved.</span>
        <span className='md:block hidden'>|</span>
        <span>Designed by Albadit</span>
      </div>
    </footer>
  )
}
