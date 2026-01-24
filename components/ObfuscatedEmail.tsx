// components/ObfuscatedEmail.tsx
import React, { useState, useEffect } from 'react';

interface ObfuscatedEmailProps {
  /** The encoded email (use encodeEmail from antiScrape.ts) */
  encoded: string;
  /** Optional className for styling */
  className?: string;
  /** Display text (if different from email) */
  displayText?: string;
  /** Whether to show as a button instead of link */
  asButton?: boolean;
}

/**
 * Renders an email link that's obfuscated from bots.
 * The actual email is only decoded and rendered client-side.
 */
export const ObfuscatedEmail: React.FC<ObfuscatedEmailProps> = ({
  encoded,
  className,
  displayText,
  asButton = false,
}) => {
  const [email, setEmail] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Decode the email only on the client side
    // This prevents bots from seeing the plain email in the HTML
    const decoded = encoded
      .split('')
      .map((char) => String.fromCharCode(char.charCodeAt(0) - 3))
      .join('');
    setEmail(decoded);
  }, [encoded]);

  const handleClick = (e: React.MouseEvent) => {
    if (asButton && !revealed) {
      e.preventDefault();
      setRevealed(true);
    }
  };

  // Show a placeholder during SSR to prevent hydration mismatch
  if (!email) {
    return (
      <span className={className} style={{ cursor: 'pointer' }}>
        {asButton ? 'Click to reveal email' : '••••••@••••••.•••'}
      </span>
    );
  }

  if (asButton && !revealed) {
    return (
      <button
        onClick={handleClick}
        className={className}
        style={{
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
          color: 'inherit',
          font: 'inherit',
          textDecoration: 'underline',
        }}
      >
        Click to reveal email
      </button>
    );
  }

  return (
    <a href={`mailto:${email}`} className={className}>
      {displayText || email}
    </a>
  );
};

export default ObfuscatedEmail;
