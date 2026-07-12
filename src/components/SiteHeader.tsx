import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "HOME", to: "/" },
  { label: "Küchenstudio", to: "/kuechenstudio-erftstadt" },
  { label: "Objektmöbel", to: "/objektmoebel" },
  { label: "Unternehmen", to: "/unternehmen" },
  { label: "Referenzen", to: "/referenzen" },
  { label: "FAQ", to: "/faq" },
  { label: "Kontakt", to: "/kontakt" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (to: string) => {
    setOpen(false);
    if (to === "/") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
        window.scrollTo({ top: 0 });
      }
      return;
    }
    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      const targetPath = path || "/";
      if (location.pathname === targetPath) {
        document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" });
      } else {
        // Erst navigieren, dann nach dem Mount zum Anker scrollen
        navigate(targetPath, { state: { scrollTo: hash } });
      }
    } else {
      navigate(to);
    }
  };

  const isActive = (to: string) => {
    if (to === "/") return location.pathname === "/" && !location.hash;
    if (to.startsWith("/#")) return false;
    return location.pathname === to;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between h-16 md:h-20">
        <button
          onClick={() => handleClick("/")}
          className="font-display text-lg sm:text-xl md:text-3xl text-foreground tracking-tight truncate text-left"
        >
          Vollmer Objektmöbel
        </button>
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleClick(item.to)}
              className={`font-display text-[13px] uppercase tracking-wide transition-colors ${
                isActive(item.to)
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
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
            <button
              key={item.label}
              onClick={() => handleClick(item.to)}
              className={`font-display text-left text-sm uppercase tracking-wide ${
                isActive(item.to) ? "text-primary" : "text-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
