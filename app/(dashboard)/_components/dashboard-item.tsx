"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const DashboardItem = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  const pathname = usePathname();

  // Check if the current path matches the href
  const isActive = pathname === href;

  return (
    <Link href={href} className={cn(isActive ? "font-bold" : "")}>
      {children}
    </Link>
  );
};
export default DashboardItem;
