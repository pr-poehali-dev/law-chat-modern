
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Business services imports
import RealEstate from "./pages/services/RealEstate";
import Corporate from "./pages/services/Corporate";
import Disputes from "./pages/services/Disputes";
import Bankruptcy from "./pages/services/Bankruptcy";
import Tax from "./pages/services/Tax";
import Criminal from "./pages/services/Criminal";
import IPIT from "./pages/services/IPIT";

// Individual services imports
import Conflicts from "./pages/services/individual/Conflicts";
import PersonalAssets from "./pages/services/individual/PersonalAssets";
import PersonalTax from "./pages/services/individual/PersonalTax";
import Compliance from "./pages/services/individual/Compliance";
import InheritanceProtection from "./pages/services/individual/InheritanceProtection";
import Family from "./pages/services/individual/Family";
import InheritanceDisputes from "./pages/services/individual/InheritanceDisputes";
import Housing from "./pages/services/individual/Housing";
import Consumer from "./pages/services/individual/Consumer";
import Labor from "./pages/services/individual/Labor";
import Civil from "./pages/services/individual/Civil";
import EstatePlanning from "./pages/services/individual/EstatePlanning";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Business Services Routes */}
          <Route path="/services/RealEstate" element={<RealEstate />} />
          <Route path="/services/Corporate" element={<Corporate />} />
          <Route path="/services/Disputes" element={<Disputes />} />
          <Route path="/services/Bankruptcy" element={<Bankruptcy />} />
          <Route path="/services/Tax" element={<Tax />} />
          <Route path="/services/Criminal" element={<Criminal />} />
          <Route path="/services/IPIT" element={<IPIT />} />
          
          {/* Individual Services Routes */}
          <Route path="/services/individual/Conflicts" element={<Conflicts />} />
          <Route path="/services/individual/PersonalAssets" element={<PersonalAssets />} />
          <Route path="/services/individual/PersonalTax" element={<PersonalTax />} />
          <Route path="/services/individual/Compliance" element={<Compliance />} />
          <Route path="/services/individual/InheritanceProtection" element={<InheritanceProtection />} />
          <Route path="/services/individual/Family" element={<Family />} />
          <Route path="/services/individual/InheritanceDisputes" element={<InheritanceDisputes />} />
          <Route path="/services/individual/Housing" element={<Housing />} />
          <Route path="/services/individual/Consumer" element={<Consumer />} />
          <Route path="/services/individual/Labor" element={<Labor />} />
          <Route path="/services/individual/Civil" element={<Civil />} />
          <Route path="/services/individual/EstatePlanning" element={<EstatePlanning />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;