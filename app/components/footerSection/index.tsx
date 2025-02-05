import NexoraWhiteLogo from '~/assets/logo/nexora-white-logo.png';
import LinkedInIcon from '~/assets/icons/linkedin-icon.png';
import FacebookIcon from '~/assets/icons/facebook-icon.png';
import InstagramIcon from '~/assets/icons/instagram-icon.png';
import TicTokIcon from '~/assets/icons/tictok-icon.png';

export const FooterSection = () => {
  return (
    <footer className='bg-black'>
      <div className='grid grid-cols-2 md:grid-cols-6 gap-10 px-5 md:px-20 lg:px-40 pt-10 pb-5'>
        {/* Logo and Description */}
        <div className='col-span-2'>
          {/* <img src={NexoraLogo} alt="logo" className="h-auto w-36" /> */}
          <p className='text-white/60 font-thin text-sm text-justify'>
            At Nexora Global, we specialize in delivering innovative and
            scalable software solutions tailored to empower businesses
            worldwide. With a team of experienced professionals and a focus on
            cutting-edge technology, we transform ideas into impactful digital
            products.
          </p>
        </div>

        {/* Quick Links */}
        <div className='md:col-span-1'>
          <h1 className='text-white/60 font-medium text-sm'>Quick Links</h1>
          <div className='mt-5 flex flex-col space-y-2'>
            {[
              'Home',
              'Services',
              'Projects',
              'Blogs',
              'About Us',
              'Careers',
              'Contact Us',
            ].map((link, index) => (
              <a
                key={index}
                href='#'
                className='text-white/60 font-thin text-sm hover:text-white hover:text-opacity-100 transition'
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className='md:col-span-1'>
          <h1 className='text-white/60 font-medium text-sm'>Support</h1>
          <div className='mt-5 flex flex-col space-y-2'>
            {['FAQ', 'Privacy Policy', 'Terms & Conditions'].map(
              (link, index) => (
                <a
                  key={index}
                  href='#'
                  className='text-white/60 font-thin text-sm hover:text-white hover:text-opacity-100 transition'
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>

        {/* Contact */}
        <div className='col-span-2'>
          <h1 className='text-white/60 font-medium text-sm'>Contact</h1>
          <div className='mt-5 flex flex-col space-y-2'>
            <div className='flex gap-1 items-center text-white/60'>
              Phone:
              <a
                href='tel:+94782042824'
                className='text-white/60 font-thin text-sm hover:text-white'
              >
                +94 78 204 2824
              </a>
              |
              <a
                href='tel:+94112655284'
                className='text-white/60 font-thin text-sm hover:text-white'
              >
                +94 11 265 5284
              </a>
            </div>
            <div className='flex gap-1 text-white/60 items-center'>
              Email:
              <a
                href='mailto:info@nexora.global'
                className='text-white/60 font-thin text-sm hover:text-white'
              >
                info@nexora.global
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Social Links and Locations */}
      <div className='flex flex-col md:flex-row justify-between items-center px-5 md:px-20 lg:px-40 pb-5'>
        <h1 className='text-white/60 font-medium text-sm text-center md:text-left'>
          SRI LANKA • UK • USA
        </h1>

        <div className='flex space-x-4 mt-4 md:mt-0'>
          <a href='/'>
            <img
              src={LinkedInIcon}
              alt='social-icon'
              className='h-8 w-8 hover:scale-110 transition-all duration-300'
            />
          </a>
          <a href='/'>
            <img
              src={FacebookIcon}
              alt='social-icon'
              className='h-8 w-8 hover:scale-110 transition-all duration-300'
            />
          </a>
          <a href='/'>
            <img
              src={InstagramIcon}
              alt='social-icon'
              className='h-8 w-8 hover:scale-110 transition-all duration-300'
            />
          </a>
          <a href='/'>
            <img
              src={TicTokIcon}
              alt='social-icon'
              className='h-8 w-8 hover:scale-110 transition-all duration-300'
            />
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <div>
        <h1 className='text-center text-white/60 font-medium text-xs pb-10'>
          © 2025 • All rights reserved to Nexora Global (Pvt) Ltd.
        </h1>
      </div>
      <img
        src={NexoraWhiteLogo}
        alt='logo'
        className='px-10 md:px-20 lg:px-40 opacity-50'
      />
    </footer>
  );
};
