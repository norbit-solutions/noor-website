"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";
import { getServiceBySlug } from "@/data/services";
import ServiceInfo from "@/components/services/ServiceInfo";
import RelatedServices from "@/components/services/RelatedServices";
import Footer from "@/components/layout/Footer";

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const locale = useLocale();
  const service = getServiceBySlug(slug, locale);

  if (!service) {
    notFound();
  }

  return (
    <main>
      <ServiceInfo service={service} />
      <RelatedServices currentId={service.id} group={service.group} />
      <Footer />
    </main>
  );
}
