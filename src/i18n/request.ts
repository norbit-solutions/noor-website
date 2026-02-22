import { getRequestConfig } from "next-intl/server";

// Change to "en" for development, "fr" for production
const locale = process.env.lang || "fr";

export default getRequestConfig(async () => {
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
