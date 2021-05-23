import { AppProps } from "next/app";
import "../styles/main.css";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
