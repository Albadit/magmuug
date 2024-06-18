import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface Product {
  src: string | StaticImageData;
  alt: string;
  name: string;
  price: number;
  discountedPrice?: number;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { src, alt, name, price, discountedPrice } = product;

  return (
    <div className='flex flex-col justify-between items-center rounded-card gap-2 p-5 max-w-[350px] w-full h-full bg-gradient-to-b from-primaryHover to-[#fff] shadow-lg'>
      <div className='grow flex flex-row justify-between items-center'>
        <Image src={src} alt={alt} className='h-[200px] w-auto p-5' />
      </div>
      <div className='flex flex-col gap-3 w-full'>
        <p className='text-lg font-semibold font-primary'>{name}</p>
        <div className='flex flex-row justify-between items-center gap-2'>
          <div className='flex flex-row justify-between items-center gap-2 w-fit text-center border-2 px-3 py-1 rounded-full tracking-[5px] font-primary'>
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <div className='flex flex-col gap-1'>
            {discountedPrice && <p className='font-primary font-semibold text-base text-textDim line-through'>${price} USD</p>}
            <p className='font-primary font-semibold text-lg'>${discountedPrice ?? price} USD</p>
          </div>
        </div>
        <button className='font-primary font-semibold text-textSecondary rounded-full bg-secondary py-1.5 px-2.5'>Add in cart</button>
      </div>
    </div>
  );
}
