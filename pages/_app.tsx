// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import '../stylesheets/main.scss';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
