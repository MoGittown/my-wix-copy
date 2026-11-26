import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SEO from "@/components/SEO";
import { references } from "@/data/references";

// Wix-CDN: liefert moderne Formate (WebP/AVIF) automatisch via enc_auto
const wixThumb = (file: string, w = 600) =>
  `https://static.wixstatic.com/media/${file}/v1/fill/w_${w},h_${Math.round((w * 3) / 4)},q_80,enc_auto/${file}`;
const wixFull = (file: string) =>
  `https://static.wixstatic.com/media/${file}/v1/fill/w_1600,h_1200,q_85,enc_auto/${file}`;
const wixSrcSet = (file: string) =>
  [400, 600, 900, 1200].map((w) => `${wixThumb(file, w)} ${w}w`).join(", ");

const Referenzen = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Referenzen – Vollmer Objektmöbel | Küchen, Büro, Klinik & Coworking"
        description="Referenzprojekte von Vollmer Objektmöbel: Einbauküchen, Büro- und Teeküchen, Coworking-Objektmöbel und Krankenhausausstattung — geplant und montiert in Erftstadt, Köln und Bonn."
        path="/referenzen"
      />
      <SiteHeader />
      <main className="flex-1 pt-20">
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 text-center">Referenzen</h1>
          <p className="font-serif text-xl text-muted-foreground text-center mb-12">
            Aus dem Bereich Küchen, Küchenstudio, Küchenplanung und Objektmöbel
          </p>

          <div className="space-y-20">
            {references.map((project) => (
              <article key={project.slug} id={project.slug}>
                <header className="mb-6">
                  <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
                    <Link
                      to={`/referenzen/${project.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {project.galleryTitle}
                    </Link>
                  </h2>
                  <div className="font-serif text-muted-foreground leading-relaxed space-y-3 max-w-3xl">
                    {project.description.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  <p className="mt-4">
                    <Link
                      to={`/referenzen/${project.slug}`}
                      className="font-display text-xs uppercase tracking-wider text-foreground hover:text-primary transition-colors border-b border-foreground hover:border-primary pb-0.5"
                    >
                      Projektdetails ansehen
                    </Link>
                  </p>
                </header>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.map((image, i) => (
                    <figure key={image.file} className="m-0">
                      <a
                        href={wixFull(image.file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block overflow-hidden shadow-md aspect-[4/3] bg-secondary"
                      >
                        <img
                          src={wixThumb(image.file, 600)}
                          srcSet={wixSrcSet(image.file)}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </a>
                      <figcaption className="sr-only">
                        {image.alt}
                        {i === 0 ? ` — Referenzprojekt ${project.title}` : ""}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Referenzen;
