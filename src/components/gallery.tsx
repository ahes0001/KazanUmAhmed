"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";

const galleryImages = [
  { src: "/images/Gallery1.jpg", labelKey: "one" as const },
  { src: "/images/Gallery2.jpg", labelKey: "two" as const },
  { src: "/images/Gallery3.png", labelKey: "three" as const },
  { src: "/images/Gallery4.png", labelKey: "four" as const },
  { src: "/images/Gallery5.png", labelKey: "five" as const },
  { src: "/images/Gallery6.png", labelKey: "six" as const },
];

export function Gallery() {
  const { t, dir } = useLanguage();

  return (
    <section id="gallery" className="bg-muted/30 py-20 md:py-28" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.gallery.eyebrow}
          heading={t.gallery.heading}
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] w-full overflow-hidden rounded-xl"
            >
              <Image
                src={image.src}
                alt={t.gallery.imageLabels[image.labelKey]}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

