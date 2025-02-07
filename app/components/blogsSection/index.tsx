import CustomService from '~/assets/services/custom-service.png';
import WebService from '~/assets/services/web-service.png';
import MobileService from '~/assets/services/mobile-service.png';
import AiMlService from '~/assets/services/ai-ml-service.png';
import CloudService from '~/assets/services/cloud-service.png';
import TechService from '~/assets/services/tech-service.png';
import { ServiceCard } from './blogs-component'; // Import the ServiceCard component

export const ServicesSection = () => {
  return (
    <div className="w-full h-auto mt-10 lg:px-20 md:px-10 px-8">
      <h1 className="text-white text-center font-bold text-2xl">Our Services</h1>
      <h1 className="text-center pt-2 text-white text-opacity-30 font-thin text-sm">
        Transform your brand with our innovative digital solutions that captivate and engage your audience.
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-8 px-10">
          {/* Using ServiceCard Component */}
          <ServiceCard
            icon={CustomService}
            title="Custom Software Development"
            description="We build robust, scalable, and custom software solutions to solve unique business challenges."
          />
          <ServiceCard
            icon={WebService}
            title="Web Application Development"
            description="Engage your audience with powerful, user-friendly web apps that elevate your digital presence."
          />
          <ServiceCard
            icon={MobileService}
            title="Mobile App Development"
            description="Reach your customers on the go with seamless mobile experiences for iOS and Android."
          />
          <ServiceCard
            icon={AiMlService}
            title="AI & Machine Learning"
            description="Harness the power of AI with predictive analytics, chatbots, and intelligent automation tailored to your business needs."
          />
          <ServiceCard
            icon={CloudService}
            title="Cloud Consultation"
            description="Optimize your business operations with scalable and secure cloud-based technologies."
          />
          <ServiceCard
            icon={TechService}
            title="Tech Consultation"
            description="Leverage expert advice and strategic insights to navigate complex tech challenges and make the right decisions for growth."
          />
        </div>
      </div>
      <hr className="w-full border-t-2 border-nexora-shadow mt-10" />
    </div>
  );
};
