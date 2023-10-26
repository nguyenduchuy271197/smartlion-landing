import SectionHeading from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section>
      <div className="container">
        <div className="bg-[url('/hero-background.jpg')] py-20 px-20 rounded-3xl space-y-12 bg-cover bg-center">
          <div className="text-primary-foreground space-y-2">
            <h3 className="text-5xl font-bold">Chưa tìm ra giải pháp?</h3>
            <p className="text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              voluptas at,
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 sm:gap-4">
            <Button asChild variant="dark" size="lg">
              <Link href="">
                Khám phá giải pháp
                <ArrowRightCircle />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="">
                Xem thêm
                <ArrowRightCircle />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
