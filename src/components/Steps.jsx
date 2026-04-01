import rocket from "./rocket.png";
import user from "./user.png";
import packageIcon from "./package.png";
const steps = [
  {
    number: "1",
    title: "Create Account",
    description: "Sign up for free in seconds. No credit card required to get started.",
    icon: rocket
  },
  {
    number: "2",
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
    icon: user,
  },
  {
    number: "3",
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
    icon: packageIcon,
  },
];

const Steps = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Get Started In 3 Steps</h2>
          <p className="text-gray-500 mt-2 text-base">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative shadow-md rounded-lg bg-white p-8">
              

              {/* Icon circle */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-violet-100 flex items-center justify-center text-3xl mb-5 shadow-sm"><img src={step.icon} alt={step.title} className="w-10 h-10" />
                
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
