interface IConnectComponentProps {
  onClickHandler: () => void;
}
export const ConnectComponent: React.FC<IConnectComponentProps> = ({
  onClickHandler,
}) => {
  return (
    <div>
      <h1 className="text-white text-5xl md:text-6xl lg:text-8xl font-normal leading-tight">
        Let's
        <br />
        Connect
      </h1>
      <div className="hidden lg:inline-flex w-fit  mt-10 px-8 lg:px-10 bg-nexora-pink hover:bg-opacity-80 p-5 rounded-full items-center cursor-pointer" onClick={onClickHandler}>
        <p className="text-white me-2 text-sm md:text-base">
          Leave us a message
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-5 h-5 md:w-6 md:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};
