// components/ProtectedLink.tsx
import React, { useState, useEffect } from 'react';

interface ProtectedLinkProps {
  /** Base64 encoded URL */
  encodedUrl: string;
  /** Text to display */
  children: React.ReactNode;
  /** Optional className for styling */
  className?: string;
  /** Whether to open in new tab */
  newTab?: boolean;
  /** Optional click protection - requires solving simple challenge */
  requireConfirmation?: boolean;
  /** Confirmation message */
  confirmMessage?: string;
}

/**
 * Renders a link that's protected from bot scraping.
 * The URL is only decoded client-side.
 */
export const ProtectedLink: React.FC<ProtectedLinkProps> = ({
  encodedUrl,
  children,
  className,
  newTab = false,
  requireConfirmation = false,
  confirmMessage = 'This will download a file. Continue?',
}) => {
  const [url, setUrl] = useState<string | null>(null);
  const [isHuman, setIsHuman] = useState(!requireConfirmation);

  useEffect(() => {
    // Decode URL only on client side
    try {
      const decoded = atob(encodedUrl);
      setUrl(decoded);
    } catch {
      setUrl(null);
    }
  }, [encodedUrl]);

  const handleClick = (e: React.MouseEvent) => {
    if (requireConfirmation && !isHuman) {
      e.preventDefault();
      // Simple human verification
      const confirmed = window.confirm(confirmMessage);
      if (confirmed) {
        setIsHuman(true);
        // Navigate after confirmation - use direct navigation
        // (window.open can be blocked by popup blockers after confirm dialog)
        if (url) {
          // Create a temporary link and click it to avoid popup blocker
          const link = document.createElement('a');
          link.href = url;
          if (newTab) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
          }
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    }
  };

  if (!url) {
    return <span className={className}>{children}</span>;
  }

  return (
    <a
      href={isHuman ? url : '#'}
      onClick={handleClick}
      className={className}
      target={newTab ? '_blank' : undefined}
      rel={newTab ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
};

export default ProtectedLink;
