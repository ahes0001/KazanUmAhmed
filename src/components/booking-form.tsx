"use client";

import { useMemo, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getPackageById, packages, buildWhatsAppUrl, type PackageId } from "@/lib/data";
import { t as interpolate } from "@/lib/i18n";

function getPackageLabel(
  pkg: NonNullable<ReturnType<typeof getPackageById>>,
  t: ReturnType<typeof useLanguage>["t"]
) {
  const name = t.pricing.packages[pkg.key].name;
  const size = t.pricing.sizeLabels[pkg.size];
  return `${name} (${size})`;
}

export function BookingForm() {
  const { t, dir, locale } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    date: "",
    time: "",
    packageId: "" as PackageId | "",
    notes: "",
  });

  const selectedPackage = useMemo(
    () => getPackageById(formData.packageId),
    [formData.packageId]
  );

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.date || !formData.time || !formData.packageId) {
      alert(
        locale === "ar"
          ? "يرجى ملء الاسم والتاريخ والوقت واختيار الباقة."
          : "Please fill in your name, event date, event time, and select a package."
      );
      return;
    }

    const pkg = getPackageById(formData.packageId);
    if (!pkg) return;

    const packageLabel = getPackageLabel(pkg, t);

    const message = interpolate(t.booking.whatsappMessage, {
      name: formData.name,
      address: formData.address || (locale === "ar" ? "غير محدد" : "Not provided"),
      date: formData.date,
      time: formData.time,
      package: packageLabel,
      guests: pkg.feeds,
      total: pkg.currentPrice.toLocaleString(),
      notes: formData.notes || (locale === "ar" ? "لا يوجد" : "None"),
    });

    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  const originalPrice = selectedPackage
    ? selectedPackage.originalPrice.toLocaleString()
    : "—";
  const discount = selectedPackage
    ? (selectedPackage.originalPrice - selectedPackage.currentPrice).toLocaleString()
    : "—";
  const total = selectedPackage
    ? selectedPackage.currentPrice.toLocaleString()
    : "—";
  const guests = selectedPackage ? selectedPackage.feeds : "—";
  const packageName = selectedPackage
    ? getPackageLabel(selectedPackage, t)
    : t.booking.packagePlaceholder;

  return (
    <section id="book" className="py-20 md:py-28" dir={dir}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={t.booking.eyebrow}
          heading={t.booking.heading}
        />

        <p className="mx-auto -mt-6 mb-12 max-w-2xl text-center text-foreground/80">
          {t.booking.subtext}
        </p>

        <div className="grid gap-10 lg:grid-cols-3">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 lg:col-span-2"
          >
            <div className="space-y-2">
              <Label htmlFor="name">{t.booking.fields.name}</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder={t.booking.fields.name}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">{t.booking.fields.address}</Label>
              <Input
                id="address"
                type="text"
                value={formData.address}
                onChange={(e) => handleChange("address", e.target.value)}
                placeholder={t.booking.fields.address}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="date">{t.booking.fields.date}</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">{t.booking.fields.time}</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleChange("time", e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="package">{t.booking.fields.package}</Label>
              <Select
                value={formData.packageId}
                onValueChange={(value) =>
                  handleChange("packageId", value as PackageId)
                }
              >
                <SelectTrigger id="package" className="w-full">
                  <SelectValue placeholder={t.booking.packagePlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  {packages.map((pkg) => (
                    <SelectItem key={pkg.id} value={pkg.id}>
                      {getPackageLabel(pkg, t)} —{" "}
                      {interpolate(t.pricing.feedsUpTo, { count: pkg.feeds })}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">{t.booking.fields.notes}</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => handleChange("notes", e.target.value)}
                placeholder={t.booking.fields.notes}
                rows={4}
              />
            </div>

            <Button type="submit" size="lg" className="w-full text-base sm:w-auto">
              {t.booking.submit}
            </Button>
          </form>

          <aside className="lg:col-span-1">
            <Card className="sticky top-24 border-foreground/10">
              <CardHeader>
                <CardTitle className="font-heading text-lg">
                  {t.booking.orderPreview.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {t.booking.orderPreview.selectedPackage}
                  </span>
                  <span className="max-w-[55%] text-end font-medium">
                    {packageName}
                  </span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {t.booking.orderPreview.guests}
                  </span>
                  <span className="font-medium">{guests}</span>
                </div>

                <Separator />

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {t.booking.orderPreview.originalPrice}
                  </span>
                  <span className="font-medium line-through">SAR {originalPrice}</span>
                </div>

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    {t.booking.orderPreview.discount}
                  </span>
                  <span className="font-medium text-destructive">
                    -SAR {discount}
                  </span>
                </div>

                <Separator />

                <div className="flex justify-between text-base font-semibold">
                  <span>{t.booking.orderPreview.total}</span>
                  <span>SAR {total}</span>
                </div>

                <p className="text-xs text-muted-foreground">
                  {t.booking.orderPreview.freeDelivery}
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </section>
  );
}
