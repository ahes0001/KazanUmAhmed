"use client";

import { useLanguage } from "@/components/language-provider";
import { SocialLinks } from "@/components/social-links";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const footerLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "pricing", href: "#pricing" },
  { key: "book", href: "#book" },
] as const;

export function Footer() {
  const { t, dir } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-background py-14" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + Socials */}
          <div className="lg:col-span-2">
            <a
              href="#home"
              className="text-xl font-semibold tracking-wide text-foreground"
            >
              {t.businessName}
            </a>
            <SocialLinks className="mt-5" />
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.quickLinks}
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {t.footer.links[link.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {t.footer.contact.title}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{t.footer.contact.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{t.footer.contact.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{t.footer.contact.location}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-primary" />
                <div className="space-y-1">
                  <p>{t.footer.hours.weekdays}</p>
                  <p>{t.footer.hours.weekend}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row sm:text-start">
          <p>{t.footer.copyright.replace("{{year}}", String(year))}</p>
        </div>
      </div>
    </footer>
  );
}

