import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useAnalytics(): void {
  const location = useLocation();

  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag("config", "G-RWNSXTEJN5", {
        page_path: location.pathname,
        page_location: window.location.href,
      });
    }
  }, [location]);
}