import Link from "next/link";
import Logo from "./logo";
import { Button } from "./ui/button";
import MobileNav from "@/components/mobile-nav";
import { ArrowRightCircle } from "lucide-react";
import NavLinks from "./nav-links";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b bg-white">
      <div className="container">
        <div className="h-[var(--navbar-height)] flex items-center gap-12">
          <div className="mr-auto">
            <Logo hiddenOnMobile />
          </div>

          <NavLinks className="lg:flex hidden" />

          <div className="flex items-center gap-2">
            <Button asChild className="group">
              <Link href="">
                Bắt đầu ngay
                <ArrowRightCircle className="group-hover:translate-x-1" />
              </Link>
            </Button>

            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
