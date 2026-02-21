export interface Product {
  id: string;
  slug: string;
  nameKey: string;
  categoryKey: string;
  category: string;
  descriptionKey: string;
  images: string[];
  price?: string;
  sku: string;
  inStock: boolean;
  isNew: boolean;
  specs: { label: string; value: string }[];
}

export const CATEGORIES = [
  { key: "generalSupplies", slug: "general-supplies" },
  { key: "professionalEquipment", slug: "professional-equipment" },
  { key: "technicalMaterials", slug: "technical-materials" },
  { key: "agriculturalProducts", slug: "agricultural-products" },
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "1",
    slug: "a4-paper-ream",
    nameKey: "paperReam",
    categoryKey: "generalSupplies",
    category: "general-supplies",
    descriptionKey: "paperReamDesc",
    images: [
      "/images/categories/stationery.jpg",
      "/images/categories/electronics.jpg",
    ],
    sku: "MN-GS-001",
    inStock: true,
    isNew: false,
    specs: [
      { label: "Size", value: "A4 (210 x 297mm)" },
      { label: "Weight", value: "80 gsm" },
      { label: "Sheets", value: "500 per ream" },
      { label: "Color", value: "White" },
    ],
  },
  {
    id: "2",
    slug: "multifunction-printer",
    nameKey: "printer",
    categoryKey: "professionalEquipment",
    category: "professional-equipment",
    descriptionKey: "printerDesc",
    images: [
      "/images/categories/electronics.jpg",
      "/images/categories/stationery.jpg",
    ],
    sku: "MN-PE-001",
    inStock: true,
    isNew: true,
    specs: [
      { label: "Type", value: "Laser Multifunction" },
      { label: "Functions", value: "Print, Scan, Copy, Fax" },
      { label: "Speed", value: "30 ppm" },
      { label: "Connectivity", value: "USB, WiFi, Ethernet" },
    ],
  },
  {
    id: "3",
    slug: "power-generator",
    nameKey: "generator",
    categoryKey: "technicalMaterials",
    category: "technical-materials",
    descriptionKey: "generatorDesc",
    images: [
      "/images/categories/car-parts.jpg",
      "/images/categories/electronics.jpg",
    ],
    sku: "MN-TM-001",
    inStock: true,
    isNew: false,
    specs: [
      { label: "Power", value: "5000W" },
      { label: "Fuel", value: "Diesel" },
      { label: "Runtime", value: "12 hours" },
      { label: "Noise Level", value: "68 dB" },
    ],
  },
  {
    id: "4",
    slug: "certified-corn-seeds",
    nameKey: "cornSeeds",
    categoryKey: "agriculturalProducts",
    category: "agricultural-products",
    descriptionKey: "cornSeedsDesc",
    images: [
      "/images/categories/food-tin.jpg",
      "/images/categories/stationery.jpg",
    ],
    sku: "MN-AP-001",
    inStock: true,
    isNew: false,
    specs: [
      { label: "Type", value: "Hybrid Corn Seeds" },
      { label: "Certification", value: "Certified Grade A" },
      { label: "Weight", value: "25 kg bag" },
      { label: "Germination", value: "95%+" },
    ],
  },
  {
    id: "5",
    slug: "ink-cartridges",
    nameKey: "inkCartridges",
    categoryKey: "generalSupplies",
    category: "general-supplies",
    descriptionKey: "inkCartridgesDesc",
    images: [
      "/images/categories/stationery.jpg",
      "/images/categories/electronics.jpg",
    ],
    sku: "MN-GS-002",
    inStock: true,
    isNew: true,
    specs: [
      { label: "Type", value: "Compatible Ink" },
      { label: "Colors", value: "Black, Cyan, Magenta, Yellow" },
      { label: "Yield", value: "2000 pages" },
      { label: "Compatibility", value: "Universal" },
    ],
  },
  {
    id: "6",
    slug: "office-furniture",
    nameKey: "officeFurniture",
    categoryKey: "professionalEquipment",
    category: "professional-equipment",
    descriptionKey: "officeFurnitureDesc",
    images: [
      "/images/categories/electronics.jpg",
      "/images/categories/car-parts.jpg",
    ],
    sku: "MN-PE-002",
    inStock: true,
    isNew: false,
    specs: [
      { label: "Material", value: "High-grade MDF & Steel" },
      { label: "Type", value: "Executive Desk" },
      { label: "Dimensions", value: "160 x 80 x 75 cm" },
      { label: "Color", value: "Walnut / Black" },
    ],
  },
  {
    id: "7",
    slug: "technical-tools",
    nameKey: "technicalTools",
    categoryKey: "technicalMaterials",
    category: "technical-materials",
    descriptionKey: "technicalToolsDesc",
    images: [
      "/images/categories/car-parts.jpg",
      "/images/categories/food-tin.jpg",
    ],
    sku: "MN-TM-002",
    inStock: true,
    isNew: false,
    specs: [
      { label: "Set", value: "Professional 52-piece" },
      { label: "Material", value: "Chrome Vanadium Steel" },
      { label: "Case", value: "Heavy-duty carry case" },
      { label: "Warranty", value: "2 years" },
    ],
  },
  {
    id: "8",
    slug: "npk-fertilizer",
    nameKey: "fertilizer",
    categoryKey: "agriculturalProducts",
    category: "agricultural-products",
    descriptionKey: "fertilizerDesc",
    images: [
      "/images/categories/food-tin.jpg",
      "/images/categories/car-parts.jpg",
    ],
    sku: "MN-AP-002",
    inStock: true,
    isNew: true,
    specs: [
      { label: "Formula", value: "NPK 15-15-15" },
      { label: "Weight", value: "50 kg bag" },
      { label: "Application", value: "All crops" },
      { label: "Release", value: "Slow release" },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryKey: string): Product[] {
  return PRODUCTS.filter((p) => p.categoryKey === categoryKey);
}

export function getCategoryBySlug(
  slug: string
): (typeof CATEGORIES)[number] | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getRecommendedProducts(
  currentId: string,
  categoryKey?: string,
  limit = 4
): Product[] {
  const others = PRODUCTS.filter((p) => p.id !== currentId);
  if (categoryKey) {
    const sameCategory = others.filter((p) => p.categoryKey === categoryKey);
    const rest = others.filter((p) => p.categoryKey !== categoryKey);
    return [...sameCategory, ...rest].slice(0, limit);
  }
  return others.slice(0, limit);
}
