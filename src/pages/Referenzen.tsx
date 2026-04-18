import { useEffect, useMemo, useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
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

const STORAGE_KEY = "referenzen-order-v2";
const PROJECT_ORDER_KEY = "referenzen-project-order-v1";

type OrderMap = Record<string, string[]>;

const loadOrder = (): OrderMap => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};
const saveOrder = (order: OrderMap) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
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

// Wendet Bild-Reihenfolge an, behält neue/entfernte Bilder konsistent
const applyOrder = (project: Project, order: OrderMap): string[] => {
  const saved = order[project.id];
  if (!saved) return project.images;
  const known = new Set(project.images);
  const ordered = saved.filter((f) => known.has(f));
  const missing = project.images.filter((f) => !ordered.includes(f));
  return [...ordered, ...missing];
};

// Wendet Projekt-Reihenfolge an, hängt unbekannte hinten an
const applyProjectOrder = (savedIds: string[]): Project[] => {
  if (!savedIds.length) return projects;
  const map = new Map(projects.map((p) => [p.id, p]));
  const ordered = savedIds.map((id) => map.get(id)).filter(Boolean) as Project[];
  const usedIds = new Set(ordered.map((p) => p.id));
  const remaining = projects.filter((p) => !usedIds.has(p.id));
  return [...ordered, ...remaining];
};

// =================== SortableImage ===================

const SortableImage = ({
  id,
  file,
  title,
  index,
  isAdmin,
}: {
  id: string;
  file: string;
  title: string;
  index: number;
  isAdmin: boolean;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 10 : "auto",
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

// =================== ImageGrid (innerer DnD-Kontext) ===================

const ImageGrid = ({
  project,
  files,
  isAdmin,
  onReorder,
}: {
  project: Project;
  files: string[];
  isAdmin: boolean;
  onReorder: (next: string[]) => void;
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 8 } }),
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = files.indexOf(String(active.id));
    const newIndex = files.indexOf(String(over.id));
    if (oldIndex < 0 || newIndex < 0) return;
    onReorder(arrayMove(files, oldIndex, newIndex));
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={files} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {files.map((file, i) => (
            <SortableImage
              key={file}
              id={file}
              file={file}
              title={project.title}
              index={i}
              isAdmin={isAdmin}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

// =================== SortableProject (ganzer Block) ===================

const SortableProject = ({
  project,
  files,
  isAdmin,
  hasCustomImageOrder,
  onReorderImages,
  onResetProject,
}: {
  project: Project;
  files: string[];
  isAdmin: boolean;
  hasCustomImageOrder: boolean;
  onReorderImages: (next: string[]) => void;
  onResetProject: () => void;
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: project.id,
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
          <h2 className="font-display text-2xl md:text-3xl text-foreground">{project.title}</h2>
        </div>
        {isAdmin && hasCustomImageOrder && (
          <button
            onClick={onResetProject}
            className="shrink-0 font-display text-xs uppercase tracking-wide px-3 py-1.5 border border-muted-foreground text-muted-foreground hover:border-foreground hover:text-foreground transition-colors"
          >
            Zurücksetzen
          </button>
        )}
      </div>
      <ImageGrid project={project} files={files} isAdmin={isAdmin} onReorder={onReorderImages} />
    </div>
  );
};

// =================== Page ===================

// Admin-Modus: hier umschalten. Auf `false` setzen, um Admin auszublenden.
const ADMIN_ENABLED = true;

const Referenzen = () => {
  const isAdmin = ADMIN_ENABLED;
  const [order, setOrder] = useState<OrderMap>({});
  const [projectIds, setProjectIds] = useState<string[]>(projects.map((p) => p.id));

  useEffect(() => {
    document.title = "Referenzen – Vollmer Objektmöbel";
    window.scrollTo(0, 0);
    setOrder(loadOrder());
    const savedProjOrder = loadProjectOrder();
    if (savedProjOrder.length) {
      setProjectIds(applyProjectOrder(savedProjOrder).map((p) => p.id));
    }
  }, []);

  const orderedProjects = useMemo(() => {
    const map = new Map(projects.map((p) => [p.id, p]));
    return projectIds
      .map((id) => map.get(id))
      .filter(Boolean)
      .map((p) => ({ project: p as Project, files: applyOrder(p as Project, order) }));
  }, [projectIds, order]);

  const handleReorderImages = (projectId: string, next: string[]) => {
    setOrder((prev) => {
      const updated = { ...prev, [projectId]: next };
      saveOrder(updated);
      return updated;
    });
  };

  const handleResetProject = (projectId: string) => {
    setOrder((prev) => {
      const updated = { ...prev };
      delete updated[projectId];
      saveOrder(updated);
      return updated;
    });
  };

  const handleResetAll = () => {
    setOrder({});
    saveOrder({});
    const defaults = projects.map((p) => p.id);
    setProjectIds(defaults);
    saveProjectOrder([]);
  };

  // Sensors für Projekt-Sortierung (vertikal)
  const projectSensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 8 } }),
  );

  const handleProjectDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = projectIds.indexOf(String(active.id));
    const newIndex = projectIds.indexOf(String(over.id));
    if (oldIndex < 0 || newIndex < 0) return;
    const next = arrayMove(projectIds, oldIndex, newIndex);
    setProjectIds(next);
    saveProjectOrder(next);
  };

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
                <p className="font-display text-sm text-foreground">
                  🛠 Admin-Modus aktiv
                </p>
                <p className="font-sans text-xs text-muted-foreground mt-1">
                  Projekt-Überschriften am Griff <GripVertical className="inline w-3 h-3" /> verschieben · Bilder direkt im Raster ziehen · Reihenfolge wird im Browser gespeichert.
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
            sensors={projectSensors}
            collisionDetection={closestCenter}
            onDragEnd={handleProjectDragEnd}
          >
            <SortableContext items={projectIds} strategy={verticalListSortingStrategy}>
              <div className="space-y-20">
                {orderedProjects.map(({ project, files }) => (
                  <SortableProject
                    key={project.id}
                    project={project}
                    files={files}
                    isAdmin={isAdmin}
                    hasCustomImageOrder={Boolean(order[project.id])}
                    onReorderImages={(next) => handleReorderImages(project.id, next)}
                    onResetProject={() => handleResetProject(project.id)}
                  />
                ))}
              </div>
            </SortableContext>
          </DndContext>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Referenzen;
