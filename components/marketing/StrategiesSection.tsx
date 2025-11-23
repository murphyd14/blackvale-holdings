import Section from "./Section";
import StrategiesTabs from "./StrategiesTabs";

export default function StrategiesSection() {
  return (
    <Section
      id="strategies"
      eyebrow="Investment Strategy"
      title="How We Deploy Capital"
      variant="default"
    >
      <div className="max-w-3xl">
        <p className="text-base text-gray-300 leading-relaxed mb-8">
          We deploy capital through a focused set of strategies aligned with our
          long-term ownership model and platform for value creation.
        </p>
        <StrategiesTabs />
      </div>
    </Section>
  );
}
