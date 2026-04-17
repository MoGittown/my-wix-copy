import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type HeroSlide = {
  image: string;
  lines: string[];
};

type Position = {
  xPct: number;
  yPct: number;
  fontScale: number;
};

// Feste Positionen pro Slide
const slidePositions: Record<number, Position> = {
  0: { xPct: 32, yPct: 28, fontScale: 0.85 },
  1: { xPct: 50, yPct: 17, fontScale: 0.85 },
  2: { xPct: 50, yPct: 18, fontScale: 0.85 },
  3: { xPct: 50, yPct: 18, fontScale: 0.85 },
  4: { xPct: 50, yPct: 18, fontScale: 0.85 },
};

const defaultPosition: Position = { xPct: 50, yPct: 50, fontScale: 1 };

const HeroSlider = ({ slides, intervalMs = 6000 }: { slides: HeroSlide[]; intervalMs?: number }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), intervalMs);
    return () => clearInterval(t);
  }, [slides.length, intervalMs]);

  const getPos = (i: number): Position => slidePositions[i] ?? defaultPosition;

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, i) => {
        const p = getPos(i);
        const isActive = i === currentSlide;
        // Performance: nur aktiver Slide + direkter Nachbar werden überhaupt im DOM/geladen
        const isNeighbor =
          i === (currentSlide + 1) % slides.length ||
          i === (currentSlide - 1 + slides.length) % slides.length;
        const shouldRender = isActive || isNeighbor || i === 0;
        if (!shouldRender) return null;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={slide.image}
              alt="Vollmer Objektmöbel"
              className="w-full h-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
              {...(i === 0 ? { fetchPriority: "high" as const } : {})}
            />
            <div
              className="absolute w-[90%] max-w-5xl px-2 sm:px-6 text-center"
              style={{
                left: `${p.xPct}%`,
                top: `${p.yPct}%`,
                transform: "translate(-50%, -50%)",
                fontSize: `${p.fontScale}em`,
              }}
            >
              {slide.lines.map((line, j) => (
                <h2
                  key={j}
                  className="font-display text-xl sm:text-3xl md:text-5xl lg:text-6xl text-black font-normal leading-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]"
                >
                  {line}
                </h2>
              ))}
            </div>
          </div>
        );
      })}

      {slides.length > 1 && (
        <>
          <button
            onClick={() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-1"
            aria-label="Vorheriger Slide"
          >
            <ChevronLeft className="w-8 h-8 sm:w-12 sm:h-12" />
          </button>
          <button
            onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-1"
            aria-label="Nächster Slide"
          >
            <ChevronRight className="w-8 h-8 sm:w-12 sm:h-12" />
          </button>
        </>
      )}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-colors ${i === currentSlide ? "bg-primary" : "bg-white/50"}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
