"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { navigation } from "@/lib/blackvaleSiteConfig";
export default function Nav({
  variant = "default",
}: {
  variant?: "default" | "dashboard";
}) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const dashboard = variant === "dashboard";
  function close() {
    dialog.current?.close();
  }
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 24);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-15% 0px -60% 0px" },
    );
    navigation.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });
    const resize = () => {
      if (window.innerWidth >= 768) dialog.current?.close();
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", resize);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);
  return (
    <header
      className={`site-header ${scrolled || dashboard ? "is-scrolled" : ""} ${dashboard ? "dashboard-header" : ""}`}
    >
      <div className="shell nav-inner">
        <a href="/" className="brand" aria-label="Blackvale Holdings home">
          <Image
            src="/assets/Blackvale_No_Background.png"
            width={6264}
            height={1976}
            sizes="210px"
            priority
            alt="Blackvale"
          />
        </a>
        {dashboard ? (
          <>
            <a className="text-link" href="/">
              Return to homepage <span aria-hidden="true">↗</span>
            </a>
            <UserButton />
          </>
        ) : (
          <>
            <nav className="desktop-nav" aria-label="Main navigation">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={
                    active === item.href.slice(1) ? "location" : undefined
                  }
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              className="menu-toggle"
              ref={trigger}
              aria-label="Open navigation"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => {
                dialog.current?.showModal();
                setOpen(true);
              }}
            >
              <span />
              <span />
            </button>
          </>
        )}
      </div>
      {!dashboard && (
        <dialog
          ref={dialog}
          id="mobile-navigation"
          aria-label="Main navigation"
          className="mobile-menu"
          onKeyDown={(event) => {
            if (event.key !== "Tab") return;
            const items =
              event.currentTarget.querySelectorAll<HTMLElement>(
                "a[href], button",
              );
            const first = items[0];
            const last = items[items.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first?.focus();
            }
          }}
          onClose={() => {
            setOpen(false);
            trigger.current?.focus();
          }}
          onClick={(e) => {
            if (e.target === dialog.current) close();
          }}
        >
          <div className="mobile-menu-top">
            <span className="eyebrow">Blackvale Holdings</span>
            <button autoFocus aria-label="Close navigation" onClick={close}>
              ×
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => {
                  close();
                  requestAnimationFrame(() => {
                    const target = document.querySelector<HTMLElement>(
                      item.href,
                    );
                    target?.focus({ preventScroll: true });
                  });
                }}
              >
                <span className="eyebrow">0{index + 1}</span>
                {item.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
          <p>A long-term perspective.</p>
        </dialog>
      )}
    </header>
  );
}
