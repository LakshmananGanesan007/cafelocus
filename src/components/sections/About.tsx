const About = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-gold font-body mb-4">Our Story</p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-tight mb-6">
            Crafted with<br />
            <span className="italic text-gold">passion & purpose</span>
          </h2>
        </div>
        <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
          <p>
            Cafe Locus is more than a café — it's a destination for those who appreciate
            the art of thoughtful cuisine. From our signature Korean fried wings to our
            handcrafted lattes, every detail is curated for an unforgettable experience.
          </p>
          <p>
            Nestled in the heart of Coimbatore, we blend global flavors with local warmth,
            creating a space where great food meets cozy ambience.
          </p>
          <div className="flex gap-12 pt-4">
            <div>
              <p className="font-heading text-3xl text-foreground">329+</p>
              <p className="text-sm text-muted-foreground">Happy Reviews</p>
            </div>
            <div>
              <p className="font-heading text-3xl text-foreground">4.7</p>
              <p className="text-sm text-muted-foreground">Star Rating</p>
            </div>
            <div>
              <p className="font-heading text-3xl text-foreground">50+</p>
              <p className="text-sm text-muted-foreground">Menu Items</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;