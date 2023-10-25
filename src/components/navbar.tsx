import Link from "next/link";
import Logo from "./logo";
import { ROUTES } from "@/constants";
import { Button } from "./ui/button";
import MobileNav from "@/components/mobile-nav";
import { ArrowRightCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b bg-white">
      <div className="container">
        <div className="h-[var(--navbar-height)] flex items-center gap-8">
          <div className="mr-auto">
            <Logo hiddenOnMobile={true} />
          </div>
          <ul className="lg:flex items-center gap-4 hidden">
            {ROUTES.map((route) => (
              <li key={route.id}>
                <Link href={route.href}>{route.label}</Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Button asChild className="group">
              <Link href="">
                Tham gia ngay
                <ArrowRightCircle />
              </Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
