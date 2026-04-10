import { Helmet } from "react-helmet-async";
import FeaturesModal from "@/components/common/FeaturesModal";
import { useState } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const [isFeaturesModalOpen, setIsFeaturesModalOpen] = useState(true);

  return (
    <>
      <Helmet>
        <title>Website Packages — Cafe Locus | Enterprise Solutions for Cafés</title>
        <meta name="description" content="Explore our premium website packages for cafés. Starter, Business, Premium, and Custom plans with enterprise-grade features. Get your café online today!" />
        <meta name="keywords" content="cafe website, restaurant website, web development, cafe locus features, website packages, café digital solutions" />
        <link rel="canonical" href="https://cafelocus.com/features" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Back to Home Button */}
        <div className="fixed top-6 left-6 z-50">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 text-gold rounded-full hover:bg-gold/20 transition-all font-body text-sm backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* Features Modal Component */}
        <FeaturesModal 
          isOpen={isFeaturesModalOpen} 
          onClose={() => {
            // When closed, navigate back to home
            window.location.href = '/';
          }} 
        />
      </div>
    </>
  );
};

export default Features;