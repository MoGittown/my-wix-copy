import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "vollmer-cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      // kleine Verzögerung damit es nach Pageload erscheint
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const handleChoice = (value: "accepted" | "declined") => {
    localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie-Hinweis"
      className="fixed bottom-0 left-0 right-0 z-[100] bg-background/95 backdrop-blur-sm border-t border-border shadow-lg"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-4 md:py-5 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
        <p className="font-serif text-sm md:text-base text-foreground leading-relaxed flex-1">
          Diese Website verwendet ausschließlich technisch notwendige Cookies, um die grundlegenden Funktionen
          bereitzustellen. Weitere Informationen finden Sie in unserer{" "}
          <Link to="/datenschutz" className="text-primary hover:underline">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex gap-3 w-full md:w-auto shrink-0">
          <button
            onClick={() => handleChoice("declined")}
            className="flex-1 md:flex-none font-display text-xs sm:text-sm uppercase tracking-wide px-4 sm:px-5 py-2.5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={() => handleChoice("accepted")}
            className="flex-1 md:flex-none font-display text-xs sm:text-sm uppercase tracking-wide px-4 sm:px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
