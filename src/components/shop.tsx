import React from 'react'
import { shop_content } from '@/lib/data'
import { UseInViewMotion } from '@/lib/hooks'
import ProductCard from '@/components/productCard'
import ProductShow from '@/components/productShow'

export default function Shop() {
  return (
    <section className='flex flex-col justify-between items-center gap-24 lg:px-horizontal-padding-desktop px-horizontal-padding-mobile lg:py-section-desktop py-section-mobile'>
      <UseInViewMotion className='flex flex-col justify-between items-center gap-5' translate={{ y: -50 }}>
        <h2 className='lg:text-5xl text-4xl font-semibold font-primary'>{shop_content.title}</h2>
        <p className='lg:text-2xl text-xl font-normal font-secondary text-textDim'>{shop_content.discription}</p>
      </UseInViewMotion>
      <UseInViewMotion className='w-full flex flex-wrap justify-center gap-12' translate={{ y: 50 }}>
        {shop_content.products.map((product, index) => (
          <ProductShow key={index} product={product} />
        ))}
      </UseInViewMotion>
    </section>
  )
}
