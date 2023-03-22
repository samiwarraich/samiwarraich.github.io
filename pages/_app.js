import { Analytics } from "@vercel/analytics/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";

function MyApp({ Component, pageProps }) {
  const GTM_TRACKING_ID = process.env.NEXT_PUBLIC_GTM_TRACKING_ID;
  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_TRACKING_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
