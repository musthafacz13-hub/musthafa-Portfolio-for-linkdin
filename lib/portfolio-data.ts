export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  category: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'coming-soon';
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
  year?: string;
  note?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface ContactChannel {
  name: string;
  handle: string;
  url: string;
  type: 'email' | 'github' | 'whatsapp' | 'instagram';
  actionLabel: string;
}

export const PORTFOLIO_CONFIG = {
  personal: {
    name: 'Muhammed Musthafa',
    initials: 'MM',
    role: 'Junior Web & Mobile App Developer',
    location: 'Kerala, India',
    status: 'Degree student',
    specialization: 'AI-assisted application development',
    availabilityNotice: 'Open to internship opportunities',
    headlineLead: 'I build digital',
    headlineMiddle: 'experiences with',
    headlineTail: 'curiosity and code.',
    heroParagraph:
      "I'm Muhammed Musthafa, a degree student and junior web and mobile app developer exploring how AI-assisted development can turn ideas into useful digital products.",
    heroSubDetail: 'Web · Mobile · AI-assisted development',
    aboutParagraphs: [
      "I'm Muhammed Musthafa, a degree student from Kerala, India, interested in building useful websites and mobile applications.",
      "I enjoy exploring AI-assisted development workflows and learning how ideas become real products through thoughtful design, experimentation, and implementation.",
      "I'm working toward opportunities where I can contribute, improve my engineering skills, and learn from experienced teams.",
    ],
    email: 'muhammedmusthafalinkdin@gmail.com',
  },

  // Projects list: Configured so new projects can be easily appended or edited.
  projects: [
    {
      id: 'ai-assisted-portfolio',
      name: 'Developer Portfolio & Design System',
      shortDescription:
        'A minimal, typography-focused personal portfolio built with Next.js App Router, Tailwind CSS, and Apple-inspired editorial aesthetics.',
      category: 'Web Application',
      technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS v4'],
      status: 'completed' as const,
      featured: true,
      year: '2026',
      liveUrl: '#',
      codeUrl: 'https://github.com',
      note: 'Active production deployment',
    },
    {
      id: 'personal-project-slot-1',
      name: 'Web Application Project',
      shortDescription:
        'A full-featured responsive web application focusing on clean user flows, semantic markup, and reliable performance.',
      category: 'Web Development',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
      status: 'completed' as const,
      featured: false,
      year: '2025',
      codeUrl: 'https://github.com',
      note: 'Configurable project slot — replace with your repository details',
    },
  ] as Project[],

  // In-progress projects: Clearly separated and tagged "In progress" or "Coming soon"
  inProgressProjects: [
    {
      id: 'mobile-productivity-app',
      name: 'Mobile Utility & Note Workspace',
      shortDescription:
        'Exploring mobile-first gesture patterns, offline state management, and lightweight AI assistance for quick task captures.',
      category: 'Mobile Application',
      technologies: ['Android', 'React Native', 'TypeScript', 'Local Storage'],
      status: 'in-progress' as const,
      year: '2026',
      note: 'Currently in active prototyping and UI iteration',
    },
    {
      id: 'ai-workflow-companion',
      name: 'AI Context & Prompt Workspace',
      shortDescription:
        'An experimental tool designed to structure, evaluate, and test contextual prompts against Gemini APIs for development workflows.',
      category: 'AI-assisted Tool',
      technologies: ['Next.js', 'Google GenAI SDK', 'TypeScript'],
      status: 'coming-soon' as const,
      year: '2026',
      note: 'Architecture and interface wireframing phase',
    },
  ] as Project[],

  // Skills organized into the 5 explicit categories specified in prompt
  skillCategories: [
    {
      id: 'web-development',
      title: 'Web development',
      description: 'Building responsive, accessible web interfaces and frontend architecture.',
      skills: [
        'React',
        'Next.js (App Router)',
        'TypeScript',
        'JavaScript (ES6+)',
        'Tailwind CSS',
        'HTML5 & Modern CSS',
        'RESTful APIs Integration',
      ],
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile app development',
      description: 'Developing intuitive mobile interfaces and cross-platform experiences.',
      skills: [
        'Android App Fundamentals',
        'React Native',
        'Mobile Touch Ergonomics',
        'Responsive Device Adaptation',
      ],
    },
    {
      id: 'ai-assisted-development',
      title: 'AI-assisted development',
      description: 'Leveraging modern AI tooling to accelerate prototyping and quality.',
      skills: [
        'AI-augmented Engineering Workflows',
        'Google Gemini API Integration',
        'Prompt Iteration & System Instructions',
        'Rapid Prototyping & Code Translation',
      ],
    },
    {
      id: 'design-prototyping',
      title: 'Design and prototyping',
      description: 'Creating structured layouts, visual hierarchy, and component systems.',
      skills: [
        'UI/UX Fundamentals',
        'Information Architecture',
        'Design Systems & Component Thinking',
        'Typography & Spacing Scales',
      ],
    },
    {
      id: 'development-tools',
      title: 'Development tools',
      description: 'Standard tooling and workflows for clean version control and debugging.',
      skills: [
        'Git & GitHub',
        'VS Code',
        'Postman',
        'npm & Node.js Ecosystem',
        'Browser DevTools',
      ],
    },
  ] as SkillCategory[],

  // Contact links
  contactChannels: [
    {
      name: 'GitHub',
      handle: 'muhammedmusthafa',
      url: 'https://github.com',
      type: 'github' as const,
      actionLabel: 'View GitHub profile',
    },
    {
      name: 'WhatsApp',
      handle: 'Direct Chat',
      url: 'https://wa.me/',
      type: 'whatsapp' as const,
      actionLabel: 'Open WhatsApp conversation',
    },
    {
      name: 'Instagram',
      handle: '@muhammedmusthafa',
      url: 'https://instagram.com',
      type: 'instagram' as const,
      actionLabel: 'Visit Instagram profile',
    },
    {
      name: 'Gmail',
      handle: 'muhammedmusthafalinkdin@gmail.com',
      url: 'mailto:muhammedmusthafalinkdin@gmail.com',
      type: 'email' as const,
      actionLabel: 'Compose email',
    },
  ] as ContactChannel[],
};
