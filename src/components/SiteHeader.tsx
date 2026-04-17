import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "HOME", to: "/" },
  { label: "Küchen, Objekteinrichtung & Co.", to: "/#portfolio" },
  { label: "Das sagen unsere Kunden", to: "/#clients" },
  { label: "Unternehmen", to: "/unternehmen" },
  { label: "Referenzen", to: "/referenzen" },
  { label: "Kontakt", to: "/#contact" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (to: string) => {
    setOpen(false);
    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      if (location.pathname === (path || "/")) {
        document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(to);
      }
    } else {
      navigate(to);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Vollmer Objektmöbel
        </Link>
        <nav className="hidden lg:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.to)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menü">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-foreground transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-foreground transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>
      {open && (
        <nav className="lg:hidden bg-background border-t border-border px-6 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <button key={item.label} onClick={() => handleClick(item.to)} className="text-left text-sm text-muted-foreground hover:text-primary">
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
