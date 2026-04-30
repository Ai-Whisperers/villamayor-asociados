import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://villamayor.paragu-ai.com", lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: "https://villamayor.paragu-ai.com/servicios", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://villamayor.paragu-ai.com/nosotros", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://villamayor.paragu-ai.com/blog", lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: "https://villamayor.paragu-ai.com/contacto", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ]
}
