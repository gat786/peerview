import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVERURL}
      appId={process.env.NEXT_PUBLIC_MORALIS_APPID}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
