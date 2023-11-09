import SectionHeading from "@/components/section-heading";
import TechProcessStep from "./tech-process-step";

export interface ProcessStep {
  headline: string;
  items: string[];
}

const process = [
  {
    headline: "Lập kế hoạch",
    items: [
      "Xác định mục tiêu dự án, yêu cầu và đối tượng mục tiêu.",
      "Tạo kế hoạch dự án và thời gian.",
    ],
  },
  {
    headline: "Thiết kế",
    items: [
      "Tạo bản vẽ dây dẫn hoặc cấu trúc cho trang web.",
      "Phát triển thiết kế giao diện người dùng (UI) và lựa chọn màu sắc.",
    ],
  },
  {
    headline: "Lập kế hoạch",
    items: [
      "Xác định mục tiêu dự án, yêu cầu và đối tượng mục tiêu.",
      "Tạo kế hoạch dự án và thời gian.",
    ],
  },
  {
    headline: "Lập kế hoạch",
    items: [
      "Xác định mục tiêu dự án, yêu cầu và đối tượng mục tiêu.",
      "Tạo kế hoạch dự án và thời gian.",
    ],
  },
  {
    headline: "Lập kế hoạch",
    items: [
      "Xác định mục tiêu dự án, yêu cầu và đối tượng mục tiêu.",
      "Tạo kế hoạch dự án và thời gian.",
    ],
  },
];

export default function TechProcess() {
  return (
    <section>
      <div className="container">
        <div className="space-y-16">
          <SectionHeading>OUR PROCESS</SectionHeading>
          <div>
            <ol className="relative border-l border-primary/50 ml-[calc(var(--stepper-size)/2)]">
              {process.map((step, index) => (
                <TechProcessStep key={index} index={index} step={step} />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
