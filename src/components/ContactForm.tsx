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
  const [state, setState] = useState({ name: "", email: "", phone: "", service: services[0], message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/kontakt.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      const data = await res.json().catch(() => ({ ok: false, error: "Ungültige Antwort vom Server." }));
      if (!res.ok || !data.ok) {
        setErrorMsg(data.error || "Versand fehlgeschlagen. Bitte versuchen Sie es später erneut.");
        setStatus("error");
        return;
      }
      setStatus("success");
      setState({ name: "", email: "", phone: "", service: services[0], message: "", website: "" });
    } catch {
      setErrorMsg("Verbindungsfehler. Bitte versuchen Sie es später erneut.");
      setStatus("error");
    }
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
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden value={state.website} onChange={(e) => setState({ ...state, website: e.target.value })} />
      <p className="font-serif text-xs text-muted-foreground">
        Mit dem Absenden akzeptieren Sie unsere <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a>. Ihre Anfrage wird an office@vollmer-objektmoebel.com übermittelt.
      </p>
      <button type="submit" disabled={status === "sending"} className="bg-primary text-primary-foreground px-8 py-3 font-display text-sm uppercase tracking-wide hover:opacity-90 disabled:opacity-60">
        {status === "sending" ? "Wird gesendet…" : "Anfrage senden"}
      </button>
      {status === "success" && (
        <p className="font-serif text-sm text-primary">Vielen Dank! Ihre Anfrage wurde versendet — wir melden uns zeitnah zurück.</p>
      )}
      {status === "error" && (
        <p className="font-serif text-sm text-destructive">{errorMsg}</p>
      )}
    </form>
  );
};

export default ContactForm;