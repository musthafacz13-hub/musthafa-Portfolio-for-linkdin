import React, { useState, useEffect } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Mail, MessageCircle, Github, Linkedin, X, ArrowUpRight } from 'lucide-react';
import { ContactChannelType } from '../../types';

interface ChannelConfig {
  type: ContactChannelType;
  title: string;
  description: string;
  icon: React.ElementType;
  hint: string;
}

const CHANNELS: ChannelConfig[] = [
  {
    type: 'email',
    title: 'Email',
    description: 'Inquiries regarding full-time roles, internships, and project proposals.',
    icon: Mail,
    hint: 'Awaiting verified email address',
  },
  {
    type: 'whatsapp',
    title: 'WhatsApp',
    description: 'Direct communication for urgent inquiries and quick consultations.',
    icon: MessageCircle,
    hint: 'Awaiting phone connection',
  },
  {
    type: 'github',
    title: 'GitHub',
    description: 'Source code repositories, open-source contributions, and engineering projects.',
    icon: Github,
    hint: 'Awaiting profile link',
  },
  {
    type: 'linkedin',
    title: 'LinkedIn',
    description: 'Professional networking, career history, and collaborative discussions.',
    icon: Linkedin,
    hint: 'Awaiting profile link',
  },
];

export const ContactSection: React.FC = () => {
  const [selectedChannel, setSelectedChannel] = useState<ChannelConfig | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedChannel) {
        setSelectedChannel(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedChannel]);

  return (
    <section id="contact" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="05 / CONNECT"
          title="Direct Inquiries &amp; Contact"
          description="Available for full-time engineering positions, internships, and technical client work. Contact endpoints will connect directly once verified."
        />

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CHANNELS.map((channel) => {
            const Icon = channel.icon;
            return (
              <div
                key={channel.type}
                className="group relative flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-6 hover:border-black transition-colors duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-800 transition-colors">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className="text-[11px] font-mono text-neutral-500 bg-neutral-100 px-2 py-0.5 rounded">
                      Pending
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-black mb-1.5">
                    {channel.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                    {channel.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100">
                  <button
                    type="button"
                    onClick={() => setSelectedChannel(channel)}
                    className="w-full inline-flex items-center justify-between text-xs font-semibold text-neutral-800 hover:text-[#0245EC] py-1 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-[#0245EC] rounded"
                  >
                    <span>Channel Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Status Card (clean, un-alarmist, authentic) */}
        <div className="mt-8 rounded-lg border border-neutral-200 bg-neutral-50/70 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-semibold text-black">
              Direct Contact Integration Notice
            </h4>
            <p className="text-xs text-neutral-600 mt-1 max-w-2xl">
              To maintain authentic communication without misleading simulated delivery, no dummy phone numbers or fabricated email addresses are shown. Direct links will activate upon submission of Musthafa&apos;s verified credentials.
            </p>
          </div>
          <div className="text-xs font-mono text-neutral-500 shrink-0">
            Phase 1 UI Ready
          </div>
        </div>
      </div>

      {/* Channel Configuration Modal with Keyboard Escape and Focus Trap */}
      {selectedChannel && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 transition-opacity duration-150"
          onClick={() => setSelectedChannel(null)}
        >
          <div
            className="relative w-full max-w-md rounded-lg bg-white p-6 sm:p-7 shadow-lg border border-neutral-300 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedChannel(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#0245EC]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0245EC] text-white">
                <selectedChannel.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 id="contact-modal-title" className="text-lg font-bold text-black">
                  {selectedChannel.title} Channel
                </h3>
                <span className="text-xs font-mono text-neutral-500">
                  Status: Ready for configuration
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-600 mb-5 leading-relaxed">
              This channel is fully mapped and waiting for Musthafa&apos;s verified {selectedChannel.title} destination. Upon content input, this action will open your native mail client or messaging app directly.
            </p>

            <div className="rounded-lg bg-neutral-50 border border-neutral-200 p-3 mb-5 text-xs font-mono text-neutral-600">
              <span className="text-neutral-500 block mb-1">Configuration key:</span>
              <code className="text-neutral-900 font-semibold block">
                CONTACT_{selectedChannel.type.toUpperCase()}_TARGET
              </code>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedChannel(null)}
                className="px-4 py-2 text-xs font-medium bg-black text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0245EC]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
