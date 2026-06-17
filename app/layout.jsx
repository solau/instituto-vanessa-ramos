import './globals.css';

export const metadata = {
  title: 'Instituto Vanessa Ramos | Liderança & Soberania Feminina',
  description: 'Especialista em transformação de mentalidade e estratégia de carreira de alto padrão para mulheres de elite.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
