'use client'
import React from 'react'
import Logo from '@/components/icons/logo'
import { motion } from "framer-motion";

const logos_small = Array(4).fill(null).map((_, index) => (
  <motion.div key={index}
    whileHover={{ rotate: 180, transition: { duration: 0.7, type: 'spring' } }}
    whileTap={{ rotate: 180, transition: { duration: 0.7, type: 'spring' } }}
  >
    <Logo className="fill-primary lg:h-[140px] h-[80px] w-auto mt-3" />
  </motion.div>
));

const logos_large = Array(12).fill(null).map((_, index) => (
  <motion.div key={index}
    whileHover={{ rotate: 180, transition: { duration: 0.7, type: 'spring' } }}
    whileTap={{ rotate: 180, transition: { duration: 0.7, type: 'spring' } }}
  >
    <Logo className="fill-primary lg:h-[140px] h-[80px] w-auto mt-3" />
  </motion.div>
));

export default function Fun() {
  return (
    <section className='bg-primaryHover flex flex-wrap justify-center gap-[80px] lg:px-horizontal-padding-desktop px-horizontal-padding-mobile lg:py-section-desktop py-section-mobile'>
      <div className='md:hidden flex flex-wrap justify-center gap-[80px]'>{logos_small}</div>
      <div className='hidden md:flex flex-wrap justify-center gap-[80px]'>{logos_large}</div>
    </section>
  )
}
