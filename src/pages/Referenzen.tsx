import { useEffect, useMemo, useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragOverlay,
  type DragEndEvent,
  type DragStartEvent,
  type DragOverEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// Wix-CDN: liefert moderne Formate (WebP/AVIF) automatisch via enc_auto
const wixThumb = (file: string, w = 600) =>
  `https://static.wixstatic.com/media/${file}/v1/fill/w_${w},h_${Math.round((w * 3) / 4)},q_80,enc_auto/${file}`;
const wixFull = (file: string) =>
  `https://static.wixstatic.com/media/${file}/v1/fill/w_1600,h_1200,q_85,enc_auto/${file}`;
const wixSrcSet = (file: string) =>
  [400, 600, 900, 1200].map((w) => `${wixThumb(file, w)} ${w}w`).join(", ");

type Project = { id: string; title: string; images: string[] };

const projects: Project[] = [
  {
    id: "kueche-naturstein",
    title: 'Wohn-Küche mit Naturstein "San Sebastian" satiniert',
    images: [
      "81b6c4_eb2215591c3b41ea98020f9561599b18~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_2f2ad643a8dc4b67ad2b826da8068cbf~mv2_d_3000_4000_s_4_2.jpg",
      "81b6c4_25f240abdfa84ba7a15bd0238d7794f2~mv2_d_3000_4000_s_4_2.jpg",
      "81b6c4_bbcdaaf76e3e4444bd01bf9d07198c1f~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_ed24787bfe344b608890522d628a0e31~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_51dedc99c64c4b4c8d0c9be54d11bd95~mv2_d_3000_4000_s_4_2.jpg",
      "81b6c4_c184ba2d66354f08b4428b9739af0cc4~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_c640fa2de53a4dcaadc4ee8c1059ca39~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_691da7e0125a46d897b9e07a4beda022~mv2_d_5184_3456_s_4_2.jpg",
      "81b6c4_892b027834a94efdab23ef8343158d8c~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_156a8328aafd4150b82add6e9af52f80~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_c77f29df7e134982985de7e1264c4d52~mv2_d_3000_4000_s_4_2.jpg",
      "81b6c4_76515557d65848fcaedc4be16c997499~mv2.jpg",
      "81b6c4_4a6f00f080fe47e4b9cd83d387ef5bca~mv2_d_3000_4000_s_4_2.jpg",
      "81b6c4_7ea1206275554cc2894ad32fc4bb7b8b~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_604a7ba770ea42c3aabb5dba727e92ec~mv2.jpg",
      "81b6c4_6e1d76128f274ed2a05630ababf6498d~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_22cc564685fd470a9cc20014d1212b68~mv2_d_3000_4000_s_4_2.jpg",
    ],
  },
  {
    id: "business-club",
    title: "Objektmöbel – Business Club Möbel und Coworking Area mit freistehender Küche",
    images: [
      "81b6c4_fc0c64b0444540659460b3d56d09bfb4~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_89b2c22e3b1d491c9e8ccda4d09cfd13~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_dccf936686cc4fdd818802174994fb90~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_92e92c169bba4c9bb0086c284f135594~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_c022f31cee44483cafadb3bb4ec1bf01~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_ad8bbad699b741e3840267505b6de92d~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_23c6c6a9c6fb4095b0885625d8fe5aaa~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_24588f9d5b73441f84894766940d1c10~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_0f287b665f7d4f73b4cea3fbb43c6390~mv2_d_4000_3000_s_4_2.jpg",
    ],
  },
  {
    id: "buero-kueche",
    title: "Moderne Büro-Küche mit Theke",
    images: [
      "81b6c4_5330a85313044a22a35f589fffe6d9ba~mv2.jpg",
      "81b6c4_e6c75db583cb4643b94f6b05c7cad22b~mv2.jpg",
      "81b6c4_1eefbab6cc074d468b27bed68d898a1e~mv2.jpg",
      "81b6c4_ba3801080b4f4cbb82e89e39ae6d3830~mv2.jpg",
      "81b6c4_63a4c12a546c41a4b526acee42ab1ea6~mv2.jpg",
      "81b6c4_5cf9a856d3894c30965e6d6d476ab0bc~mv2.jpg",
      "81b6c4_99089a99f46d4f4eb823a5ec720cd72e~mv2.jpg",
      "81b6c4_2968278528db438385521d396a1fdcbc~mv2.jpg",
      "81b6c4_1c7141d7c7df4bfe80501017bbed376f~mv2.jpg",
    ],
  },
  {
    id: "krankenhaus",
    title:
      "Objekteinrichtung – Krankenhausausstattung – Patientenzimmer – Empfangstheken – Schwestern-Küchen – Wandvertäfelung – Fensterbänke zum Sitzen",
    images: [
      "81b6c4_43cb3b15329c47ddad58338282762099~mv2.jpg",
      "81b6c4_0a8769fd016549f8936778dd912e5269~mv2_d_3000_4000_s_4_2.jpg",
      "81b6c4_81de8cfc6a6d41b2873fcdadcfa991c9~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_0238604f00514fa59fc7e6b1a70c30f0~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_3ab774a5a9224a12a6c96fc42afcd9b6~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_6815eef64a7c4e4ba15f2adbd525d864~mv2_d_4000_3000_s_4_2.jpg",
      "81b6c4_d58b0ad049e649d4b2307e2467193bc9~mv2_d_5184_3456_s_4_2.jpg",
      "81b6c4_d546329784654e2b9f1f6a5e61905401~mv2.jpg",
      "81b6c4_41f90c51705e4c3cb68b8f1215c51fb7~mv2.jpg",
      "81b6c4_952772bddc0c43b891e083546c98d57a~mv2.jpg",
      "81b6c4_557c261dba4e457b9c85fd85ef640534~mv2.jpg",
      "81b6c4_0b72689a21e7431d954689dba8781048~mv2.jpg",
      "81b6c4_72db52912c2b40ddab2c20e714553dc1~mv2.jpg",
      "81b6c4_7083b53650794952bb2d37d2196fdf70~mv2.jpg",
      "81b6c4_1911939c8c4044c4bb6fabc5d30ec652~mv2.jpg",
      "81b6c4_5d2dbb1024964f6ea43d839bccbb7b98~mv2.jpg",
      "81b6c4_6375af1c138d4cc3ae7f4e7e6186f49f~mv2.jpg",
      "81b6c4_8a9bad6220024703b993530a788bf940~mv2.jpg",
      "81b6c4_0e62f3d378cb4c488301640f89a709ce~mv2.jpg",
      "81b6c4_ada35c0ae26d4e7680e9e56b4b58e420~mv2.jpg",
      "81b6c4_d0713e027e9f4f139abc2695377ba896~mv2.jpg",
      "81b6c4_c3b6c5c843a74523bf484046923ed782~mv2.jpg",
      "81b6c4_ba58afcfef5045debe7de98bbeea4aff~mv2.jpg",
      "81b6c4_3766e40213de4e48b7336ed86c781919~mv2_d_4000_3000_s_4_2.jpg",
    ],
  },
];

// V3: Bilder können jetzt zwischen Projekten verschoben werden,
// daher speichern wir die komplette Zuordnung Projekt → Bilder.
const IMAGES_KEY = "referenzen-images-v3";
const PROJECT_ORDER_KEY = "referenzen-project-order-v1";

type ImagesMap = Record<string, string[]>;

const defaultImagesMap = (): ImagesMap =>
  Object.fromEntries(projects.map((p) => [p.id, [...p.images]]));

const loadImagesMap = (): ImagesMap => {
  try {
    const raw = localStorage.getItem(IMAGES_KEY);
    if (!raw) return defaultImagesMap();
    const saved = JSON.parse(raw) as ImagesMap;
    // Konsistenz: alle bekannten Bilder müssen genau einmal vorhanden sein
    const allKnown = new Set(projects.flatMap((p) => p.images));
    const seen = new Set<string>();
    const result: ImagesMap = {};
    for (const p of projects) {
      const list = (saved[p.id] || []).filter((f) => allKnown.has(f) && !seen.has(f));
      list.forEach((f) => seen.add(f));
      result[p.id] = list;
    }
    // Fehlende Bilder ihrem Original-Projekt hinten anhängen
    for (const p of projects) {
      for (const f of p.images) {
        if (!seen.has(f)) {
          result[p.id].push(f);
          seen.add(f);
        }
      }
    }
    return result;
  } catch {
    return defaultImagesMap();
  }
};
const saveImagesMap = (map: ImagesMap) => {
  try {
    localStorage.setItem(IMAGES_KEY, JSON.stringify(map));
  } catch {
    /* ignore */
  }
};
const loadProjectOrder = (): string[] => {
  try {
    const raw = localStorage.getItem(PROJECT_ORDER_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
};
const saveProjectOrder = (ids: string[]) => {
  try {
    localStorage.setItem(PROJECT_ORDER_KEY, JSON.stringify(ids));
  } catch {
    /* ignore */
  }
};

// Eindeutige Drag-IDs: "projekt-id::bild-datei", damit das gleiche Bild
// theoretisch keine Kollision verursacht und wir das Quell-Projekt erkennen.
const makeImgId = (projectId: string, file: string) => `${projectId}::${file}`;
const parseImgId = (id: string): { projectId: string; file: string } => {
  const idx = id.indexOf("::");
  return { projectId: id.slice(0, idx), file: id.slice(idx + 2) };
};

// =================== SortableImage ===================

const SortableImage = ({
  dragId,
  file,
  title,
  index,
  isAdmin,
}: {
  dragId: string;
  file: string;
  title: string;
  index: number;
  isAdmin: boolean;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: dragId,
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.3 : 1,
  };

  const inner = (
    <img
      src={wixThumb(file, 600)}
      srcSet={wixSrcSet(file)}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      alt={`${title} – Bild ${index + 1}`}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );

  if (isAdmin) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="group relative block overflow-hidden shadow-md aspect-[4/3] bg-secondary cursor-grab active:cursor-grabbing touch-none ring-2 ring-primary/40 hover:ring-primary"
      >
        {inner}
        <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-display px-2 py-1 rounded">
          {index + 1}
        </span>
      </div>
    );
  }

  return (
    <a
      ref={setNodeRef}
      style={style}
      href={wixFull(file)}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden shadow-md aspect-[4/3] bg-secondary"
    >
      {inner}
    </a>
  );
};

// Drop-Zone, die das gesamte Projekt-Raster als gültigen Container markiert
// (auch wenn das Projekt aktuell leer ist).
import { useDroppable } from "@dnd-kit/core";

const ProjectGrid = ({
  projectId,
  files,
  title,
  isAdmin,
}: {
  projectId: string;
  files: string[];
  title: string;
  isAdmin: boolean;
}) => {
  const { setNodeRef, isOver } = useDroppable({ id: `container::${projectId}` });
  const dragIds = files.map((f) => makeImgId(projectId, f));

  return (
    <SortableContext items={dragIds} strategy={rectSortingStrategy}>
      <div
        ref={setNodeRef}
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[120px] rounded-md transition-colors ${
          isAdmin && isOver ? "bg-primary/10 outline-2 outline-dashed outline-primary" : ""
        }`}
      >
        {files.length === 0 && isAdmin && (
          <div className="col-span-full py-8 text-center font-sans text-sm text-muted-foreground border-2 border-dashed border-muted-foreground/40 rounded">
            Bilder hier hineinziehen
          </div>
        )}
        {files.map((file, i) => (
          <SortableImage
            key={makeImgId(projectId, file)}
            dragId={makeImgId(projectId, file)}
            file={file}
            title={title}
            index={i}
            isAdmin={isAdmin}
          />
        ))}
      </div>
    </SortableContext>
  );
};

// =================== SortableProject (ganzer Block) ===================

const SortableProject = ({
  project,
  files,
  isAdmin,
  isModified,
  onResetProject,
}: {
  project: Project;
  files: string[];
  isAdmin: boolean;
  isModified: boolean;
  onResetProject: () => void;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: `project::${project.id}`,
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-start gap-3 flex-1">
          {isAdmin && (
            <button
              {...attributes}
              {...listeners}
              aria-label="Projekt verschieben"
              className="mt-2 shrink-0 p-2 rounded border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-grab active:cursor-grabbing touch-none"
            >
              <GripVertical className="w-5 h-5" />
            </button>
          )}
          <h2 className="font-display text-2xl md:text-3xl text-foreground">
            {project.title}
            {isAdmin && (
              <span className="ml-3 font-sans text-sm text-muted-foreground">({files.length})</span>
            )}
          </h2>
        </div>
        {isAdmin && isModified && (
          <button
            onClick={onResetProject}
            className="shrink-0 font-display text-xs uppercase tracking-wide px-3 py-1.5 border border-muted-foreground text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
          >
            Zurücksetzen
          </button>
        )}
      </div>
      <ProjectGrid projectId={project.id} files={files} title={project.title} isAdmin={isAdmin} />
    </div>
  );
};

// =================== Page ===================

const ADMIN_ENABLED = true;

const Referenzen = () => {
  const isAdmin = ADMIN_ENABLED;
  const [imagesMap, setImagesMap] = useState<ImagesMap>(defaultImagesMap);
  const [projectIds, setProjectIds] = useState<string[]>(projects.map((p) => p.id));
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Referenzen – Vollmer Objektmöbel";
    window.scrollTo(0, 0);
    setImagesMap(loadImagesMap());
    const savedProjOrder = loadProjectOrder();
    if (savedProjOrder.length) {
      const known = new Set(projects.map((p) => p.id));
      const ordered = savedProjOrder.filter((id) => known.has(id));
      const remaining = projects.map((p) => p.id).filter((id) => !ordered.includes(id));
      setProjectIds([...ordered, ...remaining]);
    }
  }, []);

  const projectMap = useMemo(() => new Map(projects.map((p) => [p.id, p])), []);

  // Findet das Projekt zu einer Drag-ID (Bild oder Container)
  const findProjectIdByDragId = (dragId: string): string | null => {
    if (dragId.startsWith("container::")) return dragId.slice("container::".length);
    if (dragId.startsWith("project::")) return null;
    // Bild-ID
    const { projectId } = parseImgId(dragId);
    return projectId;
  };

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 8 } }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(String(event.active.id));
  };

  // Live-Verschiebung zwischen Containern beim Hovern
  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;
    const activeId = String(active.id);
    const overId = String(over.id);

    // Nur Bilder behandeln
    if (activeId.startsWith("project::") || activeId.startsWith("container::")) return;

    const activeProj = parseImgId(activeId).projectId;
    const overProj = findProjectIdByDragId(overId);
    if (!overProj || activeProj === overProj) return;

    setImagesMap((prev) => {
      const fromList = [...(prev[activeProj] || [])];
      const toList = [...(prev[overProj] || [])];
      const file = parseImgId(activeId).file;
      const fromIdx = fromList.indexOf(file);
      if (fromIdx < 0) return prev;
      fromList.splice(fromIdx, 1);

      // Insert-Position bestimmen
      let insertIdx = toList.length;
      if (overId.startsWith("container::")) {
        insertIdx = toList.length;
      } else {
        const overFile = parseImgId(overId).file;
        const overIdx = toList.indexOf(overFile);
        insertIdx = overIdx >= 0 ? overIdx : toList.length;
      }
      toList.splice(insertIdx, 0, file);

      return { ...prev, [activeProj]: fromList, [overProj]: toList };
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);
    if (!over) return;
    const activeId = String(active.id);
    const overId = String(over.id);

    // Projekt-Sortierung
    if (activeId.startsWith("project::") && overId.startsWith("project::")) {
      const a = activeId.slice("project::".length);
      const o = overId.slice("project::".length);
      if (a === o) return;
      const oldIdx = projectIds.indexOf(a);
      const newIdx = projectIds.indexOf(o);
      if (oldIdx < 0 || newIdx < 0) return;
      const next = arrayMove(projectIds, oldIdx, newIdx);
      setProjectIds(next);
      saveProjectOrder(next);
      return;
    }

    // Bild innerhalb desselben Projekts neu sortieren
    if (!activeId.startsWith("project::") && !activeId.startsWith("container::")) {
      const activeProj = parseImgId(activeId).projectId;
      const overProj = findProjectIdByDragId(overId);
      if (!overProj) return;

      if (activeProj === overProj && !overId.startsWith("container::")) {
        const overFile = parseImgId(overId).file;
        const file = parseImgId(activeId).file;
        setImagesMap((prev) => {
          const list = [...(prev[activeProj] || [])];
          const oldIdx = list.indexOf(file);
          const newIdx = list.indexOf(overFile);
          if (oldIdx < 0 || newIdx < 0 || oldIdx === newIdx) return prev;
          const next = { ...prev, [activeProj]: arrayMove(list, oldIdx, newIdx) };
          saveImagesMap(next);
          return next;
        });
        return;
      }

      // Cross-Container war schon in dragOver erledigt – nur speichern
      setImagesMap((prev) => {
        saveImagesMap(prev);
        return prev;
      });
    }
  };

  const handleDragCancel = () => setActiveId(null);

  const handleResetProject = (projectId: string) => {
    const original = projectMap.get(projectId);
    if (!original) return;
    setImagesMap((prev) => {
      // Bilder die aktuell woanders liegen, aber original zu diesem Projekt gehören → zurückholen
      // Bilder die hier liegen, aber original zu anderem Projekt gehören → zurück zum Original
      const originalSet = new Set(original.images);
      const next: ImagesMap = {};
      // Erstmal alle Listen ohne die Bilder dieses Projekts (= original-Bilder)
      for (const p of projects) {
        next[p.id] = (prev[p.id] || []).filter((f) => !originalSet.has(f));
      }
      // Bilder, die ursprünglich zu anderen Projekten gehören und aktuell hier liegen,
      // an ihren Original-Platz zurück
      const currentForeign = (prev[projectId] || []).filter((f) => !originalSet.has(f));
      for (const f of currentForeign) {
        const home = projects.find((p) => p.images.includes(f));
        if (home && !next[home.id].includes(f)) {
          next[home.id].push(f);
        }
      }
      // Diesem Projekt seine Original-Bilder in Original-Reihenfolge geben
      next[projectId] = [...original.images];
      saveImagesMap(next);
      return next;
    });
  };

  const buildExportJson = () => {
    const payload = {
      order: projectIds,
      images: Object.fromEntries(projectIds.map((id) => [id, imagesMap[id] || []])),
    };
    return JSON.stringify(payload, null, 2);
  };

  const handleExportClipboard = async () => {
    const json = buildExportJson();
    try {
      await navigator.clipboard.writeText(json);
      toast({ title: "In Zwischenablage kopiert", description: "JSON ist bereit zum Einfügen in den Chat." });
    } catch {
      toast({
        title: "Kopieren fehlgeschlagen",
        description: "Bitte stattdessen den Download-Button benutzen.",
        variant: "destructive",
      });
    }
  };

  const handleExportDownload = () => {
    const json = buildExportJson();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "referenzen-sortierung.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast({ title: "Datei heruntergeladen", description: "referenzen-sortierung.json" });
  };

  const handleResetAll = () => {
    const fresh = defaultImagesMap();
    setImagesMap(fresh);
    saveImagesMap(fresh);
    const defaults = projects.map((p) => p.id);
    setProjectIds(defaults);
    saveProjectOrder([]);
  };

  const isProjectModified = (projectId: string) => {
    const orig = projectMap.get(projectId)?.images || [];
    const curr = imagesMap[projectId] || [];
    if (orig.length !== curr.length) return true;
    return orig.some((f, i) => curr[i] !== f);
  };

  const activeFile = activeId && !activeId.startsWith("project::") && !activeId.startsWith("container::")
    ? parseImgId(activeId).file
    : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 text-center">Referenzen</h1>
          <p className="font-serif text-xl text-muted-foreground text-center mb-8">
            Aus dem Bereich Küchen, Küchenstudio, Küchenplanung und Objektmöbel
          </p>

          {isAdmin && (
            <div className="mb-12 p-4 border-2 border-primary bg-primary/5 rounded-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sticky top-20 z-30 backdrop-blur-sm">
              <div>
                <p className="font-display text-sm text-foreground">🛠 Admin-Modus aktiv</p>
                <p className="font-sans text-xs text-muted-foreground mt-1">
                  Projekt-Überschriften am Griff <GripVertical className="inline w-3 h-3" /> verschieben · Bilder direkt im Raster ziehen · Bilder können auch in ein anderes Projekt gezogen werden – die Bereiche passen sich automatisch an.
                </p>
              </div>
              <button
                onClick={handleResetAll}
                className="font-display text-xs uppercase tracking-wide px-4 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors shrink-0"
              >
                Alle zurücksetzen
              </button>
            </div>
          )}

          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
          >
            <SortableContext
              items={projectIds.map((id) => `project::${id}`)}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-20">
                {projectIds.map((id) => {
                  const project = projectMap.get(id);
                  if (!project) return null;
                  const files = imagesMap[id] || [];
                  return (
                    <SortableProject
                      key={id}
                      project={project}
                      files={files}
                      isAdmin={isAdmin}
                      isModified={isProjectModified(id)}
                      onResetProject={() => handleResetProject(id)}
                    />
                  );
                })}
              </div>
            </SortableContext>

            <DragOverlay>
              {activeFile ? (
                <div className="aspect-[4/3] w-64 overflow-hidden shadow-2xl ring-2 ring-primary">
                  <img
                    src={wixThumb(activeFile, 600)}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : null}
            </DragOverlay>
          </DndContext>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Referenzen;
