import Button from "@/components/Button";
import SiteImage from "@/components/SiteImage";
import RecipeCard from "@/components/RecipeCard";
import SectionHeading from "@/components/SectionHeading";
import PressLogoStrip from "@/components/PressLogoStrip";
import EmailSignupForm from "@/components/EmailSignupForm";
import { recipes } from "@/data/recipes";
import { instagramFollowers } from "@/data/social";
import { book } from "@/data/book";

const featuredRecipes = recipes.slice(0, 3);

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="overflow-hidden bg-cream-dark/60">
        <div className="container-page grid items-center gap-10 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-3 font-body text-sm font-bold uppercase tracking-widest text-tomato">
              New York Times Best-Selling Author
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Cooking Real Food for Real People
            </h1>
            <p className="mt-5 max-w-lg font-body text-lg text-ink-light">
              I&apos;m Diane &mdash; mom of 6, recipe developer, and your friend
              in the kitchen. My new book, <em>{book.title}</em>, is packed
              with the recipes my family actually eats. No fuss, no fancy
              equipment, just real food that gets dinner on the table.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/the-book" variant="primary">
                Buy &ldquo;You Got This!&rdquo;
              </Button>
              <Button href="/recipes" variant="outline">
                Browse Recipes
              </Button>
            </div>
            <p className="mt-6 font-body text-sm text-ink-light">
              Followed by {instagramFollowers} home cooks on Instagram
            </p>
          </div>

          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
            <SiteImage
              alt="Diane Morrisey with the You Got This! cookbook"
              fallbackLabel="Diane + book cover hero photo"
              variant="tomato"
              fill
              priority
            />
          </div>
        </div>
      </section>

      {/* Press strip */}
      <section className="container-page py-12">
        <p className="mb-6 text-center font-body text-xs font-bold uppercase tracking-widest text-ink-light">
          As seen in
        </p>
        <PressLogoStrip />
      </section>

      {/* Featured recipes */}
      <section className="container-page py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="From the Kitchen"
            title="A few recipes to get you started"
            description="Real food, no fuss &mdash; a taste of what's cooking."
          />
          <Button href="/recipes" variant="outline">
            See all recipes
          </Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Book callout */}
      <section className="bg-olive py-16 text-cream">
        <div className="container-page grid items-center gap-10 md:grid-cols-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-xs overflow-hidden rounded-2xl shadow-lg">
            <SiteImage
              alt="You Got This! book cover"
              fallbackLabel="Book cover art"
              variant="cream"
              fill
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              {book.title}
            </h2>
            <p className="mt-2 font-body text-lg font-semibold text-cream/90">
              {book.subtitle}
            </p>
            <p className="mt-4 max-w-lg font-body text-cream/90">
              {book.description}
            </p>
            <div className="mt-8">
              <Button href="/the-book" variant="primary">
                Get Your Copy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Email signup */}
      <section className="container-page py-16 text-center">
        <SectionHeading
          align="center"
          eyebrow="Join the Family Table"
          title="Get new recipes before anyone else"
          description="No spam, just real recipes, book news, and the occasional kitchen disaster story."
        />
        <div className="mt-8 flex justify-center">
          <EmailSignupForm />
        </div>
      </section>
    </div>
  );
}
