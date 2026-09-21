import Link from "next/link";
import { site } from "@/data/site";
import EmailSignupForm from "./EmailSignupForm";

const socialLinks = [
  { label: "Instagram", href: site.social.instagram },
  { label: "TikTok", href: site.social.tiktok },
  { label: "Facebook", href: site.social.facebook },
  { label: "Pinterest", href: site.social.pinterest },
  { label: "YouTube", href: site.social.youtube },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl font-bold">Never miss a recipe</h3>
            <p className="mt-2 max-w-md font-body text-cream/80">
              Join the list for new recipes, book updates, and the occasional
              behind-the-scenes chaos of cooking for 6 kids.
            </p>
            <div className="mt-5">
              <EmailSignupForm compact />
            </div>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-wrap gap-4 md:justify-end">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-semibold text-cream/90 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <nav className="flex flex-wrap gap-4 md:justify-end">
              <Link href="/about" className="font-body text-sm text-cream/70 hover:text-white">
                About
              </Link>
              <Link href="/recipes" className="font-body text-sm text-cream/70 hover:text-white">
                Recipes
              </Link>
              <Link href="/the-book" className="font-body text-sm text-cream/70 hover:text-white">
                The Book
              </Link>
              <Link href="/press" className="font-body text-sm text-cream/70 hover:text-white">
                Press
              </Link>
              <Link href="/contact" className="font-body text-sm text-cream/70 hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-cream/15 pt-6 font-body text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
