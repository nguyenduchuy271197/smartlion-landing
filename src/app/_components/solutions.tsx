import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function SolutionRow() {
  return (
    <div className="flex items-center justify-between gap-8 py-20 border-b group h-[350px]">
      <div className="space-y-2 basis-[150px]">
        <h3 className="text-6xl sm:text-8xl font-medium">Tech</h3>
        <Button variant="link" size="lg" asChild>
          <Link href="/">
            Xem thêm <MoveRight />
          </Link>
        </Button>
      </div>
      <div className="grow hidden sm:block">
        <Image
          src="/solutions/tech.avif"
          alt=""
          width={400}
          height={300}
          className="rotate-[5deg] mx-auto opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 duration-500"
        />
      </div>
      <div className="sm:basis-[300px]">
        <ul className="space-y-4 text-xl md:text-2xl">
          <li>Web development</li>
          <li>Web development</li>
          <li>Web development</li>
          <li>Web development</li>
          <li>Web development</li>
        </ul>
      </div>
    </div>
  );
}

export default function Solutions() {
  return (
    <section>
      <div className="container">
        <div>
          <SectionHeading>GIẢI PHÁP</SectionHeading>
          <div className="">
            <SolutionRow />
            <SolutionRow />
            <SolutionRow />
          </div>
        </div>
      </div>
    </section>
  );
}
