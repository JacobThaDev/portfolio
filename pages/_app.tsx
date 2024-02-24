import "@/public/css/globals.css";
import "@/public/css/main.css";

import React from "react";

export default function App({ Component, pageProps: { session, ...pageProps }, }) {
	
	return (
		<>
			<Component {...pageProps} />
		</>
	);
	
}