// REPLACE: Update the WhatsApp number before launching.
export const WHATSAPP_NUMBER = "+966502466713";

export const BUSINESS_NAME = "Kazan Um Ahmed | كازان أم أحمد";

export type PackageId =
  | "red-sawakani-half"
  | "white-sawakni-half"
  | "hari-half"
  | "red-sawakani-whole"
  | "white-sawakni-whole"
  | "hari-whole"
  | "red-sawakani-double"
  | "white-sawakni-double"
  | "hari-double";

export type PackageSize = "half" | "whole" | "double";
export type Oiliness = "lessOily" | "moreOily";

export type Package = {
  id: PackageId;
  key: "redSawakani" | "whiteSawakni" | "hari";
  size: PackageSize;
  feeds: number;
  originalPrice: number;
  currentPrice: number;
  oiliness: Oiliness;
};

export const packages: Package[] = [
  // Half lamb options
  {
    id: "red-sawakani-half",
    key: "redSawakani",
    size: "half",
    feeds: 15,
    originalPrice: 1350,
    currentPrice: 1150,
    oiliness: "lessOily",
  },
  {
    id: "white-sawakni-half",
    key: "whiteSawakni",
    size: "half",
    feeds: 15,
    originalPrice: 1350,
    currentPrice: 1150,
    oiliness: "moreOily",
  },
  {
    id: "hari-half",
    key: "hari",
    size: "half",
    feeds: 15,
    originalPrice: 1550,
    currentPrice: 1350,
    oiliness: "moreOily",
  },
  // One lamb options
  {
    id: "red-sawakani-whole",
    key: "redSawakani",
    size: "whole",
    feeds: 30,
    originalPrice: 2300,
    currentPrice: 1900,
    oiliness: "lessOily",
  },
  {
    id: "white-sawakni-whole",
    key: "whiteSawakni",
    size: "whole",
    feeds: 20,
    originalPrice: 2300,
    currentPrice: 1900,
    oiliness: "moreOily",
  },
  {
    id: "hari-whole",
    key: "hari",
    size: "whole",
    feeds: 20,
    originalPrice: 2600,
    currentPrice: 2200,
    oiliness: "moreOily",
  },
  // Two lamb options
  {
    id: "red-sawakani-double",
    key: "redSawakani",
    size: "double",
    feeds: 60,
    originalPrice: 4600,
    currentPrice: 3600,
    oiliness: "lessOily",
  },
  {
    id: "white-sawakni-double",
    key: "whiteSawakni",
    size: "double",
    feeds: 40,
    originalPrice: 4600,
    currentPrice: 3600,
    oiliness: "moreOily",
  },
  {
    id: "hari-double",
    key: "hari",
    size: "double",
    feeds: 40,
    originalPrice: 5200,
    currentPrice: 4200,
    oiliness: "moreOily",
  },
];

export function getPackageById(id: PackageId | ""): Package | undefined {
  return packages.find((p) => p.id === id);
}

export function buildWhatsAppUrl(message: string): string {
  const cleaned = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}

