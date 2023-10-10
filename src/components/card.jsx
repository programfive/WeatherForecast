export function Card({ children, className, secondary }) {
  const cardClasses = secondary
    ? " shadow-sm rounded-lg p-2"
    : "bg-surface rounded-radius16 shadow-lg p-4 md:px-6";

  return (
    <section className={`${cardClasses} ${className}`}>
      {children}
    </section>
  );
}
