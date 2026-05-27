import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type: "Rumah Tinggal",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo, saya ${formData.name}.
    
Nomor HP: ${formData.phone}
Email: ${formData.email}
Jenis Proyek: ${formData.type}

Pesan:
${formData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/6281234567890?text=${encodedText}`, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClass = "peer w-full border-b border-[#1A1A2E]/20 bg-transparent py-2 px-0 text-[#1A1A2E] focus:border-[#C8A96E] focus:outline-none focus:ring-0 placeholder-transparent font-sans text-base";
  const labelClass = "absolute left-0 -top-3.5 text-sm text-[#1A1A2E]/55 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-[#C8A96E] font-heading";

  return (
    <section id="kontak" className="py-28 bg-[#F5F1EA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#A08050] font-heading uppercase tracking-[0.3em] text-xs mb-4 font-bold">
            — HUBUNGI KAMI —
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1A1A2E] leading-[1.15] tracking-[-0.02em]">
            Mulai Proyek Anda<br />Bersama Kami Hari Ini
          </h2>
          <p className="mt-4 text-[#6B6577] font-sans font-light text-base max-w-xl mx-auto">
            Konsultasi pertama Anda gratis. Ceritakan visi Anda, dan tim kami siap membantu mewujudkannya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 md:p-12 border border-[rgba(200,169,110,0.25)] shadow-[0_4px_32px_rgba(13,13,20,0.06)]"
          >
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Nama Lengkap"
                  data-testid="input-name"
                />
                <label htmlFor="name" className={labelClass}>
                  Nama Lengkap *
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Nomor WhatsApp / Telepon"
                  data-testid="input-phone"
                />
                <label htmlFor="phone" className={labelClass}>
                  Nomor WhatsApp / Telepon *
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Email"
                  data-testid="input-email"
                />
                <label htmlFor="email" className={labelClass}>
                  Email (Opsional)
                </label>
              </div>

              <div className="relative">
                <label htmlFor="type" className="block text-xs text-[#A08050] font-heading uppercase tracking-wider mb-2">
                  Jenis Proyek
                </label>
                <select
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border-b border-[#1A1A2E]/20 bg-transparent py-2 px-0 text-[#1A1A2E] focus:border-[#C8A96E] focus:outline-none focus:ring-0 font-sans text-base cursor-pointer"
                  data-testid="select-project-type"
                >
                  <option value="Rumah Tinggal">Rumah Tinggal</option>
                  <option value="Villa Resort">Villa / Resort</option>
                  <option value="Bangunan Komersial">Bangunan Komersial</option>
                  <option value="Renovasi">Renovasi</option>
                  <option value="Konsultasi Desain">Konsultasi Desain</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div className="relative pt-2">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full border-b border-[#1A1A2E]/20 bg-transparent py-2 px-0 text-[#1A1A2E] focus:border-[#C8A96E] focus:outline-none focus:ring-0 placeholder-transparent font-sans text-base resize-none"
                  placeholder="Pesan / deskripsi proyek"
                  data-testid="textarea-message"
                />
                <label
                  htmlFor="message"
                  className="absolute left-0 -top-1.5 text-sm text-[#1A1A2E]/55 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-1.5 peer-focus:text-sm peer-focus:text-[#C8A96E] font-heading"
                >
                  Pesan / Deskripsi Proyek
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#C8A96E] hover:bg-[#E2C98A] text-[#0D0D14] font-heading font-semibold py-4 rounded-full uppercase tracking-widest text-sm transition-all duration-300 hover:shadow-[0_4px_24px_rgba(200,169,110,0.4)] hover:scale-[1.01] active:scale-[0.99] mt-2"
                data-testid="button-submit"
              >
                Kirim Pesan &rarr;
              </button>

              <p className="text-center text-[#6B6577] text-sm font-sans">
                Atau langsung{" "}
                <a
                  href="https://wa.me/6281234567890?text=Halo%2C+saya+ingin+konsultasi+mengenai+proyek+bangunan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A08050] hover:text-[#C8A96E] underline transition-colors"
                >
                  chat kami di WhatsApp &rarr;
                </a>
              </p>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="space-y-0 mb-8 divide-y divide-[rgba(200,169,110,0.15)]">
              <div className="flex items-start gap-4 py-5">
                <div className="text-[#C8A96E] mt-0.5 shrink-0"><MapPin size={20} /></div>
                <div>
                  <h4 className="font-heading font-bold text-[#1A1A2E] text-sm mb-1">Bali, Indonesia</h4>
                  <a
                    href="https://maps.app.goo.gl/hC1CMJZjtjfsXhZF7"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#A08050] hover:text-[#C8A96E] text-sm font-sans transition-colors"
                  >
                    Lihat di Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <div className="text-[#C8A96E] mt-0.5 shrink-0"><Phone size={20} /></div>
                <div>
                  <h4 className="font-heading font-bold text-[#1A1A2E] text-sm mb-1">+62 812 3456 7890</h4>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#A08050] hover:text-[#C8A96E] text-sm font-sans transition-colors"
                  >
                    Hubungi via WhatsApp &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <div className="text-[#C8A96E] mt-0.5 shrink-0"><Mail size={20} /></div>
                <div>
                  <h4 className="font-heading font-bold text-[#1A1A2E] text-sm mb-1">info@hartadwijaya.com</h4>
                  <a
                    href="mailto:info@hartadwijaya.com"
                    className="text-[#A08050] hover:text-[#C8A96E] text-sm font-sans transition-colors"
                  >
                    Kirim Email &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 py-5">
                <div className="text-[#C8A96E] mt-0.5 shrink-0"><Clock size={20} /></div>
                <div>
                  <h4 className="font-heading font-bold text-[#1A1A2E] text-sm mb-1">Jam Operasional</h4>
                  <p className="text-[#6B6577] text-sm font-sans leading-relaxed">
                    Senin – Sabtu<br />08.00 – 17.00 WITA
                  </p>
                  <p className="text-[#6B6577]/70 text-xs font-sans mt-1">
                    Konsultasi via WhatsApp tetap tersedia
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-grow min-h-[260px] rounded-xl overflow-hidden border border-[rgba(200,169,110,0.20)] shadow-[0_4px_20px_rgba(13,13,20,0.08)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126861.77278474893!2d115.08879!3d-8.409518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd22f4dc4a27fff%3A0xfcf1c960aa1e2ac6!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "260px" }}
                allowFullScreen={true}
                loading="lazy"
                title="Lokasi CV Harta Dwi Jaya di Bali"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
