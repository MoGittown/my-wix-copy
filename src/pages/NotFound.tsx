import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="404 — Seite nicht gefunden | Vollmer Objektmöbel"
        description="Die gesuchte Seite wurde nicht gefunden. Zurück zur Startseite oder direkt zum Küchenstudio Erftstadt."
        path="/404"
        noindex
      />
      <SiteHeader />
      <main className="flex-1 pt-20 flex items-center justify-center">
        <div className="text-center px-6 py-12 max-w-2xl">
          <h1 className="font-display text-6xl md:text-8xl text-foreground mb-4">404</h1>
          <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-8">
            Die gesuchte Seite wurde nicht gefunden.
          </p>
          <p className="font-serif text-muted-foreground mb-10">
            Die Seite <span className="text-foreground font-mono">{location.pathname}</span> existiert nicht oder wurde verschoben.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="inline-block px-6 py-3 bg-primary text-primary-foreground font-display uppercase tracking-wide hover:bg-primary/90 transition-colors">
              Zur Startseite
            </Link>
            <Link to="/kuechenstudio-erftstadt" className="inline-block px-6 py-3 border border-border font-display uppercase tracking-wide hover:bg-muted transition-colors">
              Zum Küchenstudio
            </Link>
          </div>
          <div className="mt-10 pt-10 border-t border-border">
            <p className="font-serif text-sm text-muted-foreground">
              Oder rufen Sie uns direkt an: <a href="tel:+491788576150" className="text-primary hover:underline">0178 8576150</a>
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default NotFound;
