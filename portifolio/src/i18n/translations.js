const BIRTH_DATE = new Date(2003, 6, 3)

function getAge() {
  const today = new Date()
  let age = today.getFullYear() - BIRTH_DATE.getFullYear()
  const monthDiff = today.getMonth() - BIRTH_DATE.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < BIRTH_DATE.getDate())) {
    age -= 1
  }
  return age
}

const AGE = getAge()

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
      subtitle: 'Desenvolvedor de software e torcedor do Corinthians nos tempos livres, moro em São Paulo e estou iniciando minha carreira em tecnologia como estagiário na Semantix',
      cta: 'Sobre mim',
      ctaSecondary: 'Entrar em contato',
    },
    about: {
      title: 'Sobre mim',
      paragraphs: [
        `Sou nascido e criado em São Paulo, tenho ${AGE} anos e em 2024 decidi que queria fazer parte do mercado de tecnologia. Ingressei no curso de ADS pela São Paulo Tech School e desde então já estagiei em duas grandes empresas do ramo. A cada dia aprendo algo novo e pra mim o céu é o limite.`,
        'Pessoalmente sou um devoto torcedor do Corinthians, adoro filmes de comédia e videogames. Sou um pouco eclético ouvindo música e gosto bastante de testar receitas malucas na internet.',
      ],
      highlights: [
        { label: 'Formação', value: 'Análise e Desenvolvimento de Sistemas - São Paulo Tech School' },
        { label: 'Foco atual', value: 'Full Stack Develop & DevOps' },
        { label: 'Localização', value: 'Brasil — São Paulo' },
      ],
    },
    experience: {
      title: 'Experiência',
      description: 'Confira abaixo um pouco da minha trajetória profissional',
      items: [
        {
          period: '2026 — Atual',
          role: 'Estágiário em Desenvolvimento',
          company: 'Semantix',
          description: 'Atualmente, sigo no desenvolvimento full-stack do MySeat, atuando na criação de interfaces, APIs, banco de dados e garantia de qualidade. Com a aquisição da operação pela Semantix, expandi minhas responsabilidades para a área de DevOps, assumindo também o gerenciamento e a sustentação de toda a infraestrutura da aplicação.',
          tags: ['Angular', 'NestJS', 'PostgreSQL', 'Git', 'Docker', 'Kubernetes', 'Azure'],
        },
        {
          period: '2025 — 2026',
          role: 'Estagiário em Desenvolvimento',
          company: 'Atos',
          description:
            'Atuei no desenvolvimento full-stack do MySeat, um sistema corporativo de reserva de mesas. Fui responsável de ponta a ponta pela criação de interfaces, APIs REST e banco de dados, além de garantir a qualidade do produto através de testes automatizados e code reviews.',
          tags: ['Angular', 'NestJS', 'PostgreSQL', 'Git', 'Docker', 'Kubernetes', 'Azure'],
        },
      ],
    },
    projects: {
      title: 'Projetos',
      description:
        'Alguns dos principais projetos e soluções que desenvolvi até aqui:',
      viewProject: 'Ver projeto',
      wip: {
        badge: 'Em construção',
        title: 'Esta seção está em obras',
        description:
          'Estou finalizando os detalhes dos projetos antes de publicá-los. Em breve estarão disponíveis aqui.',
        cta: 'Ver meu GitHub',
      },
      items: [
        // {
        //   title: 'Arquitetura Front-end React / Ionic',
        //   challenge: 'Desafio técnico',
        //   description: LOREM,
        //   tags: ['React', 'Ionic', 'Design System'],
        //   href: 'https://github.com/kawanfritoli',
        // },
        // {
        //   title: 'Automação de Documentos com IA',
        //   challenge: 'Desafio técnico',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Automação de geração e validação de documentos corporativos com modelos de linguagem.',
        //   tags: ['Python', 'LLM', 'Automação'],
        //   href: 'https://github.com/kawanfritoli',
        // },
        // {
        //   title: 'IoT com Arduino e Banco de Dados',
        //   challenge: 'Desafio técnico',
        //   description:
        //     'Sed do eiusmod tempor incididunt ut labore. Coleta de dados de sensores, persistência e visualização em painel web.',
        //   tags: ['Arduino', 'IoT', 'MySQL'],
        //   href: 'https://github.com/kawanfritoli',
        // },
      ],
    },
    contact: {
      title: 'Contato',
      description:
        'Gostou do meu trabalho? Estou disponível para contato através das redes abaixo:',
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
      subtitle: 'Software developer and Corinthians fan in my spare time; I live in São Paulo and am starting my career in technology as an intern at Semantix.',
      cta: 'About me',
      ctaSecondary: 'Get in touch',
    },
    about: {
      title: 'About me',
      paragraphs: [
        `I was born and raised in São Paulo, I am ${AGE} years old and in 2024 I decided that I wanted to be part of the technology market. I joined the ADS course at São Paulo Tech School and since then I have already interned at two major companies in the field. Every day I learn something new and for me the sky is the limit.`,
        'Personally, I am a devoted Corinthians fan, I love comedy movies and video games. I am a bit eclectic when it comes to music and I really enjoy trying out crazy recipes I find on the internet.',
      ],
      highlights: [
        { label: 'Education', value: 'Systems Analysis and Development - São Paulo Tech School' },
        { label: 'Current focus', value: 'Full Stack Development & DevOps' },
        { label: 'Location', value: 'Brazil — São Paulo' },
      ],
    },
    experience: {
      title: 'Experience',
      description: 'Check out a bit of my professional journey below',
      items: [
        {
          period: '2026 — Present',
          role: 'Development Intern',
          company: 'Semantix',
          description:
            'I continue working on the full-stack development of MySeat, building interfaces, APIs, databases and ensuring quality assurance. After the operation was acquired by Semantix, I expanded my responsibilities into DevOps, also taking over the management and maintenance of the entire application infrastructure.',
          tags: ['Angular', 'NestJS', 'PostgreSQL', 'Git', 'Docker', 'Kubernetes', 'Azure'],
        },
        {
          period: '2025 — 2026',
          role: 'Development Intern',
          company: 'Atos',
          description:
            'I worked on the full-stack development of MySeat, a corporate desk booking system. I was responsible end to end for building interfaces, REST APIs and databases, as well as ensuring product quality through automated tests and code reviews.',
          tags: ['Angular', 'NestJS', 'PostgreSQL', 'Git', 'Docker', 'Kubernetes', 'Azure'],
        },
      ],
    },
    projects: {
      title: 'Projects',
      description:
        'Some of the key projects and solutions I have developed so far:',
      viewProject: 'View project',
      wip: {
        badge: 'Under construction',
        title: 'This section is under construction',
        description:
          'I am finalizing the project details before publishing them. They will be available here soon.',
        cta: 'Visit my GitHub',
      },
      items: [
        // {
        //   title: 'React / Ionic Front-end Architecture',
        //   challenge: 'Technical challenge',
        //   description: LOREM,
        //   tags: ['React', 'Ionic', 'Design System'],
        //   href: 'https://github.com/kawanfritoli',
        // },
        // {
        //   title: 'AI-Powered Document Automation',
        //   challenge: 'Technical challenge',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Automated generation and validation of corporate documents using language models.',
        //   tags: ['Python', 'LLM', 'Automation'],
        //   href: 'https://github.com/kawanfritoli',
        // },
        // {
        //   title: 'IoT with Arduino and Database',
        //   challenge: 'Technical challenge',
        //   description:
        //     'Sed do eiusmod tempor incididunt ut labore. Sensor data collection, persistence and visualization in a web dashboard.',
        //   tags: ['Arduino', 'IoT', 'MySQL'],
        //   href: 'https://github.com/kawanfritoli',
        // },
      ],
    },
    contact: {
      title: 'Contact',
      description:
        'Did you like my work? You can get in touch via the channels below:',
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
