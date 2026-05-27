import React, { useState, useEffect } from "react";

const WA_URL = "https://wa.me/62811395113?text=Halo%2C+saya+ingin+konsultasi+mengenai+proyek+bangunan";

export default function WhatsAppBubble() {
  const [showBadge, setShowBadge] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBadge(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div
          className="bg-[#0D0D14] text-white text-sm font-sans font-medium px-4 py-2 rounded-lg shadow-xl whitespace-nowrap animate-fade-in relative"
          style={{ animation: "fadeInLeft 0.2s ease forwards" }}
        >
          Chat dengan Kami
          <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[#0D0D14]" />
        </div>
      )}

      {/* Bubble button */}
      <div className="relative">
        {/* Pulse rings */}
        <div
          className="absolute inset-0 rounded-full bg-[#25D366]/35"
          style={{ animation: "pulse-ring 2.5s ease-out infinite" }}
        />
        <div
          className="absolute inset-0 rounded-full bg-[#25D366]/25"
          style={{ animation: "pulse-ring 2.5s ease-out 1.25s infinite" }}
        />

        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat via WhatsApp"
          className="relative flex items-center justify-center w-[60px] h-[60px] md:w-[64px] md:h-[64px] rounded-full bg-[#25D366] shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:bg-[#128C7E] hover:shadow-[0_6px_32px_rgba(37,211,102,0.60)] hover:scale-[1.08] active:scale-[0.96] transition-all duration-[250ms] cubic-bezier(0.34,1.56,0.64,1)"
          onClick={() => setShowBadge(false)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" aria-hidden="true">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.322.101.144.453.712 1.011 1.207.72.636 1.27.826 1.415.913.144.087.232.072.318-.014l.365-.434c.144-.174.289-.145.434-.087l1.358.636c.144.072.245.116.282.181.036.065.036.376-.108.781z"/>
          </svg>

          {/* Notification badge */}
          {showBadge && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white font-heading font-bold text-[0.6rem] border-2 border-white shadow-sm">
              1
            </span>
          )}
        </a>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(8px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      ` }} />
    </div>
  );
}
