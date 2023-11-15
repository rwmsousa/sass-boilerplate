// pages/_app.tsx
import React from 'react';
import '../stylesheets/main.scss';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component { ...pageProps } />
}

export default MyApp;