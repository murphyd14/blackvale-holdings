/** Original CSS composition; decorative, not a photograph of company property. */
export default function Architecture({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`architecture ${className}`} aria-hidden="true">
      <div className="architecture-plane" />
      <div className="architecture-column column-one" />
      <div className="architecture-column column-two" />
      <div className="architecture-column column-three" />
      <div className="architecture-floor" />
    </div>
  );
}
