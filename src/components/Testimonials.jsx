import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amadou",
    text: "Très bon service. J’ai acheté un iPhone et il fonctionne parfaitement.",
  },
  {
    name: "Fatou",
    text: "Livraison rapide et prix vraiment intéressants. Je recommande.",
  },
  {
    name: "Moussa",
    text: "Téléphone reçu en très bon état. Service sérieux.",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Titre */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-14"
      >
        Témoignages Clients
      </motion.h2>

      {/* Cartes témoignages */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between"
          >

            {/* Etoiles */}
            <div className="text-yellow-400 text-lg mb-3">
              ⭐⭐⭐⭐⭐
            </div>

            {/* Texte */}
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {testimonial.text}
            </p>

            {/* Nom */}
            <h4 className="mt-6 font-bold text-gray-800 dark:text-white">
              {testimonial.name}
            </h4>

          </motion.div>
        ))}

      </div>

    </section>
  );
}