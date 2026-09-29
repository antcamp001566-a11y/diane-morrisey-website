import Link from "next/link";
import SiteImage from "./SiteImage";
import type { Recipe } from "@/data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/5 transition-transform hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <SiteImage
          src={recipe.image}
          alt={recipe.title}
          fallbackLabel={recipe.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <span className="font-body text-xs font-bold uppercase tracking-wide text-olive-dark">
          {recipe.category}
        </span>
        <h3 className="font-display text-xl font-semibold text-ink">
          {recipe.title}
        </h3>
        <p className="line-clamp-2 font-body text-sm text-ink-light">
          {recipe.description}
        </p>
        <div className="mt-auto flex items-center gap-4 pt-2 font-body text-xs font-semibold text-ink-light">
          <span>{recipe.totalTime}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{recipe.servings}</span>
        </div>
      </div>
    </Link>
  );
}
