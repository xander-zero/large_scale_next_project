import './globals.css';
import { Figtree } from 'next/font/google';
import localFont from 'next/font/local';

const figtree = Figtree({
  display: 'swap', // render text html and execute fonts
  subsets: ['latin'], //just select latin characters
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-figtree',
});

const iransans = localFont({
  src: [
    {
      path: '../../public/fonts/iransans/IRANSansXFaNum-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iransans/IRANSansXFaNum-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iransans/IRANSansXFaNum-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iransans/IRANSansXFaNum-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iransans/IRANSansXFaNum-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/iransans/IRANSansXFaNum-Black.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-iransans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" className={`${figtree.variable} ${iransans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
