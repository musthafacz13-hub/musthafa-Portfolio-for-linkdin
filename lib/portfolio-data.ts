export interface ProjectItem {
  id: string;
  name: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  icon: 'key' | 'globe';
}

export const PORTFOLIO_CONFIG = {
  personal: {
    name: 'Muhammed Musthafa',
    role: 'Full-Stack AI Developer',
    location: 'Kerala, India',
    status: 'Degree student',
    headline: 'I build digital experiences with curiosity and code.',
    heroParagraph:
      "I'm Muhammed Musthafa, a developer building clean, responsive web and mobile applications. Currently pursuing my degree and looking for internship opportunities.",
    email: 'muhammedmusthafalinkdin@gmail.com',
    github: {
      username: 'musthafacz13-hub',
      url: 'https://github.com/musthafacz13-hub',
    },
  },
  projects: [
    {
      id: 'passfourge',
      name: 'PassFourge',
      description: 'A password generator application.',
      liveUrl: 'https://passfourge.vercel.app/',
      githubUrl: 'https://github.com/musthafacz13-hub/PASSFOURGE',
      icon: 'key' as const,
    },
    {
      id: 'my-portfolio',
      name: 'My Portfolio',
      description: 'My personal developer portfolio website.',
      liveUrl: 'https://musthafa-portfolio-for-linkedin.vercel.app/',
      githubUrl: 'https://github.com/musthafacz13-hub/musthafa-Portfolio-for-linkdin',
      icon: 'globe' as const,
    },
  ] as ProjectItem[],
};
