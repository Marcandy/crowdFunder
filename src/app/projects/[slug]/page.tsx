import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProgressBar } from "@/components/progress-bar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CATEGORY_LABELS } from "@/lib/categories";
import { getMockProject, MOCK_PROJECTS } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return MOCK_PROJECTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getMockProject(slug);
  return { title: project?.title ?? "Project" };
}

// TEMPORARY markdown rendering: headings + paragraphs only, enough for mock
// stories. Replaced by a proper renderer when the story editor lands (Day 2).
function MockStory({ md }: { md: string }) {
  return (
    <div className="space-y-4">
      {md.split("\n\n").map((block, i) =>
        block.startsWith("## ") ? (
          <h2 key={i} className="pt-2 text-lg font-semibold">
            {block.slice(3)}
          </h2>
        ) : (
          <p key={i} className="leading-relaxed text-muted-foreground">
            {block}
          </p>
        ),
      )}
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getMockProject(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="flex items-center gap-3">
        <Badge variant="secondary">{CATEGORY_LABELS[project.category]}</Badge>
        <span className="text-sm text-muted-foreground">
          {project.daysLeft} days left
        </span>
      </div>

      <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight">
        {project.title}
      </h1>
      <p className="mt-2 text-pretty text-lg text-muted-foreground">
        {project.blurb}
      </p>

      <div
        className={cn(
          "mt-6 h-64 w-full rounded-xl bg-gradient-to-br",
          project.cover,
        )}
        aria-hidden
      />

      <div className="mt-6 grid gap-8 md:grid-cols-[1fr_260px]">
        <article>
          <MockStory md={project.storyMd} />
        </article>

        <aside className="h-fit space-y-4 rounded-xl border p-4 md:sticky md:top-20">
          <ProgressBar percent={project.percent} className="h-2.5" />
          <div>
            <p className="text-2xl font-bold">{project.raised}</p>
            <p className="text-sm text-muted-foreground">
              of {project.goal} goal · {project.percent}% funded
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <dt className="text-muted-foreground">Backers</dt>
              <dd className="font-semibold">{project.backerCount}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Days left</dt>
              <dd className="font-semibold">{project.daysLeft}</dd>
            </div>
          </dl>
          {/* Becomes a live link to /projects/[slug]/back on Day 3 — the
              checkout action enforces live-and-not-ended server-side. */}
          <Button className="w-full" size="lg" disabled>
            Back this project
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            Backing opens when payments land (Day 3).
          </p>
        </aside>
      </div>
    </div>
  );
}
