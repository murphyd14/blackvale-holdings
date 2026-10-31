import Architecture from "./Architecture";
export default function Hero({
  architectural = false,
}: {
  architectural?: boolean;
}) {
  return (
    <section
      className={`hero ${architectural ? "hero-b" : "hero-a"}`}
      aria-labelledby="hero-heading"
    >
      {architectural ? (
        <Architecture className="hero-architecture" />
      ) : (
        <div className="hero-lines" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      )}
      <div className="shell hero-inner">
        <p className="eyebrow hero-eyebrow">
          Blackvale Holdings · A long-term perspective
        </p>
        <h1 id="hero-heading">
          Built to endure.
          <br />
          <em>Designed to evolve.</em>
        </h1>
        <div className="hero-bottom">
          <div>
            <p className="hero-description">
              Building a platform for long-term business ownership through
              disciplined investment thinking, operational improvement, and
              thoughtful use of technology.
            </p>
            <a className="text-link" href="#approach">
              Explore our approach <span aria-hidden="true">↗</span>
            </a>
          </div>
          <a className="hero-scroll" href="#firm">
            <span>Discover Blackvale</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
