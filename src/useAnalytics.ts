import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useAnalytics(): void {
  const location = useLocation();

  useEffect(() => {
    if ((window as any).gtag) {
      setTimeout(() => {
        (window as any).gtag("event", "page_view", {
          page_path: location.pathname,
          page_location: window.location.href,
          page_title: document.title,
        });
      }, 100);
    }
  }, [location.pathname]);
}