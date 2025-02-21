import { motion } from 'framer-motion';
import { LampContainer } from '~/components/lamp';

const Services = () => {
  const servicesList = [
    {
      title: 'Web App Development',
      description:
        'Deliver engaging, user-friendly web applications built for performance, scalability, and superior user experience.',
      key_features: ['Responsive', 'Cross-platform', 'Secure', 'Scalable'],
      icon: '/services/4.svg',
    },
    {
      title: 'Mobile App Development',
      description:
        'Empower your business with mobile apps that offer seamless user experiences on iOS and Android platforms.',
      key_features: ['Intuitive', 'Native and hybrid', 'Optimized'],
      icon: '/services/1.svg',
    },
    {
      title: 'UI/UX Design',
      description:
        'Create stunning designs that deliver meaningful user experiences and foster customer engagement.',
      key_features: ['Wireframing', 'Prototyping', 'User journey optimization'],
      icon: '/services/3.svg',
    },
    {
      title: 'Cybersecurity Solutions',
      description:
        'Protect your business from cyber threats with advanced security measures, risk assessments, and proactive monitoring.',
      key_features: ['Threat detection', 'Encryption', 'Penetration testing'],
      icon: '/services/2.svg',
    },
    {
      title: 'AI & Machine Learning',
      description:
        'Leverage the power of artificial intelligence to automate tasks, analyze data, and make intelligent business decisions.',
      key_features: ['Predictive', 'NLP', 'AI automation'],
      icon: '/services/7.svg',
    },
    {
      title: 'Cloud Solutions',
      description:
        'Optimize your operations with scalable and secure cloud-based technologies tailored for efficiency and collaboration.',
      key_features: ['Migration', 'Scalability', 'Security', 'Cost-effective'],
      icon: '/services/5.svg',
    },
    {
      title: 'SEO Optimization',
      description:
        'Enhance your online visibility and drive organic traffic with our expert SEO strategies tailored for your business growth.',
      key_features: [
        'Keyword research',
        'Optimization',
        'performance tracking',
      ],
      icon: '/services/6.svg',
    },
    {
      title: 'Tech Consulting',
      description:
        'Get expert advice on navigating complex tech challenges and unlocking your business potential.',
      key_features: ['Strategic', 'Architecture', 'Risk mitigation'],
      icon: '/services/6.svg',
    },
  ];

  return (
    <div className=' text-white max-w-screen-xl mx-auto pb-10'>
      {/* Fixed Left Section */}
      <LampContainer className=''>
        <motion.div
          initial={{ opacity: 0, y: 350 }}
          whileInView={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className=' px-10 flex flex-col justify-center items-center gap-5 py-20 h-[10vh] lg:h-[60vh]'
        >
          <div className='text-3xl md:text-7xl font-bold font-glacier'>
            Our Services
          </div>
          <div className='text-white/60 text-base md:text-lg max-w-screen-sm text-center'>
            We are committed to providing cutting-edge software solutions that
            drive growth and innovation. Explore our diverse range of services
            designed to meet your business needs.
          </div>
        </motion.div>
      </LampContainer>
      {/* Scrollable Right Section */}
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gridcards mx-5 relative'>
        {servicesList.map((service) => (
          <div
            key={service.title}
            className='p-10 flex flex-col items-center justify-start border border-white/30 rounded-xl group bg-nexora-shadow/50  gridcard'
          >
            <div className='flex gap-5'>
              <img
                src={service.icon}
                alt={service.title}
                className='w-12 h-12 aspect-square my-5 transition-all duration-300 '
              />
              <div className='flex flex-col justify-start items-start'>
                <div className='font-bold text-lg'>{service.title}</div>
                <div className='text-white/60 text-sm '>
                  {service.description}
                </div>
              </div>
            </div>
            <div className='flex flex-wrap gap-2 mt-4'>
              {service.key_features.map((feature) => (
                <div
                  key={feature}
                  className='text-xs text-white/40 border border-white/30 rounded-full keyfeature'
                >
                  <div className='relative z-10 h-full w-full flex items-center'>
                    {feature}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
