import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function CTA() {
  return (
    <section>
      <div className="container">
        <div className="bg-[url('/hero-background.jpg')] sm:p-20 rounded-3xl space-y-6 sm:space-y-12 bg-cover bg-center p-12">
          <div className="text-primary-foreground space-y-2">
            <h3 className="text-3xl sm:text-5xl font-bold">
              Chưa tìm ra giải pháp?
            </h3>
            <p className="sm:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              voluptas at,
            </p>
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
                Xem thêm
                <ArrowRight className="group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
