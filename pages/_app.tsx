import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Parse from 'parse';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'g1Je53l3sHXp1LLauACcBvKGlDTJjztd4rKefQ1T';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'JmFvBpEom4rRwV3jKvS0LcnLbADzM4jqG24PdRce';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
