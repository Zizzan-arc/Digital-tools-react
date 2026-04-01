import Banner from "./components/Banner";
import Footer from "./components/Footer";

import Products from "./components/Products";
import Cart from "./components/Cart";
import Stats from "./components/Stats";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import { useState } from "react";
import Navbar from "./components/Navbar";

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productPromise = getProducts();

function App() {
  const [activeTab, setActiveTab] = useState("Products");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Navbar cartCount={carts.length} />
      <Banner />
      <Stats />

      {/* Main Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900">Premium Digital Tools</h2>
            <p className="text-gray-500 mt-2 text-base">
              Choose from our curated collection of premium digital products designed
              to boost your productivity and creativity.
            </p>
          </div>

          {/* Toggle Buttons */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveTab("Products")}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeTab === "Products"
                  ? "bg-violet-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("Cart")}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-all duration-200 ${
                activeTab === "Cart"
                  ? "bg-violet-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              Cart {carts.length > 0 ? `(${carts.length})` : ""}
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "Products" && (
            <Products productPromise={productPromise} carts={carts} setCarts={setCarts} />
          )}
          {activeTab === "Cart" && (
            <Cart carts={carts} setCarts={setCarts} />
          )}
        </div>
      </section>

      <Steps />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
