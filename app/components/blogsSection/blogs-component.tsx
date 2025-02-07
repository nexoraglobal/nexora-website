interface IBlogCardProps {
    icon: string;
    title: string;
    description: string;
  }
  
  export const ServiceCard: React.FC<IBlogCardProps> = ({ icon, title, description }) => {
    return (
      <div className="rounded-xl border border-white border-opacity-20 md:px-8 md:py-10 py-8 px-5 hover:shadow-2xl transform transition-all duration-300 ease-in-out">
        {/* Icon */}
        <div className="flex items-center justify-center mb-4">
          <img src={icon} alt={title} className="bg-nexora-pink p-1 rounded w-[30px]" />
        </div>
        
        {/* Title */}
        <h1 className="text-white font-semibold text-lg pt-2">{title}</h1>
  
        {/* Description */}
        <p className="text-left pt-2 text-white text-opacity-30 font-thin text-sm">{description}</p>
      </div>
    );
  };
  