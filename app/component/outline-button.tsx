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
    border border-[var(--gullgossen)]
    bg-transparent
    text-[var(--gullgossen)]
    px-6 py-2
    transition-colors
    hover:bg-[var(--gullgossen)]
    hover:text-black
    ${className}
  `;

  if (href) {
    return (
      <a href={href} className={styles}>
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