import type {Metadata} from 'next';
import { Cinzel, Poppins } from 'next/font/google';
import './globals.css'; // Global styles

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Janaína Melo - Molde F1 Expert',
  description: 'Curso especializado em alongamento de unhas com Molde F1 por Janaína Melo.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${cinzel.variable} ${poppins.variable}`}>
      <body suppressHydrationWarning className="font-poppins antialiased">{children}</body>
    </html>
  );
}
