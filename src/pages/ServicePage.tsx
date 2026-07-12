import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import CtaBox from "@/components/CtaBox";
import FaqAccordion, { faqJsonLd } from "@/components/FaqAccordion";
import { getService, withImageUrl, services } from "@/data/services";

interface Props { slug?: string }

const ServicePage = ({ slug: propSlug }: Props) => {
  const params = useParams();
  const slug = propSlug ?? params.slug ?? "";
  const service = getService(slug);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!service) return <Navigate to="/404" replace />;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.navLabel,
    description: service.description,
    provider: { "@id": "https://vollmer-objektmoebel.com/#business" },
    areaServed: ["Erftstadt", "Köln", "Bonn", "Brühl", "Rhein-Erft-Kreis"],
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: "https://vollmer-objektmoebel.com/" },
      { "@type": "ListItem", position: 2, name: service.navLabel, item: `https://vollmer-objektmoebel.com/${service.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title={service.title}
        description={service.description}
        path={`/${service.slug}`}
        image={withImageUrl(service.images[0].file)}
        jsonLd={[serviceJsonLd, breadcrumbLd, faqJsonLd(service.faqs)]}
      />
      <SiteHeader />
      <main className="flex-1 pt-20">
        <nav aria-label="Breadcrumb" className="max-w-4xl mx-auto px-6 pt-8 font-serif text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Start</Link> <span aria-hidden>›</span> <span className="text-foreground">{service.navLabel}</span>
        </nav>

        <section className="max-w-4xl mx-auto px-6 py-10">
          <h1 className="font-display text-3xl md:text-5xl text-foreground mb-6">{service.h1}</h1>
          <p className="font-serif text-lg text-muted-foreground leading-relaxed mb-8">{service.intro}</p>
          <img
            src={withImageUrl(service.images[0].file)}
            alt={service.images[0].alt}
            className="w-full shadow-md mb-10"
            loading="lazy"
            decoding="async"
          />
          <div className="font-serif text-foreground leading-relaxed space-y-5">
            {service.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <h2 className="font-display text-2xl md:text-3xl text-foreground mt-12 mb-4">Unsere Leistungen im Überblick</h2>
          <ul className="font-serif text-foreground leading-relaxed space-y-2 list-disc pl-6">
            {service.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>

          <CtaBox />

          {service.images[1] && (
            <img
              src={withImageUrl(service.images[1].file)}
              alt={service.images[1].alt}
              className="w-full shadow-md mb-10"
              loading="lazy"
              decoding="async"
            />
          )}

          <h2 className="font-display text-2xl md:text-3xl text-foreground mt-12 mb-6">Häufige Fragen</h2>
          <FaqAccordion items={service.faqs} />

          <h2 className="font-display text-2xl md:text-3xl text-foreground mt-16 mb-4">Weitere Leistungen</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {services.filter((s) => s.slug !== service.slug).map((s) => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className="font-display text-sm text-foreground hover:text-primary underline-offset-4 hover:underline">
                  → {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default ServicePage;