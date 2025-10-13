"use client";

import { useEffect } from "react";
import { initFirebase } from "@/lib/firebase";
import { initClarity } from "@/lib/clarity";

interface AnalyticsProviderProps {
  readonly children: React.ReactNode;
}

export default function AnalyticsProvider({
  children,
}: AnalyticsProviderProps) {
  useEffect(() => {
    // Initialize Firebase Analytics
    initFirebase();

    // Initialize Microsoft Clarity
    initClarity();
  }, []);

  return <>{children}</>;
}
