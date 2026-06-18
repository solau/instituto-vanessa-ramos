import { Lato, Playfair_Display } from 'next/font/google';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  title: 'Instituto Vanessa Ramos | Liderança & Soberania Feminina',
  description: 'Especialista em transformação de mentalidade e estratégia de carreira de alto padrão para mulheres de elite.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${lato.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
