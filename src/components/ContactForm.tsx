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

const RECIPIENT = "office@vollmer-objektmoebel.com";

const ContactForm = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Anfrage: ${state.service} – ${state.name}`;
    const body = [
      `Name: ${state.name}`,
      `E-Mail: ${state.email}`,
      `Telefon: ${state.phone}`,
      `Leistung: ${state.service}`,
      "",
      "Nachricht:",
      state.message,
    ].join("\n");
    const href = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  };

  const input =
    "w-full border border-border bg-background px-4 py-3 font-serif text-foreground focus:outline-none focus:border-primary";

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
      <p className="font-serif text-xs text-muted-foreground">
        Beim Absenden öffnet sich Ihr E-Mail-Programm mit einer vorbereiteten Nachricht an {RECIPIENT}. Alternativ erreichen Sie uns telefonisch unter <a href="tel:+491788576150" className="text-primary hover:underline">0178 8576150</a>.
      </p>
      <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 font-display text-sm uppercase tracking-wide hover:opacity-90">
        E-Mail-Programm öffnen
      </button>
    </form>
  );
};

export default ContactForm;