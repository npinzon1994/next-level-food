"use client";

import classes from "./nav-link.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, includeNestedRoutes, children }) {
  const path = usePathname();

  let navLinkStyles = `${classes["nav-link"]} ${
    path === href ? classes.active : undefined
  }`;
  
  if (includeNestedRoutes) {
    navLinkStyles = `${classes["nav-link"]} ${
      path.startsWith(href) ? classes.active : undefined
    }`;
  }

  return (
    <Link href={href} className={navLinkStyles}>
      {children}
    </Link>
  );
}
