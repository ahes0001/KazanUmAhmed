
"use client";

import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import Floating, { FloatingElement } from "@/components/fancy/image/parallax-floating";

type HeroImage = {
  src: string;
  alt: string;
  positionClass: string;
  sizeClass: string;
  depth: number;
  duration: number;
  delay: number;
  rounded?: "rounded-2xl" | "rounded-full";
  spin?: boolean;
};

const heroImages: HeroImage[] = [
  {
    src: "/images/hero1.JPG",
    alt: "Hero dish one",
    positionClass: "top-[8%] left-[17%]",
    sizeClass: "w-44 h-28 sm:w-60 sm:h-40 lg:w-85 lg:h-56",
    depth: 2.5,
    duration: 2.5,
    delay: 1,
  },
  {
    src: "/images/hero2.JPG",
    alt: "Hero dish two",
    positionClass: "top-[8%] right-[20%]",
    sizeClass: "w-44 h-28 sm:w-56 sm:h-36 lg:w-72 lg:h-48",
    depth: 1.5,
    duration: 3.8,
    delay: 0.6,
  },
  {
    src: "/images/hero3.png",
    alt: "Hero dish three",
    positionClass: "bottom-[8%] right-[10%]",
    sizeClass: "w-40 h-24 sm:w-52 sm:h-32 lg:w-72 lg:h-48",
    depth: 1.8,
    duration: 4.5,
    delay: 1.2,
  },
  {
    src: "/images/hero4.jpeg",
    alt: "Hero portrait four",
    positionClass: "top-[18%] left-[6%]",
    sizeClass: "w-28 h-40 sm:w-40 sm:h-56 lg:w-40 lg:h-55",
    depth: 1,
    duration: 4.0,
    delay: 0.3,
  },
  {
    src: "/images/hero5.jpeg",
    alt: "Hero portrait five",
    positionClass: "top-[14%] right-[5%]",
    sizeClass: "w-28 h-40 sm:w-40 sm:h-56 lg:w-52 lg:h-72",
    depth: 1.5,
    duration: 4.3,
    delay: 0.9,
  },
  {
    src: "/images/hero6.jpeg",
    alt: "Hero portrait six",
    positionClass: "sm:left-[2%] bottom-[15%] left-[6%]",
    sizeClass: "w-32 h-44 sm:w-44 sm:h-60 lg:w-66 lg:h-88",
    depth: 2,
    duration: 3.9,
    delay: 1.5,
  },
  {
    src: "/images/logo.png",
    alt: "Kazan Um Ahmed logo",
    positionClass: "bottom-[6%] left-[35%]",
    sizeClass: "w-28 h-28 sm:w-40 sm:h-40 lg:w-56 lg:h-56",
    depth: 0.5,
    duration: 5.0,
    delay: 0.5,
    rounded: "rounded-full",
    // spin: true,
  },
  {
    src: "/images/about.png",
    alt: "About Kazan Um Ahmed",
    positionClass: " bottom-[35%] right-[18%]",
    sizeClass: "w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48",
    depth: 0.5,
    duration: 5.5,
    delay: 1.1,
    rounded: "rounded-full",
  },
];

function FloatingImage({ image }: { image: HeroImage }) {
  const roundedClass =
    image.rounded === "rounded-full" ? "rounded-full" : "rounded-2xl";
  const shadowClass =
    image.rounded === "rounded-full" ? "shadow-xl" : "shadow-2xl";
  const animationClass = image.spin ? "animate-spin-slow" : "animate-float";

  return (
    <FloatingElement depth={image.depth} className={image.positionClass}>
      <div
        className={"overflow-hidden " + roundedClass + " " + shadowClass + " " + animationClass}
        style={
          image.spin
            ? undefined
            : { animationDuration: image.duration + "s", animationDelay: image.delay + "s" }
        }
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={500}
          height={500}
          className={image.sizeClass + " object-cover"}
          sizes="(max-width: 640px) 35vw, (max-width: 1024px) 28vw, 22vw"
        />
      </div>
    </FloatingElement>
  );
}

export function Hero() {
  const { t, dir } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16"
      dir={dir}
    >
      <Floating
        sensitivity={0.7}
        className="pointer-events-none absolute inset-0"
      >
        {heroImages.map((image) => (
          <FloatingImage key={image.src} image={image} />
        ))}
      </Floating>

      <div className="relative z-20 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-widest text-primary">
          {t.hero.eyebrow}
        </span>
        <h1 className="font-heading text-5xl leading-tight font-medium text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          {t.hero.headline}
        </h1>
      </div>
    </section>
  );
}
