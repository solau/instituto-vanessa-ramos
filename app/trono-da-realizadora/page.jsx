import Image from 'next/image';

export const metadata = {
  title: 'O Trono da Realizadora | Instituto Vanessa Ramos',
  description: 'Uma mentoria de altíssimo padrão e acesso restrito para líderes e executivas de elite. Lançamento em Agosto.',
}

export default function TronoDaRealizadora() {
  return (
    <main className="sales-page">
      {/* 1. Hero / Identificação (Dor) */}
      <section className="sales-hero">
        <div className="container text-center animate-fade-in-up">
          
          <div style={{ marginBottom: '2rem' }}>
            <div className="launch-badge">Lançamento Exclusivo em Agosto</div>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h1 className="gold-text" style={{ margin: 0 }}>
              Você conquistou o topo.<br/>Mas a que custo?
            </h1>
          </div>
          
          <p className="subtitle" style={{ marginBottom: '1rem' }}>
            Muitas executivas de sucesso vivem uma realidade oculta: a exaustão silenciosa de ter que provar o seu valor duas vezes mais.
          </p>
          
          <p className="subtitle" style={{ marginBottom: '3rem' }}>
            A síndrome do impostor e o sacrifício da própria identidade em nome da carreira não podem mais ser a sua sentença.
          </p>
          
          <div style={{ borderTop: '1px solid rgba(212,175,55,0.3)', borderBottom: '1px solid rgba(212,175,55,0.3)', padding: '2rem', maxWidth: '800px', margin: '0 auto', backgroundColor: 'rgba(212,175,55,0.02)' }}>
            <p className="highlight-text" style={{ margin: 0, fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--off-white)' }}>
              "Está na hora de liderar não pelo esforço excessivo, mas pelo seu poder natural."
            </p>
          </div>
        </div>
      </section>

      {/* 2. A Solução (Autoridade) */}
      <section className="sales-solution">
        <div className="container">
          <div className="grid-2-cols">
            <div className="solution-image animate-fade-in-up delay-1">
               <Image src="/vanessa-2.jpg" alt="Vanessa Ramos" className="premium-border" width={600} height={800} style={{ width: '100%', height: 'auto' }} priority />
            </div>
            <div className="solution-text animate-fade-in-up delay-2">
              <h2 style={{ marginBottom: '2rem' }}>O Próximo Nível: <br/><span className="gold-text">O Trono da Realizadora</span></h2>
              
              <div className="premium-interactive-box">
                <div className="p-card">
                  <span className="p-icon">01</span>
                  <h4>Mentoria Individual</h4>
                  <p>Não é um programa em massa. É um acompanhamento <strong>individual e de altíssimo padrão</strong> desenhado cirurgicamente para o seu cenário de carreira e seus desafios atuais.</p>
                </div>

                <div className="p-card">
                  <span className="p-icon">02</span>
                  <h4>Acompanhamento Cirúrgico</h4>
                  <p>Durante 6 meses, atuaremos na raiz da sua autoconfiança. Uma verdadeira <strong>blindagem de mentalidade</strong> para você liderar com a sua força natural.</p>
                </div>

                <div className="p-card">
                  <span className="p-icon">03</span>
                  <h4>Posicionamento de Direito</h4>
                  <p>Assuma o controle total nas <strong>mais altas esferas do mercado</strong>. Quando você falar, a mesa vai silenciar.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefícios (Ancoragem) */}
      <section className="sales-benefits">
        <div className="container animate-fade-in-up">
          <h2 className="text-center gold-text">O Que Esperar Desta Mentoria</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Mentalidade Blindada</h3>
              <p>Destrave crenças que te impedem de cobrar o que você realmente vale e de se impor em mesas de decisão.</p>
            </div>
            <div className="benefit-card">
              <h3>Posicionamento de Rainha</h3>
              <p>Construa uma marca pessoal magnética. Seja ouvida e respeitada assim que entrar na sala, sem precisar forçar autoridade.</p>
            </div>
            <div className="benefit-card">
              <h3>Comunidade de Elite</h3>
              <p>Acesso restrito. Caminhe lado a lado com um grupo seleto de mulheres que compartilham da mesma visão e ambição que você.</p>
            </div>
            <div className="benefit-card">
              <h3>Harmonia Familiar</h3>
              <p>Descubra como estruturar sua carreira no topo sem negligenciar quem você ama. A verdadeira liderança começa com a ordem no lar.</p>
            </div>
            <div className="benefit-card">
              <h3>Base Espiritual</h3>
              <p>Ancore suas decisões em uma fé inegociável. Lidere com a certeza absoluta de que seu sucesso é parte de um propósito muito maior.</p>
            </div>
            <div className="benefit-card">
              <h3>Escala Financeira</h3>
              <p>Quebre os tetos invisíveis que limitam seus ganhos. Aprenda a reconhecer seu valor e estruturar sua prosperidade com elegância.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Prova Social e Escassez */}
      <section className="sales-scarcity">
        <div className="container text-center animate-fade-in-up">
          <h2>Um ambiente reservado para a <span className="gold-text">Elite</span>.</h2>
          <p className="scarcity-text">
            Por exigir nossa máxima atenção e se tratar de um acompanhamento confidencial em um grupo de altíssimo calibre, <strong>o comitê de aprovação liberará pouquíssimas vagas em Agosto.</strong> Nosso compromisso não é com o volume, mas com o nível da mesa de decisões que estamos formando.
          </p>
        </div>
      </section>

      {/* 5. CTA Final */}
      <section className="sales-cta">
        <div className="container text-center animate-fade-in-up">
          <h2>Garanta sua Posição Antecipada</h2>
          <p>
            O lançamento oficial acontecerá em Agosto. A única forma de receber as informações privilegiadas, entender os critérios de seleção e ter a chance de garantir sua vaga é entrando para o nosso <strong>Grupo VIP de Pré-Lançamento no WhatsApp</strong>.
          </p>
          <div className="cta-wrapper">
            <a href="https://wa.me/55759921236604?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20se%20ainda%20h%C3%A1%20vagas%20para%20a%20mentoria%20O%20Trono%20da%20Realizadora.%20Vim%20pela%20p%C3%A1gina%20de%20vendas." target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">
              Submeter Minha Aplicação
            </a>
            <p className="security-note">Grupo silenciado. Somente nossa equipe enviará os comunicados oficiais.</p>
          </div>
        </div>
      </section>
      
      {/* Footer Minimalista para não tirar atenção */}
      <footer className="minimal-footer">
        <div className="container text-center">
          <a href="/" className="back-link">← Voltar para a Página Principal</a>
        </div>
      </footer>
    </main>
  );
}
