import Image from "next/image";
import { navigation, site } from "@/lib/blackvaleSiteConfig";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-main">
          <div>
            <a className="brand" href="/" aria-label="Blackvale Holdings home">
              <Image
                src="/assets/Blackvale_No_Background.png"
                width={6264}
                height={1976}
                sizes="210px"
                alt="Blackvale"
              />
            </a>
            <p>
              A long-term perspective on
              <br />
              business ownership.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <a href="/sign-in?redirect_url=%2Fdashboard">
            Client login <span aria-hidden="true">↗</span>
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
