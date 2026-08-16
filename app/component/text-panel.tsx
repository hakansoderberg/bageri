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
    <div className="border border-[var(--gullgossen)] max-w-[1100px] mx-auto px-7 py-10 sm:px-14 sm:py-12 text-center">
      <div className="flex items-center gap-4 sm:gap-5 mb-5">
        <span className="flex-1 h-px bg-[var(--gullgossen)] opacity-50" />
        <span className="font-mono text-xs tracking-[0.12em] uppercase text-[var(--gullgossen-soft)] whitespace-nowrap">
          {eyebrow}
        </span>
        <span className="flex-1 h-px bg-[var(--gullgossen)] opacity-50" />
      </div>

      <h2 className="font-merry text-3xl sm:text-4xl text-[var(--gullgossen)] mb-4">
        {title}
      </h2>

      <p className="text-[var(--muted)] text-[15.5px] leading-relaxed max-w-[62ch] mx-auto">
        {text}
      </p>

      {ctaLabel && ctaHref && (
        <a
          href={ctaHref}
          className="inline-block mt-6 bg-[var(--gullgossen)] text-[var(--gdansk)] font-semibold text-sm px-8 py-3.5 hover:bg-[var(--gullgossen-soft)] transition-colors"
        >
          {ctaLabel}
        </a>
      )}
    </div>
  );
};

export default TextPanel;
