"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { LinkButton } from "@/components/link-button";
import { Check } from "lucide-react";

export function Hero() {
  const { t, dir } = useLanguage();

  return (
    <section
      id="home"
      className="flex min-h-[90vh] items-center pt-16"
      dir={dir}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 py-20 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8 lg:text-start">
        {/* Text content */}
        <div className="flex w-full flex-col items-center lg:w-[55%] lg:items-start">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            {t.hero.eyebrow}
          </span>

          <h1 className="font-heading text-4xl leading-tight font-medium text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {t.hero.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
            {t.hero.subHeadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href="#book" size="lg" className="text-base">
              {t.hero.ctaBook}
            </LinkButton>
            <LinkButton
              href="#pricing"
              size="lg"
              variant="outline"
              className="text-base"
            >
              {t.hero.ctaMenu}
            </LinkButton>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-foreground/80 lg:justify-start">
            {[t.hero.trust1, t.hero.trust2].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Spinning logo */}
        <div className="flex w-full justify-center lg:w-[40%] lg:justify-end">
          <div className="animate-spin-slow opacity-90">
            <Image
              src="/images/logo.png"
              alt={t.businessName}
              width={280}
              height={280}
              className="h-56 w-56 object-contain sm:h-64 sm:w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
