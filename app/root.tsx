import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import type { LinksFunction } from '@remix-run/node';

import './tailwind.css';
import { FooterSection, HeaderSection } from './components';
import ComingSoon from './components/comingSoonSection';

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='/icon.png' type='image/x-icon' />
        <Meta />
        <Links />
      </head>
      <body>
        {/* <HeaderSection />
        <div className='min-h-[90vh] '>{children}</div>
        <FooterSection /> */}
        {/* <ScrollRestoration />
        <Scripts /> */}
        <ComingSoon/>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
