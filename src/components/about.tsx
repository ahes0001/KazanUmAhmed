"use client";

import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { PlaceholderImage } from "@/components/placeholder-image";

export function About() {
  const { t, dir } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.about.eyebrow} heading={t.about.heading} align="start" />

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="order-2 space-y-5 text-base leading-relaxed text-foreground/80 lg:order-1">
            {/* REPLACE: company story */}
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
            <p>{t.about.paragraph3}</p>
          </div>

          <div className="order-1 lg:order-2">
            <PlaceholderImage
              label={t.about.imageLabel}
              containerClassName="aspect-[4/3] w-full"
              rounded="2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
