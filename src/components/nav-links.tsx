"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ROUTES } from "@/constants";
import Link from "next/link";
import { HTMLAttributes } from "react";

export default function NavLinks(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <NavigationMenu>
        <NavigationMenuList>
          {ROUTES.map((route) => (
            <NavigationMenuItem key={route.id}>
              <Link href={route.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {route.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
