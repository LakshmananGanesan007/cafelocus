import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us — Cafe Locus | Our Story & Philosophy</title>
        <meta name="description" content="Learn about Cafe Locus's journey, our passion for quality coffee, and commitment to creating memorable dining experiences." />
      </Helmet>
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl text-foreground mb-6">Our Story</h1>
          <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
            <p>Cafe Locus was born from a simple idea: create a space where exceptional coffee and thoughtful food come together in perfect harmony.</p>
            <p>Founded in 2018, we've grown from a small coffee shop to Coimbatore's most beloved café destination, serving over 50,000 happy customers.</p>
            <p>Every cup we serve tells a story of passion, precision, and the pursuit of perfection. From our signature Korean fried wings to our handcrafted lattes, we put our heart into every creation.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;