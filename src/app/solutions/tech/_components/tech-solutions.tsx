import SectionHeading from "@/components/section-heading";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

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
    <section>
      <div className="container">
        <div className="space-y-8">
          <div className="space-y-4">
            <SectionHeading>{title}</SectionHeading>
            <p className="text-2xl text-foreground/60 lg:w-[42.857143%]">
              {subtitle}
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col gap-8 justify-between",
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
            <div className="relative flex items-center">
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
                        {solution.description}
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
      <TechSolution
        title="DỊCH VỤ WEB DEVELOPMENT"
        subtitle="Detailed descriptions
chúng tôi được điều chỉnh để phù hợp
với doanh nghiệp của bạn."
        image="https://images.unsplash.com/photo-1698584200770-3838c3690a27?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        solutions={[
          {
            id: "1",
            title: "HTML/CSS/JavaScript Frameworks",
            description:
              "Một khung làm việc JavaScript phổ biến để xây dựng ứng dụng web.",
          },
          {
            id: "2",
            title: "HTML/CSS/JavaScript Frameworks",
            description:
              "Một khung làm việc JavaScript phổ biến để xây dựng ứng dụng web.",
          },
          {
            id: "3",
            title: "HTML/CSS/JavaScript Frameworks",
            description:
              "Một khung làm việc JavaScript phổ biến để xây dựng ứng dụng web.",
          },
        ]}
      />
      <TechSolution
        title="DỊCH VỤ WEB DEVELOPMENT"
        subtitle="Detailed descriptions
chúng tôi được điều chỉnh để phù hợp
với doanh nghiệp của bạn."
        image="https://images.unsplash.com/photo-1698584200770-3838c3690a27?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        solutions={[
          {
            id: "1",
            title: "HTML/CSS/JavaScript Frameworks",
            description:
              "Một khung làm việc JavaScript phổ biến để xây dựng ứng dụng web.",
          },
          {
            id: "2",
            title: "HTML/CSS/JavaScript Frameworks",
            description:
              "Một khung làm việc JavaScript phổ biến để xây dựng ứng dụng web.",
          },
          {
            id: "3",
            title: "HTML/CSS/JavaScript Frameworks",
            description:
              "Một khung làm việc JavaScript phổ biến để xây dựng ứng dụng web.",
          },
        ]}
        options={{
          reverse: true,
        }}
      />
    </div>
  );
}
