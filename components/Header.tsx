"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LMS_URL, LOGO, LOGO_ALT, NAV_LINKS, ROUTES } from "@/lib/site";

type HeaderProps = {
  /** Where the logo points. Home links to its own hero anchor. */
  brandHref?: string;
  /** Home and Nadi scroll to a section instead of leaving the page. */
  shopHref?: string;
  /** Contact scrolls to its own form instead of leaving the page. */
  bookHref?: string;
};

export function Header({
  brandHref = ROUTES.home,
  shopHref = "/#products",
  bookHref = ROUTES.contact,
}: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // A section's link stays lit on its sub-pages too, e.g. the Nadi topic pages.
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="hdr" className={scrolled ? "scrolled" : undefined}>
      <div className="wrap nav">
        <Link className="brand" href={brandHref}>
          <img src={LOGO} alt={LOGO_ALT} />
        </Link>
        <nav className={`links${menuOpen ? " open" : ""}`}>
          {NAV_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? "active" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
        <div className="nav-cta">
          <a href={LMS_URL} className="pill pill-purple">
            Login
          </a>
          <Link href={shopHref} className="pill pill-gold">
            Shop
          </Link>
          <Link href={bookHref} className="btn btn-primary">
            Book a Session
          </Link>
          <button
            className="menu-btn"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3D1578"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
