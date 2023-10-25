import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="bg-primary p-8 md:p-12 lg:px-16 lg:py-24 rounded-xl">
            <div className="mx-auto max-w-xl text-center text-primary-foreground">
              <SectionHeading>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </SectionHeading>
              <p className="hidden sm:mt-4 sm:block">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                egestas tempus tellus etiam sed. Quam a scelerisque amet
                ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                quisque ut interdum tincidunt duis.
              </p>
              <div className="mt-4 md:mt-8">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="">Get Started Today</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
            <div className="relative h-40 w-full sm:h-56 md:h-full rounded-xl overflow-hidden">
              <Image
                alt="Student"
                src="/solutions/tech.avif"
                className="object-cover"
                fill
              />
            </div>

            <div className="relative h-40 w-full sm:h-56 md:h-full rounded-xl overflow-hidden">
              <Image
                alt="Student"
                src="/solutions/tech.avif"
                className="object-cover"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
