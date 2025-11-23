"use client";

import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 bg-[#080910]">
      {/* Tagline */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-b border-white/5">
        <p className="text-sm text-gray-500 text-center">
          Blackvale Holdings · Long-term owners of enduring businesses.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Firm */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-4 uppercase tracking-[0.1em]">
              Firm
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#firm"
                  onClick={(e) => handleNavClick(e, "#firm")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#firm"
                  onClick={(e) => handleNavClick(e, "#firm")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#stewardship"
                  onClick={(e) => handleNavClick(e, "#stewardship")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Governance
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Strategies */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-4 uppercase tracking-[0.1em]">
              Strategies
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#strategies"
                  onClick={(e) => handleNavClick(e, "#strategies")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Core Holdings
                </a>
              </li>
              <li>
                <a
                  href="#strategies"
                  onClick={(e) => handleNavClick(e, "#strategies")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Growth
                </a>
              </li>
              <li>
                <a
                  href="#strategies"
                  onClick={(e) => handleNavClick(e, "#strategies")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Special Situations
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-4 uppercase tracking-[0.1em]">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#insights"
                  onClick={(e) => handleNavClick(e, "#insights")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Insights
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-xs font-semibold text-white mb-4 uppercase tracking-[0.1em]">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@blackvaleholdings.com"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Blackvale Holdings
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="hidden md:block text-gray-400 hover:text-white transition-colors text-sm underline underline-offset-4"
            >
              Back to top
            </button>
            <div className="flex items-center gap-2 opacity-40">
              <Image
                src="/assets/Blackvale_No_Background.png"
                alt="Blackvale Holdings"
                width={180}
                height={51}
                className="h-14 w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
