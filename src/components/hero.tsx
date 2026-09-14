"use client";

import { useLanguage } from "@/components/language-provider";
import { LinkButton } from "@/components/link-button";
import { Check } from "lucide-react";
import HeroImage from "./ui/heroimage";

export function Hero() {
  const { t, dir } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center pt-16"
      dir={dir}
    >
      {/* Background placeholder */}
      <div className="absolute inset-0 -z-10">
        {/* <HeroImage 
        src="/images/logo.png" 
        alt={t.hero.imageLabel} 
      /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* REPLACE: company tagline / short intro */}
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
            Premium Home Kitchen Catering
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

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-foreground/80">
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
        <HeroImage 
        src="/images/logo.png" 
        alt={t.hero.imageLabel} 
      />
      </div>
      
    </section>
  );
}
