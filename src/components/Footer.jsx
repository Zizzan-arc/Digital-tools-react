const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* CTA Banner */}
        <div className="bg-violet-600 rounded-2xl p-10 text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white mb-2">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-violet-200 text-sm mb-6 max-w-md mx-auto">
            Join thousands of professionals who are already using DigiTools to work smarter.
            Start your free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="btn bg-white text-violet-600 hover:bg-violet-50 rounded-full px-6 font-bold text-sm border-0">
              Explore Products
            </button>
            <button className="btn border border-white text-white hover:bg-violet-700 rounded-full px-6 font-semibold text-sm bg-transparent">
              View Pricing
            </button>
          </div>
          <p className="text-violet-300 text-xs mt-4">
            No help file visit · No credit card required · Cancel and terms
          </p>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <h2 className="text-white text-2xl font-extrabold mb-3">DigiTools</h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. Work smarter
              with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm">
              {["Features", "About", "Pricing", "Templates", "Integrations"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              {["About", "Blog", "Careers", "Press"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm">
              {["Documentation", "Help Center", "Community", "Contact"].map((item) => (
                <li key={item}><a href="#" className="hover:text-white transition">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4 text-sm">Social Links</h4>
            <div className="flex gap-3">
              {["f", "in", "x"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 hover:bg-violet-600 flex items-center justify-center text-xs text-white font-bold transition"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>© 2026 DigiTools. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
