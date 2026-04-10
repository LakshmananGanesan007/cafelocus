import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, Clock, Users, Mail, Phone, User, MessageCircle, Coffee, Star, Clock as ClockIcon, MapPin, Check, Send, Sparkles } from "lucide-react";

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    occasion: "",
    specialRequests: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format WhatsApp message
    const message = `🍽️ *New Table Reservation Request* 🍽️

*Guest Details:*
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}

*Reservation Details:*
📅 Date: ${formData.date}
⏰ Time: ${formData.time}
👥 Number of Guests: ${formData.guests}
🎉 Occasion: ${formData.occasion || "Not specified"}

*Special Requests:*
${formData.specialRequests || "None"}

📍 Cafe Locus, Coimbatore
⭐ Rated 4.7 ★ by 329+ guests

*Please confirm my reservation. Thank you!*`;
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/916369635321?text=${encodeURIComponent(message)}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const occasions = ["Birthday", "Anniversary", "Date Night", "Business Meeting", "Family Gathering", "Other"];
  const timeSlots = ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"];

  return (
    <>
      <Helmet>
        <title>Book a Table — Cafe Locus | Reserve Your Dining Experience</title>
        <meta name="description" content="Reserve your table at Cafe Locus, Coimbatore's premium artisan café. Book online for an unforgettable dining experience with specialty coffee and signature dishes." />
        <meta name="keywords" content="cafe reservation coimbatore, book table online, cafe locus booking, restaurant reservation" />
        <link rel="canonical" href="https://cafelocus.com/reservations" />
      </Helmet>

      <section className="pt-32 pb-24 px-6 md:px-16 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-body text-gold font-semibold">Reserve Your Table</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-4">Book a Table</h1>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Secure your spot for an unforgettable dining experience at Coimbatore's finest café
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-secondary rounded-xl p-4 text-center">
              <Star className="w-6 h-6 text-gold mx-auto mb-2" />
              <p className="font-heading text-2xl font-bold">4.7 ★</p>
              <p className="text-xs text-muted-foreground">329+ Reviews</p>
            </div>
            <div className="bg-secondary rounded-xl p-4 text-center">
              <ClockIcon className="w-6 h-6 text-gold mx-auto mb-2" />
              <p className="font-heading text-2xl font-bold">11 AM - 10:30 PM</p>
              <p className="text-xs text-muted-foreground">Open Daily</p>
            </div>
            <div className="bg-secondary rounded-xl p-4 text-center">
              <Coffee className="w-6 h-6 text-gold mx-auto mb-2" />
              <p className="font-heading text-2xl font-bold">50+</p>
              <p className="text-xs text-muted-foreground">Menu Items</p>
            </div>
            <div className="bg-secondary rounded-xl p-4 text-center">
              <Users className="w-6 h-6 text-gold mx-auto mb-2" />
              <p className="font-heading text-2xl font-bold">1-12</p>
              <p className="text-xs text-muted-foreground">Guests Capacity</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Reservation Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-border">
                <div className="bg-gradient-to-r from-gold/10 to-transparent px-6 py-4 border-b border-border">
                  <h2 className="font-heading text-2xl text-foreground flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-gold" />
                    Make a Reservation
                  </h2>
                  <p className="font-body text-sm text-muted-foreground mt-1">Fill the details below and we'll confirm via WhatsApp</p>
                </div>

                {submitted ? (
                  <div className="p-12 text-center animate-fade-in">
                    <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-10 h-10 text-gold" />
                    </div>
                    <h3 className="font-heading text-2xl mb-2">Reservation Request Sent!</h3>
                    <p className="font-body text-muted-foreground">
                      Thank you {formData.name}! We'll respond on WhatsApp shortly to confirm your booking.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-sm font-semibold mb-2">Full Name *</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-border rounded-lg focus:border-gold focus:outline-none transition-colors font-body"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block font-body text-sm font-semibold mb-2">Email *</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-border rounded-lg focus:border-gold focus:outline-none transition-colors font-body"
                            placeholder="hello@example.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-sm font-semibold mb-2">Phone Number *</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-border rounded-lg focus:border-gold focus:outline-none transition-colors font-body"
                            placeholder="+91 6369635321"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">We'll send confirmation on WhatsApp</p>
                      </div>
                      <div>
                        <label className="block font-body text-sm font-semibold mb-2">Number of Guests *</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <select
                            name="guests"
                            value={formData.guests}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-border rounded-lg focus:border-gold focus:outline-none transition-colors appearance-none font-body"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(num => (
                              <option key={num} value={num}>{num} {num === 1 ? "Guest" : "Guests"}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-body text-sm font-semibold mb-2">Date *</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            type="date"
                            name="date"
                            required
                            value={formData.date}
                            onChange={handleChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-border rounded-lg focus:border-gold focus:outline-none transition-colors font-body"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block font-body text-sm font-semibold mb-2">Time *</label>
                        <div className="relative">
                          <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <select
                            name="time"
                            required
                            value={formData.time}
                            onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-border rounded-lg focus:border-gold focus:outline-none transition-colors appearance-none font-body"
                          >
                            <option value="">Select time</option>
                            {timeSlots.map(time => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-sm font-semibold mb-2">Occasion (Optional)</label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <select
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-secondary/50 border border-border rounded-lg focus:border-gold focus:outline-none transition-colors appearance-none font-body"
                        >
                          <option value="">Select occasion</option>
                          {occasions.map(occasion => (
                            <option key={occasion} value={occasion}>{occasion}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-sm font-semibold mb-2">Special Requests (Optional)</label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:border-gold focus:outline-none transition-colors resize-none font-body"
                        placeholder="Dietary restrictions, allergies, seating preferences, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-gold to-yellow-500 text-espresso font-body font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Confirm Reservation on WhatsApp
                    </button>

                    <p className="text-center text-xs text-muted-foreground">
                      By submitting, you agree to receive confirmation on WhatsApp. No spam, guaranteed.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Info Side */}
            <div className="lg:col-span-2 space-y-6">
              {/* Opening Hours Card */}
              <div className="bg-gradient-to-br from-gold/5 to-transparent rounded-2xl p-6 border border-gold/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-heading text-xl">Opening Hours</h3>
                </div>
                <div className="space-y-2 font-body">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span>Monday - Thursday</span>
                    <span className="font-semibold">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span>Friday - Sunday</span>
                    <span className="font-semibold text-gold">11:00 AM - 10:30 PM</span>
                  </div>
                  <div className="flex items-center gap-2 mt-3 pt-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm text-green-600 font-semibold">Open Now</span>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-secondary rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-heading text-xl">Location</h3>
                </div>
                <p className="font-body text-muted-foreground mb-3">Coimbatore, Tamil Nadu, India</p>
                <a 
                  href="https://www.google.com/maps/place/Cafe+Locus/@11.0185734,76.991386,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold/80 text-sm font-body"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions on Google Maps
                </a>
              </div>

              {/* Why Book With Us */}
              <div className="bg-espresso text-cream rounded-2xl p-6">
                <h3 className="font-heading text-xl mb-4">Why Book With Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="font-body text-sm">Priority seating on arrival</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="font-body text-sm">Dedicated table for your party</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="font-body text-sm">Easy rescheduling up to 2 hours before</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <span className="font-body text-sm">Special occasion decorations available</span>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="font-heading text-xl mb-3">Need Help?</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">Call us directly for instant booking</p>
                <a 
                  href="tel:+916369635321"
                  className="inline-flex items-center gap-2 text-gold font-semibold font-body"
                >
                  <Phone className="w-4 h-4" />
                  +91 63696 35321
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="font-heading text-2xl text-center mb-8">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Clock className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-heading font-semibold mb-2">Cancellation Policy?</h4>
                <p className="font-body text-sm text-muted-foreground">Free cancellation up to 2 hours before reservation</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-heading font-semibold mb-2">Large Groups?</h4>
                <p className="font-body text-sm text-muted-foreground">Contact us directly for groups of 8+ people</p>
              </div>
              <div className="text-center">
                <Coffee className="w-8 h-8 text-gold mx-auto mb-3" />
                <h4 className="font-heading font-semibold mb-2">Parking Available?</h4>
                <p className="font-body text-sm text-muted-foreground">Ample parking space available nearby</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReservationPage;