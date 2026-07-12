import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CookieBanner from "./components/CookieBanner";

// Code-Splitting: Unterseiten erst bei Bedarf laden → schnellerer Initial-Load
const Unternehmen = lazy(() => import("./pages/Unternehmen.tsx"));
const Referenzen = lazy(() => import("./pages/Referenzen.tsx"));
const Impressum = lazy(() => import("./pages/Impressum.tsx"));
const Datenschutz = lazy(() => import("./pages/Datenschutz.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const ServicePage = lazy(() => import("./pages/ServicePage.tsx"));
const ReferencePage = lazy(() => import("./pages/ReferencePage.tsx"));
const Kontakt = lazy(() => import("./pages/Kontakt.tsx"));
const Faq = lazy(() => import("./pages/Faq.tsx"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen bg-background" aria-hidden="true" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageFallback />}>
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
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/datenschutzerklärung" element={<Datenschutz />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
