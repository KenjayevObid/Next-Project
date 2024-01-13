"use client";

import Link from "next/link";
import { Button, Navbar } from "flowbite-react";
import { BsDribbble } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

export default function NavbarPage() {
  const pathname = usePathname();
  const link = [
    { id: 1, href: "/home", title: "Home", active: true },
    { id: 2, href: "/about", title: "Abaut", active: true },
    { id: 3, href: "/contact", title: "Contact", active: true },
    { id: 4, href: "/blog", title: "Blog", active: true },
  ];
  const session = true;
  const isAdmin = true;
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
        {link.map(
          (item) =>
            item.active && (
              <Navbar.Link
                key={item.id}
                className={`${
                  pathname === item.href
                    ? "px-3 py-1 bg-green-400 text-black"
                    : ""
                }`}
                href={item.href}
              >
                {item.title}
              </Navbar.Link>
            )
        )}
        {session ? (
          <>
            {isAdmin && <Navbar.Link href="/admin">Admin</Navbar.Link>}
            <button className="px-3 py-1 bg-green-400">Logout</button>
          </>
        ) : (
          <Navbar.Link href="/login">Login</Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}
