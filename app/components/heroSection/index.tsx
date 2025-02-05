import HeroBackground from '~/assets/backgrounds/hero.png';
import { motion } from 'framer-motion';
export const HeroSection = () => {
  return (
    <div
      className='bg-cover bg-center w-full flex items-center justify-center h-[50vh] lg:h-[90vh] select-none'
      style={{
        backgroundImage: `url(${HeroBackground})`,
      }}
    >
      <div className={`text-center text-white font-glacier px-4`}>
        <h1 className='text-2xl md:text-5xl lg:text-6xl font-bold'>
          <motion.div
            initial={{ opacity: 0, y: 350 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Empowering Brands with
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 350 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Visionary
            <span className='text-nexora-pink'> Digital Solutions.</span>
          </motion.div>
        </h1>
        <motion.div
          initial={{ opacity: 0, y: 350 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className='mt-8 flex flex-row gap-4 justify-center px-4 text-sm md:text-lg'
        >
          <button className='min-w-[146px] px-4 py-2 bg-transparent border border-nexora-pink hover:border-nexora-pink/80 text-white transition rounded-lg'>
            Our Projects
          </button>
          <button className='min-w-[146px] px-4 py-2  bg-nexora-pink text-white hover:bg-nexora-pink/80 transition-colors duration-300 rounded-lg'>
            Contact Us
          </button>
        </motion.div>
      </div>
    </div>
  );
};
