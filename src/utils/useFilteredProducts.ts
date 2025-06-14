import { useState, useEffect } from "react";
import { type Product } from "../types/product";
import productsData from "../data/products.json";

const useFilteredProducts = (search: string, sortAsc: boolean) => {
  const [filtered, setFiltered] = useState<Product[]>([]);

  useEffect(() => {
    let results = productsData.filter((product) =>
      product.name.toLowerCase().includes(search.trim().toLowerCase())
    );

    results = results.sort((a, b) => (sortAsc ? a.price - b.price : b.price - a.price));
    setFiltered(results);
  }, [search, sortAsc]);

  return filtered;
};

export default useFilteredProducts;
