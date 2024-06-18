'use client'

import { useState } from 'react';
import { useRef, ReactNode } from 'react';
import { useInView } from 'framer-motion';

interface useInViewMotionProps {
  children: ReactNode;
  className?: string;
  translate?: { x?: number; y?: number };
  duration?: string;
  delay?: string;
  easing?: string;
}

export function UseInViewMotion({
  children,
  className,
  translate = { x: 0, y: 0 },
  duration = '800ms',
  delay = '500ms',
  easing = 'cubic-bezier(0.17, 0.55, 0.55, 1)',
}: useInViewMotionProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });

  const translateX = translate.x ?? 0;
  const translateY = translate.y ?? 0;

  return (
    <div
      ref={ref}
      className={`${className} transition-transform`}
      style={{
        transform: inView ? 'none' : `translate(${translateX}px, ${translateY}px)`,
        opacity: inView ? 1 : 0,
        transition: `transform ${duration} ${easing} ${delay}, opacity ${duration} ${easing} ${delay}`,
      }}
    >
      {children}
    </div>
  )
}

export function UseToggle(initialState: boolean = false) {
  const [isToggled, setIsToggled] = useState(initialState);

  const toggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return [isToggled, toggle] as const;
}