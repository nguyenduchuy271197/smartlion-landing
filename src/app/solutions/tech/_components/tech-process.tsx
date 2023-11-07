import SectionHeading from "@/components/section-heading";

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
                <li
                  key={index}
                  className="mb-[calc(var(--stepper-size))] ml-[var(--stepper-size)]"
                >
                  <span className="absolute flex items-center justify-center w-[var(--stepper-size)] aspect-[1/1] bg-primary rounded-full -left-[calc(var(--stepper-size)/2)] ring-8 ring-white text-5xl text-primary-foreground font-bold">
                    {index + 1}
                  </span>
                  <div className="space-y-6 max-h-[var(--stepper-size)] pt-2">
                    <h3 className="font-medium leading-tight text-4xl">
                      {step.headline}
                    </h3>
                    <ul className="text-xl list-disc pl-8 space-y-2">
                      {step.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
