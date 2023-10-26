import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { SOLUTIONS } from "@/constants";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SolutionProps {
  id: string;
  name: string;
  slug: string;
  thumbnail: string;
  items: {
    id: string;
    name: string;
  }[];
}

function SolutionRow({ name, slug, thumbnail, items }: SolutionProps) {
  return (
    <div className="flex items-center justify-between gap-8 py-20 border-b group h-[350px] border-foreground first:border-t">
      <div className="space-y-2 basis-[360px]">
        <Link
          href={`/${slug}`}
          className="block text-6xl sm:text-8xl underline-text"
        >
          {name}
        </Link>
        <Button variant="link" size="lg" asChild>
          <Link href={`/${slug}`}>
            Xem thêm <MoveRight />
          </Link>
        </Button>
      </div>
      <div className="grow hidden sm:block shrink-0">
        <Image
          src={thumbnail}
          alt={name}
          width={400}
          height={300}
          className="ml-auto opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500 rounded-2xl"
        />
      </div>
      <div className="lg:basis-[500px]">
        <ul className="space-y-4 text-xl md:text-2xl">
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <section>
      <div className="container">
        <div className="space-y-8">
          <SectionHeading>GIẢI PHÁP</SectionHeading>
          <div>
            {SOLUTIONS.map((solution) => (
              <SolutionRow key={solution.id} {...solution} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
