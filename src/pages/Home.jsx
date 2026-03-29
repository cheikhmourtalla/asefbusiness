import { motion } from "framer-motion";
import hero from "../assets/hero-bg.jpeg";

export default function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#07122b] pt-24 pb-24 text-white sm:pt-28 sm:pb-28 lg:pb-32"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[auto] max-w-7xl items-center gap-10 px-4 sm:gap-14 sm:px-6 lg:min-h-[85vh] lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex max-w-full items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs font-medium text-cyan-200 backdrop-blur-md sm:text-sm">
            ASEF BUSINESS • Smartphones • Accessoires • Réparation
          </div>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Le meilleur choix pour vos
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              téléphones et accessoires
            </span>
          </h1>

          <p className="mt-4 text-base font-semibold text-cyan-300 sm:text-xl">
            Prix café Touba
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base lg:mx-0 lg:text-lg">
            Découvrez une boutique moderne spécialisée dans la vente de
            smartphones, AirPods, écouteurs Bluetooth, chargeurs, coques et
            autres accessoires. Nous proposons également un service de
            réparation rapide, fiable et professionnel.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#products"
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-4 text-center text-sm font-bold text-white shadow-[0_10px_30px_rgba(34,211,238,0.25)] transition duration-300 hover:-translate-y-1 sm:w-auto sm:px-8 sm:text-base"
            >
              Voir les produits
            </a>

            <a
              href="https://wa.me/221781293487"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center text-sm font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/10 sm:w-auto sm:px-8 sm:text-base"
            >
              Commander sur WhatsApp
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-md transition hover:-translate-y-1">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-xl">
                📱
              </div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                Téléphones récents
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-300 sm:text-base">
                iPhone, Samsung, Redmi et d’autres modèles disponibles selon vos
                besoins.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-md transition hover:-translate-y-1">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-xl">
                🔧
              </div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                Réparation rapide
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-300 sm:text-base">
                Un service sérieux pour remettre votre téléphone en état dans de
                bonnes conditions.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-md transition hover:-translate-y-1">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-xl">
                🛡️
              </div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                Service fiable
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-300 sm:text-base">
                Une boutique de confiance avec un accompagnement direct et des
                échanges simples.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-md transition hover:-translate-y-1">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-xl">
                💬
              </div>
              <h3 className="text-lg font-bold text-white sm:text-xl">
                Commande facile
              </h3>
              <p className="mt-2 text-sm leading-7 text-gray-300 sm:text-base">
                Contact rapide sur WhatsApp pour vos achats, renseignements et
                commandes.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-cyan-400/10 to-blue-500/10 blur-2xl" />

            <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl sm:rounded-[36px] sm:p-5">
              <div className="rounded-[24px] bg-gradient-to-br from-[#0e1b43] to-[#081229] p-4 sm:rounded-[30px] sm:p-6">
                <div className="rounded-[20px] border border-white/10 bg-[#091631] p-3 sm:rounded-[24px] sm:p-4">
                  <img
                    src={hero}
                    alt="ASEF BUSINESS"
                    className="h-[220px] w-full rounded-[16px] object-contain sm:h-[320px] md:h-[420px]"
                  />
                </div>

                <div className="mt-4 grid gap-4 sm:mt-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-gray-400">Produits</p>
                    <h3 className="mt-1 text-base font-bold text-white sm:text-lg">
                      Smartphones & accessoires
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-gray-400">Disponibilité</p>
                    <h3 className="mt-1 text-base font-bold text-white sm:text-lg">
                      Contact direct et rapide
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-3 top-10 hidden rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm font-semibold text-cyan-200 backdrop-blur-md sm:block">
              Meilleurs prix
            </div>

            <div className="absolute -right-3 bottom-12 hidden rounded-2xl border border-blue-300/20 bg-blue-400/15 px-4 py-3 text-sm font-semibold text-blue-100 backdrop-blur-md sm:block">
              Service rapide
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
}