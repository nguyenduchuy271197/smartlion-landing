import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <div className="h-[450px] sm:h-[600px] bg-primary rounded-3xl flex items-center px-8 sm:px-12 lg:px-20">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-4 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground">
                Choose us. <br /> Choose SMART.
              </h1>
              <p className="sm:text-lg lg:text-xl max-w-xl text-primary-foreground/80">
                Chúng tôi xây dựng và thiết kế thương hiệu, sản phẩm, ứng dụng
                web, trang web đặc biệt cho các công ty khởi nghiệp và doanh
                nghiệp.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-2 sm:gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href="">
                  Khám phá giải pháp
                  <ArrowRightCircle />
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="">
                  Khám phá giải pháp
                  <ArrowRightCircle />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}