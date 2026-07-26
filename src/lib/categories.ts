// The category list is a fixed enum shared by the UI, Zod schemas, and the DB
// column (plain text, validated at the boundary — no categories table; see
// REWRITE_PLAN.md §4).
export const CATEGORIES = [
  "art",
  "design",
  "film",
  "food",
  "games",
  "music",
  "publishing",
  "technology",
] as const;

export type Category = (typeof CATEGORIES)[number];

export function isCategory(value: string): value is Category {
  return (CATEGORIES as readonly string[]).includes(value);
}

export const CATEGORY_LABELS: Record<Category, string> = {
  art: "Art",
  design: "Design",
  film: "Film",
  food: "Food",
  games: "Games",
  music: "Music",
  publishing: "Publishing",
  technology: "Technology",
};
