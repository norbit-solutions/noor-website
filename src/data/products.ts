import productsEn from "@/content/products/en.json";
import productsFr from "@/content/products/fr.json";
import categoriesEn from "@/content/categories/en.json";
import categoriesFr from "@/content/categories/fr.json";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Product {
  id: string;
  slug: string;
  name: string;
  categoryKey: string;
  categorySlug: string;
  categoryName: string;
  description: string;
  images: string[];
  sku: string;
  inStock: boolean;
  isNew: boolean;
  specs: { label: string; value: string }[];
}

export interface Category {
  key: string;
  slug: string;
  name: string;
  description: string;
  image: string;
}

// ---------------------------------------------------------------------------
// Locale-aware data maps
// ---------------------------------------------------------------------------

type Locale = "en" | "fr";

const PRODUCTS_MAP: Record<Locale, Product[]> = {
  en: productsEn as Product[],
  fr: productsFr as Product[],
};

const CATEGORIES_MAP: Record<Locale, Category[]> = {
  en: categoriesEn as Category[],
  fr: categoriesFr as Category[],
};

// ---------------------------------------------------------------------------
// Public API  — every function accepts `locale` (defaults to "fr")
// ---------------------------------------------------------------------------

export function getProducts(locale: string = "fr"): Product[] {
  return PRODUCTS_MAP[(locale as Locale)] ?? PRODUCTS_MAP.fr;
}

export function getCategories(locale: string = "fr"): Category[] {
  return CATEGORIES_MAP[(locale as Locale)] ?? CATEGORIES_MAP.fr;
}

export function getProductBySlug(
  slug: string,
  locale: string = "fr",
): Product | undefined {
  return getProducts(locale).find((p) => p.slug === slug);
}

export function getProductsByCategory(
  categoryKey: string,
  locale: string = "fr",
): Product[] {
  return getProducts(locale).filter((p) => p.categoryKey === categoryKey);
}

export function getCategoryBySlug(
  slug: string,
  locale: string = "fr",
): Category | undefined {
  return getCategories(locale).find((c) => c.slug === slug);
}

export function getRecommendedProducts(
  currentId: string,
  locale: string = "fr",
  categoryKey?: string,
  limit = 4,
): Product[] {
  const others = getProducts(locale).filter((p) => p.id !== currentId);
  if (categoryKey) {
    const sameCategory = others.filter((p) => p.categoryKey === categoryKey);
    const rest = others.filter((p) => p.categoryKey !== categoryKey);
    return [...sameCategory, ...rest].slice(0, limit);
  }
  return others.slice(0, limit);
}
