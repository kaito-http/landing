import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/main.css";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Kaito</title>
			</Head>

			<Component {...pageProps} />
		</>
	);
}
