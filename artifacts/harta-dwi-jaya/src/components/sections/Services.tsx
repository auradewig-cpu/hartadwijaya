import React from "react";
import { motion } from "framer-motion";
import { PenLine, HardHat, Hammer, FileCheck, Monitor, Sofa } from "lucide-react";

const services = [
  {
    icon: <PenLine className="w-8 h-8" />,
    title: "Desain Arsitektur",
    desc: "Kami merancang bangunan yang tidak hanya estetis, tetapi juga fungsional dan selaras dengan lingkungan Bali. Dari konsep awal hingga gambar kerja lengkap siap bangun."
  },
  {
    icon: <HardHat className="w-8 h-8" />,
    title: "Konstruksi & Kontraktor",
    desc: "Eksekusi pembangunan dengan material terpilih, tenaga ahli bersertifikat, dan pengawasan ketat setiap tahapan. Tepat waktu, tepat anggaran."
  },
  {
    icon: <Hammer className="w-8 h-8" />,
    title: "Renovasi & Restorasi",
    desc: "Perbarui, perkuat, dan perindah bangunan Anda yang sudah ada. Kami menangani renovasi skala kecil hingga total overhaul."
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: "Perencanaan & IMB / PBG",
    desc: "Konsultasi tata ruang, kebutuhan lahan, dan pengurusan izin bangunan agar proyek Anda berjalan legal dan lancar sejak awal."
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Visualisasi 3D & Rendering",
    desc: "Lihat bangunan Anda sebelum dibangun. Rendering 3D fotorealistis membantu Anda membuat keputusan desain dengan percaya diri."
  },
  {
    icon: <Sofa className="w-8 h-8" />,
    title: "Desain Interior & Lansekap",
    desc: "Lengkapi bangunan dengan sentuhan interior harmonis dan taman yang mencerminkan jiwa tropis Bali yang autentik dan elegan."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } }
};

export default function Services() {
  return (
    <section id="layanan" className="py-24 bg-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-gold font-heading uppercase tracking-[0.2em] text-sm mb-4">
            ✦ Layanan Kami ✦
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-white">
            Solusi Lengkap untuk Setiap<br />Kebutuhan Bangunan Anda
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((srv, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="bg-dark-surface border border-dark-border p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_4px_20px_rgba(200,169,110,0.1)] flex flex-col items-start"
            >
              <div className="text-gold mb-6 bg-gold/10 p-4 rounded-sm">
                {srv.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-white">{srv.title}</h3>
              <p className="text-white/70 font-sans font-light leading-relaxed">
                {srv.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
