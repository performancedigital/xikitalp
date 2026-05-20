import React from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import "./styles.css";

const links = {
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  mercadoLivre: "https://mercadolivre.com.br/",
  whatsapp: "https://wa.me/5500000000000",
  driveFotos:
    "https://drive.google.com/drive/folders/1ZwYIZp4J0gLYu7tBittw79YLrfK3LuJc",
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const categories = [
  {
    title: "Moda Infantil",
    desc: "Roupinhas lindas e confortáveis para bebês e crianças brincarem livres.",
    cta: "Ver coleção",
    bg: "from-[#ffeef4] to-[#fdf7ff]",
  },
  {
    title: "Acessórios Infantis",
    desc: "Laços, tiaras, meias e detalhes que deixam cada look mais encantador.",
    cta: "Ver acessórios",
    bg: "from-[#fff6da] to-[#fff3ef]",
  },
  {
    title: "Presentes Especiais",
    desc: "Escolhas afetivas para aniversários, visitas e momentos que viram memória.",
    cta: "Ver presentes",
    bg: "from-[#eaf4ff] to-[#f3faff]",
  },
  {
    title: "Brinquedos e Novidades",
    desc: "Itens criativos para surpreender os pequenos com alegria e descoberta.",
    cta: "Ver novidades",
    bg: "from-[#effcf5] to-[#f7fffc]",
  },
];

const benefits = [
  {
    title: "Atendimento acolhedor",
    desc: "Ajudamos você a escolher o tamanho, o presente e o melhor combo para cada fase.",
  },
  {
    title: "Curadoria com carinho",
    desc: "Selecionamos peças bonitas, úteis e especiais para facilitar sua decisão.",
  },
  {
    title: "Conforto que acompanha",
    desc: "Produtos pensados para rotina real: brincar, passear e crescer com leveza.",
  },
  {
    title: "Compra segura e prática",
    desc: "Atendimento rápido no WhatsApp, redes sociais e canais digitais oficiais.",
  },
  {
    title: "Presentes que emocionam",
    desc: "Transforme uma compra simples em uma lembrança com significado.",
  },
];

const channels = [
  {
    name: "Instagram",
    text: "Veja lançamentos, looks prontos e bastidores da loja.",
    button: "Seguir no Instagram",
    href: links.instagram,
  },
  {
    name: "Facebook",
    text: "Acompanhe novidades, promoções e coleções infantis.",
    button: "Curtir no Facebook",
    href: links.facebook,
  },
  {
    name: "Mercado Livre",
    text: "Compre com praticidade, reputação e logística facilitada.",
    button: "Comprar no Mercado Livre",
    href: links.mercadoLivre,
  },
  {
    name: "WhatsApp",
    text: "Fale com nossa equipe e receba orientação personalizada.",
    button: "Falar no WhatsApp",
    href: links.whatsapp,
  },
];

function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-white/85 backdrop-blur">
        <div className="mx-auto flex w-[92vw] max-w-6xl items-center justify-between py-4">
          <a href="#inicio" className="text-lg font-extrabold tracking-tight">
            Xikita Boutique
          </a>
          <nav className="hidden gap-6 text-sm font-semibold md:flex">
            <a href="#inicio" className="hover:text-pink-600">
              Início
            </a>
            <a href="#categorias" className="hover:text-pink-600">
              Categorias
            </a>
            <a href="#sobre" className="hover:text-pink-600">
              Sobre
            </a>
            <a href="#avaliacoes" className="hover:text-pink-600">
              Avaliações
            </a>
            <a href="#contato" className="hover:text-pink-600">
              Contato
            </a>
          </nav>
          <a
            href={links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-pink-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-pink-600"
          >
            Comprar agora
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="hero-soft-bg">
          <div className="mx-auto grid w-[92vw] max-w-6xl gap-6 py-14 md:grid-cols-2 md:py-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-[26px] bg-white/88 p-7 shadow-soft md:p-10"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-pink-600">
                Nova coleção infantil
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
                Moda, presentes e carinho em cada escolha
              </h1>
              <p className="mt-4 text-base text-ink/75">
                Para mães e pais que querem vestir, cuidar e surpreender seus
                pequenos com beleza, conforto e afeto.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-ink/90"
                >
                  Falar com especialista
                </a>
                <a
                  href="#categorias"
                  className="rounded-full border border-ink/20 bg-white px-5 py-3 text-sm font-bold transition hover:bg-ink/5"
                >
                  Ver catálogo
                </a>
              </div>
              <p className="mt-5 text-xs font-medium text-ink/60">
                Loja física e canais digitais oficiais para compra segura.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[26px] shadow-soft"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-ink/15 via-ink/5 to-ink/30" />
              <img
                src="/hero-xikita.jpg"
                alt="Fachada ou interior da loja Xikita Boutique"
                className="h-full min-h-[340px] w-full object-cover"
                loading="eager"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="absolute inset-0 fallback-hero" />
              <div className="absolute bottom-4 left-4 rounded-2xl bg-white/90 px-4 py-3 text-sm font-semibold shadow">
                Sua compra com toque humano e entrega ágil
              </div>
            </motion.div>
          </div>
        </section>

        <section id="categorias" className="bg-white py-16">
          <div className="mx-auto w-[92vw] max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pink-600">
              Nossas categorias
            </p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Tudo para os pequenos, em um só lugar
            </h2>
            <p className="mt-3 max-w-2xl text-ink/75">
              Produtos escolhidos com carinho para deixar a infância mais leve,
              bonita e inesquecível.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className={`rounded-3xl border border-ink/10 bg-gradient-to-br p-5 shadow-soft ${item.bg}`}
                >
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/75">{item.desc}</p>
                  <a
                    href={links.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block text-sm font-bold text-pink-600 hover:text-pink-700"
                  >
                    {item.cta}
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#fff7fb] to-[#eef8ff] py-16">
          <div className="mx-auto w-[92vw] max-w-6xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Uma experiência de compra feita com amor
            </h2>
            <p className="mt-3 max-w-2xl text-ink/75">
              Menos dúvida, mais segurança para você escolher o melhor para quem
              mais ama.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-3xl bg-white p-5 shadow-soft"
                >
                  <h3 className="font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/75">{item.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="avaliacoes" className="py-12">
          <div className="mx-auto grid w-[92vw] max-w-6xl gap-3 rounded-3xl bg-white p-5 shadow-soft md:grid-cols-4">
            <Stat value="5.000+" label="famílias atendidas" />
            <Stat value="1.200+" label="produtos infantis" />
            <Stat value="8 anos" label="de história" />
            <Stat value="4.9★" label="avaliação média" />
          </div>
        </section>

        <section id="canais" className="bg-white py-16">
          <div className="mx-auto w-[92vw] max-w-6xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Compre com a gente onde preferir
            </h2>
            <p className="mt-3 max-w-2xl text-ink/75">
              Escolha seu canal favorito e conte com atendimento próximo em
              todas as etapas.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {channels.map((channel) => (
                <Channel key={channel.name} {...channel} />
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="py-16">
          <div className="mx-auto grid w-[92vw] max-w-6xl gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-4 shadow-soft">
              <img
                src="/loja-xikita.jpg"
                alt="Interior da loja Xikita Boutique"
                className="h-full min-h-[300px] w-full rounded-2xl object-cover"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="fallback-store rounded-2xl" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-pink-600">
                Nossa essência
              </p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                Feito com amor, entregue com alma
              </h2>
              <p className="mt-4 text-ink/75">
                A Xikita Boutique nasceu para transformar compras infantis em
                momentos especiais. Cada roupa, acessório, brinquedo e presente
                é escolhido com carinho para acompanhar a infância com conforto,
                beleza e afeto.
              </p>
              <p className="mt-4 text-ink/75">
                Mais do que vender, queremos facilitar a vida de quem cuida:
                atendimento acolhedor, escolhas certeiras e compra sem estresse.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/85">
                <li>• Produtos infantis selecionados</li>
                <li>• Atendimento humano e rápido</li>
                <li>• Opções para bebês e crianças</li>
                <li>• Presentes para encantar de verdade</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-ink/90"
                >
                  Conheça a coleção
                </a>
                <a
                  href={links.driveFotos}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink/20 bg-white px-5 py-3 text-sm font-bold transition hover:bg-ink/5"
                >
                  Ver fotos reais da loja
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto w-[92vw] max-w-6xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Amor que fala por si
            </h2>
            <div className="mt-6 rounded-3xl bg-cream p-6 shadow-soft">
              <p className="text-ink/85">
                “Simplesmente apaixonada pela Xikita! Comprei um presente e foi
                lindo do início ao fim. Qualidade excelente e atendimento muito
                carinhoso.”
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Tudo lindo!",
                "Atendimento maravilhoso",
                "Entrega rápida",
                "Produtos encantadores",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-lilac px-3 py-1 text-xs font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto w-[92vw] max-w-6xl rounded-3xl bg-gradient-to-r from-blush to-baby p-8 shadow-soft">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Cada peça conta uma história de amor
            </h2>
            <p className="mt-3 max-w-3xl text-ink/80">
              Da primeira roupinha ao presente especial, tudo na Xikita é
              escolhido para fazer parte de momentos únicos da infância.
            </p>
            <ul className="mt-4 grid gap-2 text-sm md:grid-cols-2">
              <li>• Roupas infantis confortáveis</li>
              <li>• Presentes que emocionam</li>
              <li>• Acessórios cheios de charme</li>
              <li>• Atendimento feito com carinho</li>
            </ul>
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-ink/90"
            >
              Quero comprar
            </a>
          </div>
        </section>
      </main>

      <footer id="contato" className="bg-ink py-12 text-white">
        <div className="mx-auto grid w-[92vw] max-w-6xl gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">Xikita Boutique</h3>
            <p className="mt-2 text-sm text-white/80">
              Moda infantil, acessórios, brinquedos e presentes selecionados com
              amor para bebês e crianças.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Links</h4>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
              <li>Início</li>
              <li>Categorias</li>
              <li>Produtos</li>
              <li>Novidades</li>
              <li>Fale conosco</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Informações</h4>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
              <li>Telefone: [INSERIR]</li>
              <li>E-mail: [INSERIR]</li>
              <li>Endereço: [INSERIR]</li>
              <li>Horário: [INSERIR]</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Formas de pagamento</h4>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
              <li>Pix</li>
              <li>Cartão</li>
              <li>Boleto</li>
              <li>Mercado Livre</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Channel({ name, text, button, href }) {
  return (
    <article className="rounded-3xl border border-ink/10 bg-cream p-5 shadow-soft">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="mt-2 text-sm text-ink/75">{text}</p>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold transition hover:bg-ink hover:text-white"
      >
        {button}
      </a>
    </article>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-blush/70 to-baby/70 p-4 text-center">
      <p className="text-2xl font-extrabold">{value}</p>
      <p className="text-sm text-ink/75">{label}</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
