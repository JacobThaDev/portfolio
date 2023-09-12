import "@/public/css/globals.css";
import "@/public/css/main.css";

import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}