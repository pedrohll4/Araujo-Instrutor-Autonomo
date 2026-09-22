export interface Plan {
  id: string;
  name: string;
  badge?: string;
  highlighted?: boolean;
  lessons: string;
  price?: string;
  description: string;
  target: string;
  features: string[];
  ctaText: string;
  messageText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  category: string;
  text: string;
  status: string;
}

export interface StepLink {
  label: string;
  url?: string;
  isWhatsApp?: boolean;
  whatsAppMessage?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  category: 'digital' | 'presencial' | 'pratica';
  categoryLabel: string;
  description: string;
  tip?: string;
  links?: StepLink[];
  highlight?: boolean;
}


export interface Differential {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export const siteConfig = {
  name: "ARAUJO INSTRUTOR AUTÔNOMO",
  shortName: "Araújo",
  badge: "INSTRUTOR AUTÔNOMO DE CONDUÇÃO",
  subtitle: "Preparação Personalizada Categorias A e B",
  tagline: "Aprenda a dirigir com confiança.",
  description:
    "Treinamento individualizado focado em quem busca segurança, superação do medo de dirigir e total domínio do veículo para aprovação e para o trânsito real.",
  
  // NÚMERO DE WHATSAPP DO ARAÚJO (+55 69 9927-8007)
  whatsappNumber: "556999278007",

  // Região de atendimento (Vale do Jamari - Rondônia)
  location: {
    city: "Vale do Jamari - RO",
    points: "Atendimento em Ariquemes e em todo o Vale do Jamari",
  },

  // Horários de atendimento
  schedule: {
    days: "Segunda a Sábado",
    hours: "Horários flexíveis a combinar",
  },

  // Redes / Contatos
  contact: {
    whatsappDisplay: "+55 (69) 9927-8007",
    instagram: "@araujoinstrutor",
    email: "contato@araujoinstrutor.com.br",
  },

  // Links de navegação
  navLinks: [
    { label: "INÍCIO", href: "#inicio" },
    { label: "DIFERENCIAIS", href: "#diferenciais" },
    { label: "CATEGORIAS", href: "#categorias" },
    { label: "PLANOS", href: "#planos" },
    { label: "PASSO A PASSO CNH", href: "#como-funciona" },
    { label: "SOBRE", href: "#sobre" },
    { label: "DEPOIMENTOS", href: "#depoimentos" },
  ],

  // Gerador de links WhatsApp contextuais
  getWhatsAppLink: (customMessage?: string) => {
    const phone = siteConfig.whatsappNumber;
    const message = customMessage || "Olá, Araújo! Vim pelo site e gostaria de saber informações sobre as aulas.";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  },

  // Diferenciais principais
  differentials: [
    {
      number: "01",
      title: "ENSINO COM QUALIDADE",
      tagline: "Domínio e técnica veicular",
      description:
        "Aulas planejadas estrategicamente para desenvolver sua confiança, percepção de espaço e domínio completo do veículo.",
    },
    {
      number: "02",
      title: "SEGURANÇA NO TRÂNSITO",
      tagline: "Direção defensiva de verdade",
      description:
        "Aprenda não apenas a passar na prova do Detran, mas a conduzir com responsabilidade e postura defensiva em qualquer situação.",
    },
    {
      number: "03",
      title: "ATENÇÃO PERSONALIZADA",
      tagline: "No seu próprio ritmo",
      description:
        "Acompanhamento individual respeitando suas dificuldades, bloqueios no volante e velocidade de evolução, sem cobranças desnecessárias.",
    },
    {
      number: "04",
      title: "CONFIANÇA PARA DIRIGIR",
      tagline: "Foco prático em autonomia",
      description:
        "Treinamento prático focado em deixar você calmo e preparado tanto para o percurso do exame quanto para as ruas movimentadas.",
    },
  ] as Differential[],

  // Categorias atendidas
  categories: [
    {
      id: "categoria-a",
      code: "CATEGORIA A",
      vehicle: "MOTOCICLETA",
      tagline: "Equilíbrio, Manobrabilidade e Agilidade",
      description:
        "Treinamento completo de equilíbrio, passagem de marcha, circuito de cone, rampa e condução urbana segura com duas rodas.",
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1400&auto=format&fit=crop",
      features: [
        "Domínio de embreagem e ponto de aceleração",
        "Traçado de pista e percurso de exame",
        "Técnicas de frenagem segura e equilíbrio em baixa velocidade",
        "Preparação para o trânsito e corredores urbanos",
      ],
      whatsappMsg: "Olá, Araújo! Gostaria de informações sobre as aulas práticas para a Categoria A (Moto).",
    },
    {
      id: "categoria-b",
      code: "CATEGORIA B",
      vehicle: "CARRO / AUTOMÓVEL",
      tagline: "Controle, Precisão e Domínio das Ruas",
      description:
        "Aulas práticas focadas em controle de pedais, noções de espaço, baliza milimétrica, arrancada em subida e superação da insegurança.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400&auto=format&fit=crop",
      features: [
        "Baliza descomplicada com referências precisas",
        "Controle absoluto de meia embreagem em ladeiras",
        "Mudança de faixa, cruzamentos e rotatórias sem pânico",
        "Treinamento personalizado para quem já tem CNH e não dirige",
      ],
      whatsappMsg: "Olá, Araújo! Gostaria de informações sobre as aulas práticas para a Categoria B (Carro).",
    },
  ],

  // Pacotes / Planos de Aulas (2, 5, 10 ou A Combinar)
  plans: [
    {
      id: "plano-2",
      name: "PACOTE 2 AULAS",
      lessons: "2 AULAS PRÁTICAS",
      description: "Ideal para quem precisa de um alinhamento rápido antes da prova prática, tirar dúvidas finais de baliza ou focar em um ponto específico de dificuldade.",
      target: "Alinhamento & Baliza",
      features: [
        "Aulas 100% práticas e individuais",
        "Revisão cirúrgica de pontos fracos (baliza ou rampa)",
        "Dicas pontuais sobre a banca examinadora do Detran",
        "Ajuste fino de postura, pedais e retrovisores",
        "Feedback e orientações detalhadas ao final do treino",
      ],
      ctaText: "CONSULTAR PELO WHATSAPP",
      messageText: "Olá, Araújo! Tenho interesse no Pacote de 2 Aulas Práticas. Gostaria de verificar valores e disponibilidade de horário.",
    },
    {
      id: "plano-5",
      name: "PACOTE 5 AULAS",
      lessons: "5 AULAS PRÁTICAS",
      description: "Perfeito para destravar a prática, fazer simulações completas de percurso, aprimorar a embreagem e ganhar consistência ao volante.",
      target: "Revisão & Fundamentos",
      features: [
        "Tudo do pacote de 2 aulas incluso",
        "Treino prático de baliza com pontos de referência fáceis",
        "Controle de meia embreagem em aclives e descidas",
        "Simulação real de percurso do exame prático",
        "Horários flexíveis a combinar com o instrutor",
      ],
      ctaText: "CONSULTAR PELO WHATSAPP",
      messageText: "Olá, Araújo! Tenho interesse no Pacote de 5 Aulas Práticas. Gostaria de saber valores e disponibilidade de horário.",
    },
    {
      id: "plano-10",
      name: "PACOTE 10 AULAS",
      badge: "MAIS PROCURADO",
      highlighted: true,
      lessons: "10 AULAS PRÁTICAS",
      description: "A preparação completa para quem busca segurança máxima na prova prática ou quer dominar o trânsito do dia a dia com calma e autonomia.",
      target: "Preparação Completa",
      features: [
        "Tudo dos pacotes anteriores com máxima profundidade",
        "Treino intensivo de baliza em diferentes cenários e vagas",
        "Simulação de exame com avaliação rígida dos critérios Detran",
        "Circulação em avenidas movimentadas, cruzamentos e rotatórias",
        "Desenvolvimento de reflexos, calma e visão periférica",
        "Acompanhamento personalizado até o dia da prova",
      ],
      ctaText: "CONSULTAR PELO WHATSAPP",
      messageText: "Olá, Araújo! Tenho interesse no Pacote de 10 Aulas Práticas (Mais Procurado). Gostaria de mais informações e verificar horários.",
    },
    {
      id: "plano-combinar",
      name: "A COMBINAR",
      badge: "PERSONALIZADO",
      lessons: "AULAS A COMBINAR",
      description: "Quantidade personalizada sob medida para a sua necessidade: para habilitados sem dirigir há anos, superação de traumas/fobia ou treinos no seu próprio veículo.",
      target: "Sob Medida",
      features: [
        "Quantidade flexível de aulas definidas após avaliação",
        "Foco intensivo na superação do medo e bloqueios no trânsito",
        "Possibilidade de treino no próprio carro do aluno",
        "Treinamento em trajetos reais do seu cotidiano (casa/trabalho)",
        "Didática 100% paciente, respeitosa e sem nenhuma pressão",
      ],
      ctaText: "MONTAR MEU PACOTE",
      messageText: "Olá, Araújo! Gostaria de conversar para combinarmos uma quantidade personalizada de aulas práticas para o meu caso.",
    },
  ] as Plan[],

  // Passos "Guia CNH Brasil - Digital & Prático"
  steps: [
    {
      number: "01",
      title: "CADASTRO & PROCESSO GOV.BR",
      subtitle: "Abertura da 1ª Habilitação (Renach)",
      category: "digital",
      categoryLabel: "100% DIGITAL • GOV.BR / DETRAN",
      description:
        "O pontapé inicial oficial. Abra o seu Registro Nacional de Condutores Habilitados (Renach) pelo portal Gov.br ou site do Detran estadual. Requisitos: 18 anos completos, saber ler/escrever, RG e CPF.",
      tip: "Tenha em mãos sua conta Gov.br (nível prata ou ouro) para preencher o formulário de abertura sem burocracia.",
      links: [
        {
          label: "Acessar Gov.br (Obter CNH)",
          url: "https://www.gov.br/pt-br/servicos/obter-a-carteira-nacional-de-habilitacao",
          variant: "primary",
        },
        {
          label: "Portal de Serviços Senatran",
          url: "https://portalservicos.senatran.serpro.gov.br/",
          variant: "outline",
        },
      ],
    },
    {
      number: "02",
      title: "BIOMETRIA & EXAMES CLÍNICOS",
      subtitle: "Médico e Psicotécnico Credenciado",
      category: "presencial",
      categoryLabel: "PRESENCIAL • CLÍNICA CREDENCIADA",
      description:
        "Compareça ao posto do Detran ou Poupatempo para coleta biométrica (foto, digitais e assinatura). Em seguida, realize o exame de aptidão física e mental (médico) e a avaliação psicológica (psicotécnico) na clínica indicada.",
      tip: "Pague as taxas com antecedência e durma bem na véspera do psicotécnico para manter foco e calma nos testes de atenção.",
      links: [
        {
          label: "Consultar Agendamentos Senatran",
          url: "https://portalservicos.senatran.serpro.gov.br/",
          variant: "outline",
        },
      ],
    },
    {
      number: "03",
      title: "CURSO & PROVA TEÓRICA",
      subtitle: "45h de Legislação e Simulado Oficial",
      category: "digital",
      categoryLabel: "HÍBRIDO / EAD • DETRAN",
      description:
        "Conclua as 45 horas/aula de conteúdo teórico (Legislação de Trânsito, Direção Defensiva, Primeiros Socorros, Meio Ambiente e Mecânica Básica). Depois, agende e realize o exame teórico no Detran (acerto mínimo de 70% / 21 questões).",
      tip: "Treine simulados diários nos últimos 7 dias antes da prova para se acostumar com as pegadinhas da banca examinadora.",
      links: [
        {
          label: "Fazer Simulado Online Grátis",
          url: "https://testedetran.com.br/",
          variant: "primary",
        },
      ],
    },
    {
      number: "04",
      title: "EMISSÃO DA LADV",
      subtitle: "Licença de Aprendizagem de Direção",
      category: "digital",
      categoryLabel: "DIGITAL • AUTORIZAÇÃO DETRAN",
      description:
        "Com a aprovação na prova teórica, o Detran emite no sistema a LADV (Licença de Aprendizagem de Direção Veicular). É este documento legal que permite ao candidato conduzir nas vias públicas em aulas práticas com seu instrutor.",
      tip: "A LADV é intransferível e obrigatória durante 100% das aulas práticas. Sem ela, o treino não pode ocorrer.",
      links: [
        {
          label: "Consultar Status do Renach",
          url: "https://portalservicos.senatran.serpro.gov.br/",
          variant: "outline",
        },
      ],
    },
    {
      number: "05",
      title: "AULAS PRÁTICAS COM O ARAÚJO",
      subtitle: "Treino Personalizado Categorias A e B",
      category: "pratica",
      categoryLabel: "PRÁTICA AO VOLANTE • DESTAQUE ⭐",
      highlight: true,
      description:
        "A etapa decisiva para sua aprovação! Treinamento prático individual no seu ritmo: baliza precisa com pontos de referência descomplicados, controle absoluto de embreagem em ladeiras, percurso real da prova e superação do medo de dirigir.",
      tip: "Treinar com metodologia paciente e focada nos critérios de avaliação do Detran evita reprovações e economiza taxas de reteste.",
      links: [
        {
          label: "Agendar Aulas no WhatsApp",
          isWhatsApp: true,
          whatsAppMessage:
            "Olá, Araújo! Estou na fase de aulas práticas para tirar minha CNH e quero agendar meu treinamento com você.",
          variant: "primary",
        },
      ],
    },
    {
      number: "06",
      title: "EXAME PRÁTICO DO DETRAN",
      subtitle: "A Hora da Sua Aprovação",
      category: "pratica",
      categoryLabel: "AVALIAÇÃO OFICIAL • DETRAN",
      description:
        "O dia do teste final! Avaliação na pista e percurso oficial do Detran (baliza e percurso urbano para Categoria B, circuito de cones e rampa para Categoria A). Você fará a prova dominando o carro e conhecendo todos os detalhes da rota.",
      tip: "Ajuste os retrovisores e banco com calma antes de ligar a chave. O segredo é manter o ritmo que você praticou com o instrutor.",
      links: [
        {
          label: "Tirar Dúvidas da Prova Prática",
          isWhatsApp: true,
          whatsAppMessage:
            "Olá, Araújo! Gostaria de tirar dúvidas sobre o exame prático do Detran e percursos da prova.",
          variant: "outline",
        },
      ],
    },
    {
      number: "07",
      title: "EMISSÃO DA PPD & CNH DIGITAL",
      subtitle: "Habilitação no Celular pelo App CDT",
      category: "digital",
      categoryLabel: "100% DIGITAL • SMARTPHONE",
      description:
        "Aprovado! Pague a taxa de emissão da PPD (Permissão Para Dirigir, válida por 1 ano). Em poucos dias úteis, sua CNH Digital já fica disponível diretamente no aplicativo oficial Carteira Digital de Trânsito (CDT) pelo Gov.br.",
      tip: "A CNH Digital no app CDT tem a mesma validade jurídica do documento impresso em todo o território nacional e funciona sem internet.",
      links: [
        {
          label: "App CDT (Google Play / Android)",
          url: "https://play.google.com/store/apps/details?id=br.gov.serpro.cnhe",
          variant: "outline",
        },
        {
          label: "App CDT (App Store / iPhone)",
          url: "https://apps.apple.com/br/app/cnh-do-brasil/id1275057217",
          variant: "outline",
        },
        {
          label: "Portal Senatran CDT",
          url: "https://portalservicos.senatran.serpro.gov.br/",
          variant: "outline",
        },
      ],
    },
  ] as Step[],

  // Informações do Instrutor (área humana e editável)
  about: {
    headline: "QUEM ESTÁ AO SEU LADO",
    title: "Mais do que ensinar a dirigir: preparar você para assumir o controle com segurança e tranquilidade.",
    quote:
      "Acredito que dirigir é uma conquista de liberdade. Meu compromisso é ensinar com método, respeito e calma, para que você nunca mais sinta medo ao girar a chave.",
    bioParagraph1:
      "Como instrutor de condução veicular, desenvolvi uma metodologia focada na individualidade de cada aluno. Sei que cada pessoa carrega suas próprias dúvidas, inseguranças e expectativas ao entrar em um veículo.",
    bioParagraph2:
      "Meu papel não é apenas passar macetes de prova, mas construir as bases de um condutor consciente, defensivo e seguro. Atendo em todo o Vale do Jamari, auxiliando tanto alunos que estão em processo de habilitação para as Categorias A e B quanto pessoas já habilitadas que desejam destravar de vez no trânsito.",
    credentials: [
      { label: "ESPECIALIDADE", value: "Categorias A (Moto) e B (Carro)" },
      { label: "METODOLOGIA", value: "Instrução Paciente & Direção Defensiva" },
      { label: "REGIÃO", value: "Todo o Vale do Jamari - RO" },
      { label: "ATENDIMENTO", value: "Personalizado e Individual" },
    ],
  },

  // Depoimentos (Placeholders estruturados prontos para depoimentos reais)
  testimonials: [
    {
      id: "dep-1",
      name: "[Nome do Aluno]",
      category: "Categoria B • Aprovado",
      text: "“Depoimento do aluno aqui. Espaço reservado para relato real sobre a didática, a paciência nas aulas e como a preparação fez toda a diferença na aprovação no exame prático.”",
      status: "APROVADO DE PRIMEIRA",
    },
    {
      id: "dep-2",
      name: "[Nome da Aluna]",
      category: "Habilitada • Perdeu o Medo",
      text: "“Depoimento da aluna aqui. Espaço reservado para o relato sobre a superação do medo de dirigir no trânsito real, subidas e avenidas após anos com a CNH guardada na gaveta.”",
      status: "DIRIGINDO SOZINHA",
    },
    {
      id: "dep-3",
      name: "[Nome do Aluno]",
      category: "Categoria A • Moto",
      text: "“Depoimento do aluno aqui. Espaço reservado para compartilhar a evolução na pista de moto, domínio da embreagem e o ganho de segurança nas duas rodas.”",
      status: "HABILITADO",
    },
  ] as Testimonial[],
};
