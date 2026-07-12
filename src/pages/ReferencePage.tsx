import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import CtaBox from "@/components/CtaBox";
import { getReference } from "@/data/references";

const wixThumb = (file: string, w = 900) =>
  `https://static.wixstatic.com/media/${file}/v1/fill/w_${w},h_${Math.round((w * 3) / 4)},q_85,enc_auto/${file}`;

const ReferencePage = () => {
  const { slug = "" } = useParams();
  const ref = getReference(slug);
  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (!ref) return <Navigate to="/404" replace />;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title={ref.metaTitle}
        description={ref.metaDescription}
        path={`/referenzen/${ref.slug}`}
        image={wixThumb(ref.images[0], 1200)}
      />
      <SiteHeader />
      <main className="flex-1 pt-20">
        <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-6 pt-8 font-serif text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Start</Link> <span aria-hidden>›</span>{" "}
          <Link to="/referenzen" className="hover:text-primary">Referenzen</Link> <span aria-hidden>›</span>{" "}
          <span className="text-foreground">{ref.tags[0]}</span>
        </nav>

        <section className="max-w-5xl mx-auto px-6 py-10">
          <h1 className="font-display text-3xl md:text-5xl text-foreground mb-6">{ref.title}</h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {ref.tags.map((t) => (
              <span key={t} className="inline-block bg-secondary px-3 py-1 font-display text-xs uppercase tracking-wide text-foreground">{t}</span>
            ))}
          </div>

          <div className="font-serif text-foreground leading-relaxed space-y-5 mb-10">
            {ref.description.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ref.images.map((f, i) => (
              <img
                key={f}
                src={wixThumb(f, 800)}
                alt={`${ref.title} — Bild ${i + 1}`}
                className="w-full aspect-[4/3] object-cover shadow-md"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>

          <CtaBox title="Ihr Projekt gemeinsam mit uns umsetzen?" />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default ReferencePage;