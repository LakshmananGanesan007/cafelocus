import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import MenuHighlights from "@/components/sections/MenuHighlights";
import Reviews from "@/components/sections/Reviews";
import PopularTimes from "@/components/sections/PopularTimes";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="about"><About /></div>
      <div id="menu"><MenuHighlights /></div>
      <div id="reviews"><Reviews /></div>
      <div id="visit"><PopularTimes /></div>
    </div>
  );
};

export default Index;