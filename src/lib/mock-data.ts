import type { Category } from "@/lib/categories";

// ─────────────────────────────────────────────────────────────────────────────
// TEMPORARY MOCK DATA
//
// Placeholder until the real data layer lands:
//   - Drizzle schema + seed script (Day 1) replace this file as the source,
//   - display fields (raised, percent, daysLeft) become *computed* by the
//     Exercise 1 helpers (lib/money.ts percentFunded, lib/project-state.ts
//     daysLeft) — which is why they are stored pre-formatted here instead of
//     being calculated: those functions are yours to write.
//
// Delete this file once /discover and /projects/[slug] read from Postgres.
// ─────────────────────────────────────────────────────────────────────────────

export type MockProject = {
  slug: string;
  title: string;
  blurb: string;
  category: Category;
  cover: string; // tailwind gradient classes — real cover_image_url comes with the form
  raised: string;
  goal: string;
  percent: number;
  backerCount: number;
  daysLeft: number;
  storyMd: string;
};

export const MOCK_PROJECTS: MockProject[] = [
  {
    slug: "aurora-synth",
    title: "Aurora — a pocket-sized analog synth",
    blurb: "Warm analog sound, USB-C, and a weekend's worth of battery in your jacket pocket.",
    category: "technology",
    cover: "from-emerald-400 to-cyan-500",
    raised: "$12,480",
    goal: "$20,000",
    percent: 62,
    backerCount: 214,
    daysLeft: 12,
    storyMd:
      "## Why Aurora\n\nHardware synths got big and expensive. Aurora is neither — a true analog voice, three oscillators, and a step sequencer in a case the size of a paperback.\n\n## What we've built\n\nThe third prototype is on our bench right now. Sound demos are on the way.\n\n## Where the money goes\n\nTooling for the aluminum enclosure, the first 500-unit component order, and CE certification.",
  },
  {
    slug: "harbor-cookbook",
    title: "Harbor — recipes from a closing diner",
    blurb: "Forty years of short-order classics, photographed and written down before the doors shut.",
    category: "food",
    cover: "from-amber-400 to-orange-500",
    raised: "$6,150",
    goal: "$8,000",
    percent: 76,
    backerCount: 143,
    daysLeft: 21,
    storyMd:
      "## The diner\n\nHarbor Lunch has fed our block since 1986. The building sold; the recipes shouldn't go with it.\n\n## The book\n\n120 pages, 60 recipes, shot on film in the actual kitchen during the last month of service.",
  },
  {
    slug: "moss-and-stone",
    title: "Moss & Stone — a hand-bound poetry zine",
    blurb: "Letterpress covers, recycled paper, and twelve poets you haven't read yet.",
    category: "publishing",
    cover: "from-stone-400 to-emerald-600",
    raised: "$1,890",
    goal: "$2,500",
    percent: 75,
    backerCount: 88,
    daysLeft: 9,
    storyMd:
      "## The zine\n\nIssue one is 48 pages, hand-bound in an edition of 300. Every contributor is paid up front.",
  },
  {
    slug: "night-market-doc",
    title: "Night Market — a short documentary",
    blurb: "Three vendors, one summer, and the last night market on the west side.",
    category: "film",
    cover: "from-violet-500 to-fuchsia-500",
    raised: "$9,320",
    goal: "$15,000",
    percent: 46,
    backerCount: 167,
    daysLeft: 30,
    storyMd:
      "## The film\n\nWe've been filming since June. The final cut is 24 minutes; your pledge finishes color, sound, and festival submissions.",
  },
  {
    slug: "tidepool-game",
    title: "Tidepool — a cozy exploration game",
    blurb: "Play a hermit crab restoring a reef, one shell swap at a time. For desktop and deck.",
    category: "games",
    cover: "from-sky-400 to-blue-600",
    raised: "$28,940",
    goal: "$25,000",
    percent: 115,
    backerCount: 1021,
    daysLeft: 5,
    storyMd:
      "## Funded — and swimming past the goal\n\nThe base game is fully funded. Everything above the goal goes to console ports and a photo mode.",
  },
  {
    slug: "corner-mural",
    title: "The Corner Mural Project",
    blurb: "Six local artists, one blank wall, and a summer of paint on 5th and Main.",
    category: "art",
    cover: "from-rose-400 to-red-500",
    raised: "$3,410",
    goal: "$6,000",
    percent: 56,
    backerCount: 74,
    daysLeft: 17,
    storyMd:
      "## The wall\n\nThe owner said yes. The city said yes. Now we buy lifts, primer, and a very large amount of paint.",
  },
];

export function getMockProject(slug: string): MockProject | undefined {
  return MOCK_PROJECTS.find((p) => p.slug === slug);
}
