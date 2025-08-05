// Site Content Constants
export const SITE_CONFIG = {
  name: 'Escola Unidas',
  description: 'Termine seus estudos no seu tempo. Cursos presenciais e online para quem quer crescer na vida.',
  url: 'https://escolaunidas.com.br',
  keywords: [
    'EJA',
    'Educação de Jovens e Adultos',
    'Supletivo',
    'Ensino Fundamental',
    'Ensino Médio',
    'ENCCEJA',
    'Certificação',
    'Educação',
    'Curso',
    'Diploma',
  ],
} as const;

export const CONTACT_INFO = {
  phone: '(11) 94929-6989',
  whatsapp: '5511949296989',
  whatsappMessage: 'Olá! Gostaria de saber mais informações sobre o Supletivo EJA da Escola Unidas.',
  email: 'adm@escolaunidas.com.br',
  address: 'Avenida Doutor Timóteo Penteado, 201 - Vila Hulda, 07094-000 / Guarulhos - SP',
  hours: '09h00 às 18:00'
};

export const COURSES = {
  presencial: {
    title: 'Supletivo Presencial',
    subtitle: 'Aulas no período noturno',
    description: 'Ideal para quem busca uma rotina de estudos estruturada, com interação direta com professores e colegas. Nosso ambiente é preparado para receber e apoiar você em cada etapa.',
    image: '/images/courses/curso_eja_presencial.jpg',
    methodology: {
      description: 'Nossa metodologia presencial foca na interação e no acompanhamento próximo. As aulas são dinâmicas, com debates, trabalhos em grupo e plantões de dúvidas para garantir que nenhum aluno fique para trás.',
      details: [
        'Aulas 100% presenciais com professores em sala.',
        'Material didático físico e digital.',
        'Avaliações contínuas e simulados preparatórios.',
        'Projetos interdisciplinares para conectar o aprendizado à realidade.'
      ]
    },
    duration: {
      fundamental: '12 meses',
      medio: '18 meses'
    },
    schedule: {
      frequency: 'Segunda a sexta-feira',
      periods: ['Manhã: 8h - 12h', 'Noite: 19h - 22h']
    },
    subjects: {
      fundamental: ['Português', 'Matemática', 'Ciências', 'História', 'Geografia', 'Artes', 'Inglês'],
      medio: ['Português', 'Matemática', 'Física', 'Química', 'Biologia', 'História', 'Geografia', 'Sociologia', 'Filosofia', 'Inglês']
    },
    requirements: {
      age: {
        fundamental: 'Idade mínima: 15 anos',
        medio: 'Idade mínima: 18 anos'
      },
      documents: [
        'RG e CPF',
        'Comprovante de residência',
        'Histórico escolar (se tiver)',
        '2 fotos 3x4'
      ]
    },
    benefits: [
      'Aulas presenciais que facilitam o aprendizado.',
      'Contato direto com professores experientes.',
      'Turmas reduzidas para um ensino focado.',
      'Material didático completo e atualizado.',
      'Certificado reconhecido e válido nacionalmente.'
    ],
    price: 'A partir de R$ 150/mês',
    cta: 'Fazer inscrição'
  },
  ead: {
    title: 'Supletivo Online',
    subtitle: 'Estude de casa, no seu ritmo',
    description: 'A modalidade EAD oferece flexibilidade total para você estudar onde e quando quiser. Nossa plataforma é intuitiva e repleta de recursos para garantir seu aprendizado.',
    duration: '12 a 18 meses',
    schedule: 'Horários flexíveis, 24h disponível',
    benefits: [
      'Flexibilidade para estudar a qualquer hora e lugar.',
      'Acesso a uma plataforma moderna e fácil de usar.',
      'Videoaulas, materiais de apoio e exercícios online.',
      'Suporte de tutores para tirar todas as suas dúvidas.',
      'Certificado com a mesma validade do curso presencial.'
    ],
    price: 'A partir de R$ 120/mês',
    cta: 'Começar agora',
    image: '/images/courses/curso_eja_ead.jpg'
  }
} as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Maria Silva',
    age: 34,
    course: 'Ensino Médio Presencial',
    text: 'Depois de 15 anos sem estudar, consegui retomar e terminar o ensino médio. Os professores foram muito pacientes e me ajudaram a recuperar a confiança.',
    rating: 5,
    image: '/images/testimonials/maria.jpg'
  },
  {
    id: 2,
    name: 'João Santos',
    age: 28,
    course: 'Ensino Médio Online',
    text: 'O curso online foi perfeito para minha rotina. Trabalho o dia todo e conseguia estudar à noite. Hoje tenho melhores oportunidades no trabalho.',
    rating: 5,
    image: '/images/testimonials/joao.jpg'
  },
  {
    id: 3,
    name: 'Ana Costa',
    age: 42,
    course: 'Ensino Fundamental Presencial',
    text: 'Nunca pensei que conseguiria voltar a estudar. O ambiente acolhedor e os colegas de turma me motivaram a continuar até o final.',
    rating: 5,
    image: '/images/testimonials/ana.jpg'
  },
  {
    id: 4,
    name: 'Carlos Oliveira',
    age: 31,
    course: 'Ensino Médio Online',
    text: 'A flexibilidade do curso online me permitiu conciliar trabalho, família e estudos. Consegui meu diploma sem prejudicar outras áreas da minha vida.',
    rating: 5,
    image: '/images/testimonials/carlos.jpg'
  }
];

export const FAQ_ITEMS = [
  {
    id: 1,
    question: 'Como faço minha matrícula?',
    answer: 'Você pode se matricular de duas formas práticas: presencialmente em nossa secretaria com RG e CPF, ou online, diretamente pelo nosso site. Escolha a opção que for mais conveniente para você.'
  },
  {
    id: 2,
    question: 'Parei de estudar há mais de 20 anos. Vou conseguir acompanhar?',
    answer: 'Sim, você vai conseguir! Nosso material é especialmente desenvolvido para jovens e adultos que estão retomando os estudos. Nossos professores são especializados em ensinar pessoas com sua experiência de vida, explicando o conteúdo com clareza, fazendo revisões e tirando dúvidas. Você terá todo o apoio necessário.'
  },
  {
    id: 3,
    question: 'O certificado é reconhecido pelo MEC?',
    answer: 'Sim, é oficial e tem validade em todo o Brasil. Nosso certificado é emitido por colégios autorizados pelo governo, com publicação do nome do aluno no GDAE (SED). Você pode usar para trabalho, concursos e continuidade dos estudos.'
  },
  {
    id: 4,
    question: 'Quais são as modalidades disponíveis?',
    answer: 'Oferecemos duas opções flexíveis para se adaptar à sua rotina: Presencial, com aulas 1 vez por semana e contato direto com professores, e a Distância, com acesso ao Portal do Aluno para estudar quando e onde quiser.'
  },
  {
    id: 5,
    question: 'E se eu não tiver todos os documentos?',
    answer: 'Não se preocupe! Para fazer a matrícula, você precisa apenas do RG e CPF. Os demais documentos podem ser entregues durante o curso, sem pressa.'
  },
  {
    id: 6,
    question: 'Em quanto tempo posso terminar o curso?',
    answer: 'Nosso curso é pensado para se adaptar ao seu ritmo. É possível concluir em até 6 meses, dependendo da sua dedicação e disponibilidade de tempo.'
  },
  {
    id: 7,
    question: 'Como posso pagar?',
    answer: 'Aceitamos várias formas de pagamento para facilitar sua vida: cartão de crédito ou débito, PIX e boleto bancário. Temos promoções especiais para pagamento no cartão ou PIX.'
  },
  {
    id: 8,
    question: 'Tenho restrições no CPF. Posso pagar no boleto mesmo assim?',
    answer: 'Sim, pode ficar tranquilo. Não fazemos consulta de restrição de crédito. O boleto bancário está disponível para todos os alunos.'
  },
  {
    id: 9,
    question: 'Qual o horário de funcionamento?',
    answer: 'Nossa secretaria funciona de segunda a sexta, das 8h às 20h, and e aos sábados, das 8h às 14h.'
  },
  {
    id: 10,
    question: 'Posso estudar apenas em casa?',
    answer: 'Sim! Com nosso Portal do Aluno, você tem acesso completo ao curso: videoaulas, exercícios, dicas de estudo e material de apoio, tudo disponível 24 horas por dia.'
  }
] as const;

export const STATS = {
  yearsExperience: '15',
  approvalRate: '95',
  satisfaction: '98'
};