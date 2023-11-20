import SectionHeading from "@/components/section-heading";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import techSolutions from "./tech-solutions.json";

interface TechSolutionProps {
  title: string;
  subtitle: string;
  image: string;
  solutions: {
    id: string;
    title: string;
    description: string;
  }[];
  options?: {
    reverse?: boolean;
  };
}

function TechSolution({
  title,
  subtitle,
  image,
  solutions,
  options,
}: TechSolutionProps) {
  return (
    <section className={cn(options?.reverse && "bg-primary/10")}>
      <div className="container">
        <div className="space-y-8 py-20">
          <div className="space-y-4">
            <SectionHeading>{title}</SectionHeading>
            <p className="text-2xl text-foreground/60 lg:w-[42.857143%]">
              {subtitle}
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col gap-8",
              options?.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            )}
          >
            <div className="relative z-10 shrink-0">
              <div className="relative rounded-2xl overflow-hidden aspect-[2/1] lg:aspect-[4/3] lg:w-[500px]">
                <Image
                  alt={title}
                  src={image}
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                />
              </div>
            </div>
            <div className="relative flex items-center flex-grow lg:px-12">
              <div className="w-full">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue={solutions[0].id}
                >
                  {solutions.map((solution, index) => (
                    <AccordionItem value={solution.id} key={solution.id}>
                      <AccordionTrigger>
                        <span className="text-lg">0{index + 1}</span>
                        {solution.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: solution.description,
                          }}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TechSolutions() {
  return (
    <div className="space-y-16">
      {techSolutions.map((solution, index) => (
        <TechSolution
          key={solution.title}
          title={solution.title}
          subtitle={solution.subtitle}
          image={solution.image}
          solutions={solution.solutions}
          options={{ reverse: Boolean(index % 2) }}
        />
      ))}
    </div>
  );
}
