import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter, Navigation } from "lucide-react";
import logo from "@/assets/cafe-locus -Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand with Logo - Increased Size */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="Cafe Locus Logo" 
              className="h-24 w-auto mb-4 object-contain"
            />
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              Where every cup tells a story and every bite is crafted with intention.
            </p>
            <a 
              href="https://www.google.com/maps/place/Cafe+Locus/@11.0186341,76.9912881,17z/data=!4m15!1m8!3m7!1s0x3ba859d0f989ca03:0xaa01f288d1920a87!2sCafe+Locus!8m2!3d11.0185734!4d76.991386!10e9!16s%2Fg%2F11y0p4w8xh!3m5!1s0x3ba859d0f989ca03:0xaa01f288d1920a87!8m2!3d11.0185734!4d76.991386!16s%2Fg%2F11y0p4w8xh?entry=ttu&g_ep=EgoyMDI2MDQwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-gold/80 text-sm"
            >
              <Navigation className="w-4 h-4" /> Get Directions on Google Maps
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Menu", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-body text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg">Visit Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <span className="font-body text-sm text-primary-foreground/70">
                  Coimbatore, Tamil Nadu, India
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <span className="font-body text-sm text-primary-foreground/70">
                  Open daily 11:00 AM — 10:30 PM
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <span className="font-body text-sm text-primary-foreground/70">
                  +91 63696 35321
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
                <span className="font-body text-sm text-primary-foreground/70">
                  hello@cafelocus.com
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/cafe.locus/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
            <div className="pt-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-live animate-pulse" />
                <span className="font-body text-sm text-primary-foreground/70">Open Now</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="font-body text-xs text-primary-foreground/40 text-center">
            © {currentYear} Cafe Locus. All rights reserved. | Crafted with HelloWeb 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;