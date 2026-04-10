import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import Layout from "@/components/layout/Layout";
import Index from "@/pages/Index";
import Menu from "@/pages/Menu";
import AboutPage from "@/pages/AboutPage";
import Contact from "@/pages/Contact";
import ReservationPage from "@/pages/ReservationPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

function App() {
  console.log("App is rendering"); // Debug log
  
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservations" element={<ReservationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;