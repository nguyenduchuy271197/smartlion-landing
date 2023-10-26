import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ hiddenOnMobile = false }) {
  return (
    <Link href="/" className="flex items-center gap-0.5">
      <Image src="/logo.svg" alt="SMARTLION" width={35} height={50} />
      <Image
        src="/brand.svg"
        alt="SMARTLION"
        width={150}
        height={20}
        className={cn(hiddenOnMobile && "hidden sm:block")}
      />
    </Link>
  );
}
