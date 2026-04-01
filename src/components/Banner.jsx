
import banner from "./Banner.png";
import playIcon from "./Play.png";
const Banner = () => {
  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-100 border border-violet-300 text-violet-700 text-xs font-semibold px-4 py-1.5 rounded-full">
            New: AI-Powered Tools Available
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-500 text-base max-w-md line-height-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software — all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <button className="btn bg-violet-600 hover:bg-violet-700 text-white rounded-full px-6 font-semibold text-sm transition">
              Explore Products
            </button>
            <button className="btn btn-outline border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-6 font-semibold text-sm flex items-center gap-2">
              <span><img src={playIcon} alt="play" className="w-4 h-4" /></span> Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={banner}
            alt="Digital Workflow"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
