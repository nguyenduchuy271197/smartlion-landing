import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/section-heading";

export default function Reasons() {
  return (
    <section>
      <div className="container">
        <div className="space-y-16">
          <div className="space-y-4">
            <SectionHeading>TẠI SAO CHỌN SMARTLION?</SectionHeading>
            <p className="text-foreground/60 max-w-lg">
              Quy trình linh hoạt và thích ứng của chúng tôi được điều chỉnh để
              phù hợp với doanh nghiệp của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative z-10 lg:py-16">
              <div className="relative h-64 sm:h-80 lg:h-96">
                <Image
                  alt="House"
                  src="/solutions/tech.avif"
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                />
              </div>
            </div>
            <div className="relative flex items-center bg-gray-100">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100" />
              <div className="p-8 sm:p-16 lg:p-24 w-full">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue="item-1"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl">
                      01. Chuyên môn vững chắc
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                      Đội ngữ của chúng tôi Các chuyên gia IT cùng sẽ tư vấn,
                      thảo luận về sản phẩm và dự án với khách hàng.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-2xl">
                      01. Chuyên môn vững chắc
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                      Đội ngữ của chúng tôi Các chuyên gia IT cùng sẽ tư vấn,
                      thảo luận về sản phẩm và dự án với khách hàng.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-2xl">
                      01. Chuyên môn vững chắc
                    </AccordionTrigger>
                    <AccordionContent className="text-lg">
                      Đội ngữ của chúng tôi Các chuyên gia IT cùng sẽ tư vấn,
                      thảo luận về sản phẩm và dự án với khách hàng.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
