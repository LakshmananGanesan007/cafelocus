import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Coffee } from "lucide-react";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Cafe Locus</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-background px-6">
        <div className="text-center">
          <Coffee className="w-20 h-20 text-gold mx-auto mb-6" />
          <h1 className="font-heading text-7xl text-foreground mb-4">404</h1>
          <p className="font-body text-xl text-muted-foreground mb-8">Oops! Page not found</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-espresso font-body font-semibold rounded-full hover:bg-gold/90 transition-all"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;