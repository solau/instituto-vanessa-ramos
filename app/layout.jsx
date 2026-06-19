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
  title: 'Vanessa Ramos | Mentoria para Mulheres que Decidiram Ocupar seu Trono',
  description: 'Descubra como vencer o medo de se expor, construir autoridade sem se sentir uma fraude e curar a síndrome da impostora no trabalho. Ocupe o seu lugar de direito.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${lato.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
