import type { Metadata } from "next";

import { CategoryChips } from "@/components/category-chips";
import { ProjectCard } from "@/components/project-card";
import { isCategory } from "@/lib/categories";
import { MOCK_PROJECTS } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Discover",
  description: "Browse live projects and filter by category.",
};

// The category filter lives in the URL (?category=games) so filtered views are
// shareable links. Swaps to a Drizzle query (getLiveProjects) on Day 2.
export default async function DiscoverPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: raw } = await searchParams;
  const category = raw && isCategory(raw) ? raw : undefined;

  const projects = category
    ? MOCK_PROJECTS.filter((p) => p.category === category)
    : MOCK_PROJECTS;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-2xl font-bold tracking-tight">Discover projects</h1>
      <p className="mt-1 text-muted-foreground">
        {projects.length} live {projects.length === 1 ? "project" : "projects"}
        {category ? " in this category" : ""}
      </p>

      <div className="mt-6">
        <CategoryChips active={category} />
      </div>

      {projects.length > 0 ? (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="mt-16 rounded-lg border border-dashed p-12 text-center text-muted-foreground">
          <p className="font-medium">Nothing here yet.</p>
          <p className="mt-1 text-sm">
            No live projects in this category — be the first to start one.
          </p>
        </div>
      )}
    </div>
  );
}
