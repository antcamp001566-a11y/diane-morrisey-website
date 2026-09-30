"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/recipes", label: "Recipes" },
  { href: "/the-book", label: "The Book" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="container-page flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-2xl font-bold text-ink">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-semibold uppercase tracking-wide transition-colors hover:text-tomato ${
                  isActive ? "text-tomato" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/the-book"
            className="rounded-full bg-tomato px-5 py-2.5 font-body text-sm font-bold text-white transition-colors hover:bg-tomato-dark"
          >
            Buy the Book
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-cream md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 font-body text-base font-semibold ${
                  pathname === link.href ? "bg-tomato/10 text-tomato" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/the-book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-tomato px-5 py-3 text-center font-body font-bold text-white"
            >
              Buy the Book
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
