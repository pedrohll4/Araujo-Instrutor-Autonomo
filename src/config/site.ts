export interface Plan {
  id: string;
  name: string;
  badge?: string;
  highlighted?: boolean;
  lessons: string;
  price: string;
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
  
  // NÚMERO DE WHATSAPP (Substitua pelo número com DDI e DDD sem espaços ou traços)
  whatsappNumber: "5500000000000",

  // Região de atendimento (editável pelo instrutor)
  location: {
    city: "[Sua Cidade/Região aqui]",
    points: "Atendimento em pontos estratégicos e percursos de exame prático",
  },

  // Horários de atendimento
  schedule: {
    days: "Segunda a Sábado",
    hours: "Horários flexíveis a combinar",
  },

  // Redes / Contatos
  contact: {
    whatsappDisplay: "(00) 00000-0000",
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

  // Pacotes / Planos de Aulas (placeholders editáveis)
  plans: [
    {
      id: "essencial",
      name: "PLANO ESSENCIAL",
      lessons: "5 AULAS PRÁTICAS",
      price: "R$ XXX",
      description: "Ideal para quem quer ganhar confiança rápida, destravar os fundamentos ou fazer um alinhamento pontual antes do teste.",
      target: "Revisão e fundamentos",
      features: [
        "Aulas 100% práticas e individuais",
        "Ajuste de postura, retrovisores e pedais",
        "Revisão de pontos fracos específicos",
        "Feedback detalhado ao final de cada aula",
        "Horários flexíveis a combinar",
      ],
      ctaText: "QUERO ESSE PLANO",
      messageText: "Olá, Araújo! Tenho interesse no Plano Essencial (5 Aulas). Gostaria de saber valores e disponibilidade de horário.",
    },
    {
      id: "preparacao",
      name: "PLANO PREPARAÇÃO",
      badge: "MAIS PROCURADO",
      highlighted: true,
      lessons: "10 AULAS PRÁTICAS",
      price: "R$ XXX",
      description: "A preparação mais completa para quem vai realizar a prova prática ou quer conduzir no trânsito do dia a dia com tranquilidade.",
      target: "Consolidação e prova prática",
      features: [
        "Tudo do Plano Essencial incluso",
        "Treino intensivo de baliza com pontos de referência",
        "Simulação realística de percurso de prova Detran",
        "Treinamento de controle de embreagem e subidas íngremes",
        "Desenvolvimento de reflexos e visão periférica",
        "Acompanhamento personalizado da sua evolução",
      ],
      ctaText: "QUERO ESSE PLANO",
      messageText: "Olá, Araújo! Tenho interesse no Plano Preparação (10 Aulas). Gostaria de mais informações e verificar horários disponíveis.",
    },
    {
      id: "intensivo",
      name: "PLANO INTENSIVO",
      lessons: "15 AULAS PRÁTICAS",
      price: "R$ XXX",
      description: "Para quem busca acompanhamento aprofundado, superação do medo de dirigir, traumas ou longo período sem pegar no volante.",
      target: "Domínio total e autonomia",
      features: [
        "Tudo dos planos anteriores com máxima profundidade",
        "Foco intensivo em vencer a fobia e insegurança ao volante",
        "Aulas em vias rápidas, avenidas movimentadas e rodovia",
        "Treino noturno ou sob chuva (conforme disponibilidade)",
        "Suporte direto para tirar dúvidas com o instrutor",
        "Metodologia paciente e sem pressão",
      ],
      ctaText: "QUERO ESSE PLANO",
      messageText: "Olá, Araújo! Tenho interesse no Plano Intensivo (15 Aulas). Gostaria de saber mais informações e agendar minha preparação.",
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
          label: "Fazer Simulado Oficial Detran",
          url: "https://www.detran.sp.gov.br/simulado",
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
          url: "https://apps.apple.com/br/app/carteira-digital-de-tr%C3%A2nsito/id1275057217",
          variant: "outline",
        },
        {
          label: "Guia Oficial CDT Gov.br",
          url: "https://www.gov.br/governodigital/pt-br/teste-de-usabilidade/carteira-digital-de-transito-1",
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
      "Meu papel não é apenas passar macetes de prova, mas construir as bases de um condutor consciente, defensivo e seguro. Atendo tanto alunos que estão em processo de habilitação para as Categorias A e B quanto pessoas já habilitadas que desejam destravar de vez no trânsito.",
    credentials: [
      { label: "ESPECIALIDADE", value: "Categorias A (Moto) e B (Carro)" },
      { label: "METODOLOGIA", value: "Instrução Paciente & Direção Defensiva" },
      { label: "FOCO", value: "Aprovação no Exame & Perda do Medo" },
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
