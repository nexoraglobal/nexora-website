import NexoraLogo from '~/assets/logo/nexora-logo.png';
import HamburgerIcon from '~/assets/icons/hamburger-icon.png';
import { RefObject, useState } from 'react';
import { Link } from '@remix-run/react';

export const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className='flex max-w-screen-xl mx-auto font-light md:text-sm items-center justify-between lg:px-0 md:px-10 lg:px-0 md:py-5 text-white z-[200] bg-nexora-dark font-glacier'>
        <img
          src={NexoraLogo}
          alt='Nexora'
          className='w-[110px] hidden md:block'
        />
        <div className='md:hidden w-full flex justify-between items-center z-50 bg-nexora-dark py-5 px-4'>
          <div>
            <img src={NexoraLogo} alt='Nexora' className='w-[110px]' />
          </div>
          <button
            className='bg-nexora-shadow p-2 rounded-md'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={HamburgerIcon} className='w-6 h-6' alt='Menu' />
          </button>
        </div>
        <nav
          className={`
            fixed top-0 left-0 w-full h-screen md:h-fit bg-nexora-shadow py-2 px-5 space-y-2 transition-transform duration-300 z-[100] flex flex-col md:flex-row gap-5 md:gap-0
            ${isMenuOpen ? 'translate-y-20' : '-translate-y-full'}
            md:relative md:translate-y-0 md:space-y-0 md:flex md:items-center md:space-x-5 lg:space-x-10 md:bg-transparent md:w-auto
          `}
        >
          <Link
            className='hover:text-nexora-pink text-white cursor-pointer transition-colors duration-300'
            to={'/'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Home
          </Link>
          <Link
            className='hover:text-nexora-pink text-white cursor-pointer transition-colors duration-300'
            to={'/services'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Services
          </Link>
          <Link
            className='hover:text-nexora-pink text-white cursor-pointer transition-colors duration-300'
            to={''}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Projects
          </Link>
          <Link
            className='hover:text-nexora-pink text-white cursor-pointer transition-colors duration-300'
            to={'/blogs'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Blogs
          </Link>
          <Link
            className='hover:text-nexora-pink text-white cursor-pointer transition-colors duration-300'
            to={''}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            About&nbsp;Us
          </Link>
          <Link
            className='hover:text-nexora-pink text-white cursor-pointer transition-colors duration-300'
            to={''}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Careers
          </Link>
          <Link
            className='hover:text-nexora-pink text-white cursor-pointer md:hidden transition-colors duration-300'
            to={''}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Contact&nbsp;Us
          </Link>
        </nav>

        <Link
          className='hidden md:block cursor-pointer text-white bg-nexora-pink rounded-md px-5 py-2 hover:bg-nexora-pink/80 transition-colors duration-300'
          to={''}
        >
          Contact&nbsp;Us
        </Link>
      </header>
    </div>
  );
};
