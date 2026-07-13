import { Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const CtaBox = ({ title = "Jetzt unverbindlich beraten lassen" }: { title?: string }) => (
  <div className="bg-secondary p-6 md:p-8 my-10 border-l-4 border-primary">
    <h3 className="font-display text-xl md:text-2xl text-foreground mb-4">{title}</h3>
    <p className="font-serif text-muted-foreground mb-5">
      Vor-Ort-Aufmaß, 3D-Planung und ein transparentes Angebot – für Kunden in Erftstadt, Köln, Bonn und Brühl.
    </p>
    <div className="flex flex-col sm:flex-row gap-3">
      <a href="tel:+491788576150" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 font-display text-sm uppercase tracking-wide hover:opacity-90">
        <Phone className="w-4 h-4" /> 0178 8576150
      </a>
      <Link to="/kontakt" className="inline-flex items-center gap-2 border border-foreground px-5 py-3 font-display text-sm uppercase tracking-wide hover:bg-foreground hover:text-background transition-colors">
        <Mail className="w-4 h-4" /> Kontaktformular
      </Link>
    </div>
  </div>
);

export default CtaBox;