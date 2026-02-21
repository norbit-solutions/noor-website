"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import {
  PRODUCTS,
  CATEGORIES,
  getProductsByCategory,
  getCategoryBySlug,
} from "@/app/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  categorySlug?: string;
}

export default function ProductGrid({ categorySlug }: ProductGridProps) {
  const t = useTranslations("ProductsPage");
  const pt = useTranslations("FeaturedProducts");

  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  const baseProducts = category
    ? getProductsByCategory(category.key)
    : PRODUCTS;

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState("default");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    let results = [...baseProducts];

    // Filter by category (only on general listing)
    if (!categorySlug && activeCategory !== "all") {
      results = results.filter((p) => p.categoryKey === activeCategory);
    }

    // Filter by search
    if (search.trim()) {
      const query = search.toLowerCase();
      results = results.filter((p) => {
        const name = pt(`products.${p.nameKey}.name`).toLowerCase();
        const category = pt(`products.${p.nameKey}.category`).toLowerCase();
        return name.includes(query) || category.includes(query);
      });
    }

    // Sort
    if (sortBy === "nameAsc") {
      results.sort((a, b) =>
        pt(`products.${a.nameKey}.name`).localeCompare(
          pt(`products.${b.nameKey}.name`),
        ),
      );
    } else if (sortBy === "nameDesc") {
      results.sort((a, b) =>
        pt(`products.${b.nameKey}.name`).localeCompare(
          pt(`products.${a.nameKey}.name`),
        ),
      );
    }

    return results;
  }, [search, activeCategory, sortBy, pt, baseProducts, categorySlug]);

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Top Bar (Sort & Filters) */}
        <div
          className="flex justify-between items-center mb-8"
          data-aos="fade-up"
        >
          {/* Sort */}
          <div className="relative flex items-center gap-2 cursor-pointer group">
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
              />
            </svg>
            <span className="text-sm font-medium text-black underline underline-offset-4 decoration-1">
              {t("sortBy")}:{" "}
              {sortBy === "default"
                ? t("sortDefault")
                : sortBy === "nameAsc"
                  ? t("sortNameAsc")
                  : t("sortNameDesc")}
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="absolute inset-0 opacity-0 cursor-pointer"
            >
              <option value="default">{t("sortDefault")}</option>
              <option value="nameAsc">{t("sortNameAsc")}</option>
              <option value="nameDesc">{t("sortNameDesc")}</option>
            </select>
          </div>

          {/* Filters Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 group"
          >
            <svg
              className="w-4 h-4 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            <span className="text-sm font-medium text-black underline underline-offset-4 decoration-1">
              Filters
            </span>
          </button>
        </div>

        {/* Expandable Filters Area */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showFilters
              ? "max-h-96 opacity-100 mb-12"
              : "max-h-0 opacity-0 mb-0"
          }`}
        >
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <svg
                className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t("searchPlaceholder")}
                className="w-full pl-8 pr-4 py-2 border-b border-gray-300 bg-transparent text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Category Pills */}
            {!categorySlug && (
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-5 py-2.5 rounded-none text-sm font-medium transition-all duration-300 ${
                    activeCategory === "all"
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {t("allCategories")}
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                    className={`px-5 py-2.5 rounded-none text-sm font-medium transition-all duration-300 ${
                      activeCategory === cat.key
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {t(`categories.${cat.key}`)}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-12">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                index={index}
                categorySlug={categorySlug}
              />
            ))}
          </div>
        ) : (
          /* No Results */
          <div
            className="text-center py-24"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <svg
              className="w-16 h-16 text-gray-200 mx-auto mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <h3 className="text-xl font-semibold text-black mb-2">
              {t("noResults")}
            </h3>
            <p className="text-gray-500 mb-8">{t("noResultsDescription")}</p>
            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("all");
                setSortBy("default");
              }}
              className="px-6 py-3 bg-black text-white rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
            >
              {t("resetFilters")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
