"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { BsDribbble } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

export default function NavbarPage() {
  const pathname = usePathname();
  const link = [
   
    { id: 1, href: "/home", title: "Home", active: false },
    { id: 2, href: "/about", title: "Abaut", active: false },
    { id: 3, href: "/contact", title: "Contact", active: false },
    { id: 4, href: "/blog", title: "Blog", active: false },   
    { id: 5, href: "/login", title: "Login", active: false },
  ];
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <i>{BsDribbble}</i>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Flowbite>
        <DarkThemeToggle />
      </Flowbite>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {link.map((item) => (
          <Navbar.Link
            key={item.id}
            className={`${
              pathname === item.href
                ? "inline-block border border-red-500 rounded w-full bg-blue-500 text-white"
                : ""
            }`}
            href={item.href}
          >
            {item.title}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
