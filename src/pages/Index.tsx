import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import projektEichenschrank from "@/assets/projekt-eichenschrank.jpg";
import projektBadmoebel from "@/assets/projekt-badmoebel.jpg";
import projektSideboardDetail from "@/assets/projekt-sideboard-detail.jpg";
import projektSideboardSchublade from "@/assets/projekt-sideboard-schublade.jpg";
import projektSideboardGrau from "@/assets/projekt-sideboard-grau.jpg";
import projektSchubladeEiche from "@/assets/projekt-schublade-eiche.jpg";
import projektBadJuergen from "@/assets/projekt-bad-juergen.jpg";
import projektBadJuergen2 from "@/assets/projekt-bad-juergen-2.jpg";
import projektKuecheNussbaum from "@/assets/projekt-kueche-nussbaum.jpg";
import SiteFooter from "@/components/SiteFooter";

const heroSlides = [
  {
    image: "https://static.wixstatic.com/media/81b6c4_1dd3319a4b8c4b7da23f1f5aa0e1f05e~mv2_d_3872_2581_s_4_2.jpg/v1/fill/w_1920,h_937,al_t,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/81b6c4_1dd3319a4b8c4b7da23f1f5aa0e1f05e~mv2_d_3872_2581_s_4_2.jpg",
    lines: ["Freiraum für Kreativität entsteht", "mit jedem neuen Raum", "ob Küchen, Praxis oder Büro"],
  },
];

const wixImg = (file: string) =>
  `https://static.wixstatic.com/media/${file}/v1/fill/w_1400,h_800,al_c,q_90,enc_avif,quality_auto/${file}`;

const projectGallery = [
  { src: projektEichenschrank, caption: "Einbauschrank in Eiche – maßgefertigt mit Schublade und Kleiderlift" },
  { src: projektBadmoebel, caption: "Badmöbel mit Doppelwaschtisch und Hochschrank in Eiche-Optik" },
  { src: projektBadJuergen, caption: "Badezimmer mit Doppelwaschtisch in Eiche-Optik – maßgefertigt" },
  { src: projektBadJuergen2, caption: "Hochschrank in Eiche-Optik mit Schubladen – passend zum Waschtisch" },
  { src: projektKuecheNussbaum, caption: "Küche in Nussbaum mit Naturstein-Arbeitsplatte und Kochinsel" },
  { src: projektSideboardDetail, caption: "Sideboard in Grau matt mit Eiche-Schubladen – Detailansicht" },
  { src: projektSideboardSchublade, caption: "Sideboard mit massiver Eiche-Schublade und filigraner Front" },
  { src: projektSideboardGrau, caption: "Sideboard in Grau matt auf schlanken Metallfüßen" },
  { src: projektSchubladeEiche, caption: "Massive Eiche-Schublade mit traditioneller Zinkenverbindung" },
];

const portfolioItems = [
  {
    image: "https://static.wixstatic.com/media/81b6c4_a39ec49f754b4e87871417e45a09abf3~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_570,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/81b6c4_a39ec49f754b4e87871417e45a09abf3~mv2_d_5760_3840_s_4_2.jpeg",
    title: "Objektmöbel",
    items: ["Singlebüros", "Coworking Areas", "Micro-Apartments", "Co-Living", "Empfangsbereiche"],
  },
  {
    image: "https://static.wixstatic.com/media/81b6c4_19e898634e5d4d6e998c6ef5bdc52841~mv2_d_3477_2332_s_2.jpeg/v1/fill/w_570,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/81b6c4_19e898634e5d4d6e998c6ef5bdc52841~mv2_d_3477_2332_s_2.jpeg",
    title: "Praxiseinrichtung",
    items: ["Empfangsbereiche", "Wartezonen", "Behandlungsräume"],
  },
  {
    image: "https://static.wixstatic.com/media/81b6c4_46a9aebeb77d41c0b2871d3465386966~mv2_d_3500_2625_s_4_2.jpeg/v1/fill/w_571,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/81b6c4_46a9aebeb77d41c0b2871d3465386966~mv2_d_3500_2625_s_4_2.jpeg",
    title: "Küchenstudio",
    items: ["Objektküchen", "Teeküchen", "Coworking", "Privathaushalte", "lang lebige Stahlküchen"],
  },
  {
    image: "https://static.wixstatic.com/media/81b6c4_f6d1c59b161d4864abf8d1cbf3735b70~mv2_d_4500_3000_s_4_2.jpeg/v1/fill/w_570,h_540,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/81b6c4_f6d1c59b161d4864abf8d1cbf3735b70~mv2_d_4500_3000_s_4_2.jpeg",
    title: "Projektbegleitung",
    items: ["Beratung", "Planung", "Umsetzung", "Termin- & Kostenkontrolle"],
  },
];

const testimonials = [
  {
    name: "Rüdiger Geist",
    role: "privat",
    text: "Wir haben von Vollmer Objektmöbel unsere Küche aufwerten lassen. Planung, Durchführung und auch die Kosten, alles zu unserer absoluten Zufriedenheit! Angenehme und kompetente Projektdurchführung. Eine volle Empfehlung!",
  },
  {
    name: "Nondas Kalpakidis",
    role: "Projektmanager",
    text: "Während meiner Tätigkeit als Projektmanager für den weltweit größten Business Center Anbieter Regus, haben wir gemeinsam mit Herrn Vollmer die Lounge eingerichtet. Sowohl die Kommunikation wie auch die Ausführung und Qualität seiner Arbeit waren auf Top Niveau. Ich freue mich bereits auf kommende Projekte. Wir haben eine Offene Küche mit Sitzmöglichkeit, Copy-points, Meeting booths (doppelte Sitznische), Designer Tische und weiter hochwertige Möbel implementiert",
  },
  {
    name: "Christian O.",
    role: "privat",
    text: "Wir haben vom Herrn Vollmer und seinem Team unsere neue Küche einrichten lassen. Vom ersten Schritt an wurden unsere Designvorgaben und Ideen mit viel Sinn fürs Detail und einer kosteneffizienten Planung perfekt in eine wunderschöne Küche umgesetzt. Die Kommunikation war immer sehr angenehm und unkompliziert. Seine Arbeitsweise ist strukturiert, präzise und sauber. Es gibt keine Ecke, die nicht sauber verarbeitet ist. Selbst nicht verschuldete, unvorhergesehene Probleme wurden unkompliziert und schnell gelöst. Eine absolute Empfehlung! Wir freuen uns schon auf die nächsten Projekte.",
  },
  {
    name: "Lu Kn",
    role: "privat",
    text: "Wir haben uns von Herrn Vollmer nach unseren Vorstellungen und Ideen eine Küche planen und aufbauen lassen. Dies ist jetzt meine dritte geplante Küche und mit Abstand vom Ergebnis her die Schönste. Herr Vollmer hat unsere Ideen aufgenommen, aber auch selber Impulse gegeben, wie z.B. ein Naturbrett als Tresen, passt super zum Rest der Küche. Ein Landschaftsmotiv hinter Glas als Spritzschutz am Herd macht die Küche direkt persönlicher. Die ganze Abwicklung, Terminabsprachen und sonstige Kommunikation lief prima. Handwerklich wurde sehr sauber gearbeitet. Erlebt man leider nicht mehr so oft. Auch die Reklamation eines Transportschäden und Austausch des beschädigten Unterschrank war schnell und zügig erledigt. Gerne wieder, vielen Dank!",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);
  const [currentPartner, setCurrentPartner] = useState(0);

  const partners = [
    { name: "Nobilia", file: "81b6c4_27dd97ac85394ead87eea5e95abd3a3b~mv2.jpg", crop: "x_0,y_0,w_234,h_61" },
    { name: "Häcker", file: "81b6c4_dc784e7a8ada4debbe68f46e1ea2c2d6~mv2.jpg", crop: "x_0,y_0,w_220,h_80" },
    { name: "Naber", file: "81b6c4_da4bff6f67124dedaea97564f4c45cc2~mv2.jpg", crop: "x_0,y_2,w_200,h_86" },
    { name: "Siemens", file: "81b6c4_fd19d21d6cd14559bd179107b610eda8~mv2.jpg", crop: "x_0,y_3,w_214,h_86" },
    { name: "Miele", file: "81b6c4_85dd458999924388bfb78dac3cfdcb7a~mv2.jpg", crop: "x_0,y_0,w_195,h_73" },
    { name: "Neff", file: "81b6c4_38a756a0e4574fb3b06d30229c86ee73~mv2.jpg", crop: "x_0,y_1,w_216,h_86" },
    { name: "Amica", file: "81b6c4_8589b1fe154c48fcb5b38b9ac624567c~mv2.jpg", crop: "x_0,y_7,w_174,h_86" },
    { name: "Berbel", file: "81b6c4_69c05082ee8b4d35b8eda4fb685416a3~mv2.jpg", crop: "x_6,y_0,w_264,h_82" },
    { name: "Blanco", file: "81b6c4_105b35c5ed5f4dae95fa0a831e4ced62~mv2.jpg", crop: "x_0,y_0,w_142,h_62" },
    { name: "Horatec", file: "81b6c4_f1314268081444f9a8af92b988dca75a~mv2.jpg", crop: "x_0,y_0,w_160,h_68" },
    { name: "Stengel", file: "81b6c4_232be34fa32d44a6bbb452aeab015b4d~mv2.jpg", crop: "x_0,y_0,w_205,h_55" },
    { name: "Priess", file: "81b6c4_f8565afcc4b84abba67dce187a846844~mv2.jpg", crop: "x_0,y_0,w_213,h_62" },
    { name: "Quooker", file: "81b6c4_146afba9c83141bea2b8a6f7e58d2c1b~mv2.jpg", crop: "x_0,y_0,w_197,h_73" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectGallery.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPartner((prev) => (prev + 1) % partners.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero Slider */}
      <section id="home" className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.image} alt="Vollmer Objektmöbel" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-6 max-w-5xl">
                {slide.lines.map((line, j) => (
                  <h2 key={j} className="font-display text-3xl md:text-5xl lg:text-6xl text-white font-normal leading-tight drop-shadow-lg">
                    {line}
                  </h2>
                ))}
              </div>
            </div>
          </div>
        ))}
        {heroSlides.length > 1 && (
          <>
            <button onClick={() => setCurrentSlide((p) => (p - 1 + heroSlides.length) % heroSlides.length)} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white" aria-label="Vorheriger Slide">
              <ChevronLeft size={48} />
            </button>
            <button onClick={() => setCurrentSlide((p) => (p + 1) % heroSlides.length)} className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white" aria-label="Nächster Slide">
              <ChevronRight size={48} />
            </button>
          </>
        )}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3 h-3 rounded-full transition-colors ${i === currentSlide ? "bg-primary" : "bg-white/50"}`} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground">
            Wir bieten hochwertige kundenspezifische Objektmöbel mit einem hervorragenden Preis-Leistungs-Verhältnis,
          </p>
          <p className="font-serif text-xl md:text-2xl leading-relaxed text-foreground mb-8">
            individuell in Form, Farbe und Material.
          </p>
          <h3 className="font-display text-base md:text-lg text-primary tracking-wide mb-8">
            Innenausbau · Exklusive Küchen · Praxisräume · Büros · Co-working-Spaces · Co-Living · Micro-Apartments
          </h3>
          <p className="font-serif text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Die Basis für unsere Arbeit ist jahrzehntelange Berufserfahrung. Wir arbeiten ökonomisch, verantwortlich, effizient, präzise, zuverlässig, termintreu und persönlich.
          </p>
          <p className="font-serif text-muted-foreground leading-relaxed mt-4">Unser Ziel ist die vollständige Kundenzufriedenheit.</p>
          <p className="font-serif text-muted-foreground leading-relaxed mt-4">Wir beraten Sie gerne in einem persönlichem Gespräch.</p>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.title} className="group relative overflow-hidden aspect-square">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="font-display text-2xl md:text-3xl text-white mb-4">{item.title}</h3>
                  <ul className="space-y-1 font-serif">
                    {item.items.map((li) => (
                      <li key={li} className="text-white/90 text-base md:text-lg">• {li}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neuste Projekte Slider */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10">Hier finden Sie unsere neusten Projekte.</h2>
          <div className="relative aspect-[16/9] overflow-hidden bg-secondary">
            {projectGallery.map((slide, i) => (
              <img
                key={i}
                src={slide.src}
                alt={slide.caption}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentProject ? "opacity-100" : "opacity-0"}`}
                loading="lazy"
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent pt-12 pb-5 px-6 text-center">
              <p className="font-display text-sm md:text-base text-white">{projectGallery[currentProject]?.caption}</p>
            </div>
            <button onClick={() => setCurrentProject((p) => (p - 1 + projectGallery.length) % projectGallery.length)} className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2" aria-label="Vorheriges Projekt">
              <ChevronLeft size={28} />
            </button>
            <button onClick={() => setCurrentProject((p) => (p + 1) % projectGallery.length)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-2" aria-label="Nächstes Projekt">
              <ChevronRight size={28} />
            </button>
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
              {projectGallery.map((_, i) => (
                <button key={i} onClick={() => setCurrentProject(i)} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentProject ? "bg-primary" : "bg-white/60"}`} aria-label={`Projekt ${i + 1}`} />
              ))}
            </div>
          </div>
          <a href="/referenzen" className="inline-block mt-8 font-display text-sm uppercase tracking-wider text-foreground hover:text-primary transition-colors border-b border-foreground hover:border-primary pb-1">
            Alle Referenzen ansehen
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section id="clients" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">Kundenstimmen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border p-8 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center font-display text-xl text-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display text-foreground">{t.name}</h4>
                    <p className="font-serif text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
                <p className="font-serif text-muted-foreground leading-relaxed italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 px-6 bg-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10">Einige unserer Partner</h2>
          <div className="relative h-32 flex items-center justify-center overflow-hidden">
            {partners.map((p, i) => (
              <div
                key={p.name}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${i === currentPartner ? "opacity-100" : "opacity-0"}`}
              >
                <img
                  src={`https://static.wixstatic.com/media/${p.file}/v1/crop/${p.crop},q_85,enc_avif,quality_auto/${p.file}`}
                  alt={p.name}
                  className="max-h-24 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
            <button
              onClick={() => setCurrentPartner((p) => (p - 1 + partners.length) % partners.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-foreground p-2"
              aria-label="Vorheriger Partner"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={() => setCurrentPartner((p) => (p + 1) % partners.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-foreground/70 hover:text-foreground p-2"
              aria-label="Nächster Partner"
            >
              <ChevronRight size={28} />
            </button>
          </div>
          <p className="font-serif text-sm text-muted-foreground mt-6">{partners[currentPartner].name}</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-center mb-16">Kontakt</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 font-serif">
              <div>
                <h3 className="font-display text-2xl text-foreground mb-2">Vollmer Objektmöbel</h3>
                <p className="text-muted-foreground">Maurice Vollmer</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div className="text-muted-foreground">
                  <p>Schusters Garten 4</p>
                  <p>50374 Erftstadt</p>
                  <p>Deutschland</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="text-muted-foreground">
                  <p>+49 2235-9765401</p>
                  <p>01573-8753464</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:office@vollmer-objektmoebel.com" className="text-primary hover:underline">
                  office@vollmer-objektmoebel.com
                </a>
              </div>
              <p className="text-sm text-muted-foreground">USt-IdNr.: DE123513601</p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://static.wixstatic.com/media/81b6c4_12ffe13a374840cd9c583630babbb08d~mv2_d_3480_3108_s_4_2.jpg/v1/crop/x_0,y_441,w_3480,h_2226/fill/w_469,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Maurice%20Vollmer-1%20(3).jpg"
                alt="Maurice Vollmer"
                className="shadow-lg max-w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Index;
