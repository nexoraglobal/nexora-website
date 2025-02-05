import { ConnectComponent } from './connect-component';

export const ConnectSection = () => {
  return (
    <div className='w-full h-auto my-20 px-5 lg:px-32 md:px-16 items-center'>
      <div className='grid grid-cols-1 lg:grid-cols-10 gap-10'>
        {/* Connect Section */}
        <div className='lg:col-span-4 flex flex-col  lg:hidden mb-10'>
          <ConnectComponent />
        </div>

        {/* Form Section */}
        <div className='lg:col-span-6 text-white'>
          <form className='w-full space-y-5'>
            <div>
              <label
                className='block text-sm font-medium text-white'
                htmlFor='name'
              >
                Your Name
              </label>
              <input
                type='text'
                id='name'
                name='name'
                className='mt-1 block w-full border-b border-white border-opacity-30 bg-transparent focus:outline-none focus:border-white'
                required
              />
            </div>
            <div>
              <label
                className='block text-sm font-medium text-white'
                htmlFor='email'
              >
                Email Address
              </label>
              <input
                type='email'
                id='email'
                name='email'
                className='mt-1 block w-full border-b border-white border-opacity-30 bg-transparent focus:outline-none focus:border-white'
                required
              />
            </div>
            <div>
              <label
                className='block text-sm font-medium text-white'
                htmlFor='phone'
              >
                Phone Number (optional)
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                className='mt-1 block w-full border-b border-white border-opacity-30 bg-transparent focus:outline-none focus:border-white'
              />
            </div>
            <div>
              <label
                className='block text-sm font-medium text-white'
                htmlFor='message'
              >
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={5}
                className='mt-1 block w-full border-b border-white border-opacity-30 bg-transparent focus:outline-none focus:border-white'
                required
              />
            </div>
          </form>
        </div>

        {/* Connect Section */}
        <div className='lg:col-span-4 lg:flex flex-col lg:ms-10 hidden'>
          <ConnectComponent />
        </div>
        <div className='flex lg:hidden w-fit  mt-10 px-8 lg:px-10 bg-nexora-pink p-5 rounded-full items-center'>
          <p className='text-white me-2 text-sm md:text-base'>
            Leave us a message
          </p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='white'
            className='w-5 h-5 md:w-6 md:h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
