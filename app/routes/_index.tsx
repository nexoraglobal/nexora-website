import type { MetaFunction } from '@remix-run/node';
import { useRef } from 'react';
import {
  HeaderSection,
  HeroSection,
  PartnersSection,
  ChooseSection,
  ClientSection,
  ValueSection,
  FaqSection,
  ConnectSection,
  FooterSection,
} from '~/components';

export const meta: MetaFunction = () => {
  return [
    { title: 'Nexora Global' },
    { name: 'description', content: 'Welcome to Nexora Global!' },
  ];
};

export default function Index() {
  return (
    <div className=''>
      <HeroSection />
      <PartnersSection />
      <ChooseSection />
      <ClientSection />
      <ValueSection />
      <FaqSection />
      <ConnectSection />
    </div>
  );
}
