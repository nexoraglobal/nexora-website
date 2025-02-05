import PartnerOne from '~/assets/partners/1.png';
import PartnerTwo from '~/assets/partners/2.png';
import PartnerThree from '~/assets/partners/3.png';
import PartnerFour from '~/assets/partners/4.png';
import PartnerFive from '~/assets/partners/5.png';
import PartnerSix from '~/assets/partners/6.png';
import { motion } from 'framer-motion';

export const PartnersSection = () => {
  return (
    <motion.div className=' h-auto mt-10  '>
      <div className='max-w-screen-xl mx-auto md:px-10 px-8'>
        <div className='flex  items-center justify-center -mt-16 mb-8'>
          <p className='text-nexora-pink text-sm w-fit px-5 py-3 rounded-full  bg-nexora-shadow'>
            Trusted by 100+ Companies
          </p>
        </div>
        <motion.div className=' grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 lg:flex items-center justify-between place-items-center'>
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            src={PartnerOne}
            alt='Partner Logo'
            className='w-28 md:w-40 grayscale hover:grayscale-0  transition-all duration-300'
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.1 }}
            src={PartnerTwo}
            alt='Partner Logo'
            className='w-28 md:w-32 grayscale hover:grayscale-0  transition-all duration-300'
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
            src={PartnerThree}
            alt='Partner Logo'
            className='w-28 md:w-20 grayscale hover:grayscale-0  transition-all duration-300'
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.3 }}
            src={PartnerFour}
            alt='Partner Logo'
            className='w-28 md:w-20 grayscale hover:grayscale-0  transition-all duration-300'
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.4 }}
            src={PartnerFive}
            alt='Partner Logo'
            className='w-28 md:w-28 grayscale hover:grayscale-0  transition-all duration-300'
          />
          <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            src={PartnerSix}
            alt='Partner Logo'
            className='w-28 md:w-40 grayscale hover:grayscale-0  transition-all duration-300'
          />
        </motion.div>
      </div>
      <hr className='w-full border-t-2 border-nexora-shadow mt-10' />
    </motion.div>
  );
};
