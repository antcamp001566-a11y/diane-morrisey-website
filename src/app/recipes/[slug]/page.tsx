import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import { getRecipeBySlug, recipes } from "@/data/recipes";
import { site } from "@/data/site";

type RecipePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return recipes.map((recipe) => ({ slug: recipe.slug }));
}

export async function generateMetadata({
  params,
}: RecipePageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    return { title: `Recipe Not Found | ${site.name}` };
  }

  return {
    title: `${recipe.title} | ${site.name}`,
    description: recipe.description,
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="container-page py-14">
      <Link
        href="/recipes"
        className="font-body text-sm font-semibold text-olive-dark hover:text-tomato"
      >
        &larr; Back to all recipes
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-md">
          <PlaceholderImage
            src={recipe.image}
            alt={recipe.title}
            label={recipe.title}
            variant="tomato"
            fill
          />
        </div>

        <div>
          <span className="font-body text-xs font-bold uppercase tracking-wide text-olive-dark">
            {recipe.category}
          </span>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            {recipe.title}
          </h1>
          <p className="mt-4 font-body text-lg text-ink-light">
            {recipe.description}
          </p>
          <div className="mt-6 flex gap-8 font-body text-sm font-semibold text-ink">
            <div>
              <p className="text-ink-light">Total Time</p>
              <p className="text-lg">{recipe.totalTime}</p>
            </div>
            <div>
              <p className="text-ink-light">Servings</p>
              <p className="text-lg">{recipe.servings}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-[1fr_2fr]">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink">
            Ingredients
          </h2>
          <ul className="mt-4 space-y-3 font-body text-ink-light">
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tomato" />
                <span>{ingredient}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-ink">
            Instructions
          </h2>
          <ol className="mt-4 space-y-5 font-body text-ink-light">
            {recipe.steps.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-olive font-body text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span className="pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
