const Navbar = ({ cartCount }) => {
  return (
    <div className="flex bg-white shadow-sm px-6 sticky top-0 z-50 justify-around">
      {/* Logo */}
      <div className="navbar-start">
        <a className="text-2xl font-bold text-violet-600 tracking-tight">DigiTools</a>
      </div>

      {/* Nav Links - center, hidden on mobile */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2 px-1 text-sm font-medium text-gray-600">
          <li><a className="hover:text-violet-600 transition">Products</a></li>
          <li><a className="hover:text-violet-600 transition">Features</a></li>
          <li><a className="hover:text-violet-600 transition">Pricing</a></li>
          <li><a className="hover:text-violet-600 transition">Testimonials</a></li>
          <li><a className="hover:text-violet-600 transition">FAQ</a></li>
        </ul>
      </div>

      {/* Right side */}
      <div className="navbar-end flex items-center gap-3">
        {/* Cart icon with badge */}
        <div className="indicator cursor-pointer">
          {cartCount > 0 && (
            <span className=" bg-violet-600 text-white text-xs border-0">
              {cartCount}
            </span>
          )}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg> */}
        </div>

        <a className="btn btn-ghost btn-sm text-gray-600 font-medium hidden md:flex">Login</a>
        <a className="btn bg-violet-600 hover:bg-violet-700 text-white btn-sm rounded-full px-5 font-semibold transition">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;
