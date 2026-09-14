"use client";

import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { ClipboardList, CreditCard, CalendarCheck, Truck } from "lucide-react";

const steps = [
  { key: "step1", icon: CalendarCheck },
  { key: "step2", icon: ClipboardList },
  { key: "step3", icon: CreditCard },
  { key: "step4", icon: Truck },
] as const;

export function HowItWorks() {
  const { t, dir } = useLanguage();

  return (
    <section id="how-it-works" className="py-20 md:py-28" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.howItWorks.eyebrow}
          heading={t.howItWorks.heading}
        />

        <div className="relative">
          {/* Desktop connector line */}
          <div className="absolute top-12 start-[12.5%] end-[12.5%] hidden h-0.5 bg-border lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const content = t.howItWorks[step.key];
              return (
                <div
                  key={step.key}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex size-24 items-center justify-center rounded-full border-4 border-background bg-primary/10 shadow-sm">
                    <Icon className="size-9 text-primary" />
                  </div>
                  <div className="mt-5 flex size-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-foreground">
                    {content.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {content.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
