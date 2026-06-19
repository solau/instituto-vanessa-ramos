import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-text animate-fade-in-up delay-1">
            <h1><span className="gold-text">Soberania e Liderança</span> Feminina</h1>
            <p>
              Vanessa Ramos &mdash; Descubra como vencer o medo de se expor, curar a síndrome da impostora e construir autoridade sem se sentir uma fraude. Saia da invisibilidade e ocupe o seu lugar de direito.
            </p>
            <a href="https://wa.me/55759921236604?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20as%20mentorias%20para%20despertar%20minha%20lideran%C3%A7a.%20Vim%20pelo%20bot%C3%A3o%20principal%20do%20site." target="_blank" rel="noopener noreferrer" className="btn-primary">
              Desperte sua Liderança
            </a>
          </div>
          <div className="hero-image animate-fade-in-up delay-2">
            <Image 
              src="/vanessa-1.jpg" 
              alt="Vanessa Ramos" 
              className="premium-border"
              width={600} 
              height={800} 
              style={{ width: '100%', height: 'auto' }} 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={80}
              priority 
            />
          </div>
        </div>
      </section>

      {/* Authority Bar */}
      <section className="authority-bar">
        <div className="container">
          <div className="authority-stats animate-fade-in-up delay-3">
            <div className="stat-item">
              <h3>+500</h3>
              <p>Mulheres Impactadas</p>
            </div>
            <div className="stat-item">
              <h3>6</h3>
              <p>Meses de Transformação</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Foco em Liderança de Elite</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. A Dor de Identidade e Segurança */}
      <section className="about-section" style={{ textAlign: 'center', padding: '6rem 0' }}>
        <div className="container animate-fade-in-up">
          <h2 className="gold-text" style={{ marginBottom: '0.5rem', fontSize: '2.5rem' }}>O peso de ser a profissional excelente que se sente uma fraude</h2>
          <h3 className="about-name" style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#bbb', fontFamily: 'var(--font-sans)', fontWeight: '300' }}>Você confia na sua capacidade?</h3>
          
          <div className="quote-block" style={{ borderLeft: 'none', borderTop: '2px solid var(--brushed-gold)', borderBottom: '2px solid var(--brushed-gold)', padding: '2.5rem 2rem', margin: '0 auto 3rem', maxWidth: '800px', backgroundColor: 'rgba(212, 175, 55, 0.02)' }}>
            <p style={{ margin: 0, fontSize: '1.6rem', lineHeight: '1.4' }}>
              "Muitas líderes paralisam pelo sentimento de não ser boa o suficiente, sabotando carreiras brilhantes pelo medo do julgamento."
            </p>
          </div>

          <div className="about-interactive-grid">
            <div className="interactive-card">
              <span className="card-icon">✧</span>
              <p>
                A <strong>síndrome da impostora no trabalho</strong> faz com que você diminua suas próprias conquistas. Te ajudamos a curar essa identidade.
              </p>
            </div>
            <div className="interactive-card">
              <span className="card-icon">✦</span>
              <p>
                Aprenda a <strong>construir autoridade sem se sentir uma fraude</strong>. Reassuma sua posição de direito e deixe a invisibilidade para trás.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A Filosofia do Instituto */}
      <section className="philosophy-section">
        <div className="container animate-fade-in-up">
          <h2 className="gold-text">Nossa Filosofia</h2>
          
          <div className="philosophy-topics">
            <div className="topic-item">
              <span className="topic-icon">◆</span>
              <div>
                <strong>A armadilha da comparação profissional:</strong>
                <p>Descubra como parar de se comparar nas redes sociais e encontrar sua voz autêntica, parando de olhar para a grama do vizinho e focando na sua essência.</p>
              </div>
            </div>
            
            <div className="topic-item">
              <span className="topic-icon">◆</span>
              <div>
                <strong>Saindo da invisibilidade:</strong>
                <p>O domínio antecede a tática. Aprenda como superar o medo do julgamento e se expor com confiança, curando a insegurança profissional.</p>
              </div>
            </div>
            
            <div className="topic-item">
              <span className="topic-icon">◆</span>
              <div>
                <strong>Trabalho demais e não vejo resultados:</strong>
                <p>Transição da escassez para a soberania profissional. Entenda por que o esforço excessivo gera a exaustão feminina e falta de tempo para si.</p>
              </div>
            </div>
            
            <div className="topic-item">
              <span className="topic-icon">◆</span>
              <div>
                <strong>Soberania de Tempo:</strong>
                <p>Aprenda como ser uma profissional reconhecida e equilibrar carreira e família sem abrir mão de nada que é inegociável para você.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. O Ecossistema de Soluções */}
      <section className="services-section">
        <div className="container">
          <h2 className="gold-text animate-fade-in-up">Ecossistema de Soluções</h2>
          <div className="services-grid">
            
            <div className="service-card animate-fade-in-up delay-1">
              <div className="launch-badge" style={{ marginBottom: '1rem', fontSize: '0.7rem', padding: '0.3rem 1rem' }}>Lançamento em Agosto</div>
              <h3>O Trono da Realizadora</h3>
              <p>
                Uma mentoria superexclusiva de 6 meses, desenhada cirurgicamente para líderes que já atingiram o sucesso, mas exigem acesso a um ambiente restrito para restaurar sua identidade e blindar sua mentalidade.
              </p>
              <a href="/trono-da-realizadora" className="btn-outline">Entrar na Lista VIP</a>
            </div>

            <div className="service-card animate-fade-in-up delay-2">
              <h3>Palestras &amp; Corporativo</h3>
              <p>
                Espaço dedicado a corporações visionárias que desejam levar a metodologia de Vanessa Ramos para desenvolver suas próprias líderes internamente, fomentando ambientes de alta performance e propósito.
              </p>
              <a href="https://wa.me/55759921236604?text=Ol%C3%A1%21%20Gostaria%20de%20receber%20uma%20proposta%20para%20palestras%20e%20treinamentos%20corporativos.%20Cheguei%20atrav%C3%A9s%20do%20bot%C3%A3o%20'Solicitar%20Proposta'%20no%20site." target="_blank" rel="noopener noreferrer" className="btn-outline">Solicitar Proposta</a>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Footer Institucional */}
      <footer>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', paddingBottom: '3rem' }}>
          
          <div className="footer-contacts" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            
            {/* Email Link */}
            <a href="mailto:contato@institutovanessaramos.com" className="footer-link-hover" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: '#B689FF', textDecoration: 'none', transition: 'filter 0.3s', fontWeight: '400', letterSpacing: '1px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 4l10 8 10-8" />
              </svg>
              contato@institutovanessaramos.com
            </a>

            {/* Instagram Link */}
            <a href="https://www.instagram.com/institutovanessaramos/" target="_blank" rel="noopener noreferrer" className="footer-link-hover" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: '#B689FF', textDecoration: 'none', transition: 'filter 0.3s', fontWeight: '400', letterSpacing: '1px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @institutovanessaramos
            </a>
          </div>
          
          <div className="copyright" style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#555', fontFamily: 'var(--font-sans)' }}>
            &copy; {new Date().getFullYear()} Instituto Vanessa Ramos. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/55759921236604" 
        className="whatsapp-btn" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </main>
  );
}
