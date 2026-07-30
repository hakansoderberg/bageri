import React from "react";

interface OutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function OutlineButton({
  children,
  onClick,
  href,
  className = "",
}: OutlineButtonProps) {
  const styles = `
    flex items-center justify-center
    bg-[var(--gullgossen)]
    text-[var(--bludabo)]
    px-6 py-2
    w-fit
    transition-colors
    hover:bg-[var(--gullgossen-light)]
    hover:text-black
    rounded-xs
    ${className}
  `;

  if (href) {
    const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={styles}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}