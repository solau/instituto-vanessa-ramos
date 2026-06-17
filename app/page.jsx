export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>Forjando a Soberania e a Liderança Feminina</h1>
          <p>
            Vanessa Ramos &mdash; Especialista em transformação de mentalidade e estratégia de carreira de alto padrão para líderes e executivas.
          </p>
        </div>
      </section>

      {/* 2. A Filosofia do Instituto */}
      <section className="philosophy-section">
        <div className="container">
          <h2>Nossa Filosofia</h2>
          <p>
            A verdadeira liderança não nasce apenas da execução de estratégias técnicas, mas do domínio interno e da segurança inabalável. No Instituto Vanessa Ramos, compreendemos que, antes de liderar o mercado, uma mulher precisa resgatar sua autoconfiança e estabelecer a clareza de seus limites inegociáveis.
          </p>
          <p>
            Nosso método antecede as táticas de carreira. Trabalhamos na raiz: a restauração da mentalidade e o encorajamento profundo. É a partir de uma identidade curada e de um posicionamento seguro que construímos o caminho para que sua trajetória profissional alcance o mais alto nível de excelência e reconhecimento.
          </p>
        </div>
      </section>

      {/* 3. O Ecossistema de Soluções */}
      <section className="services-section">
        <div className="container">
          <h2>Ecossistema de Soluções</h2>
          <div className="services-grid">
            
            <div className="service-card">
              <h3>O Trono da Realizadora</h3>
              <p>
                Uma formação premium e exclusiva de 6 meses, meticulosamente desenhada para a restauração da sua identidade, resgate do seu poder pessoal e elevação imediata da sua postura executiva no mercado.
              </p>
              <a href="#" className="btn-gold">Conhecer a Formação</a>
            </div>

            <div className="service-card">
              <h3>Palestras &amp; Treinamentos Corporativos</h3>
              <p>
                Espaço dedicado a corporações visionárias que desejam levar a metodologia de Vanessa Ramos para desenvolver suas próprias líderes internamente, fomentando ambientes de alta performance e propósito.
              </p>
              <a href="mailto:contato@institutovanessaramos.com" className="btn-gold">Solicitar Proposta</a>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Quem é Vanessa Ramos */}
      <section className="about-section">
        <div className="container">
          <h2>Sobre Vanessa Ramos</h2>
          <p>
            Com uma trajetória pautada pela excelência e sustentada por uma base inegociável de fé e resiliência, Vanessa Ramos consolidou-se como a bússola para o desenvolvimento feminino. Sua atuação vai muito além da mentoria: é um suporte contínuo focado no encorajamento estratégico de mulheres de elite.
          </p>
          <p>
            Seu legado é forjado através do impacto real e da transformação profunda, guiando executivas e líderes a reassumirem suas posições de direito, tanto em suas vidas pessoais quanto no ápice de suas carreiras.
          </p>
          <div className="stats">
            +500 Mulheres treinadas, mentoradas e elevadas a novos patamares.
          </div>
        </div>
      </section>

      {/* 5. Footer Institucional */}
      <footer>
        <div className="container">
          <div className="footer-email">
            contato@institutovanessaramos.com
          </div>
          <div className="footer-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Instituto Vanessa Ramos. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </main>
  );
}
