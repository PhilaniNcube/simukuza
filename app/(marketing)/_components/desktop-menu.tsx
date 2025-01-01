"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";
import {  UserCircle, UserX } from "lucide-react";

const DesktopMenu = ({user}:{user:User|null}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center space-x-4">
        <NavigationMenuItem className="bg-black">
          <NavigationMenuTrigger className="bg-black hover:bg-white text-white hover:text-black">
            Buy A Car
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <div className="px-6 py-4 min-w-[400px] flex flex-col space-y-2">
              <NavigationMenuLink asChild>
                <Link href="/cars/condition/new">New Cars</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/cars/condition/used">Used Cars</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/cars/condition/recent_import">Recent Imports</Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-black">
          <NavigationMenuTrigger className="bg-black hover:bg-white text-white hover:text-black">
            Car Specials
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <div className="px-6 py-4 min-w-[400px] flex flex-col space-y-2">
              <NavigationMenuLink asChild>
                <Link href="/cars/condition/commercial">Commercial Cars</Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-black">
          <NavigationMenuTrigger className="bg-black hover:bg-white text-white hover:text-black">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <div className="px-6 py-4 min-w-[400px] flex flex-col space-y-2">
              <NavigationMenuLink asChild>
                <Link href="/services/car_finance">Car Finance</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/services/car_insurance">Car Insurance</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/services/car_service">Car Service</Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild>
                <Link href="/services/help">Help &amp; Advice</Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-black ">
          <NavigationMenuLink asChild>
            <Link href="/customers/sell_my_car">Sell My Car</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-black ">
          <NavigationMenuLink asChild>
            <Link href="/services/ratings">News &amp; Reviews</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {user ? (
          <NavigationMenuItem className="ml-4">
            <form action={logout}>
              <Button
                type="submit"
                variant="outline"
                className="w-full text-white border-white text-left px-6 py-4  hover:bg-white hover:text-black"
              >
                Logout
                <UserX className="inline-block ml-2" />
              </Button>
            </form>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem>
            <Link href="/login" legacyBehavior passHref>
              <Button
                className="bg-transparent text-white border-white hover:text-white hover:border-white font-light"
                variant="outline"
              >
                Login
                <UserCircle className="inline-block ml-2" />
              </Button>
            </Link>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default DesktopMenu;


