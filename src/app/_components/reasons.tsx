import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/section-heading";

export const REASONS = [
  {
    id: "1",
    title: "Chuyên môn vững chắc",
    description:
      "Đội ngũ của chúng tôi gồm các chuyên gia đa lĩnh vực sẽ tư vấn, thảo luận về sản phẩm và dự án với khách hàng.",
  },
  {
    id: "2",
    title: "100% tâm huyết",
    description:
      "Chúng tôi rất coi trọng chất lượng đầu ra, bởi vậy mỗi thành phẩm đều được sáng tạo bằng 100% tâm huyết và chất xám.",
  },
  {
    id: "3",
    title: "Tận tâm với khách hàng",
    description:
      "Chúng tôi luôn tập trung và nỗ lực để đảm bảo khách hàng của mình hài lòng với dịch vụ và được chăm sóc lâu dài.",
  },
];

export default function Reasons() {
  return (
    <section>
      <div className="container">
        <div className="space-y-16">
          <div className="space-y-4">
            <SectionHeading>TẠI SAO CHỌN SMARTLION?</SectionHeading>
            <p className="text-2xl text-foreground/60 lg:w-[42.857143%]">
              Quy trình linh hoạt và thích ứng của chúng tôi được điều chỉnh để
              phù hợp với doanh nghiệp của bạn.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[3fr_4fr]">
            <div className="relative z-10">
              <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden">
                <Image
                  alt="Reasons"
                  src="/reasons-banner.png"
                  className="absolute inset-0 h-full w-full object-cover"
                  fill
                />
              </div>
            </div>
            <div className="relative flex items-center">
              <div className="p-8 sm:p-16 lg:p-24 w-full">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full"
                  defaultValue={REASONS[0].id}
                >
                  {REASONS.map((reason, index) => (
                    <AccordionItem value={reason.id} key={reason.id}>
                      <AccordionTrigger>
                        <span className="text-lg">0{index + 1}</span>
                        {reason.title}
                      </AccordionTrigger>
                      <AccordionContent>{reason.description}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
