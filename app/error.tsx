'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white p-6 font-sans">
      <div className="text-center max-w-md bg-[#111111] border border-white/10 p-8 rounded-[20px]">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-[#00d2ff] to-[#0245EC] bg-clip-text text-transparent">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-[#a0a0a0]">{error.message || 'An unexpected error occurred.'}</p>
        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-full px-6 py-2.5 bg-gradient-to-r from-[#00d2ff] to-[#0245EC] text-white text-sm font-semibold hover:shadow-[0_4px_15px_rgba(0,210,255,0.4)] transition-all min-h-[44px]"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
