import { motion } from "framer-motion";

export default function ProductCard({ product, setSelectedProduct }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onClick={() => setSelectedProduct(product)}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-blue-500 overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-700 hover:shadow-lg transition shadow hover:shadow-blue-400 h-full flex flex-col"
    >
      <div className="w-full h-56 sm:h-60 md:h-64 flex items-center justify-center bg-white dark:bg-gray-900 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="px-4 py-3 flex items-center justify-between">
        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 dark:text-white">
          {product.name}
        </h3>

        <p className="text-base sm:text-lg md:text-xl font-extrabold italic text-gray-900 dark:text-white">
          {product.price}
        </p>
      </div>
    </motion.div>
  );
}