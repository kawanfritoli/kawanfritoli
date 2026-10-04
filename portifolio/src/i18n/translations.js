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
        'É muito difícil falar sobre si mesmo sem um olhar enviesado, ou sentir receio de se expor demais. Por isso, decidi deixar que as pessoas próximas a mim dissessem quem é o Kawan Fritoli.',
        'Se tivessem que me resumir em uma única palavra, seria "calmo". Meus amigos me conhecem como uma pessoa tranquila, que faz as coisas no seu próprio tempo e não se deixa paralisar pelo medo de julgamentos. Embora eu não seja o mais extrovertido do grupo, sou bastante sociável e, com meu jeito bem-humorado, acabo assumindo um papel de "alívio cômico" entre os amigos.',
        'Nas relações pessoais, prezo muito pela lealdade. Sou visto como alguém cuidadoso e verdadeiro. Fora da rotina de trabalho e estudos, gosto de aproveitar meu tempo livre com videogames, acompanhando esportes — especialmente como um corinthiano roxo — ou ouvindo música. Apesar de gostar muito de jogar, passo longe de ser excessivamente competitivo, afinal o importante não é vencer, mas a experiência.',
        'Tenho um perfil mais cauteloso em relação a tomada de decisões. Posso ter meu próprio ritmo e preferir o que já conheço, mas sou determinado quando defino um objetivo. Essa mesma tranquilidade que me define na vida pessoal é a ferramenta que utilizo para manter o foco, buscar novos desafios e me impulsionar, aos poucos, para fora da minha zona de conforto.'
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
      items: [
        {
          title: 'Jupiter Frito',
          challenge: 'Projeto acadêmico — SPTech',
          description:
            'Sistema completo para um estúdio de tatuagem, desenvolvido em grupo na SPTech: portfólio online, agendamento de clientes, orçamentos, controle de estoque e área administrativa com dashboard. Front-end em React e API REST em Java com Spring Boot, com autenticação JWT e envio de e-mails.',
          tags: ['React', 'Java', 'Spring Boot', 'MySQL', 'Docker', 'JWT', 'Firebase', 'GitHub Actions'],
          links: [
            { label: 'Front-end', href: 'https://github.com/rayragalvao/Studio-Tattoo' },
            { label: 'Back-end', href: 'https://github.com/rayragalvao/Studio-Tattoo-Backend' },
          ],
          image: '/projects/jupiter-frito.png',
        },
        {
          title: 'AeroData',
          challenge: 'Projeto acadêmico — SPTech',
          description:
            'Projeto em grupo na SPTech que usa dados da ANAC sobre atrasos e cancelamentos de voos para apoiar decisões estratégicas de companhias aéreas. Inclui processo ETL em Java que lê planilhas do AWS S3 e grava no MySQL, dashboard com KPIs, site institucional e notificações via Slack, tudo em containers Docker numa instância EC2.',
          tags: ['Java', 'Node.js', 'MySQL', 'AWS', 'Docker'],
          href: 'https://github.com/AeroData01/Projeto-AeroData',
          image: '/projects/aerodata.png',
        },
        {
          title: 'Moum Soya',
          challenge: 'Projeto acadêmico — SPTech',
          description:
            'Projeto em grupo do 1º semestre na SPTech: monitoramento da umidade do ar em plantações de soja com Arduino e sensor DHT11, para prevenir a ferrugem asiática. Inclui site institucional, dashboard com dados dos talhões em tempo real e simulador financeiro.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Arduino', 'MySQL', 'Node.js', 'IoT'],
          href: 'https://github.com/ThGalvaon/Moum-Soya',
          image: '/projects/moum-soya.png',
        },
      ],
    },
    contact: {
      title: 'Contato',
      description:
        'Gostou do meu trabalho? Estou disponível para contato através das redes abaixo:',
      emailLabel: 'E-mail',
      email: 'kfritoligomes@gmail.com',
      resume: 'Baixar currículo',
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
      items: [
        {
          title: 'Jupiter Frito',
          challenge: 'Academic project — SPTech',
          description:
            'Full system for a tattoo studio, built as a group project at SPTech: online portfolio, client scheduling, quotes, inventory control and an admin area with a dashboard. React front-end and a Java Spring Boot REST API with JWT authentication and email notifications.',
          tags: ['React', 'Java', 'Spring Boot', 'MySQL', 'Docker', 'JWT', 'Firebase', 'GitHub Actions'],
          links: [
            { label: 'Front-end', href: 'https://github.com/rayragalvao/Studio-Tattoo' },
            { label: 'Back-end', href: 'https://github.com/rayragalvao/Studio-Tattoo-Backend' },
          ],
          image: '/projects/jupiter-frito.png',
        },
        {
          title: 'AeroData',
          challenge: 'Academic project — SPTech',
          description:
            "Group project at SPTech that uses ANAC data on flight delays and cancellations to support airlines' strategic decisions. Includes a Java ETL process that reads spreadsheets from AWS S3 into MySQL, a KPI dashboard, an institutional website and Slack notifications, all running in Docker containers on an EC2 instance.",
          tags: ['Java', 'Node.js', 'MySQL', 'AWS', 'Docker'],
          href: 'https://github.com/AeroData01/Projeto-AeroData',
          image: '/projects/aerodata.png',
        },
        {
          title: 'Moum Soya',
          challenge: 'Academic project — SPTech',
          description:
            'First-semester group project at SPTech: air humidity monitoring for soybean crops using Arduino and a DHT11 sensor to prevent Asian soybean rust. Includes an institutional website, a real-time field dashboard and a financial simulator.',
          tags: ['HTML', 'CSS', 'JavaScript', 'Arduino', 'MySQL', 'Node.js', 'IoT'],
          href: 'https://github.com/ThGalvaon/Moum-Soya',
          image: '/projects/moum-soya.png',
        },
      ],
    },
    contact: {
      title: 'Contact',
      description:
        'Did you like my work? You can get in touch via the channels below:',
      emailLabel: 'Email',
      email: 'kfritoligomes@gmail.com',
      resume: 'Download resume',
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
