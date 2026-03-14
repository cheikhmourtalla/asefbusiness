import { motion } from "framer-motion"

export default function Contact() {

  return (
    <section
      id="contact"
      className="pt-24 max-w-4xl mx-auto px-6"
    >

      <motion.h2
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:0.5}}
        className="text-3xl font-bold text-center mb-8"
      >
        Contactez-nous
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Informations */}
        <div>

          <h3 className="text-xl font-semibold mb-4">
            ASEF BUSINESS
          </h3>

          <p className="mb-4">
            Vous souhaitez acheter un téléphone ou un accessoire ?  
            Contactez-nous directement via ce formulaire ou sur WhatsApp.
          </p>

          <p className="mb-2">
            📞 78 129 34 87
          </p>

          <p className="mb-4">
            📞 78 483 71 79
          </p>

          <a
            href="https://wa.me/221781293487"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Commander sur WhatsApp
          </a>

        </div>

        {/* Formulaire */}
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Votre nom"
            className="w-full border rounded p-3 dark:bg-gray-800"
            required
          />

          <input
            type="email"
            placeholder="Votre email"
            className="w-full border rounded p-3 dark:bg-gray-800"
            required
          />

          <input
            type="text"
            placeholder="Sujet"
            className="w-full border rounded p-3 dark:bg-gray-800"
          />

          <textarea
            rows="5"
            placeholder="Votre message"
            className="w-full border rounded p-3 dark:bg-gray-800"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded hover:opacity-90"
          >
            Envoyer le message
          </button>

        </form>

      </div>

    </section>
  )
}