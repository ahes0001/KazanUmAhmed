"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  const { t, dir } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-28" dir={dir}>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        {/* Text content */}
        <div className="w-full lg:w-1/2">
          <SectionHeading
            eyebrow={t.about.eyebrow}
            heading={t.about.heading}
            align="start"
            className="lg:text-start"
          />

          <div className="space-y-5 text-base leading-relaxed text-foreground/80">
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
            <p>{t.about.paragraph3}</p>
          </div>
        </div>

        {/* About photo */}
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl">
            <Image
              src="/images/about.png"
              alt={t.about.imageLabel}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
