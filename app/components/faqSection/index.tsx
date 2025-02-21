import { FAQComponent } from './faq-component';

export const FaqSection = () => {
  return (
    <div className='w-full h-[80vh] mt-10 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60 flex flex-col justify-between'>
      <div>
        <h1 className='text-white text-center font-bold md:text-6xl text-2xl py-10'>
          FAQ
        </h1>

        {/* FAQ Items */}
        <div className='space-y-6'>
          <FAQComponent
            title='What industries do you serve?'
            description='We work across retail, healthcare, finance, logistics, and more.'
          />
          <FAQComponent
            title="What's your typical project timeline?"
            description='Our typical project timeline varies depending on the scope, but we aim to deliver within 6-12 weeks.'
          />
          <FAQComponent
            title='Do you provide post-launch support?'
            description='Yes, we offer ongoing support and maintenance to ensure your solution runs smoothly.'
          />
          <FAQComponent
            title='Is there a free trial available?'
            description='Yes, we offer a free trial for select services. Contact us to learn more.'
          />
        </div>
      </div>
      {/* Additional Support Section */}
      <div id="contact-section" className='p-10 text-center'>
        <h1 className='text-white text-xl sm:text-2xl font-light'>
          Still have questions?
        </h1>
        <p className='text-white text-opacity-60 font-thin text-sm mt-2'>
          Get in touch with our team for personalized support.
        </p>
        <div className='flex justify-center mt-6'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='#fd6b5c'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
