import { toast } from "react-toastify";
import scart from "./shopping-cart.png";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (id, name) => {
    setCarts(carts.filter((item) => item.id !== id));
    toast.error(`"${name}" removed from cart.`);
  };

  const handleCheckout = () => {
    setCarts([]);
    toast.success("Checkout successful! Your cart has been cleared.");
  };

  if (carts.length === 0) {
    return (
      <div className="text-center py-20 text-gray-400">
        <img src={scart} alt="Empty Cart" className="mx-auto w-10 h-10" />
        <p className="text-lg font-medium">Your cart is empty.</p>
        
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-5">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-3">
        {carts.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border border-gray-200 rounded-xl px-5 py-4 bg-white shadow-sm"
          >
            {/* Left: icon + name + price */}
            <div className="flex items-center gap-4">
              <img src={item.icon} alt={item.name} className="h-10 w-10 object-contain rounded-lg" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.name}</p>
                <p className="text-gray-400 text-xs">${item.price}</p>
              </div>
            </div>

            {/* Remove button */}
            <button
              onClick={() => handleRemove(item.id, item.name)}
              className="text-sm text-red-500 hover:text-red-700 font-semibold transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="flex justify-between items-center border-t border-gray-200 mt-5 pt-4 px-1">
        <span className="text-base font-semibold text-gray-700">Total</span>
        <span className="text-xl font-extrabold text-gray-900">${totalPrice}</span>
      </div>

      {/* Proceed to Checkout */}
      <button
        onClick={handleCheckout}
        className="btn w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl mt-4 font-semibold text-sm py-3 border-0 transition"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
