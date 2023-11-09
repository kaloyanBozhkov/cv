export const getBaseUrl = (useRelativeOnFE = true) => {
  if (typeof window !== "undefined" && useRelativeOnFE)
    // browser should use relative path
    return "";

  if (process.env.NEXT_PUBLIC_DOMAIN && process.env.NODE_ENV !== "development")
    return process.env.NEXT_PUBLIC_DOMAIN.includes("http")
      ? process.env.NEXT_PUBLIC_DOMAIN
      : `https://${process.env.NEXT_PUBLIC_DOMAIN}`;

  // assume localhost
  return `http://localhost:${process.env.PORT ?? 3000}`;
};
