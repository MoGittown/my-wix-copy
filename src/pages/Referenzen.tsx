import { useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const projects = [
  {
    title: 'Wohn-Küche mit Naturstein "San Sebastian" satiniert',
    images: [
      "https://static.wixstatic.com/media/81b6c4_eb2215591c3b41ea98020f9561599b18~mv2_d_4000_3000_s_4_2.jpg/v1/fill/w_981,h_624,q_90,enc_avif,quality_auto/81b6c4_eb2215591c3b41ea98020f9561599b18~mv2_d_4000_3000_s_4_2.jpg",
      "https://static.wixstatic.com/media/81b6c4_2f2ad643a8dc4b67ad2b826da8068cbf~mv2_d_3000_4000_s_4_2.jpg/v1/fill/w_981,h_624,q_90,enc_avif,quality_auto/81b6c4_2f2ad643a8dc4b67ad2b826da8068cbf~mv2_d_3000_4000_s_4_2.jpg",
    ],
  },
  {
    title: "Objektmöbel – Business Club Möbel und Coworking Area mit freistehender Küche",
    images: [
      "https://static.wixstatic.com/media/81b6c4_892b027834a94efdab23ef8343158d8c~mv2_d_4000_3000_s_4_2.jpg/v1/fill/w_980,h_625,q_90,enc_avif,quality_auto/81b6c4_892b027834a94efdab23ef8343158d8c~mv2_d_4000_3000_s_4_2.jpg",
      "https://static.wixstatic.com/media/81b6c4_156a8328aafd4150b82add6e9af52f80~mv2_d_4000_3000_s_4_2.jpg/v1/fill/w_980,h_625,q_90,enc_avif,quality_auto/81b6c4_156a8328aafd4150b82add6e9af52f80~mv2_d_4000_3000_s_4_2.jpg",
    ],
  },
  {
    title: "Moderne Büro-Küche mit Theke",
    images: [
      "https://static.wixstatic.com/media/81b6c4_fc0c64b0444540659460b3d56d09bfb4~mv2_d_4000_3000_s_4_2.jpg/v1/fill/w_980,h_625,q_90,enc_avif,quality_auto/81b6c4_fc0c64b0444540659460b3d56d09bfb4~mv2_d_4000_3000_s_4_2.jpg",
      "https://static.wixstatic.com/media/81b6c4_89b2c22e3b1d491c9e8ccda4d09cfd13~mv2_d_4000_3000_s_4_2.jpg/v1/fill/w_980,h_625,q_90,enc_avif,quality_auto/81b6c4_89b2c22e3b1d491c9e8ccda4d09cfd13~mv2_d_4000_3000_s_4_2.jpg",
    ],
  },
  {
    title: "Objekteinrichtung – Krankenhausausstattung – Patientenzimmer – Empfangstheken – Schwestern-Küchen – Wandvertäfelung – Fensterbänke zum Sitzen",
    images: [
      "https://static.wixstatic.com/media/81b6c4_5330a85313044a22a35f589fffe6d9ba~mv2.jpg/v1/fill/w_980,h_568,q_90,enc_avif,quality_auto/81b6c4_5330a85313044a22a35f589fffe6d9ba~mv2.jpg",
      "https://static.wixstatic.com/media/81b6c4_e6c75db583cb4643b94f6b05c7cad22b~mv2.jpg/v1/fill/w_980,h_568,q_90,enc_avif,quality_auto/81b6c4_e6c75db583cb4643b94f6b05c7cad22b~mv2.jpg",
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
      <main className="flex-1 pt-16">
        <section className="py-16 px-6 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Referenzen</h1>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Aus dem Bereich Küchen, Küchenstudio, Küchenplanung und Objektmöbel
          </p>

          <div className="space-y-20">
            {projects.map((p) => (
              <div key={p.title}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{p.title}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {p.images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={p.title}
                      className="w-full rounded-lg shadow-md object-cover aspect-[4/3]"
                      loading="lazy"
                    />
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
