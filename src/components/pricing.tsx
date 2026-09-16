"use client";

import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/link-button";
import { packages, type Package } from "@/lib/data";
import { t as interpolate } from "@/lib/i18n";
import { Users } from "lucide-react";

function PackageCard({
  pkg,
  dictionary,
}: {
  pkg: Package;
  dictionary: ReturnType<typeof useLanguage>["t"];
}) {
  const originalText = interpolate(dictionary.pricing.was, {
    price: pkg.originalPrice.toLocaleString(),
  });
  const currentText = interpolate(dictionary.pricing.now, {
    price: pkg.currentPrice.toLocaleString(),
  });
  const feedsText = interpolate(dictionary.pricing.feedsUpTo, {
    count: pkg.feeds,
  });
  const discountAmount = pkg.originalPrice - pkg.currentPrice;
  const discountLabel = interpolate(dictionary.pricing.discountNote, {
    amount: discountAmount,
  });
  const sizeLabel = dictionary.pricing.sizeLabels[pkg.size];
  const oilinessLabel = dictionary.pricing.oiliness[pkg.oiliness];

  return (
    <Card className="relative flex h-full flex-col overflow-hidden border-foreground/10">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="font-heading text-xl">
            {dictionary.pricing.packages[pkg.key].name}
          </CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {discountLabel}
          </Badge>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {dictionary.pricing.packages[pkg.key].description}
        </p>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="flex items-end gap-3">
          <span className="text-3xl font-semibold text-foreground">
            {currentText}
          </span>
          <span className="text-sm text-muted-foreground line-through">
            {originalText}
          </span>
        </div>
        <p className="mt-1 text-xs text-muted-foreground">
          {dictionary.pricing.perOrder}
        </p>

        <div className="mt-5 space-y-2 text-sm text-foreground/80">
          <div className="flex items-center gap-2">
            <Users className="size-4 text-primary" />
            {feedsText}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base" aria-label="Lamb" role="img">
              🐑
            </span>
            {sizeLabel}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base" aria-label="Oiliness" role="img">
              🫒
            </span>
            {oilinessLabel}
          </div>
        </div>
      </CardContent>

      <CardFooter className="border-t bg-muted/30">
        <LinkButton href="#book" className="w-full">
          {dictionary.nav.book}
        </LinkButton>
      </CardFooter>
    </Card>
  );
}

function PackageGrid({
  title,
  items,
  dictionary,
}: {
  title: string;
  items: Package[];
  dictionary: ReturnType<typeof useLanguage>["t"];
}) {
  return (
    <div className="mb-14">
      <h3 className="mb-6 text-center text-xl font-medium text-foreground md:text-2xl">
        {title}
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} dictionary={dictionary} />
        ))}
      </div>
    </div>
  );
}

export function Pricing() {
  const { t, dir } = useLanguage();
  const halfLambPackages = packages.filter((p) => p.size === "half");
  const oneLambPackages = packages.filter((p) => p.size === "whole");
  const twoLambPackages = packages.filter((p) => p.size === "double");

  return (
    <section id="pricing" className="bg-muted/30 py-20 md:py-28" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.pricing.eyebrow} heading={t.pricing.heading} />
        <p className="mx-auto -mt-8 mb-12 max-w-2xl text-center text-base text-muted-foreground md:text-lg">
          {t.pricing.subheading}
        </p>

        <PackageGrid
          title={t.pricing.halfLambTitle}
          items={halfLambPackages}
          dictionary={t}
        />
        <PackageGrid
          title={t.pricing.oneLambTitle}
          items={oneLambPackages}
          dictionary={t}
        />
        <PackageGrid
          title={t.pricing.twoLambTitle}
          items={twoLambPackages}
          dictionary={t}
        />
      </div>
    </section>
  );
}
