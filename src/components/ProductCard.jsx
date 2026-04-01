import React from "react";
import { toast } from "react-toastify";

const tagStyles = {
  popular: "bg-violet-100 text-violet-700",
  new: "bg-green-100 text-green-700",
  "best-seller": "bg-orange-100 text-orange-700",
};

const periodLabel = {
  "one-time": "One Time",
  monthly: "/mo",
  yearly: "/yr",
};

const ProductCard = ({ product, carts, setCarts }) => {
  const { id, name, description, price, period, tag, tagType, features, icon } = product;
  const isInCart = carts.some((item) => item.id === id);

  const handleAddToCart = () => {
    if (isInCart) {
      toast.error(`"${name}" is already in your cart!`);
      return;
    }
    setCarts([...carts, product]);
    toast.success(`"${name}" added to cart!`);
  };

  return (
    <div className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4 relative">
      {/* Tag badge */}
      {tag && (
        <span
          className={`absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full ${
            tagStyles[tagType] || "bg-gray-100 text-gray-600"
          }`}
        >
          {tag}
        </span>
      )}

      {/* Icon + Name */}
      <div className="flex items-center gap-3">
        <img src={icon} alt={name} className="h-10 w-10 object-contain rounded-lg" />
        <div>
          <h3 className=" font-bold text-gray-900">{name}</h3>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>

      {/* Price */}
      <div className="flex items-end gap-1">
        <span className="text-2xl font-extrabold text-gray-900">${price}</span>
        <span className="text-gray-400 text-sm mb-0.5">{periodLabel[period] || period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-violet-500 font-bold">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {/* Buy Now Button */}
      <button
        onClick={handleAddToCart}
        disabled={isInCart}
        className={`btn w-full rounded-lg text-sm font-semibold mt-auto transition ${
          isInCart
            ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
            : "bg-violet-600 hover:bg-violet-700 text-white border-0"
        }`}
      >
        {isInCart ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;
