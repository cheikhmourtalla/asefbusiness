import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const phones = filteredProducts.filter(
    (product) => product.category === "phone"
  );

  const accessories = filteredProducts.filter(
    (product) => product.category === "accessory"
  );

  return (
    <section id="products" className="pt-24 max-w-7xl mx-auto px-6 pb-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8"
      >
        Nos Produits
      </motion.h2>

      {/* Barre de recherche */}
      <div className="max-w-2xl mx-auto mb-12">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Téléphones */}
      {phones.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-primary text-center md:text-left">
            Téléphones
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {phones.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                setSelectedProduct={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      )}

      {/* Accessoires */}
      {accessories.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-primary text-center md:text-left">
            Accessoires
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {accessories.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                setSelectedProduct={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      )}

      {/* Aucun résultat */}
      {phones.length === 0 && accessories.length === 0 && (
        <p className="text-center text-gray-600 dark:text-gray-300 text-lg">
          Aucun produit trouvé.
        </p>
      )}

      {/* Modal détail */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{selectedProduct.name}</h3>

                <p className="text-primary font-semibold mt-2">
                  {selectedProduct.price}
                </p>

                <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                  {selectedProduct.description || "Description non disponible."}
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/221781293487"
                    target="_blank"
                    rel="noreferrer"
                    className="text-center bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition"
                  >
                    Commander sur WhatsApp
                  </a>

                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="bg-red-500 text-white px-5 py-3 rounded-lg hover:bg-red-600 transition"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}