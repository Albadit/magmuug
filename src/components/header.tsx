import React from 'react';
import Link from 'next/link';
import Logo from '@/components/icons/logo';
import { headerlinks } from '@/lib/data';
import { IconShoppingCartFilled } from '@tabler/icons-react';
import { IconMenu2 } from '@tabler/icons-react';
import { IconX } from '@tabler/icons-react';
import { UseToggle } from '@/lib/hooks';
import { UseInViewMotion } from '@/lib/hooks';

export default function Header() {
  const [isOpen, setToggle] = UseToggle(false);
  return (
    <header className='z-50 relative'>
      <UseInViewMotion className='sm:h-[100px] h-[80px] flex flex-row justify-between items-center lg:gap-12 gap-5 lg:px-horizontal-padding-desktop px-horizontal-padding-mobile' translate={{ y: -50 }} delay='200ms'>
        <div className='flex flex-row justify-between items-center grow'>
          <Link href='/' className='flex flex-row gap-0.5 font-primary font-bold text-5xl'>
            <span className='sm:block hidden'>mag</span>
            <Logo className='fill-primary h-10 w-fit sm:mt-3'/>
            <span className='sm:block hidden'>uug</span>
          </Link>
          <div className='lg:flex flex-row hidden gap-14 items-center'>
            <nav className='font-primary font-semibold'>
              <ul className='flex flex-row gap-10'>
              {headerlinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.hash}>{link.name}</Link>
                </li>
              ))}
              </ul>
            </nav>
          </div>
          <div className='lg:hidden flex flex-row' onClick={setToggle}>
            {!isOpen && (<IconMenu2 stroke={2} className='h-10 w-auto fill-textPrimary'/>)}
            {isOpen && (<IconX stroke={2} className='h-10 w-auto fill-textPrimary'/>)}
          </div>
        </div>
        {isOpen && (
        <div className='w-full lg:hidden block absolute sm:top-[100px] top-[80px] left-0 bg-background border-y-[1px] border-textPrimary/20 shadow-lg'>
          <nav className='font-primary font-semibold'>
            <ul className='flex flex-col '>
              {headerlinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.hash} className='block w-full py-8 text-xl text-center'>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        )}
        <div className='bg-primary rounded-cart'>
          <IconShoppingCartFilled className='h-5 w-auto m-2 fill-textSecondary'/>
        </div>
      </UseInViewMotion>
    </header>
  )
}