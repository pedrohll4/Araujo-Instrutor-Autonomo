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

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
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
    { label: "COMO FUNCIONA", href: "#como-funciona" },
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

  // Passos "Como Funciona"
  steps: [
    {
      number: "01",
      title: "ESCOLHA SUAS AULAS",
      subtitle: "Defina seu objetivo",
      description: "Identifique sua necessidade: início do zero, preparação para o exame prático ou perda do medo de dirigir.",
    },
    {
      number: "02",
      title: "AGENDE PELO WHATSAPP",
      subtitle: "Conversa direta e sem burocracia",
      description: "Entre em contato direto comigo pelo WhatsApp para alinhar datas, horários e locais mais convenientes para você.",
    },
    {
      number: "03",
      title: "TREINE COM ACOMPANHAMENTO",
      subtitle: "Instrução paciente e focada",
      description: "Aulas práticas individuais, com correções pontuais, respeito ao seu tempo e foco na sua segurança veicular.",
    },
    {
      number: "04",
      title: "EVOLUA COM CONFIANÇA",
      subtitle: "Pronto para qualquer trajeto",
      description: "Ganhe autonomia para conquistar sua habilitação e dirigir em qualquer situação de trânsito com segurança.",
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
