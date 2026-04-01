import { use } from "react";
import ProductCard from "./ProductCard";

const Products = ({ productPromise, carts, setCarts }) => {
  const products = use(productPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          carts={carts}
          setCarts={setCarts}
        />
      ))}
    </div>
  );
};

export default Products;
