interface TextPanelProps {
  eyebrow: string;
  title: string;
  text: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const TextPanel: React.FC<TextPanelProps> = ({
  eyebrow,
  title,
  text,
  ctaLabel,
  ctaHref,
}) => {
  return (
    <div className="border border-[var(--color-gold)] px-7 py-10 sm:px-14 sm:py-12 text-center">
      <div className="flex items-center gap-4 sm:gap-5 mb-5">
        <span className="flex-1 h-px bg-[var(--color-gold)] opacity-50" />
        <span className="font-mono text-xs tracking-[0.12em] uppercase text-[var(--color-gold-soft)] whitespace-nowrap">
          {eyebrow}
        </span>
        <span className="flex-1 h-px bg-[var(--color-gold)] opacity-50" />
      </div>

      <h2 className="font-merry text-3xl sm:text-4xl text-[var(--color-gold)] mb-4">
        {title}
      </h2>

      <p className="text-[var(--color-text-muted)] leading-relaxed">
        {text}
      </p>

      {ctaLabel && ctaHref && (
        <a
          href={ctaHref}
          className="inline-block mt-6 bg-[var(--color-gold)] text-[var(--color-text-offwhite)] font-semibold text-sm px-8 py-3.5 hover:bg-[var(--color-gold-soft)] transition-colors"
        >
          {ctaLabel}
        </a>
      )}
    </div>
  );
};

export default TextPanel;
