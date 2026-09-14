import en from "@/dictionaries/en.json";
import ar from "@/dictionaries/ar.json";

export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];
export const defaultLocale: Locale = "en";

export const dictionaries = {
  en,
  ar,
} as const;

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/**
 * Simple interpolation helper: replaces {{key}} with values from the data object.
 */
export function t(
  template: string,
  data: Record<string, string | number> = {}
): string {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) =>
    String(data[key] ?? `{{${key}}}`)
  );
}
