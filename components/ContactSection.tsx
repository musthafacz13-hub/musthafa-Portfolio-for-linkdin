'use client';

import { useState } from 'react';
import { PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

// Official, recognizable SVG brand icons
function GithubIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.782-.88-2.058-.98-.276-.1-.477-.15-.678.15-.201.3-.778.98-.954 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.086-.175-.3-.019-.462.132-.612.136-.135.301-.35.452-.526.15-.175.201-.3.301-.5.101-.2.05-.376-.025-.526-.075-.15-.678-1.636-.929-2.242-.244-.59-.493-.51-.678-.52l-.578-.01c-.201 0-.527.075-.803.376s-1.055 1.03-1.055 2.513 1.08 2.914 1.231 3.115c.15.201 2.125 3.245 5.15 4.551.72.311 1.282.497 1.72.637.724.23 1.382.197 1.902.12.58-.087 1.782-.728 2.033-1.431.25-.704.25-1.307.175-1.432-.075-.125-.276-.201-.577-.351zM12.05 2C6.54 2 2.07 6.47 2.07 11.98c0 1.97.57 3.81 1.57 5.37L2 22l4.82-1.57c1.5 1 3.29 1.55 5.23 1.55 5.51 0 9.98-4.47 9.98-9.98C22.03 6.47 17.56 2 12.05 2zm0 18.28c-1.75 0-3.37-.53-4.73-1.44l-.34-.23-2.86.93.95-2.79-.24-.36a8.212 8.212 0 01-1.35-4.41c0-4.57 3.71-8.28 8.28-8.28 4.57 0 8.28 3.71 8.28 8.28 0 4.57-3.71 8.28-8.28 8.28z" />
    </svg>
  );
}

function InstagramIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function ContactSection() {
  const { personal, contactChannels } = PORTFOLIO_CONFIG;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderIcon = (type: string) => {
    switch (type) {
      case 'github':
        return <GithubIcon className="w-5 h-5 text-[#111111]" />;
      case 'whatsapp':
        return <WhatsAppIcon className="w-5 h-5 text-[#111111]" />;
      case 'instagram':
        return <InstagramIcon className="w-5 h-5 text-[#111111]" />;
      case 'email':
      default:
        return <Mail className="w-5 h-5 text-[#111111]" />;
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-b border-[#E5E5E5] bg-[#F6F6F4] py-16 sm:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#666666]">
            05 / CONTACT
          </p>
          <h2
            id="contact-heading"
            className="mt-3 text-2xl sm:text-4xl font-normal tracking-tight text-[#111111]"
          >
            Contact
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#666666] leading-relaxed">
            Open to conversations regarding internships, junior developer roles, and projects.
          </p>

          {/* Primary Email Card with Quick Copy */}
          <div className="mt-8 p-5 sm:p-7 bg-white border border-[#E5E5E5] rounded-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-[#666666]">
              Direct Email
            </span>
            <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="text-base sm:text-xl font-medium text-[#111111] hover:text-[#0245EC] transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0245EC] rounded-sm"
                aria-label={`Send email to ${personal.email}`}
              >
                {personal.email}
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-medium text-[#111111] bg-[#F6F6F4] hover:bg-[#D9FF3A] border border-[#E5E5E5] rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0245EC] shrink-0 min-h-[44px]"
                aria-label={copied ? 'Email address copied' : 'Copy email address to clipboard'}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#111111]" aria-hidden="true" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#111111]" aria-hidden="true" />
                    <span>Copy email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Channels Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactChannels.map((channel) => {
              if (channel.isConfigured && channel.url) {
                return (
                  <a
                    key={channel.name}
                    href={channel.url}
                    className="flex items-center justify-between p-4 sm:p-5 bg-white border border-[#E5E5E5] rounded-sm hover:border-[#111111] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0245EC] min-h-[44px]"
                    aria-label={channel.actionLabel}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div className="p-2 bg-[#F6F6F4] rounded-sm group-hover:bg-[#D9FF3A]/30 transition-colors shrink-0">
                        {renderIcon(channel.type)}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-medium text-[#111111] truncate">
                          {channel.name}
                        </h3>
                        <p className="text-xs text-[#666666] font-mono mt-0.5 truncate">
                          {channel.handle}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      className="w-4 h-4 text-[#666666] group-hover:text-[#0245EC] transition-colors shrink-0 ml-2"
                      aria-hidden="true"
                    />
                  </a>
                );
              }

              // Non-clickable placeholder for unconfigured channels (no fake URLs generated)
              return (
                <div
                  key={channel.name}
                  className="flex items-center justify-between p-4 sm:p-5 bg-white/70 border border-[#E5E5E5] rounded-sm text-neutral-400 min-h-[44px]"
                  aria-label={channel.actionLabel}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-2 bg-[#F6F6F4] rounded-sm opacity-60 shrink-0">
                      {renderIcon(channel.type)}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-[#111111] truncate">
                        {channel.name}
                      </h3>
                      <p className="text-xs text-[#666666] font-mono mt-0.5 truncate">
                        {channel.handle}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666] bg-[#F6F6F4] px-2 py-0.5 border border-[#E5E5E5] rounded-sm shrink-0 ml-2">
                    Pending
                  </span>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-xs text-[#666666]">
            Location: Kerala, India. Open to remote and hybrid opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
