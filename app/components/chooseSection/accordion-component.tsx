import { useState } from 'react';

interface IAccordionComponent {
  icon: string;
  isState: boolean;
  title: string;
  description: string;
}

export const AccordionComponent: React.FC<IAccordionComponent> = ({
  icon,
  isState: initialIsState,
  title,
  description,
}) => {
  const [isState, setIsState] = useState(initialIsState);

  const toggleState = () => {
    setIsState(!isState);
  };

  return (
    <div className='mt-5'>
      <button
        className='flex justify-between items-center cursor-pointer w-full'
        onClick={toggleState}
      >
        <div className='flex gap-5'>
          <img
            src={icon}
            className='bg-nexora-pink rounded-r-full rounded-bl-full p-1.5 w-8 h-fit aspect-square hidden md:block'
          />
          <h1 className='text-white text-left font-semibold text-2xl '>
            {title}
          </h1>
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='rgba(255, 255, 255, 0.3)'
          className={`${isState ? 'block' : 'hidden'} size-5`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m4.5 15.75 7.5-7.5 7.5 7.5'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='rgba(255, 255, 255, 0.3)'
          className={`${isState ? 'hidden' : 'block'} size-5`}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='m19.5 8.25-7.5 7.5-7.5-7.5'
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-max-height ${
          isState ? 'max-h-screen' : 'max-h-0'
        } mt-1`}
      >
        <p className='text-left pt-2 text-white/60 font-thin text-sm md:pl-12'>
          {description}
        </p>
      </div>
    </div>
  );
};
