"use client";

import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { PlaceholderImage } from "@/components/placeholder-image";

export function Gallery() {
  const { t, dir } = useLanguage();
  const labels = Object.values(t.gallery.imageLabels);

  return (
    <section id="gallery" className="bg-muted/30 py-20 md:py-28" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.gallery.eyebrow}
          heading={t.gallery.heading}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {labels.map((label, index) => (
            <PlaceholderImage
              key={index}
              label={label}
              containerClassName={`aspect-[4/3] w-full ${
                index === 0 || index === 3 ? "lg:aspect-[16/10]" : ""
              }`}
              rounded="xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
