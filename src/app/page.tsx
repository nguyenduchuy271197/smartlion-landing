import CTA from "./_components/cta";
import Hero from "./_components/hero";
import Partners from "./_components/partners";
import Reasons from "./_components/reasons";
import Solutions from "./_components/solutions";

export default function HomePage() {
  return (
    <div className="py-12 space-y-20">
      <Hero />
      <Solutions />
      <Reasons />
      <Partners />
      <CTA />
    </div>
  );
}
