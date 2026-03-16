import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Entreprise */}
        <div>
          <h2 className="text-2xl font-bold text-blue-500">
            ASEF BUSINESS
          </h2>

          <p className="mt-4 text-gray-400">
            Vente de téléphones et accessoires au meilleur prix.
            Produits de qualité disponibles immédiatement.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            📞 78 129 34 87
          </p>

          <p className="text-gray-400 mt-2">
            📞 78 483 71 79
          </p>

          <p className="text-gray-400 mt-2">
            📍 Dakar, Sénégal
          </p>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Réseaux sociaux
          </h3>

          <div className="flex gap-5 text-2xl">
            <a href="#" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>

            <a href="#" className="hover:text-pink-500 transition">
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/221781293487"
              className="hover:text-green-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* Bas du footer */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} ASEF BUSINESS — Tous droits réservés
      </div>
    </footer>
  );
}