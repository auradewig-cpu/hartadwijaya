import React from "react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M12 0C7.802 0 4 3.403 4 7.602C4 11.8 7.469 16.812 12 24C16.531 16.812 20 11.8 20 7.602C20 3.403 16.199 0 12 0ZM12 11C10.343 11 9 9.657 9 8C9 6.343 10.343 5 12 5C13.657 5 15 6.343 15 8C15 9.657 13.657 11 12 11Z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="pt-20 pb-8 bg-[#0D0D14] text-white border-t border-[#A08050]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-2xl text-[#C8A96E] mb-2">CV HARTA DWI JAYA</h3>
            <p className="text-[#8B8B9A] font-sans text-xs uppercase tracking-widest mb-4">Architect &amp; Contractor</p>
            <p className="text-white/55 font-sans text-sm mb-8 leading-relaxed">
              Menghadirkan arsitektur dan konstruksi berkualitas tinggi dengan sentuhan estetika khas Bali.
              Kami membangun bukan hanya bangunan — tapi warisan.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram CV Harta Dwi Jaya"
                className="w-10 h-10 rounded-full bg-[#14141F] border border-[#1E1E2E] flex items-center justify-center text-white/60 hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all duration-200"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook CV Harta Dwi Jaya"
                className="w-10 h-10 rounded-full bg-[#14141F] border border-[#1E1E2E] flex items-center justify-center text-white/60 hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all duration-200"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://wa.me/62811395113"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp CV Harta Dwi Jaya"
                className="w-10 h-10 rounded-full bg-[#14141F] border border-[#1E1E2E] flex items-center justify-center text-white/60 hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all duration-200"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://maps.app.goo.gl/hC1CMJZjtjfsXhZF7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lokasi di Google Maps"
                className="w-10 h-10 rounded-full bg-[#14141F] border border-[#1E1E2E] flex items-center justify-center text-white/60 hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all duration-200"
              >
                <MapPinIcon />
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="font-heading text-xs font-bold mb-6 text-[#C8A96E] uppercase tracking-[0.2em]">Navigasi</h4>
            <ul className="space-y-3 font-sans text-sm text-white/55">
              {[
                { name: "Beranda", id: "beranda" },
                { name: "Tentang Kami", id: "tentang" },
                { name: "Layanan", id: "layanan" },
                { name: "Portofolio", id: "portofolio" },
                { name: "Proses Kerja", id: "proses" },
                { name: "Kontak", id: "kontak" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-[#C8A96E] hover:translate-x-1 transition-all duration-200 inline-flex"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-heading text-xs font-bold mb-6 text-[#C8A96E] uppercase tracking-[0.2em]">Layanan</h4>
            <ul className="space-y-3 font-sans text-sm text-white/55">
              {[
                "Desain Arsitektur",
                "Konstruksi & Kontraktor",
                "Renovasi & Restorasi",
                "Visualisasi 3D & Rendering",
                "Desain Interior & Lansekap",
                "Perencanaan & IMB/PBG",
              ].map((svc) => (
                <li key={svc}>
                  <button
                    onClick={() => scrollTo("layanan")}
                    className="hover:text-[#C8A96E] hover:translate-x-1 transition-all duration-200 text-left inline-flex"
                  >
                    {svc}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-heading text-xs font-bold mb-6 text-[#C8A96E] uppercase tracking-[0.2em]">Kontak</h4>
            <ul className="space-y-5 font-sans text-sm text-white/55">
              <li>
                <span className="block text-[#C8A96E]/60 text-[0.65rem] uppercase tracking-widest mb-1">Alamat</span>
                <span>Jl. Wagimin, Kediri, Kec. Kediri,<br />Kab. Tabanan, Bali 82121</span>
                <a
                  href="https://maps.app.goo.gl/hC1CMJZjtjfsXhZF7"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-[#A08050] hover:text-[#C8A96E] text-xs mt-0.5 transition-colors"
                >
                  Lihat di Google Maps &rarr;
                </a>
              </li>
              <li>
                <span className="block text-[#C8A96E]/60 text-[0.65rem] uppercase tracking-widest mb-1">Telepon / WA</span>
                <a href="https://wa.me/62811395113" className="hover:text-[#C8A96E] transition-colors">
                  0811 395 113
                </a>
              </li>
              <li>
                <span className="block text-[#C8A96E]/60 text-[0.65rem] uppercase tracking-widest mb-1">Email</span>
                <a href="mailto:info@hartadwijaya.com" className="hover:text-[#C8A96E] transition-colors">
                  info@hartadwijaya.com
                </a>
              </li>
              <li>
                <span className="block text-[#C8A96E]/60 text-[0.65rem] uppercase tracking-widest mb-1">Jam Operasional</span>
                <span>Senin – Sabtu<br />08.00 – 17.00 WITA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs font-sans text-white/35">
          <p>&copy; 2025 CV Harta Dwi Jaya. Semua hak dilindungi.</p>
          <p>Kediri, Tabanan – Bali</p>
        </div>
      </div>
    </footer>
  );
}
