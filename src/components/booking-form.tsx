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

export function BookingForm() {
  const { t, dir, locale } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    dateTime: "",
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

    if (!formData.name || !formData.phone || !formData.packageId) {
      alert(
        locale === "ar"
          ? "يرجى ملء الاسم ورقم الجوال واختيار الباقة."
          : "Please fill in your name, phone number, and select a package."
      );
      return;
    }

    const pkg = getPackageById(formData.packageId);
    if (!pkg) return;

    const message = interpolate(t.booking.whatsappMessage, {
      name: formData.name,
      phone: formData.phone,
      address: formData.address || (locale === "ar" ? "غير محدد" : "Not provided"),
      dateTime: formData.dateTime || (locale === "ar" ? "غير محدد" : "Not provided"),
      package: `${pkg.lambCount === 2 ? "2x " : ""}${t.pricing.packages[pkg.key].name}`,
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
    ? `${selectedPackage.lambCount === 2 ? "2x " : ""}${t.pricing.packages[selectedPackage.key].name}`
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
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
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
                <Label htmlFor="phone">{t.booking.fields.phone}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+966 50 000 0000"
                  required
                />
              </div>
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
                <Label htmlFor="dateTime">{t.booking.fields.dateTime}</Label>
                <Input
                  id="dateTime"
                  type="text"
                  value={formData.dateTime}
                  onChange={(e) => handleChange("dateTime", e.target.value)}
                  placeholder="DD/MM/YYYY, 7:00 PM"
                />
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
                        {pkg.lambCount === 2 ? "2x " : ""}
                        {t.pricing.packages[pkg.key].name} —{" "}
                        {interpolate(t.pricing.feedsUpTo, { count: pkg.feeds })}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
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

