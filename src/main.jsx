import React from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import "./styles.css";

const links = {
  mercadoLivre: "https://www.mercadolivre.com.br/pagina/xikitainfantil",
  instagram: "https://instagram.com/",
  whatsapp: "https://wa.me/5500000000000",
};

const assets = {
  logo: "/xikita-logo.png",
  loja: "/xikita-loja.jpg",
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
  },
  {
    title: "Acessórios Infantis",
    desc: "Laços, tiaras e detalhes que deixam cada look mais encantador.",
    cta: "Ver acessórios",
  },
  {
    title: "Presentes Especiais",
    desc: "Escolhas afetivas para aniversários, visitas e momentos inesquecíveis.",
    cta: "Ver presentes",
  },
  {
    title: "Brinquedos e Novidades",
    desc: "Itens criativos para surpreender os pequenos com alegria.",
    cta: "Ver novidades",
  },
];

const leadForm = "https://forms.gle/SEU_FORM_AQUI";

function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-[92vw] max-w-6xl items-center justify-between py-3">
          <a href="#inicio" className="inline-flex items-center gap-3">
            <img
              src={assets.logo}
              alt="Xikita Boutique"
              className="h-11 w-auto"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </a>

          <nav className="hidden gap-6 text-sm font-semibold md:flex">
            <a href="#inicio" className="hover:text-pink-600">
              Início
            </a>
            <a href="#categorias" className="hover:text-pink-600">
              Categorias
            </a>
            <a href="#mercado-livre" className="hover:text-pink-600">
              Mercado Livre
            </a>
            <a href="#loja-presencial" className="hover:text-pink-600">
              Loja física
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
            WhatsApp
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
              className="rounded-[26px] bg-white/90 p-7 shadow-soft md:p-10"
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-pink-600">
                Nova coleção infantil
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
                Mais encanto para quem você mais ama
              </h1>
              <p className="mt-4 text-base text-ink/75">
                A Xikita une carinho, estilo e praticidade para mães e pais que
                querem vestir e presentear com segurança.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-ink/90"
                >
                  Falar no WhatsApp
                </a>
                <a
                  href={links.mercadoLivre}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink/20 bg-white px-5 py-3 text-sm font-bold transition hover:bg-ink/5"
                >
                  Comprar no Mercado Livre
                </a>
              </div>

              <div className="mt-6 grid gap-2 text-xs font-semibold text-ink/70 md:grid-cols-3">
                <span>5.000+ famílias atendidas</span>
                <span>8 anos de história</span>
                <span>4.9★ avaliação média</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[26px] shadow-soft"
            >
              <img
                src={assets.loja}
                alt="Ambiente interno da loja Xikita Boutique"
                className="h-full min-h-[360px] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/5 via-transparent to-ink/35" />
              <div className="absolute bottom-4 left-4 rounded-2xl bg-white/92 px-4 py-3 text-sm font-semibold shadow">
                Loja física + digital: compre como preferir
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
                  className="rounded-3xl border border-ink/10 bg-gradient-to-br from-[#fff6fb] to-[#eef8ff] p-5 shadow-soft"
                >
                  <div className="mb-4 h-28 rounded-2xl bg-gradient-to-r from-blush to-baby" />
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/75">{item.desc}</p>
                  <a
                    href={links.whatsapp}
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

        <section id="mercado-livre" className="py-16">
          <div className="mx-auto w-[92vw] max-w-6xl rounded-3xl bg-gradient-to-r from-[#ffeef7] to-[#eaf4ff] p-8 shadow-soft">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pink-600">
              Compre online com confiança
            </p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Sessão oficial Mercado Livre Xikita
            </h2>
            <p className="mt-3 max-w-3xl text-ink/75">
              Ideal para quem busca praticidade, reputação e entrega facilitada.
              A mesma curadoria da loja, com a segurança do canal que você já
              conhece.
            </p>

            <ul className="mt-4 grid gap-2 text-sm text-ink/85 md:grid-cols-2">
              <li>• Compra segura e processo familiar</li>
              <li>• Logística otimizada e previsibilidade</li>
              <li>• Catálogo atualizado com novidades</li>
              <li>• Experiência rápida para decisão de compra</li>
            </ul>

            <a
              href={links.mercadoLivre}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-block rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-ink/90"
            >
              Ir para o Mercado Livre
            </a>
          </div>
        </section>

        <section id="loja-presencial" className="bg-white py-16">
          <div className="mx-auto grid w-[92vw] max-w-6xl gap-8 md:grid-cols-2">
            <div className="rounded-3xl p-3 shadow-soft">
              <img
                src={assets.loja}
                alt="Interior da loja presencial Xikita Boutique"
                className="h-full min-h-[340px] w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-pink-600">
                Loja presencial
              </p>
              <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
                Uma experiência real para encantar sua família
              </h2>
              <p className="mt-4 text-ink/75">
                Na loja física, você sente a qualidade das peças, monta
                combinações e recebe atendimento acolhedor para acertar em cada
                escolha.
              </p>
              <p className="mt-3 text-ink/75">
                Veja novidades diárias e bastidores no nosso Instagram.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-ink/90"
                >
                  Ir para o Instagram
                </a>
                <a
                  href={links.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink/20 bg-white px-5 py-3 text-sm font-bold transition hover:bg-ink/5"
                >
                  Tirar dúvidas no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="lead" className="py-16">
          <div className="mx-auto w-[92vw] max-w-6xl rounded-3xl bg-gradient-to-r from-butter to-mint p-8 shadow-soft">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Receba novidades e ofertas em primeira mão
            </h2>
            <p className="mt-3 max-w-2xl text-ink/80">
              Cadastre seu contato e seja avisada sobre novas coleções, kits e
              oportunidades especiais da Xikita.
            </p>
            <form
              action={leadForm}
              method="get"
              target="_blank"
              className="mt-6 grid gap-3 md:grid-cols-[1fr_1fr_auto]"
            >
              <input
                type="text"
                name="nome"
                required
                placeholder="Seu nome"
                className="rounded-full border border-ink/15 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
              />
              <input
                type="text"
                name="contato"
                required
                placeholder="Seu WhatsApp ou e-mail"
                className="rounded-full border border-ink/15 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button
                type="submit"
                className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-ink/90"
              >
                Quero receber
              </button>
            </form>
          </div>
        </section>
      </main>

      <a
        href={links.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-green-600"
      >
        WhatsApp
      </a>

      <footer id="contato" className="bg-ink py-12 text-white">
        <div className="mx-auto grid w-[92vw] max-w-6xl gap-8 md:grid-cols-4">
          <div>
            <img
              src={assets.logo}
              alt="Xikita Boutique"
              className="h-10 w-auto"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
            <p className="mt-2 text-sm text-white/80">
              Moda infantil, acessórios e presentes selecionados com amor para
              bebês e crianças.
            </p>
          </div>
          <div>
            <h4 className="font-semibold">Canais</h4>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
              <li>Instagram</li>
              <li>Mercado Livre</li>
              <li>WhatsApp</li>
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
            <h4 className="font-semibold">Pagamento</h4>
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
