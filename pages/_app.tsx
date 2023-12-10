// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import '../stylesheets/main.scss';
import Layout from '../layout';

export default function App({ Component, pageProps }: AppProps) {
    return <Layout>
        <Component { ...pageProps } />
    </Layout>
}
