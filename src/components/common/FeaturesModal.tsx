import { useState } from "react";
import { X, Check, Star, Coffee, Sparkles, MessageCircle, FileText, Settings, ShoppingBag, TrendingUp, Users, Award, Clock, Zap, Rocket, Crown, Heart } from "lucide-react";

interface FeaturesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeaturesModal = ({ isOpen, onClose }: FeaturesModalProps) => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [customRequirements, setCustomRequirements] = useState("");
  const [selectedStarterFeatures, setSelectedStarterFeatures] = useState<string[]>([]);
  const [selectedBusinessFeatures, setSelectedBusinessFeatures] = useState<string[]>([]);

  if (!isOpen) return null;

  const starterFeatures = [
    "Animated Home Page with modern design",
    "About Us Page to introduce your café story",
    "Static Menu Page displaying all menu items with prices & images",
    "Contact Page with Email, WhatsApp, and Social Media connections",
    "Fully Responsive Design (Mobile & Laptop friendly)",
    "Basic SEO Setup for search engine visibility",
    "Google Maps Integration for easy location access",
    "Social Media Integration with direct links",
    "Separate Domain Setup using your café name",
    "High-Speed Website Performance",
    "Hosting on reliable cloud platforms",
    "24/7 Technical Support",
    "Stable website performance with minimal errors",
    "Table Booking Option via Email & WhatsApp",
    "Smooth Animations for better user experience",
    "Multi-language Support",
    "Advanced Security Verification Setup",
    "Dedicated Domain for One Year",
    "Analytic report every month (collect website visitor data)"
  ];

  const businessFeatures = [
    "High-Speed Optimized Web Pages",
    "Dedicated Admin Dashboard to update menu items",
    "Manage open/close status",
    "Customer Data Collection System",
    "Photo Gallery to showcase café ambience",
    "Online Reservation System",
    "Menu with Categories",
    "Advanced Animations",
    "Advanced SEO Optimization",
    "Performance Optimization",
    "Google Analytics Setup",
    "Instagram Feed Integration",
    "Review & Testimonial Section",
    "Feedback Monitoring System",
    "Online Ordering System (7 Days Free Trial)",
    "Multi-language Support",
    "Secure Login Dashboard",
    "Dedicated Domain Name for 2 Years"
  ];

  const premiumFeatures = [
    "Everything included in BUSINESS Plan",
    "Full Online Ordering System",
    "Secure Payment Gateway Integration",
    "Loyalty Program",
    "Premium UI/UX Custom Design",
    "Custom Advanced Animations",
    "Blog System",
    "Multi-language Support",
    "Advanced Admin Dashboard",
    "Menu Management Panel",
    "Website Speed Optimization",
    "Advanced Security Setup",
    "Automated Backup System",
    "Customer Data Collection & Management",
    "Offer Notification System",
    "Marketing Notification System",
    "Dedicated Domain for 3 Years"
  ];

  const handleWhatsAppClick = (plan: string) => {
    let message = "";
    if (plan === "custom") {
      const starterSelected = selectedStarterFeatures.length > 0 
        ? `\n\nSelected Features from STARTER PLAN:\n${selectedStarterFeatures.map(f => `✓ ${f}`).join("\n")}`
        : "";
      const businessSelected = selectedBusinessFeatures.length > 0
        ? `\n\nSelected Features from BUSINESS PLAN:\n${selectedBusinessFeatures.map(f => `✓ ${f}`).join("\n")}`
        : "";
      
      message = `Hi HelloWeb Team,

I am interested in the CUSTOM Website Package.
${starterSelected}
${businessSelected}

Additional Requirements:
${customRequirements || "None specified"}

Please contact me with more details.

Thank you.`;
    } else {
      const planName = plan.toUpperCase();
      message = `Hi HelloWeb Team,

I am interested in the ${planName} Website Package.

Selected Plan: ${planName} PLAN

Please contact me with more details.

Thank you.`;
    }
    
    window.open(`https://wa.me/918124305461?text=${encodeURIComponent(message)}`, "_blank");
  };

  const toggleStarterFeature = (feature: string) => {
    setSelectedStarterFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const toggleBusinessFeature = (feature: string) => {
    setSelectedBusinessFeatures(prev =>
      prev.includes(feature)
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    );
  };

  const selectAllStarter = () => {
    if (selectedStarterFeatures.length === starterFeatures.length) {
      setSelectedStarterFeatures([]);
    } else {
      setSelectedStarterFeatures([...starterFeatures]);
    }
  };

  const selectAllBusiness = () => {
    if (selectedBusinessFeatures.length === businessFeatures.length) {
      setSelectedBusinessFeatures([]);
    } else {
      setSelectedBusinessFeatures([...businessFeatures]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-espresso/95 backdrop-blur-md" onClick={onClose}>
      <div className="min-h-screen px-4 py-8 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <div className="relative max-w-5xl w-full bg-background rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-background z-10 border-b border-border px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h2 className="font-heading text-xl text-foreground">Enterprise Solutions</h2>
                <p className="font-body text-xs text-muted-foreground">Professional website packages for your café</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>
          </div>
          
          <div className="p-6 md:p-8">
            {/* Plan Selection Tabs */}
            {!selectedPlan ? (
              <div className="grid md:grid-cols-4 gap-4">
                {/* Starter Plan Card */}
                <button
                  onClick={() => setSelectedPlan("starter")}
                  className="p-6 bg-secondary rounded-xl text-left hover:shadow-lg transition-all border-2 border-transparent hover:border-gold/30 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <FileText className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-1">Starter Plan</h3>
                  <p className="font-body text-xs text-muted-foreground">Essential features for online presence</p>
                  <div className="mt-3 flex items-center gap-2 text-gold">
                    <Rocket className="w-3 h-3" />
                    <span className="text-xs font-semibold">Perfect for beginners</span>
                  </div>
                </button>

                {/* Business Plan Card - Highlighted */}
                <button
                  onClick={() => setSelectedPlan("business")}
                  className="p-6 bg-secondary rounded-xl text-left hover:shadow-lg transition-all border-2 border-gold/30 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0">
                    <div className="bg-gold text-espresso text-xs px-3 py-1 rounded-bl-lg flex items-center gap-1 font-semibold">
                      <Star className="w-3 h-3 fill-current" /> Most Popular
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Settings className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-1">Business Plan</h3>
                  <p className="font-body text-xs text-muted-foreground">Advanced management tools</p>
                  <div className="mt-3 flex items-center gap-2 text-gold">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-xs font-semibold">27+ cafés chose this plan</span>
                  </div>
                </button>

                {/* Premium Plan Card */}
                <button
                  onClick={() => setSelectedPlan("premium")}
                  className="p-6 bg-secondary rounded-xl text-left hover:shadow-lg transition-all border-2 border-transparent hover:border-gold/30 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Crown className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-1">Premium Plan</h3>
                  <p className="font-body text-xs text-muted-foreground">Complete automation & marketing</p>
                  <div className="mt-3 flex items-center gap-2 text-gold">
                    <Award className="w-3 h-3" />
                    <span className="text-xs font-semibold">Best value for brands</span>
                  </div>
                </button>

                {/* Custom Plan Card */}
                <button
                  onClick={() => setSelectedPlan("custom")}
                  className="p-6 bg-secondary rounded-xl text-left hover:shadow-lg transition-all border-2 border-transparent hover:border-gold/30 group"
                >
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <ShoppingBag className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-heading text-lg text-foreground mb-1">Custom Plan</h3>
                  <p className="font-body text-xs text-muted-foreground">Tailored to your needs</p>
                  <div className="mt-3 flex items-center gap-2 text-gold">
                    <Heart className="w-3 h-3" />
                    <span className="text-xs font-semibold">Build your own package</span>
                  </div>
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="mb-6 inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors font-body text-sm"
                >
                  ← Back to all plans
                </button>

                {/* Starter Plan Details */}
                {selectedPlan === "starter" && (
                  <div className="border border-border rounded-xl overflow-hidden">
                    <div className="bg-secondary px-6 py-4 border-b border-border">
                      <h3 className="font-heading text-xl text-foreground">Starter Plan</h3>
                      <p className="font-body text-sm text-muted-foreground">Essential features for your café's online presence</p>
                    </div>
                    <div className="p-6">
                      {/* Trust Indicators for Starter */}
                      <div className="grid grid-cols-3 gap-4 mb-6 pb-4 border-b border-border">
                        <div className="flex items-center gap-2">
                          <Rocket className="w-4 h-4 text-gold" />
                          <div>
                            <p className="font-body text-xs font-semibold text-foreground">Quick Launch</p>
                            <p className="font-body text-xs text-muted-foreground">14-day deployment</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gold" />
                          <div>
                            <p className="font-body text-xs font-semibold text-foreground">Trusted Choice</p>
                            <p className="font-body text-xs text-muted-foreground">20+ cafés started here</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-gold" />
                          <div>
                            <p className="font-body text-xs font-semibold text-foreground">4.7 Rating</p>
                            <p className="font-body text-xs text-muted-foreground">Client satisfaction</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                        {starterFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                            <span className="font-body text-sm text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-border">
                        <button
                          onClick={() => handleWhatsAppClick("starter")}
                          className="w-full py-3 bg-gold text-espresso font-body font-semibold rounded-lg hover:bg-gold/90 transition-all flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Request Starter Plan on WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Business Plan Details with Premium Stats */}
                {selectedPlan === "business" && (
                  <div className="border-2 border-gold/40 rounded-xl overflow-hidden shadow-xl">
                    <div className="bg-gradient-to-br from-gold/5 via-gold/10 to-transparent px-6 py-6 border-b border-gold/20">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Star className="w-5 h-5 text-gold fill-gold" />
                            <h3 className="font-heading text-2xl text-foreground">Business Plan</h3>
                            <span className="bg-gold text-espresso text-xs px-2 py-0.5 rounded-full font-semibold">Most Popular</span>
                          </div>
                          <p className="font-body text-sm text-muted-foreground">Advanced management tools for growing cafés</p>
                        </div>
                        <div className="bg-gold/15 rounded-xl px-4 py-2 text-center border border-gold/20">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-gold" />
                            <span className="font-body text-xs text-muted-foreground">Last 3 months</span>
                          </div>
                          <div className="flex items-baseline gap-1">
                            <span className="font-heading text-2xl font-bold text-gold">27+</span>
                            <span className="font-body text-xs text-muted-foreground">cafés selected</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-gold/10">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gold" />
                          <div>
                            <p className="font-body text-xs font-semibold text-foreground">Growing Fast</p>
                            <p className="font-body text-xs text-muted-foreground">Trusted by 50+ cafés</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-gold" />
                          <div>
                            <p className="font-body text-xs font-semibold text-foreground">4.9 Rating</p>
                            <p className="font-body text-xs text-muted-foreground">Client satisfaction</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-gold" />
                          <div>
                            <p className="font-body text-xs font-semibold text-foreground">Quick Setup</p>
                            <p className="font-body text-xs text-muted-foreground">7-day deployment</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {businessFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5 shrink-0">
                              <Check className="w-3 h-3 text-gold" />
                            </div>
                            <span className="font-body text-sm text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-border">
                        <button
                          onClick={() => handleWhatsAppClick("business")}
                          className="w-full py-3 bg-gold text-espresso font-body font-semibold rounded-lg hover:bg-gold/90 transition-all flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Request Business Plan on WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Premium Plan Details */}
                {selectedPlan === "premium" && (
                  <div className="border border-border rounded-xl overflow-hidden">
                    <div className="bg-secondary px-6 py-4 border-b border-border">
                      <h3 className="font-heading text-xl text-foreground">Premium Plan</h3>
                      <p className="font-body text-sm text-muted-foreground">Complete solution for established brands</p>
                    </div>
                    <div className="p-6">
                      {/* Trust Indicators for Premium */}
                      <div className="grid grid-cols-3 gap-4 mb-6 pb-4 border-b border-border">
                        <div className="flex items-center gap-2">
                          <Crown className="w-4 h-4 text-gold" />
                          <div>
                            <p className="font-body text-xs font-semibold text-foreground">Enterprise Grade</p>
                            <p className="font-body text-xs text-muted-foreground">Premium features</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gold" />
                          <div>
                            <p className="font-body text-xs font-semibold text-foreground">Trusted by Leaders</p>
                            <p className="font-body text-xs text-muted-foreground">15+ premium brands</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-gold" />
                          <div>
                            <p className="font-body text-xs font-semibold text-foreground">Priority Support</p>
                            <p className="font-body text-xs text-muted-foreground">24/7 dedicated team</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
                        {premiumFeatures.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                            <span className="font-body text-sm text-foreground/80">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 pt-6 border-t border-border">
                        <button
                          onClick={() => handleWhatsAppClick("premium")}
                          className="w-full py-3 bg-gold text-espresso font-body font-semibold rounded-lg hover:bg-gold/90 transition-all flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Request Premium Plan on WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Custom Plan Details */}
                {selectedPlan === "custom" && (
                  <div className="border border-border rounded-xl overflow-hidden">
                    <div className="bg-secondary px-6 py-4 border-b border-border">
                      <h3 className="font-heading text-xl text-foreground">Custom Plan</h3>
                      <p className="font-body text-sm text-muted-foreground">Select features you want to include</p>
                    </div>
                    <div className="p-6">
                      {/* Starter Plan Features Selection */}
                      <div className="mb-8">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-heading text-lg text-foreground">Starter Plan Features</h4>
                          <button
                            onClick={selectAllStarter}
                            className="text-xs text-gold hover:underline font-body"
                          >
                            {selectedStarterFeatures.length === starterFeatures.length ? "Deselect All" : "Select All"}
                          </button>
                        </div>
                        <div className="space-y-2 max-h-64 overflow-y-auto pr-2 border border-border rounded-lg p-4">
                          {starterFeatures.map((feature, idx) => (
                            <label key={idx} className="flex items-start gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={selectedStarterFeatures.includes(feature)}
                                onChange={() => toggleStarterFeature(feature)}
                                className="w-4 h-4 mt-0.5 rounded border-gold text-gold focus:ring-gold"
                              />
                              <span className="font-body text-sm text-foreground/80 group-hover:text-foreground transition-colors">{feature}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Business Plan Features Selection */}
                      <div className="mb-8">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-heading text-lg text-foreground">Business Plan Features</h4>
                          <button
                            onClick={selectAllBusiness}
                            className="text-xs text-gold hover:underline font-body"
                          >
                            {selectedBusinessFeatures.length === businessFeatures.length ? "Deselect All" : "Select All"}
                          </button>
                        </div>
                        <div className="space-y-2 max-h-64 overflow-y-auto pr-2 border border-border rounded-lg p-4">
                          {businessFeatures.map((feature, idx) => (
                            <label key={idx} className="flex items-start gap-3 cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={selectedBusinessFeatures.includes(feature)}
                                onChange={() => toggleBusinessFeature(feature)}
                                className="w-4 h-4 mt-0.5 rounded border-gold text-gold focus:ring-gold"
                              />
                              <span className="font-body text-sm text-foreground/80 group-hover:text-foreground transition-colors">{feature}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Additional Requirements */}
                      <div className="mb-6">
                        <label className="block font-body font-semibold text-foreground mb-3">Additional Requirements</label>
                        <textarea
                          value={customRequirements}
                          onChange={(e) => setCustomRequirements(e.target.value)}
                          placeholder="Describe any additional features or customizations you need..."
                          className="w-full p-4 border border-border rounded-lg focus:border-gold focus:outline-none resize-none font-body text-sm"
                          rows={4}
                        />
                      </div>

                      <button
                        onClick={() => handleWhatsAppClick("custom")}
                        className="w-full py-3 bg-gold text-espresso font-body font-semibold rounded-lg hover:bg-gold/90 transition-all flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Submit Custom Request on WhatsApp
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="mt-6 pt-4 text-center border-t border-border">
              <p className="font-body text-xs text-muted-foreground">
                All plans include 24/7 technical support and free updates
                <br />
                <span className="text-gold">Need assistance?</span> Contact our team for a personalized consultation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesModal;