import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const EMAIL = "pabloinfodesign95@gmail.com";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="inline-flex items-center gap-2">
      <a
        href={`mailto:${EMAIL}`}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-all duration-300 hover:scale-[1.02]"
      >
        {EMAIL}
      </a>
      <button
        onClick={handleCopy}
        className="p-2.5 rounded-full border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 hover:bg-white/[0.05] transition-all duration-200"
        aria-label="Copiar email"
      >
        {copied ? (
          <FiCheck className="h-4 w-4 text-emerald-400" />
        ) : (
          <FiCopy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
}
