import Section from "./Section";

export default function MetricsBand() {
  const metrics = [
    { label: "AUM", value: "$2M+" },
    { label: "Portfolio Companies", value: "2" },
    { label: "Target Sectors", value: "Industrial, Services, Technology" },
    { label: "Investment Horizon", value: "Decades" },
  ];

  return (
    <Section variant="band" className="py-8 md:py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div key={index}>
            <div className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
              {metric.label}
            </div>
            <div className="text-lg md:text-xl font-semibold text-gray-100">
              {metric.value}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
