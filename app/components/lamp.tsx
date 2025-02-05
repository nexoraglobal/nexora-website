'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '~/lib/utils';

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
      >
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative flex min-h-[50vh] md:min-h-[50vh] lg:min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-nexora-dark w-full rounded-md z-0',
        className
      )}
    >
      <div className='relative flex w-full flex-1 items-center justify-center isolate z-0 '>
        {/* web */}
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          animate={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className='hidden md:block absolute inset-auto right-1/2 h-56 overflow-visible w-[50rem] bg-nexora-dark from-nexora-pink via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'
        >
          <div className='absolute  w-[100%] left-0 bg-nexora-dark h-80 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
          <div className='absolute  w-40 h-[100%] left-0 bg-nexora-dark  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          animate={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className='hidden md:block absolute inset-auto left-1/2 h-56 w-[50rem] bg-nexora-dark from-transparent via-transparent to-nexora-pink text-white [--conic-position:from_290deg_at_center_top]'
        >
          <div className='absolute  w-40 h-[100%] right-0 bg-nexora-dark  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]' />
          <div className='absolute  w-[100%] right-0 bg-nexora-dark h-80 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
        </motion.div>
        {/* mobile */}
        <motion.div
          initial={{ opacity: 0.5, width: '5rem' }}
          animate={{ opacity: 1, width: '20rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className='md:hidden block absolute inset-auto right-1/2 h-56 overflow-visible w-[50rem] bg-nexora-dark from-nexora-pink via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'
        >
          <div className='absolute  w-[100%] left-0 bg-nexora-dark h-80 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
          <div className='absolute  w-40 h-[100%] left-0 bg-nexora-dark  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: '5rem' }}
          animate={{ opacity: 1, width: '20rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className=' md:hidden block absolute inset-auto left-1/2 h-56 w-[50rem] bg-nexora-dark from-transparent via-transparent to-nexora-pink text-white [--conic-position:from_290deg_at_center_top]'
        >
          <div className='absolute  w-40 h-[100%] right-0 bg-nexora-dark  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]' />
          <div className='absolute  w-[100%] right-0 bg-nexora-dark h-80 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
        </motion.div>
        <div className='absolute top-[80%] h-48 w-full scale-x-150 bg-nexora-dark blur-2xl'></div>
        <div className='absolute top-[80%] z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
        <div className='absolute inset-auto z-50 h-32 w-[28rem] -translate-y-1/2 rounded-full bg-nexora-pink opacity-50 blur-3xl'></div>
        <motion.div
          initial={{ width: '8rem' }}
          animate={{ width: '16rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='hidden md:block absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-nexora-dark blur-2xl'
        ></motion.div>
        <motion.div
          initial={{ width: '15rem' }}
          animate={{ width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='hidden md:block absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-nexora-pink '
        ></motion.div>
        {/* mobile */}
        <motion.div
          initial={{ width: '3rem' }}
          animate={{ width: '10rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='md:hidden block absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-nexora-dark blur-2xl'
        ></motion.div>
        <motion.div
          initial={{ width: '5rem' }}
          animate={{ width: '20rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='md:hidden block absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-nexora-pink '
        ></motion.div>
      </div>

      <div className='absolute z-50 flex flex-col items-center px-5 '>
        {children}
      </div>
    </div>
  );
};
