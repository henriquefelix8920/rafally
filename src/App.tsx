import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Instagram, MapPin, ChevronDown, Sparkles, ArrowRight, Phone, Menu, X, HeartPulse, Droplets, Flame } from 'lucide-react';

// ============================================
// NAVIGATION
// ============================================
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-void/80 backdrop-blur-xl py-5 shadow-lg shadow-void/50' : 'py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 md:px-14 lg:px-20 flex items-center justify-between">
          <a href="#" className="font-display text-lg md:text-xl tracking-[0.2em] text-mauve-light hover:text-cream transition-colors duration-300">
            Toque de Vênus
          </a>
          
          <nav className="hidden md:flex items-center gap-12">
            <a href="#experiencia" className="text-[11px] tracking-[0.25em] uppercase text-mauve hover:text-cream transition-colors duration-300">
              Experiência
            </a>
            <a href="#galeria" className="text-[11px] tracking-[0.25em] uppercase text-mauve hover:text-cream transition-colors duration-300">
              Galeria
            </a>
            <a href="#equipe" className="text-[11px] tracking-[0.25em] uppercase text-mauve hover:text-cream transition-colors duration-300">
              Equipe
            </a>
            <a 
              href="https://wa.me/5585992391490" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-7 py-3 border border-plum/60 text-mauve-light text-[11px] tracking-[0.2em] uppercase hover:bg-plum/20 hover:border-plum transition-all duration-300 rounded-full"
            >
              Agendar
            </a>
          </nav>

          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-mauve-light"
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-void/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-12 md:hidden"
          >
            <a href="#experiencia" onClick={() => setMenuOpen(false)} className="font-display text-3xl text-mauve-light">Experiência</a>
            <a href="#galeria" onClick={() => setMenuOpen(false)} className="font-display text-3xl text-mauve-light">Galeria</a>
            <a href="#equipe" onClick={() => setMenuOpen(false)} className="font-display text-3xl text-mauve-light">Equipe</a>
            <a 
              href="https://wa.me/5585992391490" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 px-10 py-4 border border-plum text-mauve-light rounded-full text-sm tracking-widest uppercase"
            >
              Agendar Sessão
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ============================================
// HERO SECTION
// ============================================
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <section ref={ref} className="relative h-[min(900px,100svh)] min-h-[680px] w-full overflow-hidden">
      <motion.div style={{ scale }} className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="/clip3.mp4"
          poster="/foto1.jpg"
        />
        <div className="video-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/50 via-transparent to-void/40" />
      </motion.div>

      <div className="hero-sculpture hero-sculpture-one" aria-hidden="true"><span /></div>
      <div className="hero-sculpture hero-sculpture-two" aria-hidden="true"><span /></div>
      <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
      <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
      <motion.div 
        style={{ opacity, y: textY }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-8 md:px-14 lg:px-20 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-3 px-6 py-2.5 border border-mauve/20 rounded-full text-[10px] md:text-[11px] tracking-[0.35em] uppercase text-mauve-light/80 backdrop-blur-sm bg-void/20">
            <Sparkles className="w-3 h-3 text-plum" />
            Massoterapia & Experiências Exclusivas
            <Sparkles className="w-3 h-3 text-plum" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-normal tracking-wide text-cream leading-[0.95]"
        >
          <span className="block">Toque de</span>
          <span className="block italic font-bold text-gradient">Vênus</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="font-display text-lg md:text-2xl lg:text-3xl text-mauve-light/70 italic tracking-wider mt-10 max-w-2xl"
        >
          Uma jornada de volta a si mesma
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="flex items-center gap-6 md:gap-10 mt-12 text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-mauve/60"
        >
          <span>Relaxamento</span>
          <span className="w-10 h-[1px] bg-plum/40" />
          <span>Presença</span>
          <span className="w-10 h-[1px] bg-plum/40" />
          <span>Conexão</span>
        </motion.div>

        <motion.a
          href="https://wa.me/5585992391490"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-14 inline-flex items-center gap-3 px-10 py-4 bg-plum/70 hover:bg-plum backdrop-blur-sm text-cream text-[11px] tracking-[0.25em] uppercase rounded-full transition-all duration-300 border border-plum/50"
        >
          Agende sua experiência
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-mauve/40">Scroll</span>
          <ChevronDown className="w-4 h-4 text-mauve/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ============================================
// INTRO SECTION
// ============================================
function IntroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-48 md:py-64 px-8 md:px-14 lg:px-20 overflow-hidden">
      <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-plum/5 blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4 }}
          className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.4] text-mauve-light/90"
        >
          Cada toque, uma intenção: <span className="italic text-cream">libertar</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 flex items-center justify-center gap-4"
        >
          <span className="w-20 h-[1px] bg-gradient-to-r from-transparent to-plum" />
          <span className="w-2 h-2 rounded-full bg-plum/50" />
          <span className="w-20 h-[1px] bg-gradient-to-l from-transparent to-plum" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 text-mauve/50 tracking-[0.4em] text-[10px] uppercase"
        >
          Fortaleza • Ceará
        </motion.p>
      </div>
    </section>
  );
}

// ============================================
// WOW MOMENT
// ============================================
function WowMoment() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1.3, 1, 1, 1.2]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 0.3, 0.3, 0.8]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.7, 0.9], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[80vh] md:h-screen overflow-hidden">
      <motion.div 
        style={{ scale: imgScale }}
        className="absolute inset-0"
      >
        <img 
          src="/foto4.jpg" 
          alt="Relaxamento e bem-estar corporal"
          className="w-full h-full object-cover"
        />
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-void/60" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void/50 via-transparent to-void/70" />
      </motion.div>
      
      <motion.div 
        style={{ opacity: textOpacity }}
        className="relative z-10 h-full flex items-center justify-center px-8 md:px-14 lg:px-20"
      >
        <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream/95 italic leading-tight text-center max-w-4xl">
          "O corpo guarda.<br/>
          <span className="text-mauve-light">Nossas mãos liberam."</span>
        </p>
      </motion.div>
    </section>
  );
}

// ============================================
// EXPERIENCE SECTION
// ============================================
function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 0.7, 0.7, 0.85]);

  const services = [
    { title: "Relaxante", desc: "Dissolve tensões. Devolve calma.", Icon: Sparkles },
    { title: "Terapêutica", desc: "Alivia dores. Restaura o corpo.", Icon: HeartPulse },
    { title: "Drenagem", desc: "Elimina toxinas. Traz leveza.", Icon: Droplets },
    { title: "Pedras Quentes", desc: "Calor profundo. Equilíbrio energético.", Icon: Flame },
  ];

  return (
    <section id="experiencia" ref={ref} className="relative min-h-screen overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] -bottom-[10%]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          src="/clip1.mp4"
          poster="/foto3.jpg"
        />
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-void/80" 
        />
      </motion.div>

      <div className="experience-content relative z-10 px-6 sm:px-8 md:px-14 lg:px-20">
        <div className="experience-inner max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="experience-heading text-center mb-16 md:mb-24"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-plum mb-8 block">
              ✧ Experiências ✧
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-cream font-normal tracking-wide">
              O Ritual do Toque
            </h2>
          </motion.div>

          <div className="experience-services grid md:grid-cols-2 mt-0">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="group p-6 md:p-8 rounded-2xl bg-aubergine/20 backdrop-blur-md border border-mauve/10 hover:border-plum/35 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="service-icon-wrap">
                    <service.Icon className="w-5 h-5 text-mauve-light" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl text-cream mb-3 group-hover:text-mauve-light transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-mauve/60 leading-relaxed text-sm md:text-base">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="experience-cta text-center mt-14 md:mt-16"
          >
            <a 
              href="https://wa.me/5585992391490"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 border border-plum/60 text-mauve-light text-[11px] tracking-[0.25em] uppercase rounded-full hover:bg-plum/20 hover:border-plum transition-all duration-300"
            >
              Agende sua sessão
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// GALLERY SECTION
// ============================================
function GallerySection() {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  const media = [
    { type: 'image', src: '/foto1.jpg', alt: 'Rafally', layout: 'gallery-feature' },
    { type: 'image', src: '/foto2.jpg', alt: 'Sessão de massagem', layout: 'gallery-standard' },
    { type: 'video', src: '/clip2.mp4', alt: 'Massagem terapêutica', layout: 'gallery-portrait' },
    { type: 'image', src: '/foto3.jpg', alt: 'Equipe', layout: 'gallery-standard' },
  ];

  return (
    <section id="galeria" className="relative py-32 md:py-40 px-8 md:px-14 lg:px-20">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-aubergine/5 to-void" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="gallery-heading text-center mb-24 md:mb-28"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-plum mb-8 block">
            ✧ Galeria ✧
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-cream font-normal tracking-wide">
            Fragmentos
          </h2>
        </motion.div>

        <div className="gallery-grid gap-3 md:gap-5">
          {media.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`${item.layout} img-hover-zoom relative rounded-xl overflow-hidden cursor-pointer group`}
              onClick={() => setSelectedMedia(i)}
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-void/0 group-hover:bg-void/40 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 w-14 h-14 rounded-full border border-mauve/40 flex items-center justify-center backdrop-blur-sm bg-void/20">
                  <Sparkles className="w-5 h-5 text-mauve-light" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedMedia !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-void/97 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {media[selectedMedia].type === 'image' ? (
                <img src={media[selectedMedia].src} alt={media[selectedMedia].alt} className="w-full h-full object-contain rounded-2xl" />
              ) : (
                <video src={media[selectedMedia].src} autoPlay muted loop playsInline className="w-full h-full object-contain rounded-2xl" />
              )}
            </motion.div>
            <button 
              className="absolute top-8 right-8 w-12 h-12 rounded-full border border-mauve/30 flex items-center justify-center text-mauve-light hover:text-cream transition-all"
              onClick={() => setSelectedMedia(null)}
              aria-label="Fechar"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ============================================
// TEAM SECTION
// ============================================
function TeamSection() {
  const team = [
    { name: "Rafally", role: "Massoterapeuta Principal", handle: "rafalllyyx", featured: true },
    { name: "Barbara", role: "Massoterapeuta", handle: "massoterapeutabarbaraa" },
    { name: "Naomy", role: "Massoterapeuta", handle: "naomy_venus" },
    { name: "Ribeiro", role: "Terapeuta", handle: "terapeuta.ribeiro" },
    { name: "Nanda", role: "Massoterapeuta", handle: "nandaa_massoterapeuta" },
    { name: "Suy", role: "Massoterapeuta", handle: "itsmesuyyya" },
  ];

  return (
    <section id="equipe" className="relative py-32 md:py-44 px-6 sm:px-8 md:px-14 lg:px-20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-plum/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-plum mb-8 block">
            ✧ Equipe ✧
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-cream font-normal tracking-wide">
            Mãos que Transformam
          </h2>
        </motion.div>

        {/* Featured - Rafally */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16 md:mb-20"
        >
          <div className="relative rounded-3xl overflow-hidden bg-aubergine/20 backdrop-blur-md border border-mauve/10 p-10 md:p-16 lg:p-20">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="relative">
                <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-plum/40 shadow-2xl shadow-plum/20">
                  <img src="/foto1.jpg" alt="Rafally" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full bg-plum/60 flex items-center justify-center border border-mauve/30">
                  <Sparkles className="w-5 h-5 text-cream" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <span className="text-[10px] tracking-[0.4em] uppercase text-plum">Massoterapeuta Principal</span>
                <h3 className="font-display text-4xl md:text-6xl text-cream mt-4 tracking-wide">Rafally</h3>
                <p className="text-mauve/70 mt-6 max-w-md leading-relaxed text-base md:text-lg">
                  A essência do Toque de Vênus.
                </p>
                <a 
                  href="https://instagram.com/rafalllyyx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-sm text-mauve-light hover:text-cream transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @rafalllyyx
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other team - Editorial Layout */}
        <div className="team-grid">
          {team.filter(t => !t.featured).map((member, i) => (
            <motion.article
              key={member.handle}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.12 }}
              className={`team-card group ${i === 4 ? 'team-card-last' : ''}`}
            >
              <div className="team-avatar-wrap">
                <div className="team-avatar">
                  <span className="font-display text-4xl md:text-5xl text-mauve-light">{member.name[0]}</span>
                </div>
                <span className="team-mark" aria-hidden="true"><Sparkles className="w-3 h-3 text-mauve-light" /></span>
              </div>
              <div className="team-copy">
                <h4 className="font-display text-3xl md:text-4xl text-cream group-hover:text-mauve-light transition-colors duration-300">
                  {member.name}
                </h4>
                <p className="text-[10px] text-mauve/60 mt-2 tracking-[0.24em] uppercase">{member.role}</p>
                <a
                  href={`https://instagram.com/${member.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-mauve/70 hover:text-mauve-light transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4" />
                  @{member.handle}
                </a>
              </div>
              <span className="team-card-glint" aria-hidden="true" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// CTA SECTION
// ============================================
function CTASection() {
  return (
    <section className="relative py-48 md:py-64 px-8 md:px-14 lg:px-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-aubergine/10 to-void" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-plum/8 blur-[80px]" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-plum">O Momento é Agora</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-normal mt-10 leading-[1.1]">
            Permita-se<br/>
            <span className="italic text-gradient">sentir</span>
          </h2>
          
          <motion.a
            href="https://wa.me/5585992391490"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 mt-20 px-12 py-5 bg-gradient-to-r from-plum to-plum/80 text-cream rounded-full text-[11px] tracking-[0.25em] uppercase transition-all duration-300 shadow-lg shadow-plum/20 border border-plum/50"
          >
            <Phone className="w-4 h-4" />
            Agendar pelo WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// FOOTER
// ============================================
function Footer() {
  return (
    <footer className="relative border-t border-aubergine/20 py-24 px-8 md:px-14 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 md:gap-20">
          <div>
            <h3 className="font-display text-2xl text-cream tracking-wider mb-8">Toque de Vênus</h3>
            <p className="text-mauve/50 text-sm leading-relaxed">
              Massoterapia & experiências exclusivas.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-mauve-light mb-8">Navegação</h4>
            <div className="flex flex-col gap-5">
              <a href="#experiencia" className="text-sm text-mauve/50 hover:text-mauve-light transition-colors">Experiências</a>
              <a href="#galeria" className="text-sm text-mauve/50 hover:text-mauve-light transition-colors">Galeria</a>
              <a href="#equipe" className="text-sm text-mauve/50 hover:text-mauve-light transition-colors">Equipe</a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-mauve-light mb-8">Contato</h4>
            <div className="flex flex-col gap-5">
              <a href="https://wa.me/5585992391490" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm text-mauve/50 hover:text-mauve-light transition-colors">
                <Phone className="w-4 h-4" /> WhatsApp
              </a>
              <a href="https://instagram.com/rafalllyyx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-sm text-mauve/50 hover:text-mauve-light transition-colors">
                <Instagram className="w-4 h-4" /> @rafalllyyx
              </a>
              <span className="inline-flex items-center gap-3 text-sm text-mauve/50">
                <MapPin className="w-4 h-4" /> Fortaleza, CE
              </span>
            </div>
          </div>
        </div>

        <div className="section-divider mt-20 mb-12" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-mauve/30 tracking-wider">
            © {new Date().getFullYear()} Toque de Vênus
          </p>
          <p className="text-[10px] text-mauve/30 tracking-[0.3em]">
            ✧ Relaxamento • Presença • Conexão ✧
          </p>
        </div>
      </div>
    </footer>
  );
}

// ============================================
// WHATSAPP BUTTON
// ============================================
function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5585992391490"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-[#25D366]/25"
      aria-label="Agendar via WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 whatsapp-pulse" />
      <span className="absolute inset-[-4px] rounded-full border-2 border-[#25D366]/20 animate-pulse" />
      <svg className="w-8 h-8 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </motion.a>
  );
}

// ============================================
// MAIN APP
// ============================================
function App() {
  return (
    <div className="relative bg-void min-h-screen overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <IntroSection />
        <WowMoment />
        <ExperienceSection />
        <GallerySection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
