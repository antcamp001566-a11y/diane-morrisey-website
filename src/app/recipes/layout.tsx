import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Recipes",
  description: "Browse and search family-friendly recipes from Diane Morrisey.",
  path: "/recipes",
});

export default function RecipesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
