import { useState, useEffect } from "react";
import productsData from "../data/products.json";
import ProductCard from "./ProductCard";
import { type Product } from "../types/product";

const ProductList = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    let results = productsData.filter((product) =>
      product.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    results = results.sort((a, b) =>
      sortAsc ? a.price - b.price : b.price - a.price
    );
    setFiltered(results);
  }, [search, sortAsc]);

  const productNameItems = filtered.filter(
    (p) => p.image && p.name && p.description
  );
  const productUsItems = filtered.filter(
    (p) => p.image && p.name && !p.description
  );

  return (
    <section className="flex flex-col md:flex-row mt-10 gap-6">
      {/* Filtro */}
      <aside className="w-full md:w-1/4">
        <h2 className="text-lg font-semibold mb-2">Filter</h2>
        <input
          type="text"
          placeholder="Search..."
          className="w-full border px-3 py-2 rounded mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="sortPrice"
            checked={sortAsc}
            onChange={() => setSortAsc(!sortAsc)}
          />
          <label htmlFor="sortPrice">Precio (Asc/Desc)</label>
        </div>
      </aside>

      {/* Productos */}
      <div className="w-full md:w-3/4 flex flex-col gap-10">
        {/* Sección Product Name */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Product Name</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productNameItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Sección Product Us */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Product Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productUsItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
