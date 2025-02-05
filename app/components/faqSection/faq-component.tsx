import { useState } from 'react';

interface IFAQComponent {
  title: string;
  description: string;
}

export const FAQComponent: React.FC<IFAQComponent> = ({
  title,
  description,
}) => {
  const [isSate, setIsSate] = useState(false);

  const toggleState = () => {
    setIsSate(!isSate);
  };

  return (
    <div className='border-b-2 border-nexora-shadow  py-5 mt-5 grid grid-cols-5 select-none'>
      <div className='col-span-4'>
        <h1 className='text-white  text-lg'>{title}</h1>
        <p
          className={`${
            isSate ? 'block' : 'hidden'
          } text-left mt-2 pt-2 text-white/60 font-thin text-sm`}
        >
          {description}
        </p>
      </div>
      <div className='col-span-1 justify-self-end'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2'
          stroke='white'
          className={`${
            isSate ? 'hidden' : 'block'
          } size-5 bg-slate-600 rounded p-1 cursor-pointer`}
          onClick={toggleState}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 4.5v15m7.5-7.5h-15'
          />
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='black'
          className={`${
            isSate ? 'block' : 'hidden'
          } size-5 bg-white/60 rounded p-1 cursor-pointer`}
          onClick={toggleState}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
        </svg>
      </div>
    </div>
  );
};
