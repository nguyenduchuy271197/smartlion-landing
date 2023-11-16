import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import Link from "next/link";
import VerticalImages from "./vertical-images";
import Description from "./description";
import Heading from "./heading";

export default function TechBanner() {
  return (
    <section>
      <div className="container">
        <div className="relative h-[450px] sm:h-[600px] flex items-center overflow-hidden">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-4 sm:space-y-8">
              <Heading />
              <Description />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 sm:gap-12">
              <Button asChild variant="dark" size="lg" className="group">
                <Link href="">
                  Khám phá giải pháp
                  <ArrowRightCircle className="group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="link"
                size="lg"
                className="group text-foreground"
              >
                <Link href="">
                  Bắt đầu ngay
                  <ArrowRight className="group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:block absolute right-0 -top-12 ">
            <VerticalImages />
          </div>
        </div>
      </div>
    </section>
  );
}
