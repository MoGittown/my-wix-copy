import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="bg-foreground text-background py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-sm opacity-80">© {new Date().getFullYear()} Vollmer Objektmöbel. Alle Rechte vorbehalten.</p>
      <div className="flex gap-6 text-sm opacity-80">
        <Link to="/impressum" className="hover:opacity-100 hover:underline">Impressum</Link>
        <Link to="/datenschutz" className="hover:opacity-100 hover:underline">Datenschutz</Link>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
