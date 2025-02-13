"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { NavLink } from "@/components/navlink";

type NavigationItem = {
  href: string;
  name: string;
};

const items: NavigationItem[] = [
  { href: "/getting-started", name: "Getting Started" },
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-10 items-center m-4">
        <div className="flex ml-2 mr-4">
          <a className="mr-10 flex items-center space-x-2" href="/">
            <span className="font-bold">Gibson</span>
          </a>
          <nav className="flex items-center space-x-10 text-sm font-medium">
            {items.map(({ href, name }) => (
              <NavLink
                href={href}
                key={href}
                className="transition-colors hover:active text-foreground"
              >
                <span>{name}</span>
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-end">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
