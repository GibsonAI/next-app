"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavLink = ({
  children,
  href,
  activeClassName = "active",
  nonActiveClassName = "",
  className = "",
  ...rest
}: {
  children: React.ReactNode;
  href: string;
  activeClassName?: string;
  nonActiveClassName?: string;
  className?: string;
}) => {
  const pathname = usePathname();
  const isActive =
    pathname.endsWith(href) || (href.includes(pathname) && pathname !== "/");
  const newClassName = `${
    isActive ? activeClassName : nonActiveClassName
  } ${className}`;
  return (
    <Link href={href} className={newClassName} {...rest}>
      {children}
    </Link>
  );
};
