import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const menuItems = [
  {
    name: "Hazelnut Latte",
    description: "Rich espresso with creamy hazelnut, topped with silky microfoam art and a sprinkle of cocoa",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800",
    tag: "Signature",
    price: "₹250",
  },
  {
    name: "Korean Fried Wings",
    description: "Crispy & flavorful, glazed with gochujang sauce, sesame seeds & fresh scallions",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=800",
    tag: "Best Seller",
    price: "₹350",
  },
  {
    name: "Chocolate Almond Cruffin",
    description: "Flaky croissant-muffin hybrid filled with rich chocolate ganache & toasted almonds",
    // Fixed Image: Reliable URL for a premium chocolate pastry/croissant
    image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?auto=format&fit=crop&q=80&w=800",
    tag: "Must Try",
    price: "₹220",
  },
];

const MenuHighlights = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold font-body mb-4">The Menu</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">Signature Creations</h2>
          <p className="font-body text-muted-foreground mt-4">Discover our most loved dishes, crafted with premium ingredients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.name}
              className={`group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                inView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    // Fallback just in case
                    e.currentTarget.src = "https://images.unsplash.com/photo-1495474472204-518605ec2187?auto=format&fit=crop&q=80&w=800"; 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 left-4 bg-gold text-espresso text-xs uppercase tracking-wider px-3 py-1.5 rounded-full font-body font-semibold shadow-md">
                  {item.tag}
                </span>
                <span className="absolute bottom-4 right-4 bg-espresso/90 text-cream px-3 py-1.5 rounded-full font-body text-sm font-semibold shadow-lg backdrop-blur-sm">
                  {item.price}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-foreground mb-2">{item.name}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            // FIX: Forces the browser to snap to the very top of the new page
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-espresso font-body font-semibold rounded-full hover:bg-gold/90 transition-all duration-300 hover:scale-105 shadow-md"
          >
            See Full Menu
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;