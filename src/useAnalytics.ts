import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_ID = "G-RWNSXTEJN5";

export function useAnalytics(): void {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", GA_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);
}