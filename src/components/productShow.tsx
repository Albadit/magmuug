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
        <Image src={src} alt={alt} className='h-[300px] w-auto p-5' />
      </div>
      <div className='flex flex-col gap-3 w-full'>
        <p className='text-lg font-semibold font-primary text-center'>{name}</p>
      </div>
    </div>
  );
}
