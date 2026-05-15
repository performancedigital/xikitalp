import React from "react";
import ReactDOM from "react-dom/client";
import { motion } from "framer-motion";
import "./styles.css";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const categories = [
  {
    title: "Moda Infantil",
    desc: "Roupinhas lindas, confortáveis e cheias de estilo para bebês e crianças.",
    cta: "Ver coleção",
  },
  {
    title: "Acessórios Infantis",
    desc: "Laços, bolsas, meias, tiaras e detalhes que deixam tudo mais encantador.",
    cta: "Ver acessórios",
  },
  {
    title: "Presentes Especiais",
    desc: "Opções criativas e afetivas para aniversários, visitas e datas únicas.",
    cta: "Ver presentes",
  },
  {
    title: "Brinquedos e Novidades",
    desc: "Itens lúdicos e divertidos escolhidos para encantar os pequenos.",
    cta: "Ver novidades",
  },
];

const benefits = [
  {
    t: "Atendimento personalizado",
    d: "Te ajudamos a escolher tamanho, presente e a melhor opção para cada criança.",
  },
  {
    t: "Curadoria com carinho",
    d: "Selecionamos produtos infantis bonitos, úteis e especiais para cada fase.",
  },
  {
    t: "Conforto e qualidade",
    d: "Peças pensadas para vestir bem, durar mais e acompanhar a rotina.",
  },
  {
    t: "Presentes que encantam",
    d: "Transforme uma compra em uma lembrança cheia de afeto.",
  },
  {
    t: "Compra fácil e segura",
    d: "Atendimento rápido no WhatsApp, redes sociais e canais online.",
  },
];

function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-[92vw] max-w-6xl items-center justify-between py-4">
          <a href="#inicio" className="text-lg font-extrabold">
            Xikita Boutique
          </a>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#inicio">Início</a>
            <a href="#categorias">Categorias</a>
            <a href="#sobre">Sobre</a>
            <a href="#avaliacoes">Avaliações</a>
            <a href="#contato">Contato</a>
          </nav>
          <a
            href="#canais"
            className="rounded-full bg-blush px-4 py-2 text-sm font-bold transition hover:brightness-95"
          >
            Comprar agora
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="mx-auto grid w-[92vw] max-w-6xl gap-6 py-14 md:grid-cols-2 md:py-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-br from-baby via-lilac to-blush p-6 shadow-soft md:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/70">
              Nova coleção infantil
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
              Moda, presentes e encanto em cada escolha
            </h1>
            <p className="mt-4 text-ink/80">
              Peças infantis, acessórios encantadores e presentes especiais para
              vestir, cuidar e surpreender quem você ama.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#canais"
                className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-ink/90"
              >
                Comprar Agora
              </a>
              <a
                href="#categorias"
                className="rounded-full border border-ink/20 bg-white px-5 py-3 text-sm font-bold transition hover:bg-ink/5"
              >
                Ver Catálogo
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="min-h-[320px] rounded-3xl bg-[radial-gradient(circle_at_20%_20%,#fff,transparent_40%),linear-gradient(135deg,#DDF5E8,#FFF6CC)] shadow-soft"
            aria-label="Imagem da loja infantil"
          />
        </section>

        <section id="categorias" className="bg-white py-14">
          <div className="mx-auto w-[92vw] max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-pink-600">
              Nossas categorias
            </p>
            <h2 className="mt-2 text-3xl font-extrabold md:text-4xl">
              Tudo para os pequenos, em um só lugar
            </h2>
            <p className="mt-3 text-ink/80">
              Explore produtos selecionados com carinho para deixar a infância
              ainda mais especial.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {categories.map((item) => (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-3xl border border-ink/10 bg-cream p-5 shadow-soft"
                >
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/75">{item.desc}</p>
                  <a
                    href="#canais"
                    className="mt-4 inline-block text-sm font-bold text-pink-600"
                  >
                    {item.cta}
                  </a>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-lilac/35 to-baby/30 py-14">
          <div className="mx-auto w-[92vw] max-w-6xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Uma experiência de compra feita com amor
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((b) => (
                <motion.article
                  key={b.t}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="rounded-3xl bg-white p-5 shadow-soft"
                >
                  <h3 className="font-bold">{b.t}</h3>
                  <p className="mt-2 text-sm text-ink/75">{b.d}</p>
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

        <section id="canais" className="bg-white py-14">
          <div className="mx-auto w-[92vw] max-w-6xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Compre com a gente onde preferir!
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Channel
                name="Instagram"
                text="Veja novidades, looks infantis, presentes e bastidores da loja."
                btn="Seguir no Instagram"
              />
              <Channel
                name="Facebook"
                text="Acompanhe ofertas, coleções e novidades infantis."
                btn="Curtir no Facebook"
              />
              <Channel
                name="Mercado Livre"
                text="Compre com praticidade, segurança e entrega facilitada."
                btn="Comprar no Mercado Livre"
              />
              <Channel
                name="WhatsApp"
                text="Fale com nossa equipe e receba atendimento personalizado."
                btn="Falar no WhatsApp"
              />
            </div>
          </div>
        </section>

        <section id="sobre" className="py-14">
          <div className="mx-auto grid w-[92vw] max-w-6xl gap-8 md:grid-cols-2">
            <div className="min-h-[280px] rounded-3xl bg-gradient-to-br from-butter to-mint shadow-soft" />
            <div>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                Feito com amor, entregue com alma
              </h2>
              <p className="mt-4 text-ink/80">
                A Xikita Boutique nasceu para transformar compras infantis em
                momentos especiais. Cada roupa, acessório, brinquedo e presente
                é escolhido com carinho para acompanhar a infância com beleza,
                conforto e afeto.
              </p>
              <p className="mt-4 text-ink/80">
                Mais do que vender produtos infantis, queremos ajudar famílias a
                encontrarem escolhas que carregam cuidado, intenção e amor.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/85">
                <li>• Produtos infantis selecionados</li>
                <li>• Atendimento acolhedor</li>
                <li>• Opções para bebês e crianças</li>
                <li>• Presentes para encantar</li>
              </ul>
              <a
                href="#categorias"
                className="mt-6 inline-block rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-ink/90"
              >
                Conheça a coleção
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto w-[92vw] max-w-6xl">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Amor que fala por si
            </h2>
            <div className="mt-6 rounded-3xl bg-cream p-6 shadow-soft">
              <p className="text-ink/85">
                “Simplesmente apaixonada pela Xikita! Comprei um presente
                infantil e foi lindo do início ao fim. A qualidade das peças é
                excelente e o atendimento foi muito carinhoso.”
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Tudo lindo!",
                "Atendimento maravilhoso",
                "Entrega rápida",
                "Produtos encantadores",
              ].map((m) => (
                <span
                  key={m}
                  className="rounded-full bg-lilac px-3 py-1 text-xs font-semibold"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14">
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
              href="#canais"
              className="mt-6 inline-block rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-ink/90"
            >
              Quero Comprar
            </a>
          </div>
        </section>

        <section className="bg-white py-14">
          <div className="mx-auto w-[92vw] max-w-6xl rounded-3xl border border-ink/10 p-6 shadow-soft">
            <h2 className="text-2xl font-extrabold md:text-3xl">
              Fique por dentro das novidades
            </h2>
            <p className="mt-2 text-ink/80">
              Receba em primeira mão novas coleções, presentes infantis e
              ofertas especiais.
            </p>
            <form className="mt-5 flex flex-col gap-3 md:flex-row">
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-full border border-ink/20 px-4 py-3 outline-none focus:ring-2 focus:ring-pink-300"
              />
              <button
                type="button"
                className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-ink/90"
              >
                Assinar
              </button>
            </form>
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
              <li>Telefone</li>
              <li>E-mail</li>
              <li>Endereço</li>
              <li>Horário de atendimento</li>
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

function Channel({ name, text, btn }) {
  return (
    <article className="rounded-3xl border border-ink/10 bg-cream p-5 shadow-soft">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="mt-2 text-sm text-ink/75">{text}</p>
      <a
        href="#"
        className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-sm font-bold transition hover:bg-ink hover:text-white"
      >
        {btn}
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
