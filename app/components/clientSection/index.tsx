import { InfiniteMovingCards } from './moving-cards';
import ClientBackground from '~/assets/backgrounds/client-background.png';
import FemalePlaceholder from '~/assets/other/placeholder-female.png';

export const ClientSection = () => {
  const testimonials = [
    {
      name: 'Jhonatan Albert',
      title: 'CEO',
      quote:
        'So far we are enjoy to stay in this house. Also amazing experience working together Coca Team. They are very passionate. ',
      rating: 4.0,
      image: FemalePlaceholder,
    },
    {
      name: 'Jhonatan Albert',
      title: 'CEO',
      quote:
        'So far we are enjoy to stay in this house. Also amazing experience working together Coca Team. They are very passionate. ',
      rating: 4.0,
      image: FemalePlaceholder,
    },
    {
      name: 'Jhonatan Albert',
      title: 'CEO',
      quote:
        'So far we are enjoy to stay in this house. Also amazing experience working together Coca Team. They are very passionate. ',
      rating: 4.0,
      image: FemalePlaceholder,
    },
    {
      name: 'Jhonatan Albert',
      title: 'CEO',
      quote:
        'So far we are enjoy to stay in this house. Also amazing experience working together Coca Team. They are very passionate. ',
      rating: 4.0,
      image: FemalePlaceholder,
    },
    {
      name: 'Jhonatan Albert',
      title: 'CEO',
      quote:
        'So far we are enjoy to stay in this house. Also amazing experience working together Coca Team. They are very passionate. ',
      rating: 4.0,
      image: FemalePlaceholder,
    },
  ];

  return (
    <div
      className='bg-cover bg-center w-full flex flex-col items-center justify-center py-20 lg:h-[80vh]'
      style={{ backgroundImage: `url(${ClientBackground})` }}
    >
      <div className='w-full h-auto lg:px-20 md:px-10 px-8 flex flex-col items-center mb-10'>
        <p className='text-white text-sm font-light bg-nexora-pink w-fit py-2 px-5 rounded-full'>
          Our Customer Review
        </p>

        <h1 className='text-white text-3xl font-bold text-center mt-5'>
          Our clients knows the value we provide
        </h1>

        <p className='text-center pt-2 text-white/60 font-thin text-sm'>
          We take great pride in the satisfaction of our clients, as evidenced
          by their
          <br />
          glowing feedback about our exceptional service.
        </p>
      </div>

      <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
        className=''
      />

      {/* <InfiniteMovingCards
                items={testimonials}
                direction="left"
                speed="normal"
                className="mt-5"
            /> */}
    </div>
  );
};
