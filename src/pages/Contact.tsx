import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock, Navigation, Star, Coffee, Users, Award, Clock as ClockIcon, Sparkles } from "lucide-react";

const Contact = () => {
  const cafeLocation = {
    address: "Cafe Locus, Coimbatore, Tamil Nadu, India",
    phone: "+91 63696 35321",
    email: "hello@cafelocus.com",
    hours: "11:00 AM - 10:30 PM (Daily)",
    // Correct Google Maps Embed URL format
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15675.789012345678!2d76.991386!3d11.0185734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859d0f989ca03%3A0xaa01f288d1920a87!2sCafe%20Locus!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsLink: "https://www.google.com/maps/place/Cafe+Locus/@11.0185734,76.991386,17z"
  };

  // SEO Structured Data (JSON-LD)
  const seoSchema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Cafe Locus",
    "url": "https://www.cafelocus.com",
    "telephone": "+916369635321",
    "email": "hello@cafelocus.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RS Puram",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641002",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.0185734",
      "longitude": "76.991386"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "11:00",
        "closes": "22:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday", "Sunday"],
        "opens": "11:00",
        "closes": "22:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "329",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "₹₹",
    "servesCuisine": ["Specialty Coffee", "Continental", "Asian Fusion", "Artisan Pastries"],
    "acceptsReservations": "True",
    "hasMenu": "https://www.cafelocus.com/menu"
  };

  return (
    <>
      <Helmet>
        <title>Cafe Locus Coimbatore — Location, Hours & Contact | Premium Artisan Café</title>
        <meta name="description" content="Visit Cafe Locus in Coimbatore for the finest specialty coffee, matcha lattes, and Korean fried wings. Open daily 11 AM - 10:30 PM. Get directions and book your table today." />
        <meta name="keywords" content="cafe locus coimbatore location, best cafe near me, coffee shop coimbatore, artisan cafe contact, specialty coffee coimbatore" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <meta name="geo.position" content="11.0185734;76.991386" />
        <meta name="ICBM" content="11.0185734, 76.991386" />
        <link rel="canonical" href="https://cafelocus.com/contact" />
        <script type="application/ld+json">
          {JSON.stringify(seoSchema)}
        </script>
      </Helmet>

      <section className="pt-32 pb-24 px-6 md:px-16 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-body text-gold font-semibold">Find Your Way</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">Visit Our Café</h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience the finest specialty coffee and artisanal matcha in the heart of <span className="text-gold font-semibold">Coimbatore</span>. 
              Our doors are open daily for your coffee rituals and culinary cravings.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* GOOGLE MAP SECTION - FIXED */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[450px] lg:h-[550px] bg-secondary border border-gold/20 relative">
              <iframe
                title="Cafe Locus Location Map - Coimbatore's Premium Coffee Shop"
                src={cafeLocation.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              {/* Directions Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <a 
                  href={cafeLocation.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-gold text-espresso py-3 rounded-xl font-body font-semibold shadow-lg hover:bg-gold/90 transition-all"
                >
                  <Navigation className="w-4 h-4" /> Get Directions on Google Maps
                </a>
              </div>
            </div>

            {/* CONTACT DETAILS SECTION */}
            <div className="space-y-8">
              <div className="bg-secondary rounded-3xl p-8 shadow-sm border border-gold/10">
                <h2 className="font-heading text-3xl mb-8 text-foreground flex items-center gap-2">
                  <MapPin className="w-7 h-7 text-gold" />
                  Location & Hours
                </h2>
                
                <div className="space-y-8">
                  {/* Address */}
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-all">
                      <MapPin className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <p className="font-heading text-lg font-semibold text-foreground mb-1">Our Address</p>
                      <p className="text-muted-foreground leading-relaxed">{cafeLocation.address}</p>
                      <a 
                        href={cafeLocation.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold font-body text-sm hover:underline inline-flex items-center gap-2 mt-2"
                      >
                        <Navigation className="w-3 h-3" /> Open in Maps
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-all">
                      <Phone className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <p className="font-heading text-lg font-semibold text-foreground mb-1">Call to Book</p>
                      <a href={`tel:${cafeLocation.phone.replace(/\s+/g, '')}`} className="text-muted-foreground hover:text-gold transition-colors text-lg font-body">
                        {cafeLocation.phone}
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">For reservations & group bookings</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-all">
                      <Clock className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <p className="font-heading text-lg font-semibold text-foreground mb-1">Opening Hours</p>
                      <div className="space-y-1">
                        <div className="flex justify-between gap-8">
                          <span className="text-muted-foreground">Monday - Thursday</span>
                          <span className="font-body font-semibold">11:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span className="text-muted-foreground">Friday - Sunday</span>
                          <span className="font-body font-semibold text-gold">11:00 AM - 10:30 PM</span>
                        </div>
                      </div>
                      <div className="mt-3 inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                        Open Now — Walk-ins Welcome
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-5 group">
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-all">
                      <Mail className="w-7 h-7 text-gold" />
                    </div>
                    <div>
                      <p className="font-heading text-lg font-semibold text-foreground mb-1">Email Us</p>
                      <a href={`mailto:${cafeLocation.email}`} className="text-muted-foreground hover:text-gold transition-colors font-body">
                        {cafeLocation.email}
                      </a>
                      <p className="text-xs text-muted-foreground mt-1">For partnerships & inquiries</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust/Metric Cards - Premium */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-background to-secondary rounded-2xl p-5 text-center border border-gold/10 hover:border-gold/30 transition-all group hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-all">
                    <Star className="w-6 h-6 text-gold" />
                  </div>
                  <p className="font-heading text-2xl font-bold text-foreground">4.7 ★</p>
                  <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mt-1">Google Rating</p>
                  <p className="text-[10px] text-gold mt-1">329+ Reviews</p>
                </div>
                <div className="bg-gradient-to-br from-background to-secondary rounded-2xl p-5 text-center border border-gold/10 hover:border-gold/30 transition-all group hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-all">
                    <Award className="w-6 h-6 text-gold" />
                  </div>
                  <p className="font-heading text-2xl font-bold text-foreground">Top 10%</p>
                  <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mt-1">Best Cafés</p>
                  <p className="text-[10px] text-gold mt-1">Coimbatore 2025</p>
                </div>
                <div className="bg-gradient-to-br from-background to-secondary rounded-2xl p-5 text-center border border-gold/10 hover:border-gold/30 transition-all group hover:shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-all">
                    <Coffee className="w-6 h-6 text-gold" />
                  </div>
                  <p className="font-heading text-2xl font-bold text-foreground">50+</p>
                  <p className="text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mt-1">Specialty Drinks</p>
                  <p className="text-[10px] text-gold mt-1">& Gourmet Dishes</p>
                </div>
              </div>

              {/* Premium Note */}
              
            </div>
          </div>

          
        </div>
      </section>
    </>
  );
};

export default Contact;