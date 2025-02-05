import GlobeImage from '~/assets/other/globe-image.png';
import ExpertiseIcon from '~/assets/icons/expertise-icon.png';
import ClientIcon from '~/assets/icons/client-icon.png';
import ResultIcon from '~/assets/icons/results-icon.png';
import CollabIcon from '~/assets/icons/collab-icon.png';

import { AccordionComponent } from './accordion-component';

export const ChooseSection = () => {
  return (
    <div className='w-full h-auto'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
        {/* Left Section */}
        <div className='py-10 lg:py-20 px-6 sm:px-8 md:px-10 lg:px-20 flex flex-col justify-center '>
          <h1 className='text-white text-left font-bold text-3xl sm:text-4xl lg:text-5xl pb-10'>
            Why Choose Nexora?
          </h1>

          <AccordionComponent
            icon={ExpertiseIcon}
            isState={true}
            title='Expertise'
            description='Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.'
          />
          <AccordionComponent
            icon={ClientIcon}
            isState={false}
            title='Client-Centric Approach'
            description='We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.'
          />
          <AccordionComponent
            icon={ResultIcon}
            isState={false}
            title='Results-Driven Solutions'
            description='Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.'
          />
          <AccordionComponent
            icon={CollabIcon}
            isState={false}
            title='Collaborative Partnership'
            description='We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.'
          />
        </div>

        {/* Right Section - Globe Image */}
        <div className='hidden lg:flex justify-end items-center'>
          <img
            src={GlobeImage}
            className='w-full h-auto max-w-md sm:max-w-lg lg:max-w-full'
            alt='Globe'
          />
        </div>
      </div>

      {/* Divider */}
      <hr className='w-full border-t-2 border-nexora-shadow' />
    </div>
  );
};
