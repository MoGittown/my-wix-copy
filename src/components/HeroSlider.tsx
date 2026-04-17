import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Lock, Unlock, RotateCcw, Save } from "lucide-react";

export type HeroSlide = {
  image: string;
  lines: string[];
};

type Override = {
  // Position des Text-Containers in % der Section (0–100)
  xPct: number;
  yPct: number;
  // Skalierungsfaktor der Schrift (1 = Standard)
  fontScale: number;
};

const STORAGE_KEY = "hero-overrides-v1";
const ADMIN_KEY = "hero-admin-mode";

const defaultOverride: Override = { xPct: 50, yPct: 50, fontScale: 1 };

// Feste Defaults pro Slide (vom Admin im Browser justiert und exportiert)
const presetOverrides: Record<number, Override> = {
  0: { xPct: 32, yPct: 28, fontScale: 0.85 },
  1: { xPct: 50, yPct: 17, fontScale: 0.85 },
  2: { xPct: 50, yPct: 18, fontScale: 0.85 },
  3: { xPct: 50, yPct: 18, fontScale: 0.85 },
  4: { xPct: 50, yPct: 18, fontScale: 0.85 },
};

function loadOverrides(): Record<number, Override> {
  if (typeof window === "undefined") return { ...presetOverrides };
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return { ...presetOverrides, ...stored };
  } catch {
    return { ...presetOverrides };
  }
}

const HeroSlider = ({ slides, intervalMs = 6000 }: { slides: HeroSlide[]; intervalMs?: number }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [adminMode, setAdminMode] = useState(false);
  const [overrides, setOverrides] = useState<Record<number, Override>>({});
  const [dragging, setDragging] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Initial laden + Tastenkürzel (Strg+Shift+E) + URL ?admin=1
  useEffect(() => {
    setOverrides(loadOverrides());
    const params = new URLSearchParams(window.location.search);
    if (params.get("admin") === "1" || localStorage.getItem(ADMIN_KEY) === "1") {
      setAdminMode(true);
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && (e.key === "E" || e.key === "e")) {
        setAdminMode((v) => {
          const next = !v;
          localStorage.setItem(ADMIN_KEY, next ? "1" : "0");
          return next;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Auto-Slide nur wenn nicht im Admin-Modus
  useEffect(() => {
    if (adminMode) return;
    const t = setInterval(() => setCurrentSlide((p) => (p + 1) % slides.length), intervalMs);
    return () => clearInterval(t);
  }, [adminMode, slides.length, intervalMs]);

  const getOv = (i: number): Override => overrides[i] ?? defaultOverride;

  const updateOv = (i: number, patch: Partial<Override>) => {
    setOverrides((prev) => {
      const next = { ...prev, [i]: { ...getOv(i), ...patch } };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  // Drag-Handler
  const onPointerDown = (e: React.PointerEvent) => {
    if (!adminMode) return;
    e.preventDefault();
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!adminMode || !dragging || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width) * 100;
    const yPct = ((e.clientY - rect.top) / rect.height) * 100;
    updateOv(currentSlide, {
      xPct: Math.max(0, Math.min(100, xPct)),
      yPct: Math.max(0, Math.min(100, yPct)),
    });
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!adminMode) return;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    setDragging(false);
  };

  const resetCurrent = () => {
    setOverrides((prev) => {
      const next = { ...prev };
      delete next[currentSlide];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const exportJson = () => {
    const data = JSON.stringify(overrides, null, 2);
    navigator.clipboard?.writeText(data);
    alert("Hero-Einstellungen in Zwischenablage kopiert:\n\n" + data);
  };

  const ov = getOv(currentSlide);

  return (
    <section ref={sectionRef} id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, i) => {
        const o = getOv(i);
        const isActive = i === currentSlide;
        return (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${isActive ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.image} alt="Vollmer Objektmöbel" className="w-full h-full object-cover" />
            <div
              onPointerDown={isActive ? onPointerDown : undefined}
              onPointerMove={isActive ? onPointerMove : undefined}
              onPointerUp={isActive ? onPointerUp : undefined}
              className={`absolute max-w-5xl px-6 text-center ${
                adminMode && isActive
                  ? "ring-2 ring-primary/70 ring-offset-2 ring-offset-transparent cursor-move select-none"
                  : ""
              }`}
              style={{
                left: `${o.xPct}%`,
                top: `${o.yPct}%`,
                transform: "translate(-50%, -50%)",
                fontSize: `${o.fontScale}em`,
                touchAction: adminMode ? "none" : "auto",
              }}
            >
              {slide.lines.map((line, j) => (
                <h2
                  key={j}
                  className="font-display text-3xl md:text-5xl lg:text-6xl text-black font-normal leading-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.6)]"
                >
                  {line}
                </h2>
              ))}
            </div>
          </div>
        );
      })}

      {slides.length > 1 && !adminMode && (
        <>
          <button
            onClick={() => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            aria-label="Vorheriger Slide"
          >
            <ChevronLeft size={48} />
          </button>
          <button
            onClick={() => setCurrentSlide((p) => (p + 1) % slides.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            aria-label="Nächster Slide"
          >
            <ChevronRight size={48} />
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

      {/* Admin-Toggle (immer sichtbar, dezent) */}
      <button
        onClick={() => {
          setAdminMode((v) => {
            const next = !v;
            localStorage.setItem(ADMIN_KEY, next ? "1" : "0");
            return next;
          });
        }}
        className="absolute top-24 right-4 z-20 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
        aria-label="Admin-Modus umschalten"
        title="Admin-Modus (Strg+Shift+E)"
      >
        {adminMode ? <Unlock size={18} /> : <Lock size={18} />}
      </button>

      {/* Admin-Panel */}
      {adminMode && (
        <div className="absolute top-24 right-16 z-20 bg-black/80 text-white rounded-lg p-4 w-72 space-y-3 shadow-xl">
          <div className="text-xs uppercase tracking-wider opacity-70">
            Slide {currentSlide + 1} / {slides.length}
          </div>
          <div className="text-sm opacity-90">
            Ziehe den Text mit der Maus an die gewünschte Position.
          </div>

          <div>
            <label className="text-xs flex justify-between mb-1">
              <span>Schriftgröße</span>
              <span>{ov.fontScale.toFixed(2)}×</span>
            </label>
            <input
              type="range"
              min={0.5}
              max={2.5}
              step={0.05}
              value={ov.fontScale}
              onChange={(e) => updateOv(currentSlide, { fontScale: parseFloat(e.target.value) })}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <label className="block mb-1">X: {ov.xPct.toFixed(0)}%</label>
              <input
                type="range"
                min={0}
                max={100}
                value={ov.xPct}
                onChange={(e) => updateOv(currentSlide, { xPct: parseFloat(e.target.value) })}
                className="w-full"
              />
            </div>
            <div>
              <label className="block mb-1">Y: {ov.yPct.toFixed(0)}%</label>
              <input
                type="range"
                min={0}
                max={100}
                value={ov.yPct}
                onChange={(e) => updateOv(currentSlide, { yPct: parseFloat(e.target.value) })}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={resetCurrent}
              className="flex-1 flex items-center justify-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-1.5 rounded text-xs"
            >
              <RotateCcw size={12} /> Reset
            </button>
            <button
              onClick={exportJson}
              className="flex-1 flex items-center justify-center gap-1 bg-white/10 hover:bg-white/20 px-2 py-1.5 rounded text-xs"
            >
              <Save size={12} /> Export
            </button>
          </div>

          <div className="flex gap-1 pt-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`flex-1 h-6 text-xs rounded ${
                  i === currentSlide ? "bg-primary text-primary-foreground" : "bg-white/10 hover:bg-white/20"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <div className="text-[10px] opacity-60 leading-tight">
            Speichert lokal im Browser (localStorage). Strg+Shift+E zum Umschalten.
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSlider;
