// ---------------------------------------------------------------------------
// RECIPES — every recipe below is invented sample content to demonstrate
// the format (card, filtering, detail layout) — none of these are Diane's
// actual recipes. `verified: false` reflects that on every entry; flip it
// to `true` only once a recipe's text has actually come from Diane. Add,
// remove, or edit entries here; the Recipes pages read straight from this
// file, so no other code needs to change. `image` accepts any string —
// swap in a real photo path (e.g. "/images/recipes/shrimp-parm.jpg") once
// you have one, and the placeholder graphic is used automatically until
// then. Recommended photo: 4:3, at least 1200x900px.
// ---------------------------------------------------------------------------

export type RecipeCategory =
  | "Weeknight Dinners"
  | "Holiday Baking"
  | "Family Favorites"
  | "Quick & Easy"
  | "Desserts";

export type Recipe = {
  slug: string;
  title: string;
  category: RecipeCategory;
  description: string;
  totalTime: string;
  servings: string;
  image?: string;
  ingredients: string[];
  steps: string[];
  // False for every sample recipe below — set true once real recipe text
  // from Diane replaces it.
  verified: boolean;
  // Optional link back to where a real recipe was originally published
  // (her site, a press feature, etc.) once one exists.
  sourceUrl?: string;
};

export const recipeCategories: RecipeCategory[] = [
  "Weeknight Dinners",
  "Holiday Baking",
  "Family Favorites",
  "Quick & Easy",
  "Desserts",
];

export const recipes: Recipe[] = [
  {
    slug: "shrimp-parm",
    title: "Shrimp Parm",
    category: "Weeknight Dinners",
    description:
      "Crispy, saucy, cheesy shrimp parm that's on the table in 30 minutes flat — a family favorite that even the picky eaters ask for on repeat.",
    totalTime: "30 min",
    servings: "Serves 4-6",
    verified: false,
    ingredients: [
      "1 1/2 lbs large shrimp, peeled and deveined",
      "1 cup Italian breadcrumbs",
      "1/2 cup grated Parmesan, plus more for topping",
      "2 eggs, beaten",
      "1/2 cup flour",
      "3 cups marinara sauce (homemade or your favorite jar)",
      "8 oz fresh mozzarella, sliced",
      "Olive oil, for frying",
      "Fresh basil, for serving",
    ],
    steps: [
      "Set up a dredging station: flour in one bowl, beaten eggs in another, and breadcrumbs mixed with Parmesan in a third.",
      "Coat each shrimp in flour, then egg, then the breadcrumb mixture, pressing gently so it sticks.",
      "Heat a generous layer of olive oil in a large skillet over medium-high heat. Fry shrimp in batches until golden, about 2 minutes per side. Drain on a paper towel-lined plate.",
      "Preheat the broiler. Spread marinara in a baking dish, nestle the fried shrimp on top, and cover with mozzarella slices.",
      "Broil for 2-3 minutes until the cheese is bubbly and golden. Top with fresh basil and extra Parmesan, and serve over pasta or with crusty bread.",
    ],
  },
  {
    slug: "holiday-cinnamon-rolls",
    title: "Overnight Holiday Cinnamon Rolls",
    category: "Holiday Baking",
    description:
      "Make these the night before and wake up to the smell of cinnamon and brown sugar — the ultimate cozy holiday morning tradition.",
    totalTime: "45 min active, overnight rise",
    servings: "Makes 12 rolls",
    verified: false,
    ingredients: [
      "1 cup warm milk",
      "2 1/4 tsp active dry yeast",
      "1/2 cup sugar",
      "2 eggs",
      "1/3 cup melted butter",
      "4 cups all-purpose flour",
      "1 cup brown sugar",
      "2 1/2 tbsp cinnamon",
      "1/2 cup softened butter, for filling",
      "4 oz cream cheese, for frosting",
    ],
    steps: [
      "Combine warm milk, yeast, and a pinch of sugar. Let sit until foamy, about 5 minutes.",
      "Mix in remaining sugar, eggs, melted butter, and flour to form a soft dough. Knead 5-7 minutes, then let rise 1 hour.",
      "Roll dough into a large rectangle. Spread with softened butter and sprinkle with brown sugar and cinnamon.",
      "Roll tightly into a log, slice into 12 rolls, and place in a greased baking dish. Cover and refrigerate overnight.",
      "In the morning, let the rolls sit at room temperature for 30 minutes while the oven preheats to 350°F. Bake 25-30 minutes until golden, then top with cream cheese frosting.",
    ],
  },
  {
    slug: "sunday-sauce",
    title: "Sunday Sauce & Meatballs",
    category: "Family Favorites",
    description:
      "The sauce that simmers all day and brings everyone to the kitchen — this is the recipe my kids request for every birthday.",
    totalTime: "3 hrs",
    servings: "Serves 8",
    verified: false,
    ingredients: [
      "2 lbs ground beef and pork mix",
      "1 cup breadcrumbs soaked in milk",
      "2 eggs",
      "1 cup grated Parmesan",
      "3 cans crushed tomatoes",
      "1 small onion, diced",
      "4 cloves garlic, minced",
      "Fresh basil and oregano",
      "Olive oil, salt, and pepper",
    ],
    steps: [
      "Combine beef, pork, soaked breadcrumbs, eggs, Parmesan, and seasoning. Roll into golf ball-sized meatballs.",
      "Brown meatballs in olive oil in a large pot, then set aside.",
      "In the same pot, sauté onion and garlic until soft. Add crushed tomatoes and bring to a simmer.",
      "Return meatballs to the pot, cover, and simmer on low for 2-3 hours, stirring occasionally.",
      "Finish with fresh basil and serve over your favorite pasta with extra Parmesan.",
    ],
  },
  {
    slug: "15-minute-lemon-pasta",
    title: "15-Minute Lemon Pasta",
    category: "Quick & Easy",
    description:
      "Bright, buttery, and ready before the table's even set. This is my go-to on the nights when everyone's starving and I have twenty minutes.",
    totalTime: "15 min",
    servings: "Serves 4",
    verified: false,
    ingredients: [
      "1 lb spaghetti",
      "1/2 cup butter",
      "1 cup grated Parmesan",
      "Zest and juice of 2 lemons",
      "1/2 cup reserved pasta water",
      "Fresh cracked pepper and parsley",
    ],
    steps: [
      "Cook spaghetti in well-salted water until al dente. Reserve 1/2 cup pasta water before draining.",
      "In the empty pot, melt butter over low heat. Add lemon zest and juice.",
      "Toss the pasta back in with Parmesan and a splash of pasta water, tossing until glossy and creamy.",
      "Season with cracked pepper, top with parsley, and serve immediately.",
    ],
  },
  {
    slug: "brown-butter-chocolate-chip-cookies",
    title: "Brown Butter Chocolate Chip Cookies",
    category: "Desserts",
    description:
      "Nutty brown butter and flaky sea salt take the classic chocolate chip cookie to a whole new level. These never last more than a day in my house.",
    totalTime: "35 min",
    servings: "Makes 24 cookies",
    verified: false,
    ingredients: [
      "1 cup butter, browned and slightly cooled",
      "1 cup brown sugar",
      "1/2 cup granulated sugar",
      "2 eggs",
      "2 1/4 cups flour",
      "1 tsp baking soda",
      "2 cups chocolate chips",
      "Flaky sea salt, for topping",
    ],
    steps: [
      "Brown the butter in a saucepan until fragrant and golden, then let cool slightly.",
      "Whisk browned butter with both sugars until glossy, then beat in eggs.",
      "Fold in flour and baking soda until just combined, then stir in chocolate chips.",
      "Chill dough for 30 minutes, then scoop onto a lined baking sheet.",
      "Bake at 375°F for 10-12 minutes. Sprinkle with flaky salt right out of the oven.",
    ],
  },
  {
    slug: "sheet-pan-chicken-fajitas",
    title: "Sheet Pan Chicken Fajitas",
    category: "Weeknight Dinners",
    description:
      "One pan, one sheet tray, zero stress. This is the dinner I make when it's been one of those days and everyone still needs to eat.",
    totalTime: "35 min",
    servings: "Serves 4-6",
    verified: false,
    ingredients: [
      "2 lbs chicken breast, sliced into strips",
      "3 bell peppers, sliced",
      "1 large onion, sliced",
      "3 tbsp olive oil",
      "2 tbsp taco seasoning",
      "Flour tortillas, lime, and toppings of choice",
    ],
    steps: [
      "Preheat oven to 425°F. Toss chicken and vegetables with olive oil and taco seasoning on a sheet pan.",
      "Spread into a single layer and roast for 20-25 minutes, stirring halfway, until chicken is cooked through and veggies are charred at the edges.",
      "Warm tortillas and serve with a squeeze of lime and your favorite toppings.",
    ],
  },
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.slug === slug);
}
