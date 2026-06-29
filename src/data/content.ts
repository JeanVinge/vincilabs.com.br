// Single source of truth for all site copy, in both languages.
// Edit text here; both the PT (/) and EN (/en/) pages read from this file.
//
// TODO before going live — fill in the real values flagged with `TODO:`:
//   - company.legalName  (e.g. "Vinci Labs Tecnologia LTDA")
//   - company.cnpj        (e.g. "00.000.000/0001-00")  — optional to display
//   - company.location    (e.g. "São Paulo, SP")

export type Locale = 'pt' | 'en';

export interface Service {
  title: string;
  description: string;
}

export interface LocaleContent {
  meta: { title: string; description: string };
  nav: { about: string; services: string; contact: string };
  hero: { eyebrow: string; title: string; tagline: string; cta: string };
  about: { heading: string; body: string[] };
  services: { heading: string; items: Service[] };
  contact: { heading: string; body: string; emailLabel: string; cta: string };
  footer: { rights: string };
}

// Company facts shared across both languages.
export const company = {
  name: 'Vinci Labs',
  email: 'contato@vincilabs.com.br',
  domain: 'vincilabs.com.br',
  legalName: 'TODO: Vinci Labs — razão social / legal name',
  cnpj: 'TODO: CNPJ',
  location: 'TODO: Cidade, UF',
};

export const content: Record<Locale, LocaleContent> = {
  pt: {
    meta: {
      title: 'Vinci Labs — Transformação digital, apps iOS e IA',
      description:
        'A Vinci Labs ajuda empresas a se transformarem digitalmente: aplicativos iOS e mobile, consultoria em transformação digital e soluções de IA e automação.',
    },
    nav: { about: 'Sobre', services: 'Serviços', contact: 'Contato' },
    hero: {
      eyebrow: 'Transformação digital',
      title: 'Construímos o futuro digital do seu negócio',
      tagline:
        'Aplicativos iOS de alto padrão, consultoria em transformação digital e soluções de IA — da ideia ao produto em produção.',
      cta: 'Fale com a gente',
    },
    about: {
      heading: 'Sobre a Vinci Labs',
      body: [
        'A Vinci Labs é uma empresa de transformação digital focada em criar produtos que unem design, engenharia e inteligência artificial.',
        'Nascida da experiência em desenvolvimento iOS, combinamos rigor técnico e atenção ao detalhe para entregar software que as pessoas gostam de usar — e que gera resultado para o negócio.',
      ],
    },
    services: {
      heading: 'O que fazemos',
      items: [
        {
          title: 'Aplicativos iOS & Mobile',
          description:
            'Apps nativos em Swift e SwiftUI, do conceito à publicação na App Store, com foco em performance, qualidade e experiência do usuário.',
        },
        {
          title: 'Transformação Digital',
          description:
            'Consultoria para modernizar processos, sistemas e a experiência do cliente — alinhando tecnologia à estratégia do seu negócio.',
        },
        {
          title: 'IA & Automação',
          description:
            'Integração de inteligência artificial e automação de fluxos de trabalho para reduzir custos, ganhar escala e abrir novas possibilidades.',
        },
      ],
    },
    contact: {
      heading: 'Vamos conversar',
      body: 'Tem um projeto em mente ou quer entender como podemos ajudar? Envie um e-mail e respondemos rápido.',
      emailLabel: 'E-mail',
      cta: 'Enviar e-mail',
    },
    footer: { rights: 'Todos os direitos reservados.' },
  },
  en: {
    meta: {
      title: 'Vinci Labs — Digital transformation, iOS apps & AI',
      description:
        'Vinci Labs helps companies transform digitally: iOS and mobile apps, digital transformation consulting, and AI & automation solutions.',
    },
    nav: { about: 'About', services: 'Services', contact: 'Contact' },
    hero: {
      eyebrow: 'Digital transformation',
      title: 'We build the digital future of your business',
      tagline:
        'High-end iOS apps, digital transformation consulting, and AI solutions — from idea to production.',
      cta: 'Get in touch',
    },
    about: {
      heading: 'About Vinci Labs',
      body: [
        'Vinci Labs is a digital transformation company focused on building products that blend design, engineering, and artificial intelligence.',
        'Born from deep iOS development experience, we combine technical rigor with attention to detail to ship software people love to use — and that drives real business results.',
      ],
    },
    services: {
      heading: 'What we do',
      items: [
        {
          title: 'iOS & Mobile Apps',
          description:
            'Native apps in Swift and SwiftUI, from concept to App Store release, with a focus on performance, quality, and user experience.',
        },
        {
          title: 'Digital Transformation',
          description:
            'Consulting to modernize processes, systems, and customer experience — aligning technology with your business strategy.',
        },
        {
          title: 'AI & Automation',
          description:
            'Artificial intelligence integration and workflow automation to cut costs, scale up, and unlock new possibilities.',
        },
      ],
    },
    contact: {
      heading: "Let's talk",
      body: 'Have a project in mind or want to know how we can help? Send us an email and we will get back to you quickly.',
      emailLabel: 'Email',
      cta: 'Send email',
    },
    footer: { rights: 'All rights reserved.' },
  },
};
