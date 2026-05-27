import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function scrollTo(id: string, closeMobile?: () => void) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  if (closeMobile) closeMobile();
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Beranda", id: "beranda" },
    { name: "Tentang Kami", id: "tentang" },
    { name: "Layanan", id: "layanan" },
    { name: "Portofolio", id: "portofolio" },
    { name: "Kontak", id: "kontak" },
  ];

  const close = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-350 ${
        scrolled
          ? "bg-[rgba(13,13,20,0.95)] backdrop-blur-[16px] border-b border-[rgba(200,169,110,0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollTo("beranda")}
            className="flex flex-col text-left"
            aria-label="Ke halaman beranda"
          >
            <span className="font-heading font-bold text-xl md:text-2xl text-white tracking-widest leading-tight">
              HARTA DWI JAYA
            </span>
            <span className="text-[rgba(200,169,110,0.70)] text-xs tracking-wider font-sans">
              Architect &amp; Contractor · Bali
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="relative text-white/80 hover:text-[#C8A96E] transition-colors duration-200 font-heading text-sm uppercase tracking-wider group"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C8A96E] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => scrollTo("kontak")}
              className="bg-[#C8A96E] hover:bg-[#E2C98A] text-[#0D0D14] rounded-full px-6 py-2.5 font-heading font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-[0_4px_20px_rgba(200,169,110,0.35)]"
            >
              Konsultasi Gratis
            </button>
          </div>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 top-20 bg-[#0D0D14]/90 backdrop-blur-sm z-30"
              onClick={close}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="md:hidden fixed top-20 right-0 bottom-0 w-4/5 max-w-xs bg-[rgba(13,13,20,0.98)] backdrop-blur-xl z-40 flex flex-col pt-12 px-8"
            >
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.07, duration: 0.3 }}
                  onClick={() => scrollTo(link.id, close)}
                  className="text-white text-2xl font-serif hover:text-[#C8A96E] transition-colors py-4 text-left border-b border-white/5 last:border-0"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => scrollTo("kontak", close)}
                className="mt-8 bg-[#C8A96E] hover:bg-[#E2C98A] text-[#0D0D14] rounded-full px-6 py-3.5 font-heading font-semibold uppercase tracking-wider transition-colors w-full"
              >
                Konsultasi Gratis
              </motion.button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
