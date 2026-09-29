import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { recipes } from "@/data/recipes";

const staticRoutes = ["", "/about", "/recipes", "/the-book", "/press", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const recipeEntries = recipes.map((recipe) => ({
    url: `${site.url}/recipes/${recipe.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...recipeEntries];
}
