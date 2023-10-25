import SectionHeading from "@/components/section-heading";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="bg-foreground">
      <div className="container">
        <div className="py-28 space-y-16">
          <SectionHeading className="text-center text-primary-foreground">
            ĐỐI TÁC DOANH NGHIỆP
          </SectionHeading>
          <div className="flex flex-wrap items-center justify-center gap-20 gap-y-6">
            <div className="relative h-[80px] aspect-[2/1]">
              <Image
                src="/partners/naver.svg"
                alt=""
                className="object-contain brightness-0 invert opacity-70"
                fill
              />
            </div>
            <div className="relative h-[80px] aspect-[2/1]">
              <Image
                src="/partners/naver.svg"
                alt=""
                className="object-contain brightness-0 invert opacity-70"
                fill
              />
            </div>
            <div className="relative h-[80px] aspect-[2/1]">
              <Image
                src="/partners/naver.svg"
                alt=""
                className="object-contain brightness-0 invert opacity-70"
                fill
              />
            </div>
            <div className="relative h-[80px] aspect-[2/1]">
              <Image
                src="/partners/naver.svg"
                alt=""
                className="object-contain brightness-0 invert opacity-70"
                fill
              />
            </div>
            <div className="relative h-[80px] aspect-[2/1]">
              <Image
                src="/partners/naver.svg"
                alt=""
                className="object-contain brightness-0 invert opacity-70"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
