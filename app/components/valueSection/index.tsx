import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  from: number;
  to: number;
  duration: number;
}

const Counter = ({ from, to, duration }: CounterProps) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view.

  useEffect(() => {
    if (!isInView) return;

    const stepTime = 1000 / 120; // 60 FPS.
    const steps = Math.round((duration * 1000) / stepTime);
    const increment = (to - from) / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount((prev) => Math.min(to, prev + increment));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(to);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [from, to, duration, isInView]);

  return (
    <motion.h1
      ref={ref}
      className='text-nexora-pink text-4xl md:text-5xl lg:text-7xl text-center font-bold'
    >
      {Math.floor(count)}
    </motion.h1>
  );
};

export const ValueSection = () => {
  return (
    <div className='h-auto px-6 sm:px-8 md:px-10 lg:px-20 py-20'>
      <div className='max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 px-4 sm:px-6 md:px-10 lg:px-0'>
        {/* Left Section */}
        <div className='col-span-1 flex items-center justify-center lg:justify-start'>
          <h1 className='text-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-center lg:text-left'>
            We focus on value <br /> and impact
          </h1>
        </div>

        {/* Right Section */}
        <div className='col-span-1 flex flex-col md:flex-row justify-evenly items-center gap-6 lg:gap-0 text-center lg:text-left'>
          {/* Counter 1 */}
          <div>
            <div className=' flex gap-1 text-nexora-pink text-3xl  lg:text-6xl items-center text-center font-bold'>
              <Counter from={0} to={300} duration={3} />+
            </div>
            <p className='text-center text-white text-opacity-60 font-thin text-sm md:text-base'>
              Digital projects
            </p>
          </div>

          {/* Counter 2 */}
          <div>
            <div className=' flex gap-1 text-nexora-pink text-3xl lg:text-6xl items-center text-center font-bold'>
              <Counter from={0} to={20} duration={2} />+
            </div>

            <p className='text-center text-white text-opacity-60 font-thin text-sm md:text-base'>
              Countries of work
            </p>
          </div>

          {/* Counter 3 */}
          <div>
            <div className=' flex gap-1 text-nexora-pink text-3xl lg:text-6xl items-center text-center font-bold'>
              <Counter from={0} to={75} duration={2.5} />+
            </div>

            <p className='text-center text-white text-opacity-60 font-thin text-sm md:text-base'>
              of clients remain
            </p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className='w-full border-t-2 border-nexora-shadow mt-12 md:mt-16 lg:mt-20' />
    </div>
  );
};
