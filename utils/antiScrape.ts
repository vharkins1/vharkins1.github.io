// utils/antiScrape.ts
// Utilities to obfuscate personal information from bots

/**
 * Encodes an email address using a simple ROT13-like encoding
 * Bots scraping the HTML source won't see the plain email
 */
export function encodeEmail(email: string): string {
  return email
    .split('')
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 3))
    .join('');
}

/**
 * Decodes an encoded email address
 */
export function decodeEmail(encoded: string): string {
  return encoded
    .split('')
    .map((char) => String.fromCharCode(char.charCodeAt(0) - 3))
    .join('');
}

/**
 * Encodes a string to base64 for storage in HTML
 */
export function encodeToBase64(str: string): string {
  if (typeof window !== 'undefined') {
    return btoa(str);
  }
  return Buffer.from(str).toString('base64');
}

/**
 * Decodes a base64 string
 */
export function decodeFromBase64(encoded: string): string {
  if (typeof window !== 'undefined') {
    return atob(encoded);
  }
  return Buffer.from(encoded, 'base64').toString('utf-8');
}

/**
 * Pre-encoded values for common personal information
 * These are encoded versions that will be decoded client-side
 */
export const ENCODED_DATA = {
  // vincenttharkins@gmail.com encoded with shift cipher
  email: 'ylqfhqwwkdunlqvCjpdlo1frp',
  // Santa Cruz, CA 95060
  location: 'U2FudGEgQ3J1eiwgQ0EgOTUwNjA=',
  // vincent-harkins-060a4426b
  linkedInId: 'dmluY2VudC1oYXJraW5zLTA2MGE0NDI2Yg==',
} as const;

/**
 * Generates a honeypot field name that changes based on the current date
 * This helps detect bots that fill in hidden fields
 */
export function getHoneypotFieldName(): string {
  const date = new Date();
  const seed = date.getFullYear() + date.getMonth();
  return `contact_${seed.toString(36)}_field`;
}
