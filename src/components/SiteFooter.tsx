import { Link } from "react-router-dom";

const services = [
  { label: "Küchenstudio Erftstadt", to: "/kuechenstudio-erftstadt" },
  { label: "Praxiseinrichtung", to: "/praxiseinrichtung" },
  { label: "Büroeinrichtung", to: "/bueroeinrichtung" },
  { label: "Objektmöbel", to: "/objektmoebel" },
  { label: "Stahlküchen", to: "/stahlkuechen" },
  { label: "Projektbegleitung", to: "/projektbegleitung" },
];

const SiteFooter = () => (
  <footer className="bg-footer text-footer-foreground py-12 px-6">
    <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4 font-display text-sm">
      <div className="space-y-2 font-serif">
        <p className="font-display text-base mb-2">Vollmer Objektmöbel</p>
        <p>Schusters Garten 4</p>
        <p>50374 Erftstadt</p>
        <p><a href="tel:+4922359765401" className="hover:text-primary">02235 9765401</a></p>
        <p className="text-xs opacity-80"><a href="tel:+491788576150" className="hover:text-primary">Mobil: 0178 8576150</a></p>
        <p><a href="mailto:office@vollmer-objektmoebel.com" className="hover:text-primary break-all">office@vollmer-objektmoebel.com</a></p>
      </div>
      <div>
        <p className="mb-3 opacity-90">Leistungen</p>
        <ul className="space-y-1 font-serif">
          {services.map((s) => (
            <li key={s.to}><Link to={s.to} className="hover:text-primary">{s.label}</Link></li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-3 opacity-90">Unternehmen</p>
        <ul className="space-y-1 font-serif">
          <li><Link to="/unternehmen" className="hover:text-primary">Über uns</Link></li>
          <li><Link to="/referenzen" className="hover:text-primary">Referenzen</Link></li>
          <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
          <li><Link to="/kontakt" className="hover:text-primary">Kontakt</Link></li>
        </ul>
      </div>
      <div>
        <p className="mb-3 opacity-90">Rechtliches</p>
        <ul className="space-y-1 font-serif">
          <li><Link to="/impressum" className="hover:text-primary">Impressum</Link></li>
          <li><Link to="/datenschutz" className="hover:text-primary">Datenschutz</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/10 text-xs opacity-80 font-serif">
      © {new Date().getFullYear()} Vollmer Objektmöbel · Küchenstudio & Objekteinrichter in Erftstadt für Köln, Bonn, Brühl und den Rhein-Erft-Kreis.
    </div>
  </footer>
);

export default SiteFooter;
