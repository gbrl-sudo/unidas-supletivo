import Image from 'next/image';

const bentoCardsData = [
  {
    icon: '/images/icons/certificado_eja.png',
    text: 'Certificado Oficial com Validade Nacional',
  },
  {
    icon: '/images/icons/graduacao_formacao_eja.png',
    text: 'Curso Presencial ou à Distância',
  },
  {
    icon: '/images/icons/pagamento_curso_eja.png',
    text: 'Pagamento Facilitado em Até 18x',
  },
  {
    icon: '/images/icons/apostilas_eja.png',
    text: 'Apostila Impressa e Digital',
  },
  {
    icon: '/images/icons/portal_aluno_eja.png',
    text: 'Acesso Exclusivo ao Portal do Aluno',
  },
  {
    icon: '/images/icons/player_portal_eja.png',
    text: 'Aulas Live no YouTube.',
  },
];

export const BentoCardsSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-12">
          Termine seus estudos de forma{' '}
          <span className="relative inline-block">
            <span className="relative z-10">confiável</span>
            <span className="absolute inset-x-0 bottom-0 h-2 bg-yellow-300 transform -skew-x-12"></span>
          </span>{' '}
          e{' '}
          <span className="relative inline-block">
            <span className="relative z-10">rápida</span>
            <span className="absolute inset-x-0 bottom-0 h-2 bg-yellow-300 transform -skew-x-12"></span>
          </span>
          .
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {bentoCardsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center"
            >
              <Image
                src={card.icon}
                alt={card.text}
                width={80}
                height={80}
                className="mb-4 h-20 w-20 pointer-events-none"
              />
              <p className="text-lg font-medium text-white/90">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};