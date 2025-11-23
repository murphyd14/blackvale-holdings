import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  variant?: "default" | "alt" | "band";
  className?: string;
}

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  variant = "default",
  className = "",
}: SectionProps) {
  const bgClass =
    variant === "alt"
      ? "bg-[#080910]"
      : variant === "band"
      ? "bg-[#050509] border-y border-white/5"
      : "bg-[#050509]";

  return (
    <section id={id} className={`${bgClass} py-16 md:py-24 ${className}`} aria-labelledby={id ? `${id}-heading` : undefined}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {(eyebrow || title || subtitle) && (
          <div className="mb-12 lg:mb-16">
            {eyebrow && (
              <div className="mb-4">
                <span className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  {eyebrow}
                </span>
              </div>
            )}
            {title && (
              <h2 id={id ? `${id}-heading` : undefined} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
