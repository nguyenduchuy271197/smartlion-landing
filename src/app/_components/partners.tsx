import { HorizontalParallax } from "@/components/horizontal-parallax";
import SectionHeading from "@/components/section-heading";
import Image from "next/image";

type ParallaxOption = {
  label: string;
  src: string;
};

export const partners: ParallaxOption[] = [
  {
    label: "Naver",
    src: "/partners/naver.svg",
  },
  {
    label: "Shinhan",
    src: "/partners/shinhan.svg",
  },
  {
    label: "Ground X",
    src: "/partners/groundx.svg",
  },
  {
    label: "KICC",
    src: "/partners/kicc.svg",
  },
  {
    label: "UEH",
    src: "/partners/ueh.svg",
  },
  {
    label: "IUH",
    src: "/partners/iuh.svg",
  },
  {
    label: "USSH",
    src: "/partners/ussh.svg",
  },
  {
    label: "IU",
    src: "/partners/iu.svg",
  },
  {
    label: "UIT",
    src: "/partners/uit.svg",
  },
  {
    label: "HCMUNRE",
    src: "/partners/hcmunre.svg",
  },
  // {
  //   label: "SPTH",
  //   src: "/partners/spth.svg",
  // },
];

export default function Partners() {
  return (
    <section className="bg-foreground py-28 space-y-16">
      <div className="container">
        <SectionHeading className="text-center text-primary-foreground">
          ĐỐI TÁC DOANH NGHIỆP
        </SectionHeading>
      </div>
      <HorizontalParallax baseVelocity={-2}>
        {partners.map(({ label, src }) => (
          <div key={label} className="relative h-[80px] aspect-[2/1]">
            <Image
              src={src}
              alt={label}
              className="object-contain brightness-0 invert opacity-70"
              fill
            />
          </div>
        ))}
      </HorizontalParallax>
    </section>
  );
}
