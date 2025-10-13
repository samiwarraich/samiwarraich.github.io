import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAnalytics, logEvent, type Analytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

let app: FirebaseApp;
let analytics: Analytics;

export const initFirebase = () => {
  if (typeof window !== "undefined" && !getApps().length) {
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
  }
};

export const logAnalyticsEvent = (eventName: string, eventParams?: object) => {
  if (typeof window !== "undefined" && analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};

export { analytics };
