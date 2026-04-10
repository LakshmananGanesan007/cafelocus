import { Helmet } from "react-helmet-async";
import { useInView } from "react-intersection-observer";
import { Sparkles, ArrowDown, Coffee, Utensils } from "lucide-react";

// Top Highlight Items
const signatureHighlights = [
  {
    name: "Hazelnut Latte",
    description: "Rich espresso with creamy hazelnut, topped with silky microfoam art and a sprinkle of cocoa",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800",
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
    image: "https://images.unsplash.com/photo-1621236378699-8597faf6a176?auto=format&fit=crop&q=80&w=800",
    tag: "Must Try",
    price: "₹220",
  },
];

// Full Menu Categories with Premium Working Images
const fullMenuCategories = [
  {
    name: "Matcha & Speciality",
    image: "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Matcha Tender Coconut water", price: "₹349", description: "Fresh coconut water infused with premium matcha" },
      { name: "Matcha Latte (Berry/Mango)", price: "₹369", description: "Creamy matcha with fruit flavors" },
      { name: "Smoked Sea salt Matcha Latte", price: "₹369", description: "Unique savory-sweet matcha experience" },
      { name: "Hojicha Latte", price: "₹369", description: "Roasted green tea latte" },
    ],
  },
  {
    name: "Cold Coffee & Classics",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "OG Cold Coffee", price: "₹349", description: "Classic chilled coffee blend" },
      { name: "Hazelnut Cold Coffee", price: "₹359", description: "Nutty hazelnut infused cold brew" },
      { name: "Mocha Frappe", price: "₹369", description: "Chocolate coffee frozen delight" },
      { name: "Flat White", price: "₹240", description: "Smooth espresso with silky milk" },
      { name: "Cold Brew", price: "₹230", description: "Slow-steeped for 12 hours" },
    ],
  },
  {
    name: "Gourmet Mains",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Grilled Chicken Sandwich", price: "₹380", description: "Pesto, mozzarella, grilled chicken" },
      { name: "Pesto Pasta", price: "₹350", description: "Creamy pesto with cherry tomatoes" },
      { name: "Brioche Burger", price: "₹420", description: "Angus beef patty, caramelized onions" },
      { name: "Veg Club Sandwich", price: "₹320", description: "Layered with fresh veggies" },
      { name: "Margherita Pizza", price: "₹390", description: "Fresh mozzarella and basil" },
    ],
  },
  {
    name: "Starters & Bites",
    image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Korean Fried Wings", price: "₹350", description: "Gochujang glazed, sesame seeds" },
      { name: "Chilli Oil Wontons", price: "₹280", description: "Crispy dumplings with spicy oil" },
      { name: "Truffle Fries", price: "₹220", description: "Parmesan and truffle oil" },
      { name: "Garlic Bread", price: "₹180", description: "With mozzarella and herbs" },
      { name: "Calamari Rings", price: "₹320", description: "Crispy with aioli dip" },
    ],
  },
  {
    name: "Handcrafted Lemonades",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Cranberry Lemonade", price: "₹229", description: "Tangy cranberry with fresh lemon" },
      { name: "Litchi Blue Pea", price: "₹249", description: "Floral blue pea with sweet litchi" },
      { name: "Passionfruit Lemonade", price: "₹249", description: "Tropical passionfruit zing" },
    ],
  },
  {
    name: "Iced Teas & Kombucha",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Peach Iced Tea", price: "₹249", description: "Sweet peach infused black tea" },
      { name: "Passionfruit Iced Tea", price: "₹249", description: "Tropical passionfruit tea" },
      { name: "Cucumber Mint Kombucha", price: "₹329", description: "Refreshing fermented tea" },
      { name: "Pineapple Rosemary Kombucha", price: "₹329", description: "Tropical herbal kombucha" },
      { name: "Homemade Probiotics", price: "₹299", description: "Raw and un-pasteurised gut-healthy drink" },
    ],
  },
  {
    name: "Desserts & Bakes",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Chocolate Almond Cruffin", price: "₹220", description: "Croissant-muffin hybrid" },
      { name: "Tiramisu", price: "₹250", description: "Classic Italian dessert" },
      { name: "Belgian Chocolate Cake", price: "₹230", description: "Rich chocolate ganache" },
      { name: "New York Cheesecake", price: "₹240", description: "With berry compote" },
      { name: "Molten Lava Cake", price: "₹260", description: "Warm chocolate with ice cream" },
    ],
  },
  {
    name: "Chocolate & Floats",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Hot Chocolate", price: "₹359", description: "Rich creamy Belgian hot chocolate" },
      { name: "Cold Chocolate", price: "₹359", description: "Chilled chocolate delight" },
      { name: "Coke Float", price: "₹229", description: "Classic cola with vanilla ice cream" },
      { name: "Root Beer Float", price: "₹249", description: "Root beer with creamy ice cream" },
    ],
  },
];

const Menu = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scrollToFullMenu = () => {
    document.getElementById("full-menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Our Menu — Cafe Locus | Specialty Coffee & Gourmet Bites</title>
        <meta name="description" content="Explore our menu featuring matcha lattes, handcrafted lemonades, cold coffee, signature starters, mains, and delicious desserts. Made with premium ingredients." />
      </Helmet>

      {/* --- SECTION 1: SIGNATURE HIGHLIGHTS --- */}
      <section ref={ref} className="pt-32 pb-20 px-6 md:px-16 lg:px-24 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-body text-gold font-semibold">Cafe Locus</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">Signature Creations</h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Discover our most loved dishes and beverages, crafted thoughtfully with premium ingredients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {signatureHighlights.map((item, index) => (
              <div
                key={item.name}
                className={`group bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
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
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
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

          <div className="text-center mt-14">
            <button
              onClick={scrollToFullMenu}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-background border border-gold/30 text-foreground font-body font-semibold rounded-full hover:bg-gold hover:text-espresso transition-all duration-300 hover:scale-105 shadow-sm"
            >
              Explore Full Menu
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE FULL MENU BOARD --- */}
      <section id="full-menu" className="py-24 px-6 md:px-16 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl text-foreground mb-4">Complete Menu</h2>
            <div className="flex items-center justify-center gap-4 text-muted-foreground">
              <Coffee className="w-5 h-5 text-gold" />
              <span className="w-12 h-px bg-gold/30"></span>
              <Utensils className="w-5 h-5 text-gold" />
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {fullMenuCategories.map((category, idx) => (
              <div key={idx} className="bg-secondary rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col sm:flex-row">
                
                {/* Image Section */}
                <div className="relative h-56 sm:h-auto sm:w-2/5 overflow-hidden shrink-0">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 pr-4">
                    <h3 className="font-heading text-2xl text-cream leading-tight">{category.name}</h3>
                  </div>
                </div>

                {/* Items Section */}
                <div className="p-6 sm:w-3/5 flex flex-col justify-center bg-secondary">
                  <div className="space-y-4">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-start border-b border-border/50 pb-3 last:border-0 last:pb-0">
                        <div className="flex-1 pr-4">
                          <h4 className="font-heading text-sm md:text-base text-foreground mb-1">{item.name}</h4>
                          <p className="font-body text-xs text-muted-foreground">{item.description}</p>
                        </div>
                        <span className="font-body font-semibold text-gold whitespace-nowrap text-sm mt-0.5">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 text-center border-t border-border">
            <p className="font-body text-sm text-muted-foreground italic">
              * Prices are inclusive of taxes. Please ask our staff about our daily fresh bakes and seasonal specials.
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Menu;