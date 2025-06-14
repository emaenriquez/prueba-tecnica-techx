import { type Product } from "../types/product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="cursor-pointer bg-white shadow rounded p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-center mb-4 rounded"
      />
      <h3 className="font-semibold">{product.name}</h3>
      {product.description && (
        <p className="text-sm text-gray-500">{product.description}</p>
      )}
    </div>
  );
};

export default ProductCard;
