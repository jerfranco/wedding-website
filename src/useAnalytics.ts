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

    // 👇 THIS is what fixes your title problem
    const pathToTitle: Record<string, string> = {
      "/": "Home | Janelle & Jeremiah",
      "/rsvp": "RSVP | Janelle & Jeremiah",
      "/registry": "Registry | Janelle & Jeremiah",
      "/story": "Our Story | Janelle & Jeremiah",
      "/faq": "FAQ | Janelle & Jeremiah",
      "/sealing": "Sealing | Janelle & Jeremiah",
      "/photos": "Photos | Janelle & Jeremiah",
    };

    document.title = pathToTitle[location.pathname] || "Janelle & Jeremiah";
  }, [location]);
}