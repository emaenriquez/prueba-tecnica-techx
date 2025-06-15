import { useState } from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";
import useFilteredProducts from "../utils/useFilteredProducts";

const ProductList = () => {
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  const filtered = useFilteredProducts(search, sortAsc);

  const productNameItems = filtered.filter(
    (p) => p.image && p.name && p.description
  );
  const productUsItems = filtered.filter(
    (p) => p.image && p.name && !p.description
  );

  return (
    <section className="flex flex-col md:flex-row mt-10 gap-6">
      {/* Filtros */}
        <Filters
          search={search}
          setSearch={setSearch}
          sortAsc={sortAsc}
          setSortAsc={setSortAsc}
        />

      {/* Productos */}
      <div className="w-full md:w-3/4 flex flex-col gap-10">
        {/* Sección productos disponibles */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Nuestros productos disponibles</h2>
          {productNameItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productNameItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No hay productos disponibles.
            </p>
          )}
        </div>

        {/* Sección catalogo de productos */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Catálogo de productos</h2>
          {productUsItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productUsItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">
              No hay productos disponibles.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
