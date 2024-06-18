import React from 'react';
import { IconCoffee } from '@tabler/icons-react';
import { IconSnowflake } from '@tabler/icons-react';


interface ScrollingTextProps {
  icon: React.ReactNode | string;
  text: string;
}

const ScrollingText = ({ icon, text }: ScrollingTextProps) => (
  <div className='flex flex-row overflow-hidden parent'>
    {Array(16).fill(null).map((_, index) => (
      <div key={index} className='flex flex-row items-center gap-2.5 pr-12 animate-scroll text-nowrap'>
        <div className='text-3xl'>{icon}</div>
        <div className='text-3xl font-bold font-primary'>{text}</div>
      </div>
    ))}
  </div>
);

export default function Slider() {
  const data = [
    { icon: <IconSnowflake stroke={1.5} size={30} />, text: '24H COLD' },
    { icon: <IconCoffee stroke={1.5} size={30} />, text: '12H HOT' },
  ];

  return (
    <section className='py-12 gap-12 bg-gradient-to-b from-secondaryHover to-primaryHover flex flex-col items-center'>
      <div className='flex flex-col gap-12 w-full'>
        {data.map((item, index) => (
          <ScrollingText key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </section>
  );
}
