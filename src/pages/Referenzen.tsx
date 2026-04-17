import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

// Wix-CDN: liefert moderne Formate (WebP/AVIF) automatisch via enc_auto
const wixThumb = (file: string, w = 600) =>
  `https://static.wixstatic.com/media/${file}/v1/fill/w_${w},h_${Math.round((w * 3) / 4)},q_80,enc_auto/${file}`;
const wixFull = (file: string) =>
  `https://static.wixstatic.com/media/${file}/v1/fill/w_1600,h_1200,q_85,enc_auto/${file}`;
const wixSrcSet = (file: string) =>
  [400, 600, 900, 1200].map((w) => `${wixThumb(file, w)} ${w}w`).join(", ");

const projects = [
  {
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

const Referenzen = () => {
  useEffect(() => {
    document.title = "Referenzen – Vollmer Objektmöbel";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-20">
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 text-center">Referenzen</h1>
          <p className="font-serif text-xl text-muted-foreground text-center mb-16">
            Aus dem Bereich Küchen, Küchenstudio, Küchenplanung und Objektmöbel
          </p>

          <div className="space-y-20">
            {projects.map((p) => (
              <div key={p.title}>
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">{p.title}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {p.images.map((file, i) => (
                    <a
                      key={i}
                      href={wix(file)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden shadow-md aspect-[4/3] bg-secondary"
                    >
                      <img
                        src={wix(file)}
                        alt={`${p.title} – Bild ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Referenzen;
