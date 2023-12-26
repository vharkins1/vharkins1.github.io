import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { SpecialMessageProvider } from '../context/SpecialMessageContext'; // Import the context provider

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SpecialMessageProvider> {/* Wrap your component tree with the provider */}
      <Component {...pageProps} />
    </SpecialMessageProvider>
  );
}