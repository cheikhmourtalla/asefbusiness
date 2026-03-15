import { motion } from "framer-motion";

export default function ProductCard({ product, setSelectedProduct }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-full flex flex-col"
    >
      <div className="w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 sm:h-48 md:h-52 object-cover"
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">
          {product.name}
        </h3>

        <p className="text-primary font-semibold mt-2">
          {product.price}
        </p>

        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => setSelectedProduct(product)}
            className="w-full sm:w-auto bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            Détail
          </button>

          <a
            href="https://wa.me/221781293487"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto text-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Commander
          </a>
        </div>
      </div>
    </motion.div>
  );
}