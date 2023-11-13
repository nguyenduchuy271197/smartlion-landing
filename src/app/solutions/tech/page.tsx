import TechBanner from "./_components/tech-banner";
import TechCTA from "./_components/tech-cta";
import TechProcess from "./_components/tech-process";
import TechSolutions from "./_components/tech-solutions";

export default function TechPage() {
  return (
    <div className="pb-12 space-y-12">
      <TechBanner />
      <TechSolutions />
      <TechProcess />
      <TechCTA />
    </div>
  );
}
