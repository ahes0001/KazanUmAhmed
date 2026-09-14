// REPLACE: Update the WhatsApp number before launching.
export const WHATSAPP_NUMBER = "+966500000000";

export const BUSINESS_NAME = "Kazan Um Ahmed | كازان أم أحمد";

export type PackageId =
  | "suakni-spring-1"
  | "white-suakni-1"
  | "hari-1"
  | "suakni-spring-2"
  | "white-suakni-2"
  | "hari-2";

export type Package = {
  id: PackageId;
  key: "suakniSpring" | "whiteSuakni" | "hari";
  lambCount: 1 | 2;
  feeds: number;
  originalPrice: number;
  currentPrice: number;
};

export const packages: Package[] = [
  {
    id: "suakni-spring-1",
    key: "suakniSpring",
    lambCount: 1,
    feeds: 30,
    originalPrice: 2200,
    currentPrice: 1800,
  },
  {
    id: "white-suakni-1",
    key: "whiteSuakni",
    lambCount: 1,
    feeds: 20,
    originalPrice: 2200,
    currentPrice: 1800,
  },
  {
    id: "hari-1",
    key: "hari",
    lambCount: 1,
    feeds: 20,
    originalPrice: 2500,
    currentPrice: 2100,
  },
  {
    id: "suakni-spring-2",
    key: "suakniSpring",
    lambCount: 2,
    feeds: 60,
    originalPrice: 4400,
    currentPrice: 3500,
  },
  {
    id: "white-suakni-2",
    key: "whiteSuakni",
    lambCount: 2,
    feeds: 40,
    originalPrice: 4400,
    currentPrice: 3500,
  },
  {
    id: "hari-2",
    key: "hari",
    lambCount: 2,
    feeds: 40,
    originalPrice: 5000,
    currentPrice: 4100,
  },
];

export function getPackageById(id: PackageId | ""): Package | undefined {
  return packages.find((p) => p.id === id);
}

export function buildWhatsAppUrl(message: string): string {
  const cleaned = WHATSAPP_NUMBER.replace(/\D/g, "");
  return `https://wa.me/${cleaned}?text=${encodeURIComponent(message)}`;
}
