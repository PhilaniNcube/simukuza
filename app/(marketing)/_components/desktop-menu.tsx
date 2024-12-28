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
import { User2, UserX } from "lucide-react";

const DesktopMenu = ({user}:{user:User|null}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="bg-black">
          <NavigationMenuTrigger className="bg-black hover:bg-white text-white hover:text-black">
            Simukuza
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <div className="px-6 py-4 min-w-[400px] flex flex-col space-y-2">
              <NavigationMenuLink asChild>
                <Link href="/about-us">About Us</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/contact-us">Contact Us</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/work-with-us">Work With Us</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/feedback">Feedback</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/faq">FAQs</Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-black">
          <NavigationMenuTrigger className="bg-black hover:bg-white text-white hover:text-black">
            Dealers
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <div className="px-6 py-4 min-w-[400px] flex flex-col space-y-2">
              <NavigationMenuLink asChild>
                <Link href="/dealers/offers">Offers</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/dealers/manage">Manage</Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="bg-black">
          <NavigationMenuTrigger className="bg-black hover:bg-white text-white hover:text-black">
            Vehicles
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <div className="px-6 py-4 min-w-[400px] flex flex-col space-y-2">
              <NavigationMenuLink asChild>
                <Link href="/cars">Cars</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/cars/new">New Cars</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/cars/recent_import">Recent Imports</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/cars/used">Used Cars</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/cars/commercial">Commercial</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/cars/special_purpose">Special Purpose</Link>
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
                <Link href="/services/ratings">Ratings &amp; Reviews</Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="/services/help">Help &amp; Advice</Link>
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {user ? (
          <NavigationMenuItem>
            <form action={logout}>
              <Button
                type="submit"
                className="w-full text-left px-6 py-4 hover:bg-white hover:text-black"
              >
                Logout
                <UserX className="inline-block ml-2" />
              </Button>
            </form>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem>
            <Link href="/login" legacyBehavior passHref>

                <Button className="bg-transparent text-accent border-accent hover:text-white hover:border-white" variant="outline" >
                  Login
                  <User2 className="inline-block ml-2" />
                </Button>

            </Link>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default DesktopMenu;


