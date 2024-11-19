"use client";

import Link from "next/link";
import { Icons } from "./icons";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold">{siteConfig.name}</span>
      </Link>
      <Link
        href="/articles"
        className={cn(
          "test-sm font-medium transition-colors hover:text-primary",
          pathname === "/articles" ? "test-foreground" : "text-foreground/60",
        )}
      >
        Articles
      </Link>
      <Link
        href="/projects"
        className={cn(
          "test-sm font-medium transition-colors hover:text-primary",
          pathname === "/projects" ? "test-foreground" : "text-foreground/60",
        )}
      >
        Projects
      </Link>
      <Link
        href="/about"
        className={cn(
          "test-sm font-medium transition-colors hover:text-primary",
          pathname === "/about" ? "test-foreground" : "text-foreground/60",
        )}
      >
        About
      </Link>
      <Link
        href="/contact"
        className={cn(
          "test-sm font-medium transition-colors hover:text-primary",
          pathname === "/contact" ? "test-foreground" : "text-foreground/60",
        )}
      >
        Contact
      </Link>
    </nav>
  );
}
