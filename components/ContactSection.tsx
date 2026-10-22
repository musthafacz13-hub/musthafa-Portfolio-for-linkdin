'use client';

import { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_CONFIG } from '@/lib/portfolio-data';
import { Copy, Check, AlertCircle, Mail } from 'lucide-react';

export default function ContactSection() {
  const { personal } = PORTFOLIO_CONFIG;
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    // Clear any previous active timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(personal.email);
        setCopyStatus('copied');
      } else {
        // Fallback for older browsers and non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = personal.email;
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.opacity = '0';
        textArea.setAttribute('readonly', '');
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        textArea.setSelectionRange(0, 99999);
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setCopyStatus('copied');
        } else {
          setCopyStatus('error');
        }
      }
    } catch {
      setCopyStatus('error');
    }

    timeoutRef.current = setTimeout(() => {
      setCopyStatus('idle');
    }, 2500);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-20 border-b border-white/10 bg-[#0a0a0a] py-20 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Centered Section Title with Gradient Text */}
        <div className="text-center mb-12">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#00d2ff] via-[#3a7bd5] to-[#0245EC] bg-clip-text text-transparent inline-block"
          >
            Contact Me
          </h2>
          <div className="mt-3 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-[#00d2ff] to-[#0245EC]" />
        </div>

        {/* Styled Card for Contact Information */}
        <div className="mx-auto max-w-2xl bg-[#111111] border border-white/10 rounded-[20px] p-8 sm:p-12 text-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#00d2ff]/50 transition-all duration-300">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/30">
            <Mail className="h-6 w-6" aria-hidden="true" />
          </div>

          <p className="text-lg sm:text-xl font-semibold text-white mb-2">
            Get in touch
          </p>
          <p className="text-sm sm:text-base text-[#a0a0a0] mb-8 leading-relaxed">
            I'm always open to discussing internships, junior developer roles, or project collaborations. Drop me an email anytime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${personal.email}`}
              className="text-base sm:text-lg font-semibold text-[#00d2ff] hover:underline transition-colors break-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff] rounded-sm py-1"
              aria-label={`Send email to ${personal.email}`}
            >
              {personal.email}
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-xs font-semibold text-white bg-white/10 hover:bg-[#00d2ff] hover:text-[#0a0a0a] border border-white/15 transition-all duration-300 min-h-[44px] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00d2ff] cursor-pointer"
              aria-label={
                copyStatus === 'copied'
                  ? 'Email address copied to clipboard'
                  : 'Copy email address to clipboard'
              }
            >
              {copyStatus === 'copied' && (
                <>
                  <Check className="w-3.5 h-3.5 text-[#0a0a0a]" aria-hidden="true" />
                  <span>Copied!</span>
                </>
              )}
              {copyStatus === 'error' && (
                <>
                  <AlertCircle className="w-3.5 h-3.5 text-red-400" aria-hidden="true" />
                  <span>Copy failed</span>
                </>
              )}
              {copyStatus === 'idle' && (
                <>
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>

          {/* Screen reader announcement */}
          <span className="sr-only" aria-live="polite">
            {copyStatus === 'copied' && 'Email address copied to clipboard'}
            {copyStatus === 'error' && 'Failed to copy email address'}
          </span>
        </div>
      </div>
    </section>
  );
}
