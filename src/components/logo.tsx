import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "black" | "white";
  hiddenOnMobile?: boolean;
}

export default function Logo({
  variant = "black",
  hiddenOnMobile = false,
}: LogoProps) {
  if (variant === "white") {
    return (
      <Link href="/">
        <Image src="/logo-white.png" alt="" width={200} height={20} />
      </Link>
    );
  }

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
