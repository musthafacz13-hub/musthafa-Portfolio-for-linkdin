import React, { useState } from 'react';
import { ArrowUp, X } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [privacyOpen, setPrivacyOpen] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-neutral-200 bg-white py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Identity & Professional Title */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-black">
                Musthafa
              </span>
            </div>
            <p className="mt-1 text-sm text-neutral-600">
              Full-Stack Web Developer &amp; Android App Developer
            </p>
          </div>

          {/* Dynamic Copyright, Privacy Notice Trigger, and Back-to-Top */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 w-full sm:w-auto justify-between">
            <div className="flex items-center gap-4 text-xs text-neutral-500 font-mono">
              <span>&copy; {currentYear} Musthafa.</span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-black underline underline-offset-2 cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-[#0245EC] rounded"
              >
                Privacy &amp; Data Notice
              </button>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-700 hover:text-[#0245EC] transition-colors py-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0245EC] rounded"
              aria-label="Scroll back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Truthful Privacy & Data Notice Modal */}
      {privacyOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="privacy-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 transition-opacity duration-150"
          onClick={() => setPrivacyOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-lg bg-white p-6 sm:p-8 shadow-lg border border-neutral-300 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#0245EC]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 id="privacy-modal-title" className="text-lg font-bold text-black mb-3">
              Privacy &amp; Data Notice
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed max-h-[60vh] overflow-y-auto pr-1">
              <p>
                <strong>Architecture:</strong> This website is an informational personal portfolio built with React and Tailwind CSS.
              </p>
              <p>
                <strong>Analytics &amp; Cookies:</strong> No advertising trackers, telemetry analytics scripts, or third-party tracking cookies are utilized on this site.
              </p>
              <p>
                <strong>Communications:</strong> When contact channels (Email, WhatsApp, GitHub, LinkedIn) are accessed, interactions occur directly through your client device and the respective external platform. No message data is logged, retained, or stored on an intermediate database.
              </p>
              <p>
                <strong>Hosting:</strong> Standard server access logs (IP address, user agent, requested resource) may be processed by hosting infrastructure strictly for operational security and network delivery.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setPrivacyOpen(false)}
                className="px-4 py-2 text-xs font-medium bg-black text-white hover:bg-neutral-800 rounded-lg transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#0245EC]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
