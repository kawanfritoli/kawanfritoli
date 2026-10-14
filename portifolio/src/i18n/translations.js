export const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      projects: 'Projetos',
      experience: 'Experiência',
      contact: 'Contato',
      resume: 'Baixar currículo',
    },
    a11y: {
      menu: 'Abrir menu',
      toggleTheme: 'Alternar tema',
      toggleLanguage: 'Alternar idioma',
    },
    hero: {
      role: 'Desenvolvedor de Software',
      headline: 'Kawan Fritoli',
      subtitle: 'Atualmente desenvolvendo soluções de software na Semantix',
      cta: 'Sobre mim',
      ctaSecondary: 'Entrar em contato',
    },
    about: {
      title: 'Sobre mim',
      paragraphs: [
        'É muito difícil falar sobre si mesmo sem um olhar enviesado, ou sentir receio de se expor demais. Por isso, decidi deixar que as pessoas próximas a mim dissessem quem é o Kawan Fritoli.',
        'Se tivessem que me resumir em uma única palavra, seria "calmo". Meus amigos me conhecem como uma pessoa tranquila, que faz as coisas no seu próprio tempo e não se deixa paralisar pelo medo de julgamentos. Embora eu não seja o mais extrovertido do grupo, sou bastante sociável e, com meu jeito bem-humorado, acabo assumindo um papel de "alívio cômico" entre os amigos.',
        'Nas relações pessoais, prezo muito pela lealdade. Sou visto como alguém cuidadoso e verdadeiro. Fora da rotina de trabalho e estudos, gosto de aproveitar meu tempo livre com videogames, acompanhando esportes (especialmente como um corinthiano roxo) ou ouvindo música. Apesar de gostar muito de jogar, passo longe de ser excessivamente competitivo, afinal o importante não é vencer, mas a experiência.',
        'Tenho um perfil cauteloso em relação a tomada de decisões. Possuo meu próprio ritmo, mas sou determinado quando defino um objetivo. Essa mesma tranquilidade que me define na vida pessoal é a ferramenta que utilizo para manter o foco, buscar novos desafios e me impulsionar, aos poucos, para fora da minha zona de conforto.'
      ],
      education: {
        title: 'Formação',
        items: [
          {
            course: 'Análise e Desenvolvimento de Sistemas',
            institution: 'São Paulo Tech School',
            period: '2024 — Atual',
          },
          {
            course: 'Informática / Ensino Médio',
            institution: 'ETEC Professor Horácio Augusto da Silveira',
            period: '2018 — 2020',
          }
        ],
      },
      highlights: [
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
      openProject: 'Ver detalhes do projeto',
      details: {
        back: 'Voltar para projetos',
        challenge: 'O desafio',
        solution: 'A solução',
        howItWorks: 'Como funciona por dentro',
        stack: 'Tecnologias',
        links: 'Código-fonte',
        notFoundTitle: 'Projeto não encontrado',
        notFoundDescription:
          'O projeto que você tentou acessar não existe ou foi removido.',
      },
      items: [
        {
          slug: 'jupiter-frito',
          title: 'Jupiter Frito',
          challenge: 'Projeto acadêmico — SPTech',
          story: {
            challenge:
              'Um estúdio de tatuagem costuma organizar quase tudo por mensagens: clientes pedindo orçamento, marcando horários e tirando dúvidas, enquanto a equipe tenta controlar agenda e materiais manualmente. Isso gera retrabalho, horários perdidos e pouca visão do negócio.',
            solution:
              'Criamos, em grupo na SPTech, um sistema completo para o estúdio. Os clientes conhecem os trabalhos pelo portfólio online, pedem orçamentos e agendam horários pela internet. A equipe ganha uma área administrativa com dashboard, onde acompanha agenda, orçamentos e estoque em um só lugar.',
            howItWorks:
              'A parte que o cliente vê foi construída em **React**. Ela conversa com uma **API REST** feita em **Java** com **Spring Boot**, que concentra as regras do negócio e guarda as informações em um banco **MySQL**. O acesso à área administrativa é protegido com tokens **JWT**, e o sistema envia **e-mails** de notificação automaticamente. A aplicação roda em containers **Docker**, conta com serviços do **Firebase**, e a cada alteração no código o **GitHub Actions** executa o pipeline de integração.',
          },
          tags: ['React', 'Java', 'Spring Boot', 'MySQL', 'Docker', 'JWT', 'Firebase', 'GitHub Actions'],
          links: [
            { label: 'Front-end', href: 'https://github.com/rayragalvao/Studio-Tattoo' },
            { label: 'Back-end', href: 'https://github.com/rayragalvao/Studio-Tattoo-Backend' },
          ],
          image: '/projects/jupiter-frito.png',
        },
        {
          slug: 'aerodata',
          title: 'AeroData',
          challenge: 'Projeto acadêmico — SPTech',
          story: {
            challenge:
              'Atrasos e cancelamentos de voos custam caro para as companhias aéreas. A ANAC publica dados públicos sobre isso, mas eles ficam espalhados em planilhas enormes e difíceis de analisar, o que torna complicado usá-los para tomar decisões.',
            solution:
              'Desenvolvemos, em grupo na SPTech, uma plataforma que reúne essas informações e as transforma em indicadores claros, apresentados em um dashboard fácil de consultar. Há também um site institucional, e os avisos importantes chegam direto no Slack da equipe.',
            howItWorks:
              'Um processo em **Java** faz o trabalho pesado: busca as planilhas guardadas na nuvem (**AWS S3**), limpa e organiza os dados (o chamado **ETL**) e salva tudo em um banco **MySQL**. Uma aplicação em **Node.js** consulta esse banco para alimentar o dashboard com os **KPIs** e o site, enquanto integrações com o **Slack** disparam as notificações. Toda a solução roda em containers **Docker** numa máquina virtual da AWS (**EC2**), o que facilita colocar o sistema no ar em qualquer ambiente.',
          },
          tags: ['Java', 'Node.js', 'MySQL', 'AWS', 'Docker'],
          links: [
            { label: 'Repositório', href: 'https://github.com/AeroData01/Projeto-AeroData' },
          ],
          image: '/projects/aerodata.png',
        },
        {
          slug: 'moum-soya',
          title: 'Moum Soya',
          challenge: 'Projeto acadêmico — SPTech',
          story: {
            challenge:
              'A ferrugem asiática é uma das doenças mais prejudiciais para as plantações de soja, e ela se espalha com mais facilidade quando o ar está úmido. Sem acompanhar a umidade de perto, o produtor muitas vezes só percebe o problema quando a lavoura já foi afetada.',
            solution:
              'No nosso primeiro semestre na SPTech, criamos em grupo um sistema que monitora a umidade do ar em cada área da plantação. O produtor acompanha os dados em tempo real por um dashboard, conhece a solução por um site institucional e usa um simulador financeiro para entender quanto pode economizar com a prevenção.',
            howItWorks:
              'Em campo, uma placa **Arduino** com sensor **DHT11** mede a umidade do ar em cada talhão, um exemplo prático de **IoT**. As leituras são enviadas para uma aplicação em **Node.js**, que as armazena em um banco **MySQL**. O site, o dashboard em tempo real e o simulador financeiro foram construídos com **HTML**, **CSS** e **JavaScript**, consultando esses dados para mostrar a situação de cada área da lavoura.',
          },
          tags: ['HTML', 'CSS', 'JavaScript', 'Arduino', 'MySQL', 'Node.js', 'IoT'],
          links: [
            { label: 'Repositório', href: 'https://github.com/ThGalvaon/Moum-Soya' },
          ],
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
      resume: 'Download resume',
    },
    a11y: {
      menu: 'Open menu',
      toggleTheme: 'Toggle theme',
      toggleLanguage: 'Toggle language',
    },
    hero: {
      role: 'Software Developer',
      headline: 'Kawan Fritoli',
      subtitle: 'Currently developing software solutions at Semantix',
      cta: 'About me',
      ctaSecondary: 'Get in touch',
    },
    about: {
      title: 'About me',
      paragraphs: [
        'It is very hard to talk about yourself without a biased view, or without worrying about exposing too much. That is why I decided to let the people closest to me say who Kawan Fritoli is.',
        'If they had to sum me up in a single word, it would be "calm". My friends know me as a laid-back person who does things in his own time and does not let the fear of judgment hold him back. Although I am not the most outgoing one in the group, I am quite sociable and, with my good sense of humor, I end up playing the role of "comic relief" among my friends.',
        'In personal relationships, I truly value loyalty. I am seen as someone caring and genuine. Outside of work and studies, I like to spend my free time playing video games, following sports (especially as a die-hard Corinthians fan) or listening to music. Even though I really enjoy gaming, I am far from being overly competitive; after all, what matters is not winning, but the experience.',
        'I tend to be more cautious when it comes to making decisions. I may have my own pace and prefer what I already know, but I am determined once I set a goal. The same calmness that defines me in my personal life is the tool I use to stay focused, seek new challenges and push myself, little by little, out of my comfort zone.',
      ],
      // To add a new course, just include another object in the "items" list.
      education: {
        title: 'Education',
        items: [
          {
            course: 'Systems Analysis and Development',
            institution: 'São Paulo Tech School',
            period: '2024 — Present',
          },
          {
            course: 'Informatics / High School',
            institution: 'ETEC Professor Horácio Augusto da Silveira',
            period: '2018 — 2020',
          },
        ],
      },
      highlights: [
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
            "I am currently engaged in full-stack development for MySeat, working on interfaces, APIs, databases, and quality assurance. Following the acquisition of the operation by Semantix, I expanded my responsibilities into DevOps, taking on the management and maintenance of the application's entire infrastructure.",
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
      openProject: 'View project details',
      details: {
        back: 'Back to projects',
        challenge: 'The challenge',
        solution: 'The solution',
        howItWorks: 'How it works under the hood',
        stack: 'Tech stack',
        links: 'Source code',
        notFoundTitle: 'Project not found',
        notFoundDescription:
          'The project you tried to open does not exist or has been removed.',
      },
      items: [
        {
          slug: 'jupiter-frito',
          title: 'Jupiter Frito',
          challenge: 'Academic project — SPTech',
          story: {
            challenge:
              'A tattoo studio usually runs almost everything through text messages: clients asking for quotes, booking appointments and asking questions, while the team tries to keep track of the schedule and supplies by hand. That leads to rework, missed appointments and little visibility into the business.',
            solution:
              'As a group project at SPTech, we built a complete system for the studio. Clients browse the work in an online portfolio, request quotes and book appointments online. The team gets an admin area with a dashboard to manage the schedule, quotes and inventory in one place.',
            howItWorks:
              'The part clients see was built with **React**. It talks to a **REST API** written in **Java** with **Spring Boot**, which holds the business rules and stores data in a **MySQL** database. Access to the admin area is protected with **JWT** tokens, and the system sends notification **emails** automatically. The application runs in **Docker** containers, uses **Firebase** services, and every code change triggers an integration pipeline on **GitHub Actions**.',
          },
          tags: ['React', 'Java', 'Spring Boot', 'MySQL', 'Docker', 'JWT', 'Firebase', 'GitHub Actions'],
          links: [
            { label: 'Front-end', href: 'https://github.com/rayragalvao/Studio-Tattoo' },
            { label: 'Back-end', href: 'https://github.com/rayragalvao/Studio-Tattoo-Backend' },
          ],
          image: '/projects/jupiter-frito.png',
        },
        {
          slug: 'aerodata',
          title: 'AeroData',
          challenge: 'Academic project — SPTech',
          story: {
            challenge:
              'Flight delays and cancellations are expensive for airlines. ANAC, Brazil’s civil aviation agency, publishes public data about them, but it is scattered across huge spreadsheets that are hard to analyze, making it difficult to use for decision-making.',
            solution:
              'As a group project at SPTech, we built a platform that gathers this information and turns it into clear indicators in an easy-to-read dashboard. There is also an institutional website, and important alerts go straight to the team’s Slack.',
            howItWorks:
              'A **Java** process does the heavy lifting: it fetches the spreadsheets stored in the cloud (**AWS S3**), cleans and organizes the data (a process known as **ETL**) and saves everything into a **MySQL** database. A **Node.js** application queries that database to power the **KPI** dashboard and the website, while **Slack** integrations send the notifications. The whole solution runs in **Docker** containers on an AWS virtual machine (**EC2**), which makes it easy to deploy in any environment.',
          },
          tags: ['Java', 'Node.js', 'MySQL', 'AWS', 'Docker'],
          links: [
            { label: 'Repository', href: 'https://github.com/AeroData01/Projeto-AeroData' },
          ],
          image: '/projects/aerodata.png',
        },
        {
          slug: 'moum-soya',
          title: 'Moum Soya',
          challenge: 'Academic project — SPTech',
          story: {
            challenge:
              'Asian soybean rust is one of the most damaging diseases for soybean crops, and it spreads more easily when the air is humid. Without keeping a close eye on humidity, farmers often only notice the problem once the crop has already been affected.',
            solution:
              'In our first semester at SPTech, we built as a group a system that monitors air humidity in each area of the field. Farmers follow the data in real time on a dashboard, learn about the solution on an institutional website and use a financial simulator to see how much prevention can save them.',
            howItWorks:
              'Out in the field, an **Arduino** board with a **DHT11** sensor measures air humidity in each plot, a hands-on example of **IoT**. The readings are sent to a **Node.js** application, which stores them in a **MySQL** database. The website, the real-time dashboard and the financial simulator were built with **HTML**, **CSS** and **JavaScript**, reading that data to show the situation of each area of the crop.',
          },
          tags: ['HTML', 'CSS', 'JavaScript', 'Arduino', 'MySQL', 'Node.js', 'IoT'],
          links: [
            { label: 'Repository', href: 'https://github.com/ThGalvaon/Moum-Soya' },
          ],
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
