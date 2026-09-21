import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Recipes | ${site.name}`,
  description: "Browse and search real, family-friendly recipes from Diane Morrisey.",
};

export default function RecipesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
