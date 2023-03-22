import { useEffect } from "react";
import { app, analytics } from "../utils/firebase";
import { getAnalytics, isSupported } from "firebase/analytics";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    isSupported().then((yes) => (yes ? getAnalytics(app) : null));
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
