const Stats = () => {
  const stats = [
    { value: "50K+", label: "Active Users" },
    { value: "200+", label: "Premium Tools" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <div className="bg-violet-600 py-10">
      <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-violet-400">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center py-2">
            <span className="text-4xl font-extrabold text-white">{stat.value}</span>
            <span className="text-violet-200 text-sm mt-1 font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
