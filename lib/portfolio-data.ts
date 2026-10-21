export interface ContactChannel {
  name: string;
  type: 'email' | 'github' | 'whatsapp' | 'instagram';
  handle: string;
  url?: string;
  isConfigured: boolean;
  actionLabel: string;
}

export const PORTFOLIO_CONFIG = {
  personal: {
    name: 'Muhammed Musthafa',
    role: 'Junior Web & Mobile App Developer',
    location: 'Kerala, India',
    status: 'Degree student',
    availabilityNotice: 'Open to internship opportunities',
    headlineLead: 'I build digital',
    headlineMiddle: 'experiences with',
    headlineTail: 'curiosity and code.',
    heroParagraph:
      "I'm Muhammed Musthafa, a degree student and junior web and mobile app developer based in Kerala, India. Open to internship opportunities.",
    email: 'muhammedmusthafalinkdin@gmail.com',
  },

  // Contact links: Only valid, provided contact information is clickable.
  // Unverified profile links are marked as unconfigured until supplied.
  contactChannels: [
    {
      name: 'Gmail',
      type: 'email' as const,
      handle: 'muhammedmusthafalinkdin@gmail.com',
      url: 'mailto:muhammedmusthafalinkdin@gmail.com',
      isConfigured: true,
      actionLabel: 'Compose email to Muhammed Musthafa',
    },
    {
      name: 'GitHub',
      type: 'github' as const,
      handle: 'Profile pending',
      isConfigured: false,
      actionLabel: 'GitHub profile pending configuration',
    },
    {
      name: 'WhatsApp',
      type: 'whatsapp' as const,
      handle: 'Contact pending',
      isConfigured: false,
      actionLabel: 'WhatsApp contact pending configuration',
    },
    {
      name: 'Instagram',
      type: 'instagram' as const,
      handle: 'Profile pending',
      isConfigured: false,
      actionLabel: 'Instagram profile pending configuration',
    },
  ] as ContactChannel[],
};
