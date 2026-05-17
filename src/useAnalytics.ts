import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PAGE_TITLES: Record<string, string> = {
  "/": "Home | Janelle & Jeremiah",
  "/rsvp": "RSVP | Janelle & Jeremiah",
  "/story": "Our Story | Janelle & Jeremiah",
  "/registry": "Registry | Janelle & Jeremiah",
  "/faq": "FAQ | Janelle & Jeremiah",
  "/sealing": "Sealing | Janelle & Jeremiah",
  "/photos": "Photos | Janelle & Jeremiah",
};

export function useAnalytics(): void {
  const location = useLocation();

  useEffect(() => {
    if ((window as any).gtag) {
      (window as any).gtag("event", "page_view", {
        page_path: location.pathname,
        page_location: window.location.href,
        page_title: PAGE_TITLES[location.pathname] ?? "Janelle & Jeremiah",
      });
    }
  }, [location.pathname]);
}