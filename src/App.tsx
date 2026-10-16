import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Phone, Instagram, MapPin, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

// ============================================
// PRELOADER
// ============================================
function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[100] bg-void flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="font-display text-3xl md:text-5xl text-cream tracking-wider mb-8">
          𝚃𝙾𝚀𝚄𝙴 𝙳𝙴 𝚅Ê𝙽𝚄𝚂
        </h1>
        <div className="w-48 h-[1px] bg-aubergine/50 mx-auto overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-gradient-to-r from-plum to-mauve"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-4 text-xs tracking-[0.3em] uppercase text-mauve/50">
          {progress < 100 ? 'Preparando sua experiência' : 'Bem-vinda'}
        </p>
      </motion.div>
    </motion.div>
  );
}

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

  const navLinks = [
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Equipe', href: '#equipe' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'glass py-3 shadow-lg shadow-void/50' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="font-display text-lg md:text-xl tracking-[0.15em] text-mauve-light hover:text-cream transition-colors duration-300">
            Toque de Vênus
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="relative text-xs tracking-[0.2em] uppercase text-mauve hover:text-cream transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-plum group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a 
              href="https://wa.me/5585992391490" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2 border border-plum/60 text-mauve-light text-xs tracking-[0.15em] uppercase hover:bg-plum/20 hover:border-plum transition-all duration-300 rounded-full"
            >
              Agendar
            </a>
          </nav>

          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
            aria-label="Abrir menu"
          >
            <span className={`w-6 h-[1.5px] bg-mauve-light transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-6 h-[1.5px] bg-mauve-light transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`w-6 h-[1.5px] bg-mauve-light transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-void/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-display text-3xl text-mauve-light tracking-wider hover:text-cream transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/5585992391490"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-4 px-8 py-3 border border-plum text-mauve-light tracking-widest uppercase rounded-full text-sm"
            >
              Agendar Sessão
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ============================================
// HERO SECTION - clip3.mp4 (Rafally dançando)
// ============================================
function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -120]);
  const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={ref} className="relative h-[100vh] md:h-[110vh] w-full overflow-hidden">
      {/* Video Background */}
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
        <div className="absolute inset-0 video-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/60 via-transparent to-void/40" />
      </motion.div>

      {/* Film grain */}
      <div className="absolute inset-0 film-grain pointer-events-none opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-8 w-[1px] h-32 bg-gradient-to-b from-transparent via-mauve/30 to-transparent hidden md:block" />
      <div className="absolute bottom-32 right-12 w-20 h-20 border border-plum/20 rounded-full hidden md:block" />

      {/* Hero Content */}
      <motion.div 
        style={{ opacity, y: textY, scale: titleScale }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 border border-mauve/20 rounded-full text-[10px] md:text-xs tracking-[0.35em] uppercase text-mauve-light/80 backdrop-blur-sm bg-void/20">
            <Sparkles className="w-3 h-3 text-plum" />
            Massoterapia & Experiências Exclusivas
            <Sparkles className="w-3 h-3 text-plum" />
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.1 }}
          className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-light tracking-wide text-cream leading-[0.9]"
        >
          <span className="block">Toque de</span>
          <span className="block text-gradient italic font-medium">Vênus</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="font-display text-base md:text-xl lg:text-2xl text-mauve-light/70 italic tracking-wider mt-6 max-w-lg"
        >
          Onde cada toque é uma jornada de volta a si mesma
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="flex items-center gap-4 md:gap-8 mt-10 text-[10px] md:text-xs tracking-[0.25em] uppercase text-mauve/60"
        >
          <span>Relaxamento</span>
          <span className="w-8 h-[1px] bg-plum/40" />
          <span>Presença</span>
          <span className="w-8 h-[1px] bg-plum/40" />
          <span>Conexão</span>
        </motion.div>

        <motion.a
          href="https://wa.me/5585992391490"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 inline-flex items-center gap-3 px-8 py-3.5 bg-plum/70 hover:bg-plum backdrop-blur-sm text-cream text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300 border border-plum/50"
        >
          Agende sua experiência
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
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
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const lineScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 rounded-full bg-plum/5 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-48 h-48 rounded-full bg-aubergine/10 blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.4] text-mauve-light/90">
            Cada toque carrega a intenção de{' '}
            <span className="italic text-cream relative">
              dissolver tensões
              <motion.span
                style={{ scaleX: lineScale }}
                className="absolute -bottom-2 left-0 right-0 h-[1px] bg-plum origin-left"
              />
            </span>
            , despertar sensações e reconectar você com o seu{' '}
            <span className="italic text-cream">estado mais profundo de presença</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-plum" />
          <span className="w-2 h-2 rounded-full bg-plum/50" />
          <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-plum" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 text-mauve/50 tracking-[0.3em] text-[10px] uppercase"
        >
          Fortaleza • Ceará
        </motion.p>
      </div>
    </section>
  );
}

// ============================================
// WOW MOMENT - Cinematic foto4.jpg
// ============================================
function WowMoment() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1.3, 1, 1, 1.2]);
  const imgY = useTransform(scrollYProgress, [0, 0.5, 1], ["8%", "0%", "-5%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 0.3, 0.3, 0.8]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.7, 0.9], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[80vh] md:h-[100vh] overflow-hidden">
      <motion.div 
        style={{ scale: imgScale, y: imgY }}
        className="absolute inset-0 -top-[10%] -bottom-[10%]"
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
        className="relative z-10 h-full flex items-center justify-center px-6"
      >
        <div className="text-center max-w-4xl">
          <motion.p
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cream/95 italic leading-tight"
          >
            "O corpo guarda tudo.<br/>
            <span className="text-mauve-light">Nossas mãos existem para liberar.</span>"
          </motion.p>
        </div>
      </motion.div>

      {/* Side decorations */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-12 hidden md:flex flex-col gap-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-[2px] h-6 bg-mauve/20" style={{ opacity: 0.2 + i * 0.15 }} />
        ))}
      </div>
    </section>
  );
}

// ============================================
// EXPERIENCE SECTION - clip1.mp4 background
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
    { 
      title: "Massagem Relaxante", 
      desc: "Técnicas suaves e envolventes que dissolvem tensões acumuladas, devolvendo ao corpo sua fluidez natural e um estado profundo de calma." 
    },
    { 
      title: "Massagem Terapêutica", 
      desc: "Tratamento direcionado para alívio de dores musculares, restauração do equilíbrio corporal e recuperação da vitalidade." 
    },
    { 
      title: "Drenagem Linfática", 
      desc: "Estimulação suave e rítmica que promove a eliminação de toxinas, reduz inchaços e proporciona uma sensação imediata de leveza." 
    },
    { 
      title: "Pedras Quentes", 
      desc: "Calor profundo que penetra os músculos, derretendo contracturas e restaurando o equilíbrio energético do corpo." 
    },
  ];

  return (
    <section id="experiencia" ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Video Background - clip1.mp4 */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void/60" />
      </motion.div>

      <div className="relative z-10 py-32 md:py-48 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader 
            subtitle="Nossas Experiências"
            title="O Ritual do Toque"
            description="Cada sessão é desenhada para ser uma imersão sensorial completa. Nossas massoterapeutas combinam técnicas refinadas com sensibilidade única para criar uma experiência que transcende o comum."
          />

          <div className="grid md:grid-cols-2 gap-5 mt-20">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} index={i} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <a 
              href="https://wa.me/5585992391490"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 border border-plum/60 text-mauve-light text-xs tracking-[0.2em] uppercase rounded-full hover:bg-plum/20 hover:border-plum transition-all duration-300"
            >
              Descubra sua experiência ideal
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ subtitle, title, description }: { subtitle: string; title: string; description: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="text-center mb-16">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="inline-block text-[10px] tracking-[0.5em] uppercase text-plum mb-6"
      >
        ✧ {subtitle} ✧
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-display text-4xl md:text-5xl lg:text-7xl text-cream font-light tracking-wide"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-6 text-mauve/70 max-w-2xl mx-auto leading-relaxed text-sm md:text-base"
      >
        {description}
      </motion.p>
    </div>
  );
}

function ServiceCard({ title, desc, index }: { title: string; desc: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateX: 5 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      className="group relative p-7 md:p-9 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-plum/10"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-aubergine/20 backdrop-blur-md border border-mauve/5 rounded-2xl group-hover:border-plum/30 transition-all duration-500" />
      
      <div className="relative z-10 flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-plum/20 flex items-center justify-center flex-shrink-0 group-hover:bg-plum/40 transition-colors duration-300">
          <span className="font-display text-lg text-mauve-light">{String(index + 1).padStart(2, '0')}</span>
        </div>
        <div>
          <h3 className="font-display text-xl md:text-2xl text-cream mb-3 group-hover:text-mauve-light transition-colors duration-300">
            {title}
          </h3>
          <p className="text-mauve/60 leading-relaxed text-sm">
            {desc}
          </p>
        </div>
      </div>

      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-plum/0 to-plum/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    </motion.div>
  );
}

// ============================================
// GALLERY SECTION
// ============================================
function GallerySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  const media = [
    { type: 'image', src: '/foto1.jpg', alt: 'Rafally - Massoterapeuta principal', span: 'md:col-span-2 md:row-span-2', aspect: 'aspect-square md:aspect-auto md:h-full' },
    { type: 'image', src: '/foto2.jpg', alt: 'Sessão de massagem terapêutica', span: 'md:col-span-1 md:row-span-1', aspect: 'aspect-square' },
    { type: 'video', src: '/clip2.mp4', alt: 'Técnica de massagem nas costas', span: 'md:col-span-1 md:row-span-2', aspect: 'aspect-square md:aspect-auto md:h-full' },
    { type: 'image', src: '/foto4.jpg', alt: 'Relaxamento corporal profundo', span: 'md:col-span-1 md:row-span-1', aspect: 'aspect-square' },
    { type: 'image', src: '/foto3.jpg', alt: 'Equipe de massoterapeutas', span: 'md:col-span-2 md:row-span-1', aspect: 'aspect-video md:aspect-auto' },
  ];

  return (
    <section id="galeria" ref={ref} className="relative py-32 md:py-48 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-aubergine/5 to-void" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader
          subtitle="Galeria"
          title="Fragmentos de Serenidade"
          description="Cada imagem captura a essência do que oferecemos: um espaço onde o tempo desacelera e o corpo encontra seu ritmo natural de cura."
        />

        {/* Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-4 mt-16 md:auto-rows-[220px] lg:auto-rows-[260px]">
          {media.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`${item.span} ${item.aspect} img-hover-zoom relative rounded-xl overflow-hidden cursor-pointer group`}
              onClick={() => setSelectedMedia(i)}
            >
              {item.type === 'image' ? (
                <img 
                  src={item.src} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700"
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
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-void/0 group-hover:bg-void/40 transition-all duration-500 flex items-center justify-center">
                <motion.div 
                  className="opacity-0 group-hover:opacity-100 transition-all duration-500 w-14 h-14 rounded-full border border-mauve/40 flex items-center justify-center backdrop-blur-sm bg-void/20"
                  whileHover={{ scale: 1.1 }}
                >
                  <Sparkles className="w-5 h-5 text-mauve-light" />
                </motion.div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-mauve/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-mauve/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-void/97 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateY: 5 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="max-w-5xl max-h-[85vh] w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              {media[selectedMedia].type === 'image' ? (
                <img 
                  src={media[selectedMedia].src} 
                  alt={media[selectedMedia].alt}
                  className="w-full h-full object-contain rounded-2xl"
                />
              ) : (
                <video
                  src={media[selectedMedia].src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain rounded-2xl"
                />
              )}
            </motion.div>
            <button 
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-mauve/30 flex items-center justify-center text-mauve-light hover:text-cream hover:border-mauve transition-all duration-300"
              onClick={() => setSelectedMedia(null)}
              aria-label="Fechar"
            >
              ✕
            </button>
            {/* Navigation */}
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-mauve/30 flex items-center justify-center text-mauve-light hover:text-cream hover:border-mauve transition-all duration-300"
              onClick={(e) => { e.stopPropagation(); setSelectedMedia(selectedMedia > 0 ? selectedMedia - 1 : media.length - 1); }}
              aria-label="Anterior"
            >
              ←
            </button>
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-mauve/30 flex items-center justify-center text-mauve-light hover:text-cream hover:border-mauve transition-all duration-300"
              onClick={(e) => { e.stopPropagation(); setSelectedMedia(selectedMedia < media.length - 1 ? selectedMedia + 1 : 0); }}
              aria-label="Próximo"
            >
              →
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    { name: "Rafally", role: "Massoterapeuta Principal", handle: "rafalllyyx", featured: true },
    { name: "Barbara", role: "Massoterapeuta", handle: "massoterapeutabarbaraa", featured: false },
    { name: "Naomy", role: "Massoterapeuta", handle: "naomy_venus", featured: false },
    { name: "Ribeiro", role: "Terapeuta", handle: "terapeuta.ribeiro", featured: false },
    { name: "Nanda", role: "Massoterapeuta", handle: "nandaa_massoterapeuta", featured: false },
    { name: "Suy", role: "Massoterapeuta", handle: "itsmesuyyya", featured: false },
  ];

  return (
    <section id="equipe" ref={ref} className="relative py-32 md:py-48 px-6 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-plum/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-20 w-32 h-32 border border-plum/10 rounded-full hidden lg:block" />
      <div className="absolute bottom-20 left-20 w-20 h-20 border border-mauve/10 rounded-full hidden lg:block" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          subtitle="Nossa Equipe"
          title="Mãos que Transformam"
          description="Profissionais dedicadas ao seu bem-estar. Cada uma traz consigo técnica refinada, sensibilidade e a certeza de que suas mãos podem restaurar o que o cotidiano desgasta."
        />

        {/* Featured - Rafally */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 mb-12"
        >
          <div className="relative rounded-3xl overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-aubergine/40 via-aubergine/20 to-transparent" />
            <div className="relative p-8 md:p-12 md:pl-16 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="relative">
                <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-plum/40 shadow-2xl shadow-plum/20">
                  <img src="/foto1.jpg" alt="Rafally - Massoterapeuta Principal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-plum/60 flex items-center justify-center border border-mauve/30">
                  <Sparkles className="w-4 h-4 text-cream" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <span className="text-[10px] tracking-[0.4em] uppercase text-plum">Massoterapeuta Principal</span>
                <h3 className="font-display text-3xl md:text-5xl text-cream mt-2 tracking-wide">Rafally</h3>
                <p className="text-mauve/70 mt-4 max-w-md leading-relaxed text-sm md:text-base">
                  A essência do Toque de Vênus. Suas mãos carregam a sensibilidade e a técnica que transformam cada sessão em uma experiência verdadeiramente transformadora.
                </p>
                <a 
                  href="https://instagram.com/rafalllyyx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm text-mauve-light hover:text-cream transition-colors duration-300"
                >
                  <Instagram className="w-4 h-4" />
                  @rafalllyyx
                </a>
              </div>
            </div>
            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl border border-mauve/10 group-hover:border-plum/30 transition-colors duration-500 pointer-events-none" />
          </div>
        </motion.div>

        {/* Other team members */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {team.filter(t => !t.featured).map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className="p-5 md:p-6 text-center bg-aubergine/15 backdrop-blur-sm border border-mauve/5 rounded-2xl hover:border-plum/30 transition-all duration-500">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-plum/30 to-aubergine/50 flex items-center justify-center mb-3 group-hover:from-plum/50 group-hover:to-plum/20 transition-all duration-300">
                  <span className="font-display text-xl text-mauve-light">{member.name[0]}</span>
                </div>
                <h4 className="font-display text-lg text-cream group-hover:text-mauve-light transition-colors duration-300">{member.name}</h4>
                <p className="text-[10px] text-mauve/50 mt-1 tracking-wider uppercase">{member.role}</p>
                <a 
                  href={`https://instagram.com/${member.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-3 text-[11px] text-mauve/60 hover:text-mauve-light transition-colors duration-300"
                >
                  <Instagram className="w-3 h-3" />
                  @{member.handle}
                </a>
              </div>
            </motion.div>
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-aubergine/10 to-void" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-plum/8 blur-[80px]" />
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-plum">O Momento é Agora</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream font-light mt-6 leading-[1.1]">
            Permita-se o<br/>
            <span className="italic text-gradient">luxo de sentir</span>
          </h2>
          <p className="mt-8 text-mauve/70 leading-relaxed max-w-xl mx-auto text-sm md:text-base">
            Reserve um momento exclusivamente para você. Nossas massoterapeutas estão prontas para criar uma experiência sob medida para o seu corpo e a sua mente.
          </p>
          
          <motion.a
            href="https://wa.me/5585992391490"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(127, 40, 82, 0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 mt-12 px-10 py-4 bg-gradient-to-r from-plum to-plum/80 text-cream rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-300 shadow-lg shadow-plum/20 border border-plum/50"
          >
            <Phone className="w-4 h-4" />
            Agendar pelo WhatsApp
          </motion.a>

          <p className="mt-6 text-[10px] text-mauve/40 tracking-wider">
            Atendimento personalizado • Fortaleza, CE
          </p>
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
    <footer className="relative border-t border-aubergine/20 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl text-cream tracking-wider mb-4">Toque de Vênus</h3>
            <p className="text-mauve/50 text-sm leading-relaxed">
              Massoterapia & experiências exclusivas. Um espaço sagrado dedicado ao seu bem-estar e relaxamento profundo.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <a href="https://instagram.com/rafalllyyx" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-mauve/20 flex items-center justify-center hover:border-plum/50 hover:text-mauve-light transition-all duration-300 text-mauve/50">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-mauve-light mb-5">Navegação</h4>
            <div className="flex flex-col gap-3">
              <a href="#experiencia" className="text-sm text-mauve/50 hover:text-mauve-light transition-colors duration-300">Experiências</a>
              <a href="#galeria" className="text-sm text-mauve/50 hover:text-mauve-light transition-colors duration-300">Galeria</a>
              <a href="#equipe" className="text-sm text-mauve/50 hover:text-mauve-light transition-colors duration-300">Equipe</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.4em] uppercase text-mauve-light mb-5">Contato</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://wa.me/5585992391490" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-mauve/50 hover:text-mauve-light transition-colors duration-300"
              >
                <Phone className="w-3.5 h-3.5" />
                WhatsApp
              </a>
              <span className="inline-flex items-center gap-2 text-sm text-mauve/50">
                <MapPin className="w-3.5 h-3.5" />
                Fortaleza, CE
              </span>
            </div>
          </div>
        </div>

        <div className="section-divider mt-12 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-mauve/30 tracking-wider">
            © {new Date().getFullYear()} Toque de Vênus. Todos os direitos reservados.
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
// WHATSAPP FLOATING BUTTON
// ============================================
function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href="https://wa.me/5585992391490"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-shadow duration-300"
            aria-label="Agendar via WhatsApp"
          >
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" style={{ animationDuration: '2.5s' }} />
            <span className="absolute inset-[-4px] rounded-full border-2 border-[#25D366]/20 animate-pulse" style={{ animationDuration: '3s' }} />
            
            {/* Icon */}
            <motion.svg 
              animate={{ scale: hovered ? 1.1 : 1 }}
              className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </motion.svg>

            {/* Tooltip */}
            <AnimatePresence>
              {hovered && (
                <motion.span
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="absolute right-full mr-4 px-4 py-2 bg-void/95 border border-aubergine/30 rounded-xl text-xs text-mauve-light whitespace-nowrap pointer-events-none shadow-lg"
                >
                  Agende sua sessão ✨
                </motion.span>
              )}
            </AnimatePresence>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ============================================
// MAIN APP
// ============================================
function App() {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="relative bg-void min-h-screen overflow-x-hidden">
      <AnimatePresence>
        {loading && <Preloader onComplete={handlePreloaderComplete} />}
      </AnimatePresence>
      
      {!loading && (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;
