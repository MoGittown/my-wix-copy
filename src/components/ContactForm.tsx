import { useState } from "react";

const services = [
  "Küchenplanung",
  "Praxiseinrichtung",
  "Büroeinrichtung",
  "Objektmöbel / Coworking",
  "Stahlküche",
  "Projektbegleitung",
  "Sonstiges",
];

const ContactForm = () => {
  const [state, setState] = useState({ name: "", email: "", phone: "", service: services[0], message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Anfrage: ${state.service} – ${state.name}`);
    const body = encodeURIComponent(
      `Name: ${state.name}\nE-Mail: ${state.email}\nTelefon: ${state.phone}\nLeistung: ${state.service}\n\nNachricht:\n${state.message}`
    );
    window.location.href = `mailto:office@vollmer-objektmoebel.com?subject=${subject}&body=${body}`;
  };

  const input = "w-full border border-border bg-background px-4 py-3 font-serif text-foreground focus:outline-none focus:border-primary";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input required placeholder="Name*" value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} className={input} />
        <input required type="email" placeholder="E-Mail*" value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} className={input} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input placeholder="Telefon" value={state.phone} onChange={(e) => setState({ ...state, phone: e.target.value })} className={input} />
        <select value={state.service} onChange={(e) => setState({ ...state, service: e.target.value })} className={input}>
          {services.map((s) => <option key={s}>{s}</option>)}
        </select>
      </div>
      <textarea required rows={6} placeholder="Ihre Nachricht*" value={state.message} onChange={(e) => setState({ ...state, message: e.target.value })} className={input} />
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      <p className="font-serif text-xs text-muted-foreground">
        Mit dem Absenden akzeptieren Sie unsere <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a>. Ihre Anfrage wird per E-Mail an office@vollmer-objektmoebel.com übermittelt.
      </p>
      <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 font-display text-sm uppercase tracking-wide hover:opacity-90">
        Anfrage senden
      </button>
    </form>
  );
};

export default ContactForm;