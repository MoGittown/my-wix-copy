import { Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import CookieBanner from "./components/CookieBanner";

// SSR: Direkte Imports statt lazy() für vollständiges Server-Rendering
import Index from "./pages/Index";
import Unternehmen from "./pages/Unternehmen";
import Referenzen from "./pages/Referenzen";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import ReferencePage from "./pages/ReferencePage";
import Kontakt from "./pages/Kontakt";
import Faq from "./pages/Faq";
import KuechenRheinErftKreis from "./pages/KuechenRheinErftKreis";
import KuechenstudioKoeln from "./pages/KuechenstudioKoeln";
import KuechenstudioBonn from "./pages/KuechenstudioBonn";
import KuechenstudioBruehl from "./pages/KuechenstudioBruehl";
import TeekcueheBuero from "./pages/TeekcueheBuero";

const App = () => (
  <>
    <Toaster />
    <Sonner />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/unternehmen" element={<Unternehmen />} />
      <Route path="/referenzen" element={<Referenzen />} />
      <Route path="/referenzen/:slug" element={<ReferencePage />} />
      <Route path="/kontakt" element={<Kontakt />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/kuechenstudio-erftstadt" element={<ServicePage slug="kuechenstudio-erftstadt" />} />
      <Route path="/praxiseinrichtung" element={<ServicePage slug="praxiseinrichtung" />} />
      <Route path="/bueroeinrichtung" element={<ServicePage slug="bueroeinrichtung" />} />
      <Route path="/objektmoebel" element={<ServicePage slug="objektmoebel" />} />
      <Route path="/stahlkuechen" element={<ServicePage slug="stahlkuechen" />} />
      <Route path="/projektbegleitung" element={<ServicePage slug="projektbegleitung" />} />
      <Route path="/kuechen-rhein-erft-kreis" element={<KuechenRheinErftKreis />} />
      <Route path="/kuechenstudio-koeln" element={<KuechenstudioKoeln />} />
      <Route path="/kuechenstudio-bonn" element={<KuechenstudioBonn />} />
      <Route path="/kuechenstudio-bruehl" element={<KuechenstudioBruehl />} />
      <Route path="/teekueche-buero" element={<TeekcueheBuero />} />
      <Route path="/impressum" element={<Impressum />} />
      <Route path="/datenschutz" element={<Datenschutz />} />
      <Route path="/datenschutzerklärung" element={<Datenschutz />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <CookieBanner />
  </>
);

export default App;
