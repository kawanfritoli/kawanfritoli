const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'

export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
    },
    a11y: {
      menu: 'Abrir menu',
      toggleTheme: 'Alternar tema',
      toggleLanguage: 'Alternar idioma',
    },
    hero: {
      role: 'Desenvolvedor de Software',
      headline: 'Kawan Fritoli',
      subtitle: LOREM,
      cta: 'Ver projetos',
      ctaSecondary: 'Entrar em contato',
    },
    about: {
      title: 'Sobre mim',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curso Análise e Desenvolvimento de Sistemas e venho aprofundando meus estudos em arquitetura de software, boas práticas e desenvolvimento web.',
        LOREM,
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.',
      ],
      highlights: [
        { label: 'Formação', value: 'Análise e Desenvolvimento de Sistemas' },
        { label: 'Foco atual', value: 'Front-end e integrações' },
        { label: 'Localização', value: 'Brasil — São Paulo' },
      ],
    },
    experience: {
      title: 'Experiência',
      description: LOREM,
      items: [
        {
          period: '2024 — Atual',
          role: 'Desenvolvedor de Software',
          company: 'Lorem Ipsum Tech',
          description: LOREM,
          tags: ['React', 'TypeScript', 'APIs REST'],
        },
        {
          period: '2023 — 2024',
          role: 'Desenvolvedor Júnior',
          company: 'Dolor Sit Systems',
          description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          tags: ['JavaScript', 'SQL', 'Git'],
        },
        {
          period: '2022 — 2023',
          role: 'Estágio em Desenvolvimento',
          company: 'Amet Consectetur',
          description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          tags: ['HTML', 'CSS', 'Suporte técnico'],
        },
      ],
      goalsTitle: 'Objetivos de evolução',
      goals: [
        'Aprofundar arquitetura front-end e testes automatizados.',
        'Consolidar conhecimentos em back-end e bancos de dados.',
        'Aplicar IA e automação em processos corporativos.',
      ],
    },
    projects: {
      title: 'Projetos',
      description:
        'Lorem ipsum dolor sit amet — seleção de desafios técnicos resolvidos, com foco em arquitetura, automação e integração de sistemas.',
      viewProject: 'Ver projeto',
      items: [
        {
          title: 'Arquitetura Front-end React / Ionic',
          challenge: 'Desafio técnico',
          description: LOREM,
          tags: ['React', 'Ionic', 'Design System'],
          href: 'https://github.com/kawanfritoli',
        },
        {
          title: 'Automação de Documentos com IA',
          challenge: 'Desafio técnico',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Automação de geração e validação de documentos corporativos com modelos de linguagem.',
          tags: ['Python', 'LLM', 'Automação'],
          href: 'https://github.com/kawanfritoli',
        },
        {
          title: 'IoT com Arduino e Banco de Dados',
          challenge: 'Desafio técnico',
          description:
            'Sed do eiusmod tempor incididunt ut labore. Coleta de dados de sensores, persistência e visualização em painel web.',
          tags: ['Arduino', 'IoT', 'MySQL'],
          href: 'https://github.com/kawanfritoli',
        },
        {
          title: 'Lorem Ipsum Dashboard',
          challenge: 'Desafio técnico',
          description: LOREM,
          tags: ['React', 'Charts', 'API'],
          href: 'https://github.com/kawanfritoli',
        },
      ],
    },
    contact: {
      title: 'Contato',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Disponível para oportunidades e colaborações.',
      emailLabel: 'E-mail',
      email: 'kfritoligomes@gmail.com',
      links: [
        { label: 'GitHub', href: 'https://github.com/kawanfritoli' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kawan-fritoli/' },
      ],
    },
    footer: {
      rights: 'Todos os direitos reservados.',
    },
  },

  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    a11y: {
      menu: 'Open menu',
      toggleTheme: 'Toggle theme',
      toggleLanguage: 'Toggle language',
    },
    hero: {
      role: 'Software Developer',
      headline: 'Kawan Fritoli',
      subtitle: LOREM,
      cta: 'View projects',
      ctaSecondary: 'Get in touch',
    },
    about: {
      title: 'About me',
      paragraphs: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. I study Systems Analysis and Development, deepening my knowledge in software architecture, best practices and web development.',
        LOREM,
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis.',
      ],
      highlights: [
        { label: 'Education', value: 'Systems Analysis and Development' },
        { label: 'Current focus', value: 'Front-end and integrations' },
        { label: 'Location', value: 'Brazil — São Paulo' },
      ],
    },
    experience: {
      title: 'Experience',
      description: LOREM,
      items: [
        {
          period: '2024 — Present',
          role: 'Software Developer',
          company: 'Lorem Ipsum Tech',
          description: LOREM,
          tags: ['React', 'TypeScript', 'REST APIs'],
        },
        {
          period: '2023 — 2024',
          role: 'Junior Developer',
          company: 'Dolor Sit Systems',
          description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          tags: ['JavaScript', 'SQL', 'Git'],
        },
        {
          period: '2022 — 2023',
          role: 'Development Intern',
          company: 'Amet Consectetur',
          description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          tags: ['HTML', 'CSS', 'Technical support'],
        },
      ],
      goalsTitle: 'Growth goals',
      goals: [
        'Deepen front-end architecture and automated testing.',
        'Strengthen back-end and database knowledge.',
        'Apply AI and automation to corporate processes.',
      ],
    },
    projects: {
      title: 'Projects',
      description:
        'Lorem ipsum dolor sit amet — a selection of technical challenges solved, focused on architecture, automation and systems integration.',
      viewProject: 'View project',
      items: [
        {
          title: 'React / Ionic Front-end Architecture',
          challenge: 'Technical challenge',
          description: LOREM,
          tags: ['React', 'Ionic', 'Design System'],
          href: 'https://github.com/kawanfritoli',
        },
        {
          title: 'AI-Powered Document Automation',
          challenge: 'Technical challenge',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Automated generation and validation of corporate documents using language models.',
          tags: ['Python', 'LLM', 'Automation'],
          href: 'https://github.com/kawanfritoli',
        },
        {
          title: 'IoT with Arduino and Database',
          challenge: 'Technical challenge',
          description:
            'Sed do eiusmod tempor incididunt ut labore. Sensor data collection, persistence and visualization in a web dashboard.',
          tags: ['Arduino', 'IoT', 'MySQL'],
          href: 'https://github.com/kawanfritoli',
        },
        {
          title: 'Lorem Ipsum Dashboard',
          challenge: 'Technical challenge',
          description: LOREM,
          tags: ['React', 'Charts', 'API'],
          href: 'https://github.com/kawanfritoli',
        },
      ],
    },
    contact: {
      title: 'Contact',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Available for opportunities and collaborations.',
      emailLabel: 'Email',
      email: 'kfritoligomes@gmail.com',
      links: [
        { label: 'GitHub', href: 'https://github.com/kawanfritoli' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kawan-fritoli/' },
      ],
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
}

export const languages = Object.keys(translations)
