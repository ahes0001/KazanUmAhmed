"use client";

import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { PlaceholderImage } from "@/components/placeholder-image";
import Image from "next/image";

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
            <p>{t.about.paragraph4}</p>
            <p>{t.about.paragraph5}</p>
          </div>

          <div className="order-1 lg:order-2 pointer-events-none top-1/2 end-4 -z-10 hidden -translate-y-1/2 md:block lg:end-16">
            <Image
              src="/images/about.png"
              alt={t.about.imageLabel}
              width={280}
              height={280}
              className="h-40 w-40 object-contain md:h-56 md:w-56 lg:h-72 lg:w-72"
              ></Image>
            {/* <PlaceholderImage
              label={t.about.imageLabel}
              containerClassName="aspect-[4/3] w-full"
              rounded="2xl"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
