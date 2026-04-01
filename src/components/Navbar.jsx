const Navbar = ({ cartCount }) => {
  return (
    <div className="flex bg-white shadow-sm px-6 sticky top-0 z-50 justify-around">
      {/* Logo */}
      <div className="navbar-start">
        <a className="text-4xl font-bold text-violet-600 tracking-tight">DigiTools</a>
      </div>

      {/* Nav Links - center, hidden on mobile */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2 px-1 text-sm font-medium text-gray-600">
          <li><a className="hover:text-violet-600 transition text-3xl">Products</a></li>
          <li><a className="hover:text-violet-600 transition text-3xl">Features</a></li>
          <li><a className="hover:text-violet-600 transition text-3xl">Pricing</a></li>
          <li><a className="hover:text-violet-600 transition text-3xl">Testimonials</a></li>
          <li><a className="hover:text-violet-600 transition text-3xl">FAQ</a></li>
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
