import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "We visited cafe locus on the weekend and the vibe was amazing. It was hands down the best wontons I have had in Coimbatore. The sandwich was also a fresh take and definitely recommend.",
    time: "2 months ago",
    rating: 5,
  },
  {
    text: "Cozy ambience, great food and what not!!! Loved every bite of it!!! Chilli oil wontons and their cold chocolate is way too good! Absolutely recommend this cafe!",
    time: "1 month ago",
    rating: 5,
  },
  {
    text: "We've visited a bunch of times, every time has been a pleasant experience. Service is prompt, food is consistently good, ambience is always cosy and welcoming.",
    time: "2 months ago",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-gold font-body mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            What Our Guests Say
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-muted-foreground font-body">4.7 out of 5 · 329 reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-8 relative hover:shadow-xl transition-shadow"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <p className="font-body text-foreground/80 leading-relaxed mb-6 text-sm">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground font-body">{review.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;