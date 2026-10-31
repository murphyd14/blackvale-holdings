import Nav from "@/components/marketing/Nav";
import Hero from "@/components/marketing/Hero";
import Footer from "@/components/marketing/Footer";
import Architecture from "@/components/marketing/Architecture";
import { approach, interests, site } from "@/lib/blackvaleSiteConfig";
export default function Home({
  searchParams,
}: {
  searchParams?: { hero?: string };
}) {
  const architectural =
    process.env.NODE_ENV === "development" && searchParams?.hero === "b";
  return (
    <div className="marketing" id="top">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: site.name,
            description: site.description,
            url: site.url,
            logo: `${site.url}/assets/Blackvale_No_Background.png`,
          }),
        }}
      />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero architectural={architectural} />
        <section
          className="editorial philosophy"
          id="firm"
          tabIndex={-1}
          aria-labelledby="firm-heading"
        >
          <div className="shell">
            <p className="eyebrow section-label">
              <span>01 / The firm</span>
              <span>A patient perspective</span>
            </p>
            <div className="split">
              <h2 id="firm-heading">
                A patient approach to
                <br className="desktop-break" /> building lasting value.
              </h2>
              <div className="prose">
                <p className="lead">
                  Enduring businesses are built through years of thoughtful
                  decisions.
                </p>
                <p>
                  Blackvale Holdings is developing a platform for long-term
                  business ownership. Our ambition is to acquire, strengthen,
                  and grow businesses whose products and services remain useful
                  over time.
                </p>
                <p>
                  That begins with understanding a business deeply: its
                  economics, its customers, and the people who make it work. We
                  value patient judgment, respect for company culture, and
                  improvement that lasts.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="editorial approach-section"
          id="approach"
          tabIndex={-1}
          aria-labelledby="approach-heading"
        >
          <div className="shell">
            <p className="eyebrow section-label">
              <span>02 / Our approach</span>
              <span>Principles for the road ahead</span>
            </p>
            <div className="section-intro">
              <h2 id="approach-heading">
                Thoughtful ownership.
                <br />
                <em>Deliberate improvement.</em>
              </h2>
              <p>The principles guiding the platform we are building.</p>
            </div>
            <div className="approach-grid">
              {approach.map((item, i) => (
                <article key={item.title}>
                  <span className="index">0{i + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section
          className="editorial focus-section"
          id="focus"
          tabIndex={-1}
          aria-labelledby="focus-heading"
        >
          <div className="shell">
            <p className="eyebrow section-label">
              <span>03 / Areas of interest</span>
              <span>Purpose. Resilience. Relevance.</span>
            </p>
            <div className="section-intro">
              <h2 id="focus-heading">
                Focused on businesses
                <br />
                that matter.
              </h2>
              <p>
                Our interests span the physical and digital foundations of a
                productive economy.
              </p>
            </div>
            <div className="focus-rows">
              {interests.map((item, i) => (
                <article className="focus-row" key={item.title}>
                  <span className="index">0{i + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="focus-detail">{item.detail}</p>
                  </div>
                  <p>{item.description}</p>
                  <span
                    className={`sector-symbol symbol-${i}`}
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="stewardship" aria-labelledby="stewardship-heading">
          <div className="shell stewardship-grid">
            <div className="architecture-wrap">
              <Architecture />
              <p className="composition-caption">
                Structure. Continuity. Perspective.
              </p>
            </div>
            <div className="stewardship-copy">
              <p className="eyebrow">04 / Stewardship</p>
              <h2 id="stewardship-heading">
                Business ownership
                <br />
                is a responsibility.
              </h2>
              <p>
                Behind every business are people who depend on it: employees,
                customers, suppliers, and communities.
              </p>
              <p>
                Our view of ownership starts with that responsibility. We
                believe in continuity where it matters, change where it helps,
                and decisions that account for more than the next quarter.
              </p>
              <div className="stewardship-note">
                Preserve what matters.
                <br />
                <em>Build what comes next.</em>
              </div>
            </div>
          </div>
        </section>
        <section
          className="contact-section"
          id="contact"
          tabIndex={-1}
          aria-labelledby="contact-heading"
        >
          <div className="shell">
            <p className="eyebrow">05 / Start a conversation</p>
            <div className="contact-grid">
              <h2 id="contact-heading">
                Let’s build
                <br />
                something <em>enduring.</em>
              </h2>
              <div>
                <p>
                  For business owners, potential operating partners, and
                  professional relationships built around a long-term
                  perspective.
                </p>
                {site.contact.verified ? (
                  <a
                    className="text-link contact-email"
                    href={`mailto:${site.contact.email}`}
                  >
                    {site.contact.email}
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <div className="contact-pending">
                    <p className="contact-email">{site.contact.email}</p>
                    <p className="contact-status">
                      Our email channel is being set up and cannot yet receive
                      inquiries. Please check back before sending.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
