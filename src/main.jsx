import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import "./styles.css";

/* ─── LINKS ─────────────────────────── */
const links = {
  mercadoLivre: "https://www.mercadolivre.com.br/pagina/xikitainfantil",
  instagram: "https://instagram.com/",
  whatsapp: "https://wa.me/5500000000000",
};

/* ─── IMAGENS ───────────────────────── */
const img = {
  logo: "/xikita-logo.png",
  loja: "/xikita-loja.jpg",
  hero: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1400&auto=format&fit=crop&q=80",
  children: [
    "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1471286174890-9c112ac5c5b7?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?w=600&auto=format&fit=crop&q=80",
  ],
  baby1: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=700&auto=format&fit=crop&q=80",
  baby2: "https://images.unsplash.com/photo-1554696468-19f8c7a71a1a?w=700&auto=format&fit=crop&q=80",
  gift:  "https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=700&auto=format&fit=crop&q=80",
  toys:  "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=700&auto=format&fit=crop&q=80",
};

/* ─── ANIMAÇÕES ─────────────────────── */
const fadeUp  = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
const fadeIn  = { hidden: { opacity: 0 },        show: { opacity: 1, transition: { duration: 0.5 } } };
const stagger = { show: { transition: { staggerChildren: 0.11 } } };

/* ─── DADOS ─────────────────────────── */
const categories = [
  { title: "Moda Infantil",       desc: "Roupinhas lindas e confortáveis para bebês e crianças viverem cada fase com estilo.",  cta: "Ver coleção",    img: img.baby1, badge: "Nova coleção"  },
  { title: "Acessórios",          desc: "Laços, tiaras, meias e detalhes que transformam qualquer look num encanto só.",        cta: "Ver acessórios", img: img.baby2, badge: "Mais amado"    },
  { title: "Presentes Especiais", desc: "Escolhas afetivas para aniversários e momentos que viram memória para sempre.",        cta: "Ver presentes",  img: img.gift,  badge: "Ideal para dar" },
  { title: "Brinquedos",          desc: "Itens criativos e lúdicos que fazem os pequenos sorrirem a cada descoberta.",          cta: "Ver novidades",  img: img.toys,  badge: "Diversão"      },
];

const stats = [
  { value: "5.000+", label: "Famílias felizes"  },
  { value: "1.200+", label: "Produtos infantis" },
  { value: "8 anos", label: "De história"       },
  { value: "4.9★",   label: "Avaliação média"   },
];

const depoimentos = [
  { nome: "Camila R.",   nota: 5, texto: "Simplesmente apaixonada! O presente ficou perfeito e o atendimento foi acolhedor do início ao fim." },
  { nome: "Juliana M.",  nota: 5, texto: "Minha filha amou as roupinhas. Qualidade excelente, entrega rápida e embalagem linda." },
  { nome: "Fernanda S.", nota: 5, texto: "Já comprei várias vezes no Mercado Livre. Produtos originais, chegam rápido e com muito cuidado." },
];

/* ─── SUBCOMPONENTES ─────────────────── */
function StarRating({ n = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function CountUp({ target }) {
  const [count, setCount] = useState(0);
  const ref     = useRef(null);
  const started = useRef(false);
  const num     = parseFloat(String(target).replace(/[^0-9.]/g, ""));
  const isNum   = !isNaN(num);

  useEffect(() => {
    if (!isNum) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const steps = 50;
        let i = 0;
        const t = setInterval(() => {
          i++;
          setCount(Math.round((num / steps) * i));
          if (i >= steps) clearInterval(t);
        }, 28);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num, isNum]);

  return <span ref={ref}>{isNum ? String(target).replace(/[0-9.]+/, String(count)) : target}</span>;
}

function WaIcon() {
  return (
    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.528 5.855L0 24l6.335-1.652A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.65-.49-5.19-1.349l-.37-.221-3.761.981.999-3.66-.242-.378A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

/* ─── APP PRINCIPAL ──────────────────── */
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY   = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpa = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div className="xk-root">

      {/* HEADER */}
      <header className="xk-header">
        <div className="xk-container xk-nav">
          <a href="#inicio" className="xk-brand">
            <img src={img.logo} alt="Xikita Boutique" className="xk-logo" />
          </a>

          <nav className="xk-menu hidden md:flex">
            {[["#inicio","Início"],["#categorias","Categorias"],["#mercado-livre","Mercado Livre"],["#loja","Loja Física"],["#contato","Contato"]].map(([h,l]) => (
              <a key={h} href={h} className="xk-menu-pill">{l}</a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={links.whatsapp} target="_blank" rel="noreferrer" className="xk-btn xk-btn-wa hidden md:flex items-center gap-2">
              <WaIcon /> WhatsApp
            </a>
            <button className="md:hidden p-1 text-ink" onClick={() => setMenuOpen(v => !v)} aria-label="menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-ink/10 bg-white px-6 md:hidden">
              {[["#inicio","Início"],["#categorias","Categorias"],["#mercado-livre","Mercado Livre"],["#loja","Loja Física"],["#contato","Contato"]].map(([h,l]) => (
                <a key={h} href={h} onClick={() => setMenuOpen(false)} className="block py-3 text-sm font-semibold hover:text-pink-600">{l}</a>
              ))}
              <a href={links.whatsapp} target="_blank" rel="noreferrer" className="mb-4 flex items-center justify-center gap-2 rounded-full bg-pink-500 py-3 text-sm font-bold text-white">
                <WaIcon /> WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="inicio">

        {/* HERO */}
        <section ref={heroRef} className="xk-hero">
          <motion.div style={{ y: heroY }} className="xk-hero-bg">
            <img src={img.hero} alt="" className="xk-hero-img" />
            <div className="xk-hero-overlay" />
          </motion.div>
          <motion.div style={{ opacity: heroOpa }} className="xk-hero-content xk-container">
            <motion.div variants={stagger} initial="hidden" animate="show" className="xk-hero-copy">
              <motion.span variants={fadeUp} className="xk-eyebrow-pill">Nova coleção infantil</motion.span>
              <motion.h1 variants={fadeUp} className="xk-h1">
                Mais encanto para<br />
                <span className="xk-h1-highlight">quem você mais ama</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="xk-hero-lead">
                A Xikita une carinho, estilo e praticidade para mães e pais que querem
                vestir, presentear e encantar seus pequenos todos os dias.
              </motion.p>
              <motion.div variants={fadeUp} className="xk-hero-actions">
                <a href={links.whatsapp} target="_blank" rel="noreferrer" className="xk-btn xk-btn-hero xk-glow-pink">
                  <WaIcon /> Falar no WhatsApp
                </a>
                <a href={links.mercadoLivre} target="_blank" rel="noreferrer" className="xk-btn xk-btn-glass">
                  Ver no Mercado Livre
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* STRIP NUMÉRICA */}
        <section className="xk-strip">
          <div className="xk-container xk-strip-grid">
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="xk-strip-item">
                <p className="xk-strip-val"><CountUp target={s.value} /></p>
                <p className="xk-strip-lbl">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CATEGORIAS */}
        <section id="categorias" className="xk-section bg-white">
          <div className="xk-container">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="xk-sec-head">
              <p className="xk-eyebrow-dark">Nossas categorias</p>
              <h2 className="xk-h2">Tudo para os pequenos, <span className="text-pink-500">em um só lugar</span></h2>
              <p className="xk-sub">Produtos selecionados com carinho para deixar a infância mais leve, bonita e inesquecível.</p>
            </motion.div>
            <div className="xk-cat-grid">
              {categories.map((item, i) => (
                <motion.article key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.09 }} className="xk-cat-card">
                  <div className="xk-cat-img-wrap">
                    <img src={item.img} alt={item.title} className="xk-cat-img" loading="lazy" />
                    <div className="xk-cat-overlay" />
                    <span className="xk-cat-badge">{item.badge}</span>
                  </div>
                  <div className="xk-cat-body">
                    <h3 className="xk-cat-title">{item.title}</h3>
                    <p className="xk-cat-desc">{item.desc}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA CRIANÇAS */}
        <section className="xk-section xk-gallery-sec">
          <div className="xk-container mb-8">
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="xk-eyebrow-dark text-center">Momentos reais</motion.p>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="xk-h2 text-center">Cada criança, <span className="text-pink-500">um estilo único</span></motion.h2>
          </div>
          <div className="xk-gallery-grid">
            {img.children.map((src, i) => (
              <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="xk-gallery-item">
                <img src={src} alt={`criança ${i + 1}`} className="xk-gallery-img" loading="lazy" />
                <div className="xk-gallery-shine" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* MERCADO LIVRE */}
        <section id="mercado-livre" className="xk-ml-sec">
          <div className="xk-ml-glow-l" />
          <div className="xk-ml-glow-r" />
          <div className="xk-container xk-ml-grid">

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="xk-ml-copy">
              <motion.span variants={fadeUp} className="xk-badge-yellow">Canal oficial online</motion.span>
              <motion.h2 variants={fadeUp} className="xk-h2 text-white mt-3">
                Compre na Xikita pelo<br />
                <span className="xk-ml-brand">Mercado Livre</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="xk-sub text-white/80 mt-4">
                A mesma curadoria da loja física com a segurança e praticidade do maior marketplace do Brasil.
              </motion.p>
              <motion.ul variants={fadeUp} className="xk-ml-list">
                {["Compra 100% segura com garantia","Reputação consolidada e transparente","Frete rápido para todo o Brasil","Catálogo sempre atualizado","Parcelamento disponível"].map(t => (
                  <li key={t}><span className="xk-ml-check">✓</span>{t}</li>
                ))}
              </motion.ul>
              <motion.a variants={fadeUp} href={links.mercadoLivre} target="_blank" rel="noreferrer" className="xk-btn xk-btn-ml xk-glow-yellow mt-8 inline-flex">
                Acessar loja no Mercado Livre
              </motion.a>
            </motion.div>

            <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="xk-ml-visual">
              <div className="xk-ml-stack">
                <div className="xk-ml-card xk-ml-card-back">
                  <img src={img.children[1]} alt="" className="xk-ml-card-img" />
                </div>
                <div className="xk-ml-card xk-ml-card-front">
                  <img src={img.children[0]} alt="" className="xk-ml-card-img" />
                </div>
                <div className="xk-ml-float-badge">
                  <StarRating />
                  <p className="text-xs font-bold mt-1 text-ink">4.9 no Mercado Livre</p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* LOJA FÍSICA */}
        <section id="loja" className="xk-section bg-white">
          <div className="xk-container xk-loja-grid">

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="xk-loja-visual">
              <div className="xk-loja-frame">
                <img src={img.loja} alt="Interior da Xikita Boutique" className="xk-loja-img" />
                <div className="xk-loja-glow" />
              </div>
              <div className="xk-loja-chip">
                <span className="xk-dot-green" />
                Loja aberta agora
              </div>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="xk-eyebrow-dark">Loja física</motion.p>
              <motion.h2 variants={fadeUp} className="xk-h2 mt-1">
                Venha viver a<br />
                <span className="text-pink-500">experiência Xikita</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="xk-sub mt-4">
                Toque nas peças, sinta a qualidade e receba atendimento de quem entende de moda infantil. Cada visita vira uma memória afetiva.
              </motion.p>
              <motion.ul variants={fadeUp} className="xk-check-list mt-4">
                {["Produtos exclusivos na loja","Atendimento humano e personalizado","Ambiente acolhedor para a família","Novidades diárias no Instagram"].map(t => (
                  <li key={t}>{t}</li>
                ))}
              </motion.ul>
              <motion.div variants={fadeUp} className="mt-6">
                <a href={links.instagram} target="_blank" rel="noreferrer" className="xk-btn xk-btn-primary xk-glow-pink">Ver no Instagram</a>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="xk-section xk-depoi-sec">
          <div className="xk-container">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="xk-sec-head">
              <p className="xk-eyebrow-dark">Quem compra, ama</p>
              <h2 className="xk-h2">Amor que <span className="text-pink-500">fala por si</span></h2>
            </motion.div>
            <div className="xk-depoi-grid">
              {depoimentos.map((d, i) => (
                <motion.article key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="xk-depoi-card">
                  <StarRating n={d.nota} />
                  <p className="mt-3 text-sm text-ink/80 leading-relaxed">"{d.texto}"</p>
                  <p className="mt-4 text-xs font-bold text-ink/55">— {d.nome}</p>
                </motion.article>
              ))}
            </div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 flex flex-wrap justify-center gap-2">
              {["Tudo lindo!","Entrega rápida","Atendimento incrível","Voltarei sempre","Super recomendo"].map(t => (
                <span key={t} className="rounded-full bg-[#EADFFF] px-3 py-1 text-xs font-semibold text-ink/80">{t}</span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="xk-cta-final">
          <div className="xk-cta-glow-l" />
          <div className="xk-cta-glow-r" />
          <div className="xk-container text-center relative z-10">
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="xk-h2 text-white">
              Cada peça conta uma<br />
              <span className="xk-h1-highlight">história de amor</span>
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="xk-sub text-white/80 mt-4 max-w-2xl mx-auto">
              Da primeira roupinha ao presente especial — tudo na Xikita é escolhido para fazer parte dos momentos únicos da infância dos seus filhos.
            </motion.p>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={links.whatsapp} target="_blank" rel="noreferrer" className="xk-btn xk-btn-primary xk-glow-pink flex items-center gap-2"><WaIcon /> Falar no WhatsApp</a>
              <a href={links.mercadoLivre} target="_blank" rel="noreferrer" className="xk-btn xk-btn-glass">Comprar no Mercado Livre</a>
            </motion.div>
          </div>
        </section>

        {/* LEAD */}
        <section id="lead" className="xk-section bg-white">
          <div className="xk-container">
            <div className="xk-lead-box">
              <div>
                <h2 className="xk-h2">Fique por dentro das novidades</h2>
                <p className="xk-sub mt-2">Receba em primeira mão novas coleções, presentes e ofertas especiais direto no seu contato.</p>
              </div>
              <form className="xk-lead-form" onSubmit={e => e.preventDefault()}>
                <input type="text" required placeholder="Seu nome" className="xk-input" />
                <input type="text" required placeholder="WhatsApp ou e-mail" className="xk-input" />
                <button type="submit" className="xk-btn xk-btn-primary xk-glow-pink whitespace-nowrap">Quero receber</button>
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer id="contato" className="xk-footer">
        <div className="xk-container xk-footer-grid">
          <div>
            <img src={img.logo} alt="Xikita" className="h-10 w-auto mb-3" />
            <p className="text-sm text-white/70 max-w-xs">Moda infantil, acessórios, brinquedos e presentes selecionados com amor para bebês e crianças.</p>
          </div>
          <div>
            <h4 className="xk-footer-h">Links</h4>
            <ul className="xk-footer-ul">
              {[ ["#inicio","Início"],["#categorias","Categorias"],["#mercado-livre","Mercado Livre"],["#loja","Loja Física"] ].map(([h,l]) => (
                <li key={h}><a href={h} className="hover:text-pink-400">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="xk-footer-h">Canais</h4>
            <ul className="xk-footer-ul">
              <li><a href={links.instagram} target="_blank" rel="noreferrer" className="hover:text-pink-400">Instagram</a></li>
              <li><a href={links.mercadoLivre} target="_blank" rel="noreferrer" className="hover:text-pink-400">Mercado Livre</a></li>
              <li><a href={links.whatsapp} target="_blank" rel="noreferrer" className="hover:text-pink-400">WhatsApp</a></li>
            </ul>
          </div>
          <div>
            <h4 className="xk-footer-h">Informações</h4>
            <ul className="xk-footer-ul">
              <li>Telefone: [INSERIR]</li>
              <li>E-mail: [INSERIR]</li>
              <li>Endereço: [INSERIR]</li>
              <li>Horário: [INSERIR]</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/40 xk-container">
          © 2026 Xikita Boutique. Todos os direitos reservados.
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE */}
      <motion.a
        href={links.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.12 }}
        className="xk-wa-float xk-glow-green"
      >
        <WaIcon />
      </motion.a>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);
