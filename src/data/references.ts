export interface ReferenceImage {
  file: string;
  alt: string;
}

export interface ReferenceItem {
  slug: string;
  /** Kurzer Anzeigename für Detailseite und Navigation */
  title: string;
  /** Original-Projektüberschrift von Maurice (Galerie /referenzen) */
  galleryTitle: string;
  metaTitle: string;
  metaDescription: string;
  /** 2–3 Sätze: Projekttyp, Nutzen, Planungs-/Montageumfang */
  description: string[];
  tags: string[];
  images: ReferenceImage[];
}

export const references: ReferenceItem[] = [
  {
    slug: "wohn-kueche-naturstein",
    title: "Wohn-Küche mit Naturstein „San Sebastian“ satiniert",
    galleryTitle: 'Wohn-Küche mit Naturstein "San Sebastian" satiniert',
    metaTitle: "Referenz: Wohnküche mit Naturstein San Sebastian | Vollmer",
    metaDescription:
      "Einbauküche als offene Wohnküche mit Nussbaum, Naturstein „San Sebastian“ satiniert und Kochinsel — geplant und montiert von Vollmer Objektmöbel.",
    tags: ["Einbauküche", "Wohnküche", "Naturstein", "Kochinsel", "Nussbaum"],
    description: [
      "Diese Einbauküche entstand als offene Wohnküche und bildet das Herzstück des Privathaushalts: Nussbaum-Fronten treffen auf die satinierte Naturstein-Arbeitsplatte „San Sebastian“, die kratzfest ist und mit der Zeit eine natürliche Patina entwickelt.",
      "Die freistehende Kochinsel dient zugleich als Frühstückstresen; die Spiegel-Rückwand lässt den Raum größer wirken und spiegelt das Tageslicht der Fensterfront zurück. Für die Einbaugeräte setzten wir auf Miele — vom Induktionsfeld über den Backofen-Turm bis zum vollintegrierten Kühlschrank.",
      "Von der 3D-Planung und dem Aufmaß bis zur Montage inkl. Elektro- und Sanitäranschlüsse übernahmen wir den gesamten Ablauf schlüsselfertig für Sie.",
    ],
    images: [
      {
        file: "81b6c4_eb2215591c3b41ea98020f9561599b18~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Offene Wohnküche in Nussbaum mit Naturstein-Arbeitsplatte San Sebastian und freistehender Kochinsel",
      },
      {
        file: "81b6c4_2f2ad643a8dc4b67ad2b826da8068cbf~mv2_d_3000_4000_s_4_2.jpg",
        alt: "Detail der Nussbaum-Küchenfronten mit satinierter Naturstein-Arbeitsplatte",
      },
      {
        file: "81b6c4_25f240abdfa84ba7a15bd0238d7794f2~mv2_d_3000_4000_s_4_2.jpg",
        alt: "Kochinsel der Wohnküche mit Natursteinplatte und Sitzbereich zum Frühstücken",
      },
      {
        file: "81b6c4_bbcdaaf76e3e4444bd01bf9d07198c1f~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Wohnküche mit Spiegel-Rückwand, Nussbaum-Elementen und großzügiger Fensterfront",
      },
      {
        file: "81b6c4_ed24787bfe344b608890522d628a0e31~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Einbauküche mit Miele-Geräten und Naturstein-Arbeitsplatte in offenem Wohnraum",
      },
      {
        file: "81b6c4_51dedc99c64c4b4c8d0c9be54d11bd95~mv2_d_3000_4000_s_4_2.jpg",
        alt: "Weitere Ansicht der Wohnküche mit Hochschränken und Einbaugeräten",
      },
      {
        file: "81b6c4_d58b0ad049e649d4b2307e2467193bc9~mv2_d_5184_3456_s_4_2.jpg",
        alt: "Weitere Gesamtansicht der Nussbaum-Wohnküche mit Kochinsel",
      },
      {
        file: "81b6c4_c184ba2d66354f08b4428b9739af0cc4~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Arbeitsbereich der Einbauküche mit Naturstein-Arbeitsplatte",
      },
      {
        file: "81b6c4_c640fa2de53a4dcaadc4ee8c1059ca39~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Freistehende Kochinsel der Wohnküche in Nussbaum mit Naturstein",
      },
      {
        file: "81b6c4_691da7e0125a46d897b9e07a4beda022~mv2_d_5184_3456_s_4_2.jpg",
        alt: "Wohnküche in Nussbaum mit Kochinsel und Spiegel-Rückwand",
      },
    ],
  },
  {
    slug: "business-club-coworking",
    title: "Business Club: Coworking-Area mit freistehender Küche",
    galleryTitle:
      "Objektmöbel – Business Club Möbel und Coworking Area mit freistehender Küche",
    metaTitle: "Referenz: Business Club Coworking-Möbel und Teeküche | Vollmer",
    metaDescription:
      "Objektmöbel und Coworking-Area mit freistehender Teeküche für den Regus Business Club — geplant und schlüsselfertig übergeben von Vollmer Objektmöbel.",
    tags: ["Objektmöbel", "Coworking", "Business Club", "Teeküche", "Regus"],
    description: [
      "Für den Business-Center-Anbieter Regus realisierten wir Objektmöbel und eine Coworking-Area inklusive Lounge: offene Teeküche mit Sitzmöglichkeiten, Copy-Points, Meeting-Booths mit doppelten Sitznischen sowie Designer-Tische und weitere hochwertige Möbel.",
      "Die Einrichtung musste hohem Nutzungsdruck standhalten und zugleich repräsentativ wirken — deshalb kombinierten wir robuste Oberflächen in warmen Holztönen mit dunklen Metallelementen und schallabsorbierenden Booths.",
      "Die freistehende Küche steht als sozialer Treffpunkt in der Mitte des Raumes; Planung, Lieferung und Montage übergaben wir schlüsselfertig. Kommunikation, Qualität und Ausführung bewertete der Auftraggeber als „auf Top-Niveau“.",
    ],
    images: [
      {
        file: "81b6c4_892b027834a94efdab23ef8343158d8c~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Coworking-Area im Business Club mit freistehender Teeküche und Lounge-Sitzmöbeln",
      },
      {
        file: "81b6c4_156a8328aafd4150b82add6e9af52f80~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Freistehende Objektküche als Treffpunkt in der Coworking-Lounge",
      },
      {
        file: "81b6c4_c77f29df7e134982985de7e1264c4d52~mv2_d_3000_4000_s_4_2.jpg",
        alt: "Meeting-Booth mit doppelter Sitznische in der Business-Club-Einrichtung",
      },
      {
        file: "81b6c4_4a6f00f080fe47e4b9cd83d387ef5bca~mv2_d_3000_4000_s_4_2.jpg",
        alt: "Lounge- und Arbeitsmöbel in der Coworking-Area des Business Clubs",
      },
      {
        file: "81b6c4_76515557d65848fcaedc4be16c997499~mv2.jpg",
        alt: "Offene Teeküche mit Sitzgelegenheiten in der Regus-Coworking-Area",
      },
      {
        file: "81b6c4_604a7ba770ea42c3aabb5dba727e92ec~mv2.jpg",
        alt: "Weitere Ansicht der Business-Club-Lounge mit Objektmöbeln",
      },
      {
        file: "81b6c4_7ea1206275554cc2894ad32fc4bb7b8b~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Gesamtansicht der Coworking-Area mit freistehender Küche und Sitzgruppen",
      },
      {
        file: "81b6c4_0a8769fd016549f8936778dd912e5269~mv2_d_3000_4000_s_4_2.jpg",
        alt: "Meeting-Bereich mit Sitznische in der Business-Club-Einrichtung",
      },
      {
        file: "81b6c4_22cc564685fd470a9cc20014d1212b68~mv2_d_3000_4000_s_4_2.jpg",
        alt: "Stauraum- und Funktionsmöbel in der Coworking-Einrichtung",
      },
      {
        file: "81b6c4_81de8cfc6a6d41b2873fcdadcfa991c9~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Lounge-Bereich der Business-Club-Objekteinrichtung",
      },
      {
        file: "81b6c4_0238604f00514fa59fc7e6b1a70c30f0~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Arbeits- und Meeting-Zone im Business Club mit Objektmöbeln",
      },
      {
        file: "81b6c4_6815eef64a7c4e4ba15f2adbd525d864~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Detailansicht der freistehenden Teeküche im Coworking-Bereich",
      },
      {
        file: "81b6c4_3ab774a5a9224a12a6c96fc42afcd9b6~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Weitere Objektmöbel der Coworking-Area in Holz- und Metalloptik",
      },
      {
        file: "81b6c4_6e1d76128f274ed2a05630ababf6498d~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Eingerichtete Business-Club-Area mit Küche und Lounge-Möbeln",
      },
    ],
  },
  {
    slug: "buero-kueche-theke",
    title: "Moderne Büro-Küche mit Theke",
    galleryTitle: "Moderne Büro-Küche mit Theke",
    metaTitle: "Referenz: Büroküche mit Theke — Objekteinrichtung Vollmer",
    metaDescription:
      "Büro- und Teeküche mit Theke — geplant und montiert von Vollmer Objektmöbel für einen Unternehmenskunden im Raum Köln.",
    tags: ["Büroküche", "Teeküche", "Objekt", "Theke"],
    description: [
      "Für einen Unternehmenskunden im Raum Köln planten wir eine moderne Büro- und Teeküche als sozialen Treffpunkt im Arbeitsalltag. Die Theke eignet sich sowohl für ein schnelles Frühstück im Stehen als auch für kurze, informelle Team-Gespräche.",
      "Helle Fronten und eine dunkle Arbeitsplatte wirken zeitlos und sind pflegeleicht; für die hohe Nutzungsintensität im Büro wählten wir kratzfeste Oberflächen und einen Quooker-Wasserhahn, damit jederzeit sofort heißes Wasser verfügbar ist.",
      "Planung, Anlieferung, Montage und alle Anschlüsse übernahmen wir aus einer Hand — schlüsselfertig zum vereinbarten Termin.",
    ],
    images: [
      {
        file: "81b6c4_fc0c64b0444540659460b3d56d09bfb4~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Moderne Büroküche mit Theke, hellen Fronten und dunkler Arbeitsplatte",
      },
      {
        file: "81b6c4_89b2c22e3b1d491c9e8ccda4d09cfd13~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Teeküche im Büro mit Stehtheke für informelle Team-Treffen",
      },
      {
        file: "81b6c4_c022f31cee44483cafadb3bb4ec1bf01~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Arbeitsbereich der Büroküche mit kratzfesten Oberflächen und Spüle",
      },
      {
        file: "81b6c4_92e92c169bba4c9bb0086c284f135594~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Detail der Büro-Teeküche mit Quooker-Armatur und dunkler Arbeitsplatte",
      },
      {
        file: "81b6c4_dccf936686cc4fdd818802174994fb90~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Gesamtansicht der modernen Büroküche mit Theke und Stauraum",
      },
      {
        file: "81b6c4_ad8bbad699b741e3840267505b6de92d~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Büroküche mit hellen Unterschränken und großzügiger Thekenfläche",
      },
      {
        file: "81b6c4_24588f9d5b73441f84894766940d1c10~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Weitere Ansicht der Büro-Teeküche mit Theke",
      },
      {
        file: "81b6c4_23c6c6a9c6fb4095b0885625d8fe5aaa~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Hochschränke und Arbeitsplatte der modernen Büroküche",
      },
      {
        file: "81b6c4_0f287b665f7d4f73b4cea3fbb43c6390~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Thekenbereich der funktionalen Büro-Teeküche",
      },
      {
        file: "81b6c4_3766e40213de4e48b7336ed86c781919~mv2_d_4000_3000_s_4_2.jpg",
        alt: "Montierte Büroküche mit Theke als Treffpunkt im Unternehmen",
      },
    ],
  },
  {
    slug: "krankenhausausstattung",
    title: "Krankenhausausstattung — Patientenzimmer, Empfang und Küchen",
    galleryTitle:
      "Objekteinrichtung – Krankenhausausstattung – Patientenzimmer – Empfangstheken – Schwestern-Küchen – Wandvertäfelung – Fensterbänke zum Sitzen",
    metaTitle: "Referenz: Krankenhausausstattung Vollmer Objektmöbel",
    metaDescription:
      "Klinik- und Praxiseinrichtung: Patientenzimmer, Empfangstheken, Schwestern-Küchen, Wandvertäfelungen und Fensterbänke zum Sitzen — von Vollmer geplant und montiert.",
    tags: ["Praxiseinrichtung", "Klinik", "Krankenhaus", "Empfang", "Patientenzimmer"],
    description: [
      "Für einen Klinik-Kunden realisierten wir eine umfassende Objekteinrichtung und Praxiseinrichtung: Patientenzimmer, Empfangstheken auf den Stationen, Schwestern-Küchen, Wandvertäfelungen sowie Fensterbänke, die zugleich als Sitzbänke dienen.",
      "Möbel und Oberflächen wurden nach den Hygiene-Anforderungen des medizinischen Bereichs ausgewählt — desinfektionsmittelbeständig, fugenarm und leicht zu reinigen. In den Patientenzimmern sorgt eine ruhige, warme Farbwelt für mehr Aufenthaltsqualität.",
      "Über mehrere Monate steuerten wir das Projekt per Projektbegleitung und koordinierten parallel Elektrik, Sanitär, Bodenleger und Maler bis zur Übergabe.",
    ],
    images: [
      {
        file: "81b6c4_1eefbab6cc074d468b27bed68d898a1e~mv2.jpg",
        alt: "Heller Empfangsbereich einer Klinik mit Empfangstheke und Wartezone",
      },
      {
        file: "81b6c4_e6c75db583cb4643b94f6b05c7cad22b~mv2.jpg",
        alt: "Patientenzimmer mit hygienegerechten Möbeln und warmer Farbgestaltung",
      },
      {
        file: "81b6c4_5330a85313044a22a35f589fffe6d9ba~mv2.jpg",
        alt: "Stations-Empfangstheke in der Krankenhausausstattung",
      },
      {
        file: "81b6c4_63a4c12a546c41a4b526acee42ab1ea6~mv2.jpg",
        alt: "Schwestern-Küche mit pflegeleichten, desinfektionsmittelbeständigen Oberflächen",
      },
      {
        file: "81b6c4_ba3801080b4f4cbb82e89e39ae6d3830~mv2.jpg",
        alt: "Wandvertäfelung und Sitzfensterbank im Klinikflur",
      },
      {
        file: "81b6c4_5cf9a856d3894c30965e6d6d476ab0bc~mv2.jpg",
        alt: "Warte- und Empfangsbereich der Krankenhausausstattung",
      },
      {
        file: "81b6c4_1c7141d7c7df4bfe80501017bbed376f~mv2.jpg",
        alt: "Weitere Ansicht eines Patientenzimmers mit Objektmöbeln",
      },
      {
        file: "81b6c4_2968278528db438385521d396a1fdcbc~mv2.jpg",
        alt: "Weitere Stations-Empfangstheke in der Klinikausstattung",
      },
      {
        file: "81b6c4_7083b53650794952bb2d37d2196fdf70~mv2.jpg",
        alt: "Fensterbank zum Sitzen in der Krankenhaus-Objekteinrichtung",
      },
      {
        file: "81b6c4_99089a99f46d4f4eb823a5ec720cd72e~mv2.jpg",
        alt: "Klinikflur mit Wandvertäfelung und Sitzgelegenheiten",
      },
      {
        file: "81b6c4_d546329784654e2b9f1f6a5e61905401~mv2.jpg",
        alt: "Detail hygienegerechter Oberflächen in der Klinikausstattung",
      },
      {
        file: "81b6c4_41f90c51705e4c3cb68b8f1215c51fb7~mv2.jpg",
        alt: "Patientenzimmer mit maßgefertigten Klinik-Objektmöbeln",
      },
      {
        file: "81b6c4_952772bddc0c43b891e083546c98d57a~mv2.jpg",
        alt: "Weitere Ansicht der Schwestern-Küche in der Krankenhausausstattung",
      },
      {
        file: "81b6c4_557c261dba4e457b9c85fd85ef640534~mv2.jpg",
        alt: "Empfangsbereich der Klinik mit Theke und Wartezone",
      },
      {
        file: "81b6c4_0b72689a21e7431d954689dba8781048~mv2.jpg",
        alt: "Stauraum- und Arbeitsmöbel im medizinischen Bereich",
      },
      {
        file: "81b6c4_72db52912c2b40ddab2c20e714553dc1~mv2.jpg",
        alt: "Sitzfensterbank und Wandverkleidung im Klinikbereich",
      },
      {
        file: "81b6c4_1911939c8c4044c4bb6fabc5d30ec652~mv2.jpg",
        alt: "Weiteres Patientenzimmer mit funktionaler Klinik-Einrichtung",
      },
      {
        file: "81b6c4_5d2dbb1024964f6ea43d839bccbb7b98~mv2.jpg",
        alt: "Empfangstheke der Krankenhaus-Objekteinrichtung",
      },
      {
        file: "81b6c4_6375af1c138d4cc3ae7f4e7e6186f49f~mv2.jpg",
        alt: "Schrank- und Arbeitsmöbel in der Klinikausstattung",
      },
      {
        file: "81b6c4_8a9bad6220024703b993530a788bf940~mv2.jpg",
        alt: "Flur- und Wartebereich der Klinik mit Sitzbänken",
      },
      {
        file: "81b6c4_0e62f3d378cb4c488301640f89a709ce~mv2.jpg",
        alt: "Wandvertäfelung in der Krankenhausausstattung",
      },
      {
        file: "81b6c4_ada35c0ae26d4e7680e9e56b4b58e420~mv2.jpg",
        alt: "Ausgestattetes Patientenzimmer der Klinik-Referenz",
      },
      {
        file: "81b6c4_d0713e027e9f4f139abc2695377ba896~mv2.jpg",
        alt: "Stationsbereich mit Empfangstheke in der Klinik",
      },
      {
        file: "81b6c4_c3b6c5c843a74523bf484046923ed782~mv2.jpg",
        alt: "Arbeitsplatzbereich mit Theke in der Klinikausstattung",
      },
      {
        file: "81b6c4_ba58afcfef5045debe7de98bbeea4aff~mv2.jpg",
        alt: "Gesamteindruck der Klinik-Objekteinrichtung nach der Montage",
      },
    ],
  },
];

export const getReference = (slug: string) => references.find((r) => r.slug === slug);
