import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Coffee, Sparkles } from "lucide-react";
import logo from "@/assets/cafe-locus -Logo.png";
import FeaturesModal from "@/components/common/FeaturesModal";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFeaturesModalOpen, setIsFeaturesModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md py-3 shadow-lg"
            : "bg-gradient-to-b from-black/60 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <Link to="/" className="flex items-center gap-2 group">
              {!scrolled ? (
                <img 
                  src={logo} 
                  alt="Cafe Locus Logo" 
                  className="h-16 w-auto transition-all duration-300"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              ) : (
                <>
                  <Coffee className="w-6 h-6 text-espresso" />
                  <span className="font-heading text-xl tracking-wide text-foreground">
                    Cafe Locus
                  </span>
                </>
              )}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-body text-sm tracking-wide transition-all duration-300 relative group ${
                    scrolled ? "text-muted-foreground hover:text-foreground" : "text-cream/90 hover:text-cream"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* See Features Button */}
              <button
                onClick={() => setIsFeaturesModalOpen(true)}
                className={`px-5 py-2.5 font-body text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 ${
                  scrolled 
                    ? "bg-secondary text-foreground hover:bg-secondary/80 border border-gold/30" 
                    : "bg-white/10 backdrop-blur-sm text-cream hover:bg-white/20 border border-cream/30"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                See Features
              </button>
              
              {/* Book a Table Button */}
              <Link
                to="/reservations"
                className={`px-6 py-2.5 font-body text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 ${
                  scrolled 
                    ? "bg-gold text-espresso hover:bg-gold/90" 
                    : "bg-gold text-espresso hover:bg-gold/90"
                }`}
              >
                Book a Table
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden ${scrolled ? "text-foreground" : "text-cream"}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-background/95 backdrop-blur-md rounded-lg p-6 animate-fade-in">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-sm text-foreground hover:text-gold transition-colors py-2"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsFeaturesModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="px-5 py-2.5 bg-secondary text-foreground font-body text-sm font-semibold rounded-full text-center hover:bg-secondary/80 transition-all inline-flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                See Features
              </button>
              <Link
                to="/reservations"
                className="px-6 py-2.5 bg-gold text-espresso font-body text-sm font-semibold rounded-full text-center hover:bg-gold/90 transition-all"
              >
                Book a Table
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Features Modal */}
      <FeaturesModal 
        isOpen={isFeaturesModalOpen} 
        onClose={() => setIsFeaturesModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;