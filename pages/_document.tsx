import { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="min-h-screen bg-background antialiased overflow-x-hidden">
                <Main />
                <NextScript />
                <Analytics />
            </body>
        </Html>
    )
}
