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
import { Menu } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="lg:hidden">
          <Menu />
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
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="trang-chu">
            <SheetClose asChild>
              <Link
                href="/"
                className="py-4 font-medium transition-all hover:underline"
              >
                Trang chủ
              </Link>
            </SheetClose>
          </AccordionItem>
          <AccordionItem value="khoa-hoc">
            <AccordionTrigger>Khoá học</AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-3 py-2 pl-4 ml-2 text-base font-normal border-l-2 border-border text-muted-foreground">
                <li>
                  <SheetClose asChild>
                    <Link
                      href=""
                      className="block w-full p-2 hover:text-accent-foreground"
                    >
                      Tech
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      href=""
                      className="block w-full p-2 hover:text-accent-foreground"
                    >
                      Tech
                    </Link>
                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                    <Link
                      href=""
                      className="block w-full p-2 hover:text-accent-foreground"
                    >
                      Tech
                    </Link>
                  </SheetClose>
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="blogs">
            <SheetClose asChild>
              <Link
                href="/blogs"
                className="py-4 font-medium transition-all hover:underline"
              >
                Blogs
              </Link>
            </SheetClose>
          </AccordionItem>
          <AccordionItem value="about">
            <SheetClose asChild>
              <Link
                href="/about"
                className="py-4 font-medium transition-all hover:underline"
              >
                Về chúng tôi
              </Link>
            </SheetClose>
          </AccordionItem>
          <AccordionItem value="contact">
            <SheetClose asChild>
              <Link
                href="/contact"
                className="py-4 font-medium transition-all hover:underline"
              >
                Liên hệ
              </Link>
            </SheetClose>
          </AccordionItem>
          <AccordionItem value="faq">
            <SheetClose asChild>
              <Link
                href="/faq"
                className="py-4 font-medium transition-all hover:underline"
              >
                FAQs
              </Link>
            </SheetClose>
          </AccordionItem>
        </Accordion>
        <SheetFooter className="mx-auto mt-6">
          <SheetClose asChild>
            <Button className="w-full" asChild onClick={() => setOpen(true)}>
              <Link href="/register">Đăng ký ngay</Link>
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
