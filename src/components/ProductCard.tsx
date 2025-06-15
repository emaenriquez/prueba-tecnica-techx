import { type Product } from "../types/product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="card p-4 rounded-lg shadow bg-white">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <span className="text-xl font-semibold">${product.price}</span>
      </div>
      {product.description && (
        <p className="mt-2 text-gray-600">{product.description}</p>
      )}
    </div>
  );
};

export default ProductCard;
