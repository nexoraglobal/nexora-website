interface IServiceComponent {
  icon: string;
  title: string;
  description: string;
}

export const ServiceComponent: React.FC<IServiceComponent> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="rounded-xl border border-white border-opacity-20 md:px-8 md:py-10 py-8 px-5">
      <img
        src={icon}
        alt="Custom Service"
        className="bg-nexora-pink p-1 rounded w-[30px]"
      />
      <h1 className=" text-white font-semibold text-lg pt-2">{title}</h1>
      <p className="text-left pt-2 text-white text-opacity-30 font-thin text-sm">
        {description}
      </p>
    </div>
  );
};
