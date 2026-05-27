import React from "react";

export default function Footer() {
  return (
    <footer className="pt-20 pb-8 bg-dark-bg text-white border-t border-gold">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-2xl text-gold mb-4">CV HARTA DWI JAYA</h3>
            <p className="text-white/60 font-sans text-sm mb-6 leading-relaxed">
              Arsitektur & Kontraktor Premium di Bali. Menghadirkan solusi bangunan kelas atas yang memadukan estetika tropis dan ketahanan modern.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-white/70 hover:border-gold hover:text-gold transition-colors">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-white/70 hover:border-gold hover:text-gold transition-colors">
                FB
              </a>
              <a href="https://wa.me/6281234567890" className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-white/70 hover:border-gold hover:text-gold transition-colors">
                WA
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-white tracking-wide">Navigasi</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60">
              <li><a href="#beranda" className="hover:text-gold transition-colors">Beranda</a></li>
              <li><a href="#tentang" className="hover:text-gold transition-colors">Tentang Kami</a></li>
              <li><a href="#portofolio" className="hover:text-gold transition-colors">Portofolio</a></li>
              <li><a href="#proses" className="hover:text-gold transition-colors">Proses Kerja</a></li>
              <li><a href="#kontak" className="hover:text-gold transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-white tracking-wide">Layanan</h4>
            <ul className="space-y-3 font-sans text-sm text-white/60">
              <li><a href="#layanan" className="hover:text-gold transition-colors">Desain Arsitektur</a></li>
              <li><a href="#layanan" className="hover:text-gold transition-colors">Konstruksi Bangunan</a></li>
              <li><a href="#layanan" className="hover:text-gold transition-colors">Renovasi & Restorasi</a></li>
              <li><a href="#layanan" className="hover:text-gold transition-colors">Desain Interior</a></li>
              <li><a href="#layanan" className="hover:text-gold transition-colors">Perizinan (IMB/PBG)</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-6 text-white tracking-wide">Kontak</h4>
            <ul className="space-y-4 font-sans text-sm text-white/60">
              <li className="flex flex-col">
                <span className="text-gold/70 text-xs mb-1">Alamat</span>
                <span>Bali, Indonesia</span>
              </li>
              <li className="flex flex-col">
                <span className="text-gold/70 text-xs mb-1">Telepon / WhatsApp</span>
                <a href="https://wa.me/6281234567890" className="hover:text-gold transition-colors">+62 812 3456 7890</a>
              </li>
              <li className="flex flex-col">
                <span className="text-gold/70 text-xs mb-1">Email</span>
                <a href="mailto:info@hartadwijaya.com" className="hover:text-gold transition-colors">info@hartadwijaya.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-white/40">
          <p>© 2025 CV Harta Dwi Jaya. Semua hak dilindungi.</p>
          <p>Bali, Indonesia</p>
        </div>
      </div>
    </footer>
  );
}
