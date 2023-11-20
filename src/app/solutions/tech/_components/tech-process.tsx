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
    headline: "Phát triển",
    items: [
      "Viết mã cho phần giao diện trang web (HTML, CSS, JavaScript).",
      "Cài đặt máy chủ và cơ sở dữ liệu cho chức năng phía sau.",
    ],
  },
  {
    headline: "Nội dung",
    items: [
      "Tạo hoặc thu thập văn bản, hình ảnh và phương tiện khác cho trang web.",
    ],
  },
  {
    headline: "Kiểm tra",
    items: [
      "Kiểm tra trang web để tìm lỗi, độ phản hồi và trải nghiệm của người dùng.",
      "Đảm bảo bảo mật và hiệu suất.",
    ],
  },
  {
    headline: "Triển khai",
    items: [
      "Triển khai trang web trên máy chủ web hoặc nền tảng lưu trữ.",
      "Cấu hình tên miền và theo dõi triển khai.",
    ],
  },
  {
    headline: "Bảo trì",
    items: ["Cung cấp hỗ trợ liên tục, cập nhật và bảo mật."],
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
