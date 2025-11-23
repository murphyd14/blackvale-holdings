"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useActiveSection } from "@/hooks/useActiveSection";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

interface NavProps {
  variant?: "default" | "dashboard";
}

export default function Nav({ variant = "default" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const isDashboard = variant === "dashboard";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navItems = [
    { href: "#firm", label: "Firm" },
    { href: "#strategies", label: "Strategies" },
    { href: "#sectors", label: "Sectors" },
    { href: "#platform", label: "Platform" },
    { href: "#stewardship", label: "Stewardship" },
    { href: "#insights", label: "Insights" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isDashboard
          ? "bg-white border-b border-zinc-200"
          : scrolled
          ? "bg-[#050509]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0">
            {isDashboard ? (
              <Image
                src="/assets/Blackvale_White_NB.png"
                alt="Blackvale Holdings"
                width={200}
                height={57}
                className="h-6 w-auto md:h-8 lg:h-12 max-w-[140px] md:max-w-none"
                unoptimized
                priority
              />
            ) : (
              <Image
                src="/assets/Blackvale_No_Background.png"
                alt="Blackvale Holdings"
                width={200}
                height={57}
                className="h-6 w-auto md:h-8 lg:h-12 max-w-[140px] md:max-w-none"
                unoptimized
                priority
              />
            )}
          </Link>

          {/* Desktop Nav Links */}
          {!isDashboard && (
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative text-sm transition-colors ${
                      isActive ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-px bg-white" />
                    )}
                  </a>
                );
              })}
            </div>
          )}

          {/* Client Login */}
          <div className="flex items-center gap-4">
            <SignedOut>
              <SignInButton mode="modal">
                <button
                  type="button"
                  className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-colors text-[10px] md:text-xs lg:text-sm font-medium whitespace-nowrap ${
                    isDashboard
                      ? "border border-black bg-black text-white hover:bg-zinc-900 h-8 md:h-9"
                      : "border border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/5"
                  }`}
                >
                  Client Login
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8",
                    userButtonPopoverCard: isDashboard
                      ? "bg-white border border-zinc-200 rounded-lg shadow-lg"
                      : "bg-[#050509] border border-white/10 rounded-lg",
                    userButtonPopoverActions: isDashboard
                      ? "text-black"
                      : "text-white",
                    userButtonPopoverActionButton: isDashboard
                      ? "text-zinc-600 hover:text-black hover:bg-zinc-50"
                      : "text-gray-300 hover:text-white hover:bg-white/5",
                  },
                }}
              />
            </SignedIn>

            {/* Mobile Menu Button - only show on non-dashboard pages */}
            {!isDashboard && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu - only show on non-dashboard pages */}
        {!isDashboard && mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/5 bg-[#050509]/95 backdrop-blur-md">
            <div className="px-4 sm:px-6 py-4 space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      handleNavClick(e, item.href);
                      setMobileMenuOpen(false);
                    }}
                    className={`block text-sm py-2 transition-colors ${
                      isActive
                        ? "text-white border-l-2 border-white pl-2"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <SignedOut>
                <SignInButton mode="modal">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full mt-4 px-4 py-2 border border-white/10 text-gray-300 rounded-lg hover:border-white/20 hover:bg-white/5 transition-colors text-sm font-medium"
                  >
                    Client Login
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <div className="mt-4 flex justify-center">
                  <UserButton
                    appearance={{
                      elements: {
                        userButtonAvatarBox: "w-8 h-8",
                        userButtonPopoverCard:
                          "bg-[#050509] border border-white/10 rounded-lg",
                        userButtonPopoverActions: "text-white",
                        userButtonPopoverActionButton:
                          "text-gray-300 hover:text-white hover:bg-white/5",
                      },
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
