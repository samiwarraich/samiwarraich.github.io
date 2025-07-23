import { useEffect } from "react";
import { analytics } from "../utils/firebase";
import { initializeClarity } from "../utils/clarity";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/argon-design-system-react.css";
import "../styles/styles.css";
import "../styles/vendor/font-awesome/css/font-awesome.min.css";
import "../styles/vendor/nucleo/css/nucleo.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics;
    // Initialize Clarity analytics
    initializeClarity();
  }, []);
  
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
