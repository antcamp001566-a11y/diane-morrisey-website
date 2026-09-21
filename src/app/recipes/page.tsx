"use client";

import { useMemo, useState } from "react";
import RecipeCard from "@/components/RecipeCard";
import SectionHeading from "@/components/SectionHeading";
import { recipeCategories, recipes, type RecipeCategory } from "@/data/recipes";

export default function RecipesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<RecipeCategory | "All">("All");

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesCategory = category === "All" || recipe.category === category;
      const matchesQuery =
        query.trim() === "" ||
        recipe.title.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="container-page py-14">
      <SectionHeading
        eyebrow="The Recipe Box"
        title="Real recipes for real life"
        description="Search or browse by category to find your next family-favorite dinner, dessert, or holiday bake."
      />

      <div className="mt-8 flex flex-col gap-6">
        <label htmlFor="recipe-search" className="sr-only">
          Search recipes
        </label>
        <input
          id="recipe-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search recipes (try &quot;shrimp&quot; or &quot;cookies&quot;)"
          className="w-full max-w-lg rounded-full border-2 border-ink/15 bg-white px-5 py-3 font-body text-ink placeholder:text-ink-light/70 focus:border-tomato focus:outline-none"
        />

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory("All")}
            className={`rounded-full px-4 py-2 font-body text-sm font-semibold transition-colors ${
              category === "All"
                ? "bg-tomato text-white"
                : "bg-white text-ink-light ring-1 ring-ink/10 hover:bg-tomato/10"
            }`}
          >
            All Recipes
          </button>
          {recipeCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 font-body text-sm font-semibold transition-colors ${
                category === cat
                  ? "bg-tomato text-white"
                  : "bg-white text-ink-light ring-1 ring-ink/10 hover:bg-tomato/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        {filteredRecipes.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.slug} recipe={recipe} />
            ))}
          </div>
        ) : (
          <p className="font-body text-ink-light">
            No recipes match your search yet. Try another keyword or category.
          </p>
        )}
      </div>
    </div>
  );
}
