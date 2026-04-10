import heroVideo from "@/assets/backround-TeaSteam.mp4";
import { Star, Clock, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.85)" }}
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-transparent" />

      <div className="relative z-10 w-full px-6 pb-16 pt-32 md:px-16 lg:px-24">
        <div className="max-w-4xl opacity-0 animate-fade-up">
          <p className="font-body text-sm uppercase tracking-[0.3em] text-gold mb-4">
            Est. Coimbatore
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-cream leading-[0.95] mb-6">
            Cafe Locus
          </h1>
          <p className="font-body text-cream/80 text-lg md:text-xl max-w-xl mb-8 opacity-0 animate-fade-up animation-delay-200">
            Where every cup tells a story and every bite is crafted with intention.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-cream/70 text-sm font-body opacity-0 animate-fade-up animation-delay-400">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span className="text-cream font-medium">4.7</span>
              <span>(329 reviews)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>Opens 11 AM — 10:30 PM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>Coimbatore</span>
            </div>
            <span className="text-cream/50">·</span>
            <span>₹800–1,000 per person</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;