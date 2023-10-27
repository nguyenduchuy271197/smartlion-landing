"use client";

import Logo from "@/components/logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ROUTES } from "@/constants";
import { ArrowRightCircle, Menu } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>

      {/* Mobile Nav */}
      <SheetContent
        side="left"
        className="max-w-[400px] w-full flex flex-col py-10"
      >
        <SheetHeader>
          <div className="flex items-center justify-center py-6">
            <Logo />
          </div>
        </SheetHeader>

        <ul>
          {ROUTES.map((route) => (
            <li
              key={route.id}
              className="border-b hover:border-primary transition-all"
            >
              <Link
                href={route.href}
                className="block py-4 transition-all hover:text-primary"
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>

        <SheetFooter className="mx-auto mt-6">
          <SheetClose asChild>
            <Button asChild className="group" size="lg">
              <Link href="">
                Bắt đầu ngay
                <ArrowRightCircle className="group-hover:translate-x-1" />
              </Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
