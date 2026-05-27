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

  return (
    <section id="kontak" className="py-24 bg-light-bg text-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold-dark font-heading uppercase tracking-[0.2em] text-sm mb-4 font-bold">
            — Hubungi Kami —
          </p>
          <h2 className="text-4xl md:text-5xl font-serif">
            Mulai Proyek Anda<br />Bersama Kami Hari Ini
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 border border-gold/30 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
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
                  className="peer w-full border-b border-gray-300 bg-transparent py-2 px-0 text-foreground focus:border-gold focus:outline-none focus:ring-0 placeholder-transparent font-sans"
                  placeholder="Nama Lengkap"
                />
                <label htmlFor="name" className="absolute left-0 -top-3.5 text-sm text-foreground/60 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gold font-heading">
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
                  className="peer w-full border-b border-gray-300 bg-transparent py-2 px-0 text-foreground focus:border-gold focus:outline-none focus:ring-0 placeholder-transparent font-sans"
                  placeholder="Nomor WhatsApp / Telepon"
                />
                <label htmlFor="phone" className="absolute left-0 -top-3.5 text-sm text-foreground/60 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gold font-heading">
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
                  className="peer w-full border-b border-gray-300 bg-transparent py-2 px-0 text-foreground focus:border-gold focus:outline-none focus:ring-0 placeholder-transparent font-sans"
                  placeholder="Email"
                />
                <label htmlFor="email" className="absolute left-0 -top-3.5 text-sm text-foreground/60 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gold font-heading">
                  Email (Opsional)
                </label>
              </div>

              <div className="relative">
                <select 
                  name="type"
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 bg-transparent py-2 px-0 text-foreground focus:border-gold focus:outline-none focus:ring-0 font-sans cursor-pointer"
                >
                  <option value="Rumah Tinggal">Rumah Tinggal</option>
                  <option value="Villa Resort">Villa Resort</option>
                  <option value="Bangunan Komersial">Bangunan Komersial</option>
                  <option value="Renovasi">Renovasi</option>
                  <option value="Konsultasi Desain">Konsultasi Desain</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
                <label htmlFor="type" className="absolute left-0 -top-4 text-sm text-gold font-heading">
                  Jenis Proyek
                </label>
              </div>

              <div className="relative pt-2">
                <textarea 
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="peer w-full border-b border-gray-300 bg-transparent py-2 px-0 text-foreground focus:border-gold focus:outline-none focus:ring-0 placeholder-transparent font-sans resize-none"
                  placeholder="Pesan / deskripsi proyek"
                />
                <label htmlFor="message" className="absolute left-0 -top-1.5 text-sm text-foreground/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-1.5 peer-focus:text-sm peer-focus:text-gold font-heading">
                  Pesan / Deskripsi Proyek
                </label>
              </div>

              <button 
                type="submit"
                className="w-full bg-gold hover:bg-gold-dark text-white font-heading font-semibold py-4 uppercase tracking-wider transition-colors mt-4"
              >
                Kirim Pesan &rarr;
              </button>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="text-gold mt-1"><MapPin /></div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">Bali, Indonesia</h4>
                  <a href="https://maps.app.goo.gl/hC1CMJZjtjfsXhZF7" target="_blank" rel="noreferrer" className="text-gold-dark text-sm hover:underline font-sans">
                    Lihat di Google Maps &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold mt-1"><Phone /></div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">+62 812 3456 7890</h4>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="text-gold-dark text-sm hover:underline font-sans">
                    Hubungi via WhatsApp &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold mt-1"><Mail /></div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">info@hartadwijaya.com</h4>
                  <a href="mailto:info@hartadwijaya.com" className="text-gold-dark text-sm hover:underline font-sans">
                    Kirim Email &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-gold mt-1"><Clock /></div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">Jam Operasional</h4>
                  <p className="text-foreground/70 text-sm font-sans">Senin – Sabtu<br/>08.00 – 17.00 WITA</p>
                </div>
              </div>
            </div>

            <div className="flex-grow min-h-[280px] bg-gray-200 rounded-lg overflow-hidden border border-gold/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126861.77278474893!2d115.08879!3d-8.409518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd22f4dc4a27fff%3A0xfcf1c960aa1e2ac6!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
