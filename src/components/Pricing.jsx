const plans = [
  {
    name: "Starter",
    tagline: "Perfect for getting started",
    price: 0,
    period: "/month",
    featured: false,
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    cta: "Get Started Free",
    ctaStyle: "border border-violet-600 text-violet-600 hover:bg-violet-50",
  },
  {
    name: "Pro",
    tagline: "Best for professionals",
    price: 29,
    period: "/Month",
    featured: true,
    badge: "Most Popular",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    cta: "Start Pro Trial",
    ctaStyle: "bg-white text-violet-600 hover:bg-violet-50 font-bold",
  },
  {
    name: "Enterprise",
    tagline: "For teams and businesses",
    price: 99,
    period: "/Month",
    featured: false,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    cta: "Contact Sales",
    ctaStyle: "border border-violet-600 text-violet-600 hover:bg-violet-50",
  },
];

const Pricing = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h2>
          <p className="text-gray-500 mt-2 text-base">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-7 flex flex-col gap-5 relative ${
                plan.featured
                  ? "bg-violet-600 text-white shadow-xl scale-105"
                  : "border border-gray-200 bg-white text-gray-900"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full shadow">
                  {plan.badge}
                </span>
              )}

              {/* Plan name */}
              <div>
                <h3 className={`text-lg font-bold ${plan.featured ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mt-0.5 ${plan.featured ? "text-violet-200" : "text-gray-400"}`}>
                  {plan.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-end gap-1">
                <span className={`text-4xl font-extrabold ${plan.featured ? "text-white" : "text-gray-900"}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm mb-1 ${plan.featured ? "text-violet-200" : "text-gray-400"}`}>
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className={plan.featured ? "text-violet-200" : "text-violet-500"}>✓</span>
                    <span className={plan.featured ? "text-violet-100" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`btn w-full rounded-xl text-sm font-semibold py-2.5 border-0 transition ${plan.ctaStyle}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
