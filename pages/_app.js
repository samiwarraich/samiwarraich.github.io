import { useEffect } from "react";
import { analytics } from "../utils/firebase";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";

function MyApp({ Component, pageProps }) {
  const MS_CLARITY = process.env.NEXT_PUBLIC_MS_CLARITY;
  useEffect(() => {
    if (analytics) {
      analytics.catch(console.error);
    }
  }, []);
  return (
    <>
      <Component {...pageProps} />
      {/* <!-- Clarity tracking code for https://samiwarraich.github.io/ --> */}
      {typeof window !== "undefined" && MS_CLARITY && (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${MS_CLARITY}");`}
        </Script>
      )}
    </>
  );
}

export default MyApp;
