// components/ObfuscatedText.tsx
import React, { useState, useEffect } from 'react';

interface ObfuscatedTextProps {
  /** Base64 encoded text */
  encoded: string;
  /** Optional className for styling */
  className?: string;
  /** Tag to render as */
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Renders text that's obfuscated from bots.
 * The actual text is only decoded and rendered client-side.
 */
export const ObfuscatedText: React.FC<ObfuscatedTextProps> = ({
  encoded,
  className,
  as: Component = 'span',
}) => {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    // Decode only on client side
    try {
      const decoded = atob(encoded);
      setText(decoded);
    } catch {
      setText('');
    }
  }, [encoded]);

  // Show placeholder during SSR
  if (text === null) {
    return <Component className={className}>••••••••</Component>;
  }

  return <Component className={className}>{text}</Component>;
};

export default ObfuscatedText;
