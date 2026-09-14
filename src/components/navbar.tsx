"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/link-button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "pricing", href: "#pricing" },
  { key: "howItWorks", href: "#how-it-works" },
  { key: "gallery", href: "#gallery" },
  { key: "book", href: "#book" },
] as const;

export function Navbar() {
  const { locale, toggleLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed start-0 end-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 shadow-sm backdrop-blur"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-lg font-semibold tracking-wide text-foreground"
          aria-label={t.businessName}
        >
          {t.businessName}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleLocale}
            aria-label={locale === "en" ? "Switch to Arabic" : "Switch to English"}
            className="uppercase"
          >
            {locale === "en" ? "العربية" : "English"}
          </Button>

          <LinkButton
            href="#book"
            size="sm"
            className="hidden md:inline-flex"
          >
            {t.nav.book}
          </LinkButton>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-background px-4 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              >
                {t.nav[link.key]}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t pt-3">
              <LinkButton href="#book" onClick={() => setMobileOpen(false)}>
                {t.nav.book}
              </LinkButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
