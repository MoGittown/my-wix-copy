import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="bg-footer text-footer-foreground py-10 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 font-display text-sm">
      <p className="opacity-90">© {new Date().getFullYear()} Vollmer Objektmöbel. Alle Rechte vorbehalten.</p>
      <div className="flex gap-6">
        <Link to="/impressum" className="hover:text-primary hover:underline">Impressum</Link>
        <Link to="/datenschutz" className="hover:text-primary hover:underline">Datenschutz</Link>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
